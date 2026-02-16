import React, { useState, useEffect } from 'react';
import { getTheme } from './theme';

// 导入特效组件 (确保文件名是 .jsx)
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
    const theme = getTheme();

    // 状态管理
    const [isDark, setIsDark] = useState(false);
    const [colorMode, setColorMode] = useState('system');
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // ★★★ 核心修复：确保暗色模式类名正确添加到 html 标签 ★★★
    useEffect(() => {
        setIsLoaded(true);
        const savedMode = localStorage.getItem('colorMode') || 'system';
        setColorMode(savedMode);
        applyColorMode(savedMode);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (savedMode === 'system') applyColorMode('system');
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const applyColorMode = (mode) => {
        let shouldBeDark = false;

        if (mode === 'system') {
            shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        } else {
            shouldBeDark = mode === 'dark';
        }

        setIsDark(shouldBeDark);

        // ★ 强制操作 DOM 确保 Tailwind 生效
        const root = window.document.documentElement;
        if (shouldBeDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    };

    const toggleColorMode = () => {
        let newMode;
        if (colorMode === 'light') newMode = 'dark';
        else if (colorMode === 'dark') newMode = 'system';
        else newMode = 'light';

        setColorMode(newMode);
        localStorage.setItem('colorMode', newMode);
        // 关键：切换后立即调用 applyColorMode
        applyColorMode(newMode);
    };

    // 渲染特效
    const renderDecoration = () => {
        switch (theme.id) {
            case 'newYear': return <NewYearDeco isDark={isDark} />;
            case 'autumn': return <AutumnDeco isDark={isDark} />;
            case 'winter': return <WinterDeco isDark={isDark} />;
            default: return <DefaultDeco isDark={isDark} />;
        }
    };

    // src/App.jsx 仅修改 return 部分的开头

    return (
        // 添加 relative 和 z-0，确保内容在装饰层之上
        <div className={`relative min-h-screen font-sans antialiased transition-colors duration-500 overflow-x-hidden ${theme.colors.text} ${theme.colors.selection}`}>

            {/* 背景色层：直接由 theme.colors.bg 控制，放在最底层 */}
            <div className={`absolute inset-0 z-[-2] transition-colors duration-500 ${theme.colors.bg}`}></div>

            <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');
            .font-diary { font-family: 'Ma Shan Zheng', cursive; }
            .scrollbar-hide::-webkit-scrollbar { display: none; }
        `}</style>

            {/* 装饰层：z-[-1] */}
            <div className="absolute inset-0 z-[-1]">
                {renderDecoration()}
            </div>

            <Navbar
                isDark={isDark}
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
                theme={theme}
            />

            <main>
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