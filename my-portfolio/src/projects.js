export const projects = [
    {
        id: "learnword",
        title: "LearnWord — 智能单词记忆工具",
        shortDesc: "基于三阶段记忆闭环（认知→自测→输出）的科学记忆工具，结合算法驱动复习逻辑。",
        image: "./src/assets/learnword.jpg",
        tags: ["Python", "记忆算法", "桌面应用"],
        category: "desktop",
        links: [{ label: "查看代码", url: "https://github.com/Junpgle/LearnWord" }],
        details: {
            methodology: "核心采用“三阶段递进学习法”，将记忆过程建模为认知-检索-重建三个阶段。",
            features: ["智能复习：对抗记忆遗忘曲线，动态调整频率。", "三阶段自测：强制大脑进行深度加工，实现牢固记忆。", "高压测试：模拟考场环境，强化应试能力。"],
            tech: "PySide6 构建，采用 AppData 数据隔离与智能热更新机制。"
        }
    },
    {
        id: "hfut-exam",
        title: "HFUT 创新创业题库系统",
        shortDesc: "服务两百多名用户的在线题库，基于 Cloudflare D1 边缘数据库构建。",
        image: "./src/assets/cxcy.jpg",
        tags: ["边缘计算", "SQL", "Cloudflare"],
        category: "web",
        links: [{ label: "在线体验", url: "https://hfut-innovation-and-entrepreneurship-question-bank.pages.dev/" }],
        details: {
            methodology: "通过边缘计算（Cloudflare Workers）降低响应延迟，构建高性能的校园服务应用。",
            features: ["数据库迁移：从 NoSQL 迁移至 SQL (D1)，极大提升响应速度。", "云端同步：跨设备学习记录无缝衔接。", "错题算法：基于全站数据分析发现共性薄弱点。"],
            tech: "Cloudflare Workers 全栈开发，D1 边缘数据库存储。"
        }
    },
    {
        id: "4dmusic",
        title: "四维声乐 Pro Max — AI 声乐分析",
        shortDesc: "融合 DSP 信号处理与大模型的声乐教学平台。支持实时音准追踪、共鸣腔体分析与 AI 智能点评。",
        image: "./src/assets/4dmusic.jpg",
        tags: ["Web", "DSP 算法", "GenAI"],
        category: "web",
        links: [{ label: "立即体验", url: "https://4dmusic.junpgle.me" }],
        details: {
            methodology: "将传统的数字信号处理（DSP）与生成式 AI 结合，构建了“录音-分析-反馈”的完整声乐学习闭环。不仅关注音高，更通过频谱分析量化头腔/胸腔共鸣比例。",
            features: [
                "核心算法：采用 YIN 算法提取基频，结合 FFT 进行共鸣区分析，并使用 1D DTW（动态时间规整）实现用户演唱与原唱的自动对齐。",
                "九维评估：建立包含音准、节奏、稳定性、颤音深度、光谱通量（咬字）等维度的评分模型。",
                "AI 导师：集成豆包大模型（Doubao-Pro），基于结构化声学数据生成个性化指导建议。"
            ],
            tech: "Frontend: React + ECharts; Backend: Node.js + DSP.js + Pitchfinder + FFmpeg; AI: Volcengine API"
        }
    },
    {
        id: "guide-2025",
        title: "GUIDE 2025 — 年度报告生成器",
        shortDesc: "纯浏览器端驱动的静态年度回顾网页生成器。支持视差滚动与烟花交互，数据 100% 隐私安全。",
        image: "./src/assets/yearreward.jpg",
        tags: ["Web", "隐私保护", "动态交互"],
        category: "web",
        links: [{ label: "立即创作", url: "https://github.com/Junpgle/2025-Summary" }],
        details: {
            methodology: "打造专属于你的年度高光时刻。这是一个完全运行在浏览器端的静态网页生成器，不经过服务器保存，绝对隐私安全。",
            features: ["绝对隐私：所有照片、文字仅存在浏览器或导出为 JSON。", "定制时间轴：智能压缩图片，平衡加载速度与画质。", "视效增强：纯静态实现烟花粒子系统与视差滚动。"],
            tech: "HTML5 File API + Canvas + LocalStorage。极致的端侧数据持久化方案。"
        }
    }
];