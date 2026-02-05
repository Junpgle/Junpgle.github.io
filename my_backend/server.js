require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 3000;

// 初始化 Resend
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(bodyParser.json());

// --- 限流配置 ---
const IP_LIMIT_WINDOW = 5 * 60 * 1000; // 5分钟
const GLOBAL_LIMIT_WINDOW = 60 * 60 * 1000; // 1小时
const GLOBAL_MAX_REQUESTS = 100;

const ipRequests = new Map();
let globalRequests = [];

// 定时清理
setInterval(() => {
    const now = Date.now();
    for (const [ip, time] of ipRequests.entries()) {
        if (now - time > IP_LIMIT_WINDOW) ipRequests.delete(ip);
    }
    globalRequests = globalRequests.filter(t => now - t < GLOBAL_LIMIT_WINDOW);
}, 60 * 1000);

app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

app.post('/api/contact', async (req, res) => {
    const now = Date.now();

    // ★ 关键修改：获取真实 IP ★
    // 优先读取 Cloudflare 传过来的 'x-forwarded-for'，如果没有则读取直接连接的 IP
    const forwardedIP = req.headers['x-forwarded-for'];
    // 如果有多个代理，x-forwarded-for 可能是 "IP1, IP2"，我们取第一个
    const realIP = forwardedIP ? forwardedIP.split(',')[0].trim() : (req.ip || req.connection.remoteAddress);

    // --- 1. 全局限流检查 ---
    globalRequests = globalRequests.filter(t => now - t < GLOBAL_LIMIT_WINDOW);
    if (globalRequests.length >= GLOBAL_MAX_REQUESTS) {
        console.warn(`[Rate Limit] Global limit reached. IP: ${realIP}`);
        return res.status(429).json({ success: false, msg: '服务器繁忙，请稍后再试' });
    }

    // --- 2. 单 IP 限流检查 ---
    const lastRequestTime = ipRequests.get(realIP);
    if (lastRequestTime && now - lastRequestTime < IP_LIMIT_WINDOW) {
        const remainingSeconds = Math.ceil((IP_LIMIT_WINDOW - (now - lastRequestTime)) / 1000);
        console.warn(`[Rate Limit] IP limit hit: ${realIP}`);
        return res.status(429).json({ success: false, msg: `发送太频繁，请等待 ${remainingSeconds} 秒后再试` });
    }

    // --- 3. 业务逻辑 ---
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, msg: '请填写完整信息' });
    }

    console.log(`[New Message] From: ${name} (${email}) RealIP: ${realIP}`);

    try {
        const { data, error } = await resend.emails.send({
            from: `Portfolio Bot <${process.env.SENDER_EMAIL || 'onboarding@resend.dev'}>`,
            to: [process.env.RECEIVER_EMAIL],
            reply_to: email,
            subject: `【Portfolio】来自 ${name} 的新消息`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; max-width: 600px;">
                    <h2 style="color: #4f46e5; margin-bottom: 20px;">收到新的联系请求</h2>
                    <p><strong>姓名：</strong> ${name}</p>
                    <p><strong>邮箱：</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>真实IP：</strong> ${realIP}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-weight: bold; color: #555;">消息内容：</p>
                    <div style="background: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap; color: #333;">${message}</div>
                </div>
            `
        });

        if (error) {
            console.error('Resend Error:', error);
            return res.status(500).json({ success: false, msg: '邮件服务暂时不可用' });
        }

        // 记录请求 (使用真实IP)
        ipRequests.set(realIP, now);
        globalRequests.push(now);

        console.log('Email sent successfully:', data.id);
        res.status(200).json({ success: true, msg: '消息已发送' });

    } catch (err) {
        console.error('Server Error:', err);
        res.status(500).json({ success: false, msg: '服务器内部错误' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});