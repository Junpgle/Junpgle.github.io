import React from 'react';
import { Code, Binary } from 'lucide-react';

const Hero = ({ isLoaded, isDark, theme }) => {
    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-20">
                <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="mb-6 md:mb-10">
                        <span className={`font-bold text-[10px] tracking-[0.4em] uppercase px-4 py-1.5 border rounded-full inline-block transition-colors ${theme.colors.accentBorder} ${theme.colors.accentBg} ${theme.colors.primary}`}>
                            {theme.heroText.badge}
                        </span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9] mb-8 break-words">
                        {theme.heroText.title1}<br />
                        {theme.heroText.title2} <span className={`${theme.colors.primary} font-diary inline-block ml-2`}>{theme.heroText.highlight}</span>
                    </h1>
                    <div className="flex items-center space-x-4 mt-8 md:mt-12">
                        <div className={`h-px w-12 ${theme.colors.border.replace('border-', 'bg-')}`}></div>
                        <p className={`text-xs font-bold uppercase tracking-[0.4em] ${theme.colors.secondary}`}>
                            {theme.heroText.subtitle}
                        </p>
                    </div>
                </div>

                <div className={`relative flex justify-center items-center transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'} mt-8 lg:mt-0`}>
                    <div className="relative w-full max-w-[260px] md:max-w-md aspect-square">
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:h-48 h-32 md:w-48 border-2 shadow-2xl rounded-[2rem] md:rounded-[3rem] flex items-center justify-center animate-float ${theme.colors.iconBg} ${theme.colors.accentBorder}`}>
                            <div className="text-6xl md:text-8xl opacity-80 select-none">
                                {theme.id === 'newYear' ? '🐍' : theme.id === 'spring' ? '🌸' : '⚡'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;