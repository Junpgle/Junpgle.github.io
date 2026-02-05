export async function onRequestPost(context) {
    const { request } = context;

    // 你的 ECS 服务器地址 (HTTP)
    const ECS_API_URL = "http://101.200.13.100:8080/api/contact";

    try {
        // 1. 解析前端发来的数据
        const body = await request.json();

        // 2. 获取用户真实 IP (Cloudflare 特有 Header)
        const clientIP = request.headers.get("CF-Connecting-IP");

        // 3. 转发请求给 ECS
        // 注意：这里是在 Cloudflare 服务器内部发起的 HTTP 请求，不会被浏览器拦截
        const backendResponse = await fetch(ECS_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // ★ 关键：把用户真实 IP 传给后端，否则限流功能会失效
                "X-Forwarded-For": clientIP,
                // 也可以带上 Secret Key 防止别人绕过 Cloudflare 直接攻击 ECS (可选)
                "X-Proxy-Secret": "portfolio-proxy"
            },
            body: JSON.stringify(body),
        });

        // 4. 将 ECS 的响应原样返回给前端
        const data = await backendResponse.text();

        return new Response(data, {
            status: backendResponse.status,
            headers: {
                "Content-Type": "application/json",
                // 允许跨域 (虽然同域代理不需要，但加上保险)
                "Access-Control-Allow-Origin": "*",
            },
        });

    } catch (err) {
        return new Response(JSON.stringify({ success: false, msg: "Cloudflare 转发失败: " + err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}