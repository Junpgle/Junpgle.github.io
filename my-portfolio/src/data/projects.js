import learnwordImg from '../assets/learnword.jpg';
import hfutImg from '../assets/cxcy.jpg';
import musicImg from '../assets/4dmusic.jpg';
import guideImg from '../assets/yearreward.jpg';
import starTrailImg from '../assets/starttrail.jpg';
import mathQuizImg from '../assets/mathquiz.jpg';
import mathQuizLiteImg from '../assets/mathquizlite.jpg';

export const projects = [
    {
        id: "learnword",
        title: "LearnWord — 智能单词记忆工具",
        shortDesc: "基于三阶段记忆闭环（认知→自测→输出）的科学记忆工具，结合算法驱动复习逻辑。",
        image: learnwordImg,
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
        image: hfutImg,
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
        image: musicImg,
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
        image: guideImg,
        tags: ["Web", "隐私保护", "动态交互"],
        category: "web",
        links: [{ label: "立即创作", url: "https://github.com/Junpgle/2025-Summary" }],
        details: {
            methodology: "打造专属于你的年度高光时刻。这是一个完全运行在浏览器端的静态网页生成器，不经过服务器保存，绝对隐私安全。",
            features: ["绝对隐私：所有照片、文字仅存在浏览器或导出为 JSON。", "定制时间轴：智能压缩图片，平衡加载速度与画质。", "视效增强：纯静态实现烟花粒子系统与视差滚动。"],
            tech: "HTML5 File API + Canvas + LocalStorage。极致的端侧数据持久化方案。"
        }
    },
    {
        id: "startrail-pro",
        title: "StarTrail Pro — 星轨工坊",
        shortDesc: "专为星空摄影师设计的高性能后期工具，支持彗星模式星轨合成与 Google Motion Photo 实况照片生成。",
        image: starTrailImg,
        tags: ["C++", "Qt", "OpenCV", "图像处理"],
        category: "desktop",
        links: [{ label: "获取软件", url: "https://github.com/Junpgle/StarTrails/releases" }],
        details: {
            methodology: "基于 Google MicroVideo V1 标准实现 MotionPhotoMuxer，通过解析 JPEG 结构并注入 XMP 元数据，将生成的 MP4 数据无损追加到图片中。针对 DNG/Raw 格式实现了自定义读取器，自动进行 16-bit 到 8-bit 的位深映射。",
            features: [
                "彗星模式星轨：支持滑动窗口算法，生成类似流星雨的动态拖尾效果，可自定义拖尾长度。",
                "实况照片生成：独家算法生成 Motion Photo (JPG)，完美兼容 Google Photos 和安卓相册，长按即可播放形成过程。",
                "极速渲染引擎：利用 OpenCL GPU 加速大规模像素运算，支持异步多线程处理 8K 级高分辨率序列。"
            ],
            tech: "C++17, Qt 6.5+, OpenCV 4.x, OpenCL, Google MicroVideo Protocol"
        }
    },
    {
        id: "math-quiz",
        title: "Math Quiz System — 小学生数学测验系统",
        shortDesc: "基于 Qt 开发的桌面端数学练习平台，集成用户管理、智能随机出题与多维成绩排行功能。",
        image: mathQuizImg,
        tags: ["C++", "Qt", "教育软件", "桌面应用"],
        category: "desktop",
        links: [{ label: "查看源码", url: "https://github.com/Junpgle/Quiz-for-elementary-school-students-QT/releases" }],
        details: {
            methodology: "采用经典的面向对象架构设计，利用 Qt 信号槽机制实现流畅的界面交互。系统内置轻量级文件数据库引擎，实现了用户数据与题库的持久化存储与解析。",
            features: [
                "全功能考试系统：支持新用户注册登录，内置随机算法自动生成算术题目，并支持手动增删改查题库。",
                "智能排行榜：实现了自定义排序算法，基于“分数优先、时间次之”的规则自动生成 TOP10 高手榜。",
                "数据回溯：自动记录每次测验的详细答卷（包含题目、用户答案、正确答案及判定结果），方便随时查阅历史记录。"
            ],
            tech: "C++17, Qt 6 (Widgets), QFile/QTextStream, Custom Sorting Algorithms"
        }
    },
    {
        id: "math-quiz-ecosystem",
        title: "Countdown&Todo — 多端数据协同平台",
        shortDesc: "覆盖桌面与移动端的全生态效率工具。PC 端追求极致轻量，移动端提供丰富交互，数据通过 Cloudflare 边缘网络实时同步。",
        image: mathQuizLiteImg,
        tags: ["C++", "Flutter", "Cloudflare D1", "多端同步"],
        category: "fullstack",
        links: [
            { label: "查看官网", url: "https://junpgle.github.io/CountdownTodo/" },
        ],
        details: {
            methodology: "针对不同终端特性采用差异化技术栈：桌面端使用底层 Win32/GDI+ 打造 KB 级内存占用的常驻挂件；移动端基于 Flutter 构建 Material 3 沉浸式体验。通过统一的 RESTful API 和时间戳冲突解决策略（Last-Write-Wins + 乐观 UI）实现多端数据一致性。",
            features: [
                "双端协同：无论在电脑还是手机上添加待办、倒计时或完成测验，数据毫秒级同步，支持断网操作与自动重试。",
                "桌面端 (Lite)：C++ 原生开发，无依赖单文件运行。支持高分屏自适应、Layered Window 透明磨砂渲染及全局热键。",
                "移动端 (Pro)：Flutter 打造，集成动态必应/GitHub 壁纸、后台自动更新、通知提醒及可视化数学能力分析报告。"
            ],
            tech: "Desktop: C++17, Win32 API, GDI+; Mobile: Flutter, Dart, SQLite; Backend: Cloudflare Workers, D1 Database."
        }
    }
];