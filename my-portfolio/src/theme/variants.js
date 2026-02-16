// src/theme/variants.js

export const themeVariants = {
    // === 1. 默认主题 ===
    default: {
        id: 'default',
        name: 'Cyber Original',
        colors: {
            bg: "bg-[#f8fafc] dark:bg-slate-950",
            text: "text-slate-700 dark:text-slate-200",
            // ... (保持其他属性不变)
            primary: "text-indigo-600 dark:text-indigo-400",
            primaryBg: "bg-slate-900 dark:bg-white",
            primaryBgHover: "hover:bg-indigo-600 dark:hover:bg-indigo-400",
            secondary: "text-slate-400",
            accentBg: "bg-indigo-50 dark:bg-indigo-900/20",
            accentBorder: "border-indigo-100 dark:border-indigo-900/50",
            button: "bg-slate-900 hover:bg-indigo-600 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-400 dark:hover:text-white",
            iconBg: "bg-slate-100 dark:bg-slate-800",
            border: "border-slate-200/60 dark:border-slate-800/60",
            selection: "selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-400",

            // ★ 新增：渐变遮罩 (日间是浅灰渐变，夜间是深黑渐变)
            gradient: "from-[#f8fafc] dark:from-slate-950"
        },
        heroText: { badge: "IST Sophomore", title1: "HI,", title2: "I'M", highlight: "JUNPGLE", subtitle: "Code · Intelligence · Innovation" }
    },

    // === 2. 春节主题 ===
    newYear: {
        id: 'newYear',
        name: 'Lunar New Year',
        colors: {
            // 1. 背景：日间改为浅赤色(淡红)，夜间为深褐红
            bg: "bg-[#fff0f5] dark:bg-[#2a0a0a]",

            // 2. 文字：日间用深红褐，夜间用流光金
            text: "text-red-950 dark:text-amber-50",

            // 3. 选中态：红底金字
            selection: "selection:bg-red-600 selection:text-amber-100 dark:selection:bg-amber-500 dark:selection:text-red-900",

            // 4. 边框：日间红边，夜间金边
            border: "border-red-200 dark:border-amber-900/30",

            // 5. 主色调 (高亮文字)：日间正红，夜间亮金
            primary: "text-red-600 dark:text-amber-400",

            // 6. 强背景 (如Logo/主按钮)：日间正红，夜间金
            primaryBg: "bg-red-600 dark:bg-amber-500",

            // 7. 悬停态
            primaryBgHover: "hover:bg-red-700 dark:hover:bg-amber-400",

            // 8. 次要文字
            secondary: "text-red-800/70 dark:text-amber-100/60",

            // 9. 装饰性背景 (Tag标签等)：日间金底，夜间深红底
            accentBg: "bg-amber-100/80 dark:bg-red-950/50",

            // 10. 装饰性边框
            accentBorder: "border-red-300 dark:border-amber-900/50",

            // 11. 按钮通用样式
            button: "bg-red-600 hover:bg-red-700 text-amber-50 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-red-950",

            // 12. 图标背景 (TechStack等)：日间淡金，夜间深红
            iconBg: "bg-amber-100 dark:bg-red-900/40",

            // 13. ★ 关键：渐变遮罩 (必须精确匹配上面的 bg 颜色 #fff0f5)
            gradient: "from-[#fff0f5] dark:from-[#2a0a0a]"
        },
        heroText: {
            badge: "🧧 2026 恭贺新禧",
            title1: "福启",
            title2: "新岁",
            highlight: "万事兴",
            subtitle: "Peace · Joy · Prosperity"
        }
    },

    // === 3. 秋季主题 ===
    autumn: {
        id: 'autumn',
        name: 'Golden Autumn',
        colors: {
            bg: "bg-[#fffbeb] dark:bg-[#1c1917]",
            text: "text-orange-950 dark:text-orange-100",
            // ...
            primary: "text-orange-600 dark:text-orange-400",
            primaryBg: "bg-orange-600 dark:bg-orange-500",
            primaryBgHover: "hover:bg-orange-700 dark:hover:bg-orange-400",
            secondary: "text-stone-500 dark:text-stone-400",
            accentBg: "bg-orange-50 dark:bg-orange-900/20",
            accentBorder: "border-orange-200 dark:border-orange-800",
            button: "bg-orange-700 hover:bg-orange-600 text-white dark:bg-orange-600 dark:hover:bg-orange-500",
            iconBg: "bg-orange-100/50 dark:bg-stone-800",
            border: "border-orange-200/60 dark:border-orange-900/30",
            selection: "selection:bg-orange-200 selection:text-orange-800",

            // ★ 新增：渐变遮罩
            gradient: "from-[#fffbeb] dark:from-[#1c1917]"
        },
        heroText: { badge: "🍂 Autumn Vibes", title1: "FALL", title2: "IN", highlight: "CODE", subtitle: "Harvest · Reflect · Create" }
    },

    // === 4. 冬季主题 ===
    winter: {
        id: 'winter',
        name: 'Icy Winter',
        colors: {
            bg: "bg-[#f0f9ff] dark:bg-[#0b1120]",
            text: "text-slate-700 dark:text-sky-100",
            // ...
            primary: "text-sky-600 dark:text-sky-400",
            primaryBg: "bg-sky-600 dark:bg-sky-500",
            primaryBgHover: "hover:bg-sky-700 dark:hover:bg-sky-400",
            secondary: "text-slate-400 dark:text-sky-300/50",
            accentBg: "bg-sky-50 dark:bg-sky-900/20",
            accentBorder: "border-sky-200 dark:border-sky-800",
            button: "bg-slate-800 hover:bg-sky-600 text-white dark:bg-sky-600 dark:hover:bg-sky-500",
            iconBg: "bg-white dark:bg-slate-800",
            border: "border-sky-100 dark:border-sky-900/30",
            selection: "selection:bg-sky-200 selection:text-sky-800",

            // ★ 新增：渐变遮罩
            gradient: "from-[#f0f9ff] dark:from-[#0b1120]"
        },
        heroText: { badge: "❄️ Winter Code", title1: "STAY", title2: "FROSTY", highlight: "COOL", subtitle: "Clean · Minimal · Pure" }
    }
};