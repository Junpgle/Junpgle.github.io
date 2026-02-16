import React from 'react';

const Footer = ({ isDark, theme }) => {
    return (
        <footer className={`py-16 md:py-24 px-6 md:px-8 border-t transition-colors duration-500 ${theme.colors.bg} ${theme.colors.border}`}>
            <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center text-[10px] font-black uppercase tracking-[0.4em] ${theme.colors.secondary}`}>
                <div>© 2026 Designed by Junpgle. {theme.id === 'newYear' && 'Happy Year of Snake.'}</div>
                <div className="flex space-x-10 md:space-x-16">
                    <a href="https://github.com/Junpgle" target="_blank" rel="noopener noreferrer" className={`transition-all hover:${theme.colors.primary}`}>GitHub</a>
                    <a href="#projects" className={`transition-all hover:${theme.colors.primary}`}>Archive</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;