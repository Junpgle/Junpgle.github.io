import React, { useState, useEffect, Suspense, lazy } from 'react';
import { themeVariants } from './theme/variants';

// 基础组件保持同步加载 (Navbar, Hero)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// 懒加载重型组件
const Projects = lazy(() => import('./components/Projects'));
const TechStack = lazy(() => import('./components/TechStack'));
const Contact = lazy(() => import('./components/Contact'));
const Diary = lazy(() => import('./components/Diary'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));

// 懒加载主题装饰
const DefaultDeco = lazy(() => import('./theme/decorations/DefaultDeco'));
const NewYearDeco = lazy(() => import('./theme/decorations/NewYearDeco'));
const AutumnDeco = lazy(() => import('./theme/decorations/AutumnDeco'));
const WinterDeco = lazy(() => import('./theme/decorations/WinterDeco'));

import { projects } from './data/projects';

const App = () => {
    // 主题顺序
    const themeOrder = ['newYear', 'cyberDark', 'cyberLight', 'autumn', 'winter'];

    // 获取当前主题
    const [themeKey, setThemeKey] = useState(() => {
        const saved = localStorage.getItem('themeKey');
        return (saved && themeVariants[saved]) ? saved : 'newYear';
    });

    const theme = themeVariants[themeKey] || themeVariants.newYear;
    const [isDark, setIsDark] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

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

    const cycleTheme = () => {
        const currentIndex = themeOrder.indexOf(themeKey);
        const safeIndex = currentIndex === -1 ? 0 : currentIndex;
        const nextIndex = (safeIndex + 1) % themeOrder.length;
        const nextThemeKey = themeOrder[nextIndex];

        setThemeKey(nextThemeKey);
        localStorage.setItem('themeKey', nextThemeKey);
    };

    const renderDecoration = () => {
        return (
            <Suspense fallback={null}>
                {(() => {
                    switch (theme.id) {
                        case 'newYear': return <NewYearDeco isDark={isDark} />;
                        case 'autumn': return <AutumnDeco isDark={isDark} />;
                        case 'winter': return <WinterDeco isDark={isDark} />;
                        case 'cyberLight':
                        case 'cyberDark':
                        default: return <DefaultDeco isDark={isDark} theme={theme} />;
                    }
                })()}
            </Suspense>
        );
    };

    return (
        <div className={`relative min-h-screen font-sans antialiased transition-colors duration-500 overflow-x-hidden ${theme.colors.text} ${theme.colors.selection}`}>

            {/* 背景层 */}
            <div className={`fixed inset-0 z-[-2] transition-colors duration-500 ${theme.colors.bg}`}></div>

            <style>{`
                .font-diary { font-family: 'Ma Shan Zheng', cursive; }
                .scrollbar-hide::-webkit-scrollbar { display: none; }
            `}</style>

            {/* 装饰层 */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                {renderDecoration()}
            </div>

            <Navbar
                isDark={isDark}
                cycleTheme={cycleTheme}
                theme={theme}
            />

            <main className="relative z-10">
                <Hero isLoaded={isLoaded} isDark={isDark} theme={theme} />
                
                <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading...</div>}>
                    <Projects isDark={isDark} projects={projects} setSelectedProject={setSelectedProject} theme={theme} />
                    <TechStack isDark={isDark} theme={theme} />
                    <Contact isDark={isDark} theme={theme} />
                    <Diary isDark={isDark} theme={theme} />
                </Suspense>
            </main>

            <Footer isDark={isDark} theme={theme} />

            <Suspense fallback={null}>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} isDark={isDark} theme={theme} />
                )}
            </Suspense>
        </div>
    );
};

export default App;