require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 3000;

// 初始化 Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// 中间件
app.use(cors()); // 允许跨域
app.use(bodyParser.json());

// 健康检查接口
app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

// 邮件发送接口
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // 简单的服务端验证
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, msg: '请填写完整信息' });
    }

    console.log(`[New Message] From: ${name} (${email})`);

    try {
        const { data, error } = await resend.emails.send({
            from: `Portfolio Bot <${process.env.SENDER_EMAIL}>`,
            to: [process.env.RECEIVER_EMAIL],
            reply_to: email, // 这样你点回复时，直接回复给发信人
            subject: `【Portfolio】来自 ${name} 的新消息`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; max-width: 600px;">
                    <h2 style="color: #4f46e5; margin-bottom: 20px;">收到新的联系请求</h2>
                    <p><strong>姓名：</strong> ${name}</p>
                    <p><strong>邮箱：</strong> <a href="mailto:${email}">${email}</a></p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-weight: bold; color: #555;">消息内容：</p>
                    <div style="background: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap; color: #333;">${message}</div>
                    <br/>
                    <div style="font-size: 12px; color: #999; text-align: center;">
                        Sent via Aliyun ECS & Resend
                    </div>
                </div>
            `
        });

        if (error) {
            console.error('Resend Error:', error);
            return res.status(500).json({ success: false, msg: error.message });
        }

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