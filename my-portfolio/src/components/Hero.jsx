import React from 'react';
import { Code, Binary } from 'lucide-react';

const Hero = ({ isLoaded, isDark, theme }) => {
    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-20">

                {/* 左侧文字区 */}
                <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="mb-6 md:mb-10">
                        <span className={`font-bold text-[10px] tracking-[0.4em] uppercase px-4 py-1.5 border rounded-full inline-block transition-colors ${theme.colors.accentBorder} ${theme.colors.accentBg} ${theme.colors.primary}`}>
                            {theme.heroText.badge}
                        </span>
                    </div>

                    {/* 标题区域 */}
                    <div className="relative">
                        {/* 装饰性背景字 (仅在春节显示) */}
                        {theme.id === 'newYear' && (
                            <div className="absolute -top-20 -left-20 text-[12rem] opacity-5 font-diary text-red-500 select-none pointer-events-none">
                                春
                            </div>
                        )}

                        <h1 className={`text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[1.1] mb-8 break-words transition-colors ${theme.colors.text}`}>
                            {theme.heroText.title1}<br />
                            {theme.heroText.title2}

                            {/* 高亮部分：加了更强的光晕 */}
                            <span className={`relative ${theme.colors.primary} font-diary inline-block ml-4`}>
                                {theme.heroText.highlight}
                                {/* 光晕层 */}
                                <span className="absolute inset-0 blur-lg opacity-50 bg-current"></span>
                            </span>
                        </h1>
                    </div>

                    <div className="flex items-center space-x-4 mt-8 md:mt-12">
                        <div className={`h-px w-12 ${theme.colors.border.replace('border-', 'bg-')}`}></div>
                        <p className={`text-xs font-bold uppercase tracking-[0.4em] ${theme.colors.secondary}`}>
                            {theme.heroText.subtitle}
                        </p>
                    </div>
                </div>

                {/* 右侧视觉区 */}
                <div className={`relative flex justify-center items-center transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'} mt-8 lg:mt-0`}>
                    <div className="relative w-full max-w-[260px] md:max-w-md aspect-square">

                        {/* 动态光环 (仅春节增强) */}
                        {theme.id === 'newYear' && (
                            <div className="absolute inset-[-20px] rounded-full border border-amber-500/30 animate-[spin_10s_linear_infinite]">
                                <div className="absolute top-0 left-1/2 w-2 h-2 bg-amber-500 rounded-full blur-[2px]"></div>
                            </div>
                        )}

                        {/* 主卡片 */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:h-56 h-40 md:w-56 border-2 shadow-2xl rounded-[2rem] md:rounded-[3rem] flex items-center justify-center animate-float ${theme.colors.iconBg} ${theme.colors.accentBorder}`}>
                            {/* 内部发光 */}
                            <div className={`absolute inset-0 rounded-[2rem] md:rounded-[3rem] opacity-20 ${theme.colors.primaryBg} blur-md`}></div>

                            {/* ★★★ 修改生肖图标 ★★★ */}
                            <div className="text-7xl md:text-9xl opacity-90 select-none relative z-10 drop-shadow-2xl filter">
                                {theme.id === 'newYear' ? '🐎' : theme.id === 'winter' ? '❄️' : theme.id === 'autumn' ? '🍁' : '🖥️'}
                            </div>
                        </div>

                        {/* 漂浮的小元素 */}
                        <div className={`absolute top-0 right-0 p-4 rounded-2xl animate-bounce delay-100 border backdrop-blur-md ${theme.colors.accentBg} ${theme.colors.border} ${theme.colors.primary}`}>
                            {theme.id === 'newYear' ? <span className="font-diary font-bold text-xl">福</span> : <Code className="w-5 h-5"/>}
                        </div>

                        <div className={`absolute bottom-0 left-0 p-4 rounded-2xl animate-bounce delay-700 border backdrop-blur-md ${theme.colors.accentBg} ${theme.colors.border} ${theme.colors.primary}`}>
                            {theme.id === 'newYear' ? <span className="font-diary font-bold text-xl">顺</span> : <Binary className="w-5 h-5"/>}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;