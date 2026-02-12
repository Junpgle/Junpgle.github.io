export const diaryData = [
    {
        id: 1,
        date: "2026.02.12",
        nickname: "Junpgle",
        avatar: "J",
        side: "left", // 'left' 或 'right'
        messages: [
            { id: "m1-1", type: "text", content: "你好呀，这是我的第一篇赛博日记。建立这个网站的初衷是为了记录学习 AI 和全栈开发的点点滴滴。🌱" },
            { id: "m1-2", type: "text", content: "今天配置好了整个前端的 Tailwind 架构，感觉非常清爽！" }
        ]
    },
    {
        id: 2,
        date: "2023.12.24",
        nickname: "Future Me",
        avatar: "F",
        side: "right",
        messages: [
            { id: "m2-1", type: "text", content: "希望未来的你看到这条消息时，已经是一个厉害的工程师了！" },
            { id: "m2-2", type: "text", content: "记得多喝水，少熬夜 (虽然不太可能)。🎄送你一棵圣诞树！" },
            // 支持图片类型的消息
            { id: "m2-3", type: "image", content: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    {
        id: 3,
        date: "2024.02.12",
        nickname: "Junpgle",
        avatar: "J",
        side: "left",
        messages: [
            { id: "m3-1", type: "text", content: "今天终于把后端的 ECS 接口调通了，看到 { success: true } 的那一刻真的太治愈了！✨" },
            { id: "m3-2", type: "image", content: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" }
        ]
    }
];