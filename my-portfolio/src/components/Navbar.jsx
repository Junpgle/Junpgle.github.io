import React from 'react';
import { Terminal, Snowflake, Leaf, Sparkles } from 'lucide-react';

const Navbar = ({ isDark, cycleTheme, theme }) => {

    // 渲染左上角 Logo 图标
    const renderLogoIcon = () => {
        switch (theme.id) {
            case 'newYear': return <span className="font-diary font-bold text-lg">春</span>;
            case 'winter': return <Snowflake className="w-4 h-4" />;
            case 'autumn': return <Leaf className="w-4 h-4" />;
            default: return <Terminal className="w-4 h-4" />;
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-500 ${theme.colors.border} ${theme.colors.bg} bg-opacity-90`}>

            <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">

                {/* 1. Logo 区域 (点击也可以切换主题) */}
                <div className="flex items-center space-x-3 group cursor-pointer" onClick={cycleTheme}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${theme.colors.primaryBg} text-white`}>
                        {renderLogoIcon()}
                    </div>
                    <span className={`font-bold tracking-[0.2em] text-xs uppercase transition-colors ${theme.colors.text}`}>
                        Junpgle
                    </span>
                </div>

                {/* 2. 菜单区域 */}
                <div className="flex items-center space-x-4 md:space-x-12">
                    {/* 链接 (手机端隐藏，PC端显示) */}
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

                    {/* ★★★ 主题切换按钮 (所有端都显示) ★★★ */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            cycleTheme();
                        }}
                        className={`relative z-50 p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-sm border group ${theme.colors.iconBg} ${theme.colors.border} ${theme.colors.primary}`}
                        title="Switch Theme"
                        aria-label="Switch Theme"
                    >
                        {/* 使用 Sparkles 图标 */}
                        <Sparkles className="w-4 h-4 transform group-hover:rotate-180 transition-transform" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;