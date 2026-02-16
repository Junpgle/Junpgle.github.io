import React from 'react';
import { Terminal, Sun, Moon, Monitor, Snowflake, Leaf } from 'lucide-react';

const Navbar = ({ isDark, colorMode, toggleColorMode, theme }) => {

    // 渲染左上角 Logo 图标
    const renderLogoIcon = () => {
        switch (theme.id) {
            case 'newYear':
                return <span className="font-diary font-bold text-lg">春</span>;
            case 'winter':
                return <Snowflake className="w-4 h-4" />;
            case 'autumn':
                return <Leaf className="w-4 h-4" />;
            default:
                return <Terminal className="w-4 h-4" />;
        }
    };

    return (
        // ★★★ 核心修复在这里 ★★★
        // 1. 移除了 isDark ? 'bg-slate-...' : 'bg-white...'
        // 2. 换成了 ${theme.colors.bg}，这样春节主题就会保持深红，不会变白
        // 3. 加了 bg-opacity-90 保持一点点磨砂透视感
        <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-500 ${theme.colors.border} ${theme.colors.bg} bg-opacity-90`}>

            <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">

                {/* 1. Logo Area */}
                <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${theme.colors.primaryBg} text-white`}>
                        {renderLogoIcon()}
                    </div>
                    <span className={`font-bold tracking-[0.2em] text-xs uppercase transition-colors ${theme.colors.text}`}>
                        Junpgle
                    </span>
                </div>

                {/* 2. Menu Area */}
                <div className="flex items-center space-x-4 md:space-x-12">
                    <div className="hidden sm:flex items-center space-x-6 md:space-x-12 text-[10px] font-black uppercase tracking-[0.3em]">
                        {['Projects', 'Diary', 'Contact'].map(item => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`transition-colors hover:opacity-100 opacity-60 hover:${theme.colors.primary} ${theme.colors.text}`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* 3. Dark Mode Toggle Button */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            toggleColorMode();
                        }}
                        className={`p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-sm border ${theme.colors.iconBg} ${theme.colors.border} ${theme.colors.primary}`}
                        aria-label="Toggle Dark Mode"
                    >
                        {colorMode === 'light' && <Sun className="w-4 h-4" />}
                        {colorMode === 'dark' && <Moon className="w-4 h-4" />}
                        {colorMode === 'system' && <Monitor className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;