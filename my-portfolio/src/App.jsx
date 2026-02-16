import React, { useState, useEffect } from 'react';
import { themeVariants } from './theme/variants';

import DefaultDeco from './theme/decorations/DefaultDeco';
import NewYearDeco from './theme/decorations/NewYearDeco';
import AutumnDeco from './theme/decorations/AutumnDeco';
import WinterDeco from './theme/decorations/WinterDeco';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Diary from './components/Diary';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { projects } from './data/projects';

const App = () => {
    // 主题顺序
    const themeOrder = ['newYear', 'cyberDark', 'cyberLight', 'autumn', 'winter'];

    // 获取当前主题
    const [themeKey, setThemeKey] = useState(() => {
        // 防止 localStorage 里存了旧的 'default' 导致崩溃
        const saved = localStorage.getItem('themeKey');
        return (saved && themeVariants[saved]) ? saved : 'newYear';
    });

    const theme = themeVariants[themeKey] || themeVariants.newYear;
    const [isDark, setIsDark] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // 日夜模式判断逻辑
    useEffect(() => {
        setIsLoaded(true);

        const applyThemeMode = () => {
            let shouldBeDark = false;
            if (themeKey === 'cyberDark') shouldBeDark = true;
            else if (themeKey === 'cyberLight') shouldBeDark = false;
            else shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            setIsDark(shouldBeDark);

            const root = document.documentElement;
            if (shouldBeDark) root.classList.add('dark');
            else root.classList.remove('dark');
        };

        applyThemeMode();

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (themeKey !== 'cyberDark' && themeKey !== 'cyberLight') applyThemeMode();
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [themeKey]);

    // 切换主题函数
    const cycleTheme = () => {
        const currentIndex = themeOrder.indexOf(themeKey);
        // 如果找不到当前key（比如是旧的default），就重置为0
        const safeIndex = currentIndex === -1 ? 0 : currentIndex;
        const nextIndex = (safeIndex + 1) % themeOrder.length;
        const nextThemeKey = themeOrder[nextIndex];

        setThemeKey(nextThemeKey);
        localStorage.setItem('themeKey', nextThemeKey);
    };

    const renderDecoration = () => {
        switch (theme.id) {
            case 'newYear': return <NewYearDeco isDark={isDark} />;
            case 'autumn': return <AutumnDeco isDark={isDark} />;
            case 'winter': return <WinterDeco isDark={isDark} />;
            case 'cyberLight':
            case 'cyberDark':
            default: return <DefaultDeco isDark={isDark} theme={theme} />;
        }
    };

    return (
        <div className={`relative min-h-screen font-sans antialiased transition-colors duration-500 overflow-x-hidden ${theme.colors.text} ${theme.colors.selection}`}>

            {/* 背景层 */}
            <div className={`fixed inset-0 z-[-2] transition-colors duration-500 ${theme.colors.bg}`}></div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');
                .font-diary { font-family: 'Ma Shan Zheng', cursive; }
                .scrollbar-hide::-webkit-scrollbar { display: none; }
            `}</style>

            {/* 装饰层 */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                {renderDecoration()}
            </div>

            {/* 导航栏：务必确认传入了 cycleTheme */}
            <Navbar
                isDark={isDark}
                cycleTheme={cycleTheme}
                theme={theme}
            />

            <main className="relative z-10">
                <Hero isLoaded={isLoaded} isDark={isDark} theme={theme} />
                <Projects isDark={isDark} projects={projects} setSelectedProject={setSelectedProject} theme={theme} />
                <TechStack isDark={isDark} theme={theme} />
                <Contact isDark={isDark} theme={theme} />
                <Diary isDark={isDark} theme={theme} />
            </main>

            <Footer isDark={isDark} theme={theme} />

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} isDark={isDark} theme={theme} />
            )}
        </div>
    );
};

export default App;