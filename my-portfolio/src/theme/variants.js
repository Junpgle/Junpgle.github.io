// src/theme/variants.js

export const themeVariants = {
    // ... default 保持不变 ...
    default: {
        id: 'default',
        name: 'Cyber Original',
        colors: {
            bg: "bg-[#f8fafc] dark:bg-slate-950",
            text: "text-slate-700 dark:text-slate-200",
            selection: "selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-400",
            border: "border-slate-200/60 dark:border-slate-800/60",
            primary: "text-indigo-600 dark:text-indigo-400",
            primaryBg: "bg-slate-900 dark:bg-white",
            primaryBgHover: "hover:bg-indigo-600 dark:hover:bg-indigo-400",
            secondary: "text-slate-400",
            accentBg: "bg-indigo-50 dark:bg-indigo-900/20",
            accentBorder: "border-indigo-100 dark:border-indigo-900/50",
            button: "bg-slate-900 hover:bg-indigo-600 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-400 dark:hover:text-white",
            iconBg: "bg-slate-100 dark:bg-slate-800",
            gradient: "from-[#f8fafc] dark:from-slate-950"
        },
        heroText: { badge: "IST Sophomore", title1: "HI,", title2: "I'M", highlight: "JUNPGLE", subtitle: "Code · Intelligence · Innovation" }
    },

    // === 🧧 春节主题 (丙午马年版) ===
    newYear: {
        id: 'newYear',
        name: 'Lunar New Year',
        colors: {
            // 背景：深褐红 (火马年用深红非常合适)
            bg: "bg-[#2a0a0a] dark:bg-[#2a0a0a]",
            text: "text-[#fffbeb] dark:text-[#fffbeb]",
            primary: "text-[#fbbf24] dark:text-[#fbbf24]",
            selection: "selection:bg-red-900 selection:text-amber-200 dark:selection:bg-red-900 dark:selection:text-amber-200",
            border: "border-red-900/30 dark:border-red-900/30",
            primaryBg: "bg-[#d97706] dark:bg-[#d97706]",
            primaryBgHover: "hover:bg-amber-500 dark:hover:bg-amber-500",
            secondary: "text-amber-100/60 dark:text-amber-100/60",
            accentBg: "bg-red-950/50 dark:bg-red-950/50",
            accentBorder: "border-amber-900/50 dark:border-amber-900/50",
            button: "bg-amber-500 hover:bg-amber-400 text-red-950 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-red-950",
            iconBg: "bg-red-900/40 dark:bg-red-900/40",
            gradient: "from-[#2a0a0a] dark:from-[#2a0a0a]"
        },
        heroText: {
            // ★ 修改：2026 丙午马年
            badge: "🧧 2026 丙午马年",
            title1: "龙马", // 也可以改成 "策马", "飞腾" 等，或者保持 "福启"
            title2: "精神", // 配合 title1 变成 "龙马精神"
            highlight: "万事兴",
            subtitle: "Passion · Speed · Success"
        }
    },

    // ... Cyber Light, Cyber Dark, Autumn, Winter 保持不变 ...
    cyberLight: {
        id: 'cyberLight',
        name: 'Cyber Light',
        colors: {
            bg: "bg-[#f8fafc]",
            text: "text-slate-700",
            selection: "selection:bg-indigo-500/30 selection:text-indigo-600",
            border: "border-slate-200",
            primary: "text-indigo-600",
            primaryBg: "bg-indigo-600",
            primaryBgHover: "hover:bg-indigo-700",
            secondary: "text-slate-500",
            accentBg: "bg-indigo-50",
            accentBorder: "border-indigo-100",
            button: "bg-slate-900 hover:bg-indigo-600 text-white",
            iconBg: "bg-white",
            gradient: "from-[#f8fafc]"
        },
        heroText: { badge: "IST Sophomore", title1: "HI,", title2: "I'M", highlight: "JUNPGLE", subtitle: "Code · Intelligence · Innovation" }
    },
    cyberDark: {
        id: 'cyberDark',
        name: 'Cyber Dark',
        colors: {
            bg: "bg-[#020617]",
            text: "text-slate-300",
            selection: "selection:bg-indigo-500/30 selection:text-indigo-400",
            border: "border-slate-800",
            primary: "text-indigo-400",
            primaryBg: "bg-indigo-500",
            primaryBgHover: "hover:bg-indigo-400",
            secondary: "text-slate-500",
            accentBg: "bg-indigo-950/30",
            accentBorder: "border-indigo-500/20",
            button: "bg-white hover:bg-indigo-400 text-slate-950",
            iconBg: "bg-slate-900",
            gradient: "from-[#020617]"
        },
        heroText: { badge: "IST Sophomore", title1: "HI,", title2: "I'M", highlight: "JUNPGLE", subtitle: "Code · Intelligence · Innovation" }
    },
    autumn: {
        id: 'autumn',
        name: 'Golden Autumn',
        colors: {
            bg: "bg-[#fffbeb] dark:bg-[#1c1917]",
            text: "text-orange-950 dark:text-orange-100",
            selection: "selection:bg-orange-200 selection:text-orange-800",
            border: "border-orange-200/60 dark:border-orange-900/30",
            primary: "text-orange-600 dark:text-orange-400",
            primaryBg: "bg-orange-600 dark:bg-orange-500",
            primaryBgHover: "hover:bg-orange-700 dark:hover:bg-orange-400",
            secondary: "text-stone-500 dark:text-stone-400",
            accentBg: "bg-orange-50 dark:bg-orange-900/20",
            accentBorder: "border-orange-200 dark:border-orange-800",
            button: "bg-orange-700 hover:bg-orange-600 text-white dark:bg-orange-600 dark:hover:bg-orange-500",
            iconBg: "bg-orange-100/50 dark:bg-stone-800",
            gradient: "from-[#fffbeb] dark:from-[#1c1917]"
        },
        heroText: { badge: "🍂 Autumn Vibes", title1: "FALL", title2: "IN", highlight: "CODE", subtitle: "Harvest · Reflect · Create" }
    },
    winter: {
        id: 'winter',
        name: 'Icy Winter',
        colors: {
            bg: "bg-[#f0f9ff] dark:bg-[#0b1120]",
            text: "text-slate-700 dark:text-sky-100",
            selection: "selection:bg-sky-200 selection:text-sky-800",
            border: "border-sky-100 dark:border-sky-900/30",
            primary: "text-sky-600 dark:text-sky-400",
            primaryBg: "bg-sky-600 dark:bg-sky-500",
            primaryBgHover: "hover:bg-sky-700 dark:hover:bg-sky-400",
            secondary: "text-slate-400 dark:text-sky-300/50",
            accentBg: "bg-sky-50 dark:bg-sky-900/20",
            accentBorder: "border-sky-200 dark:border-sky-800",
            button: "bg-slate-800 hover:bg-sky-600 text-white dark:bg-sky-600 dark:hover:bg-sky-500",
            iconBg: "bg-white dark:bg-slate-800",
            gradient: "from-[#f0f9ff] dark:from-[#0b1120]"
        },
        heroText: { badge: "❄️ Winter Code", title1: "STAY", title2: "FROSTY", highlight: "COOL", subtitle: "Clean · Minimal · Pure" }
    }
};