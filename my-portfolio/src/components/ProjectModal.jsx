import React, { useEffect } from 'react';
import { X, ArrowRight, Cpu, Layers, Code2, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, onClose, isDark, theme }) => {
    // 禁止背景滚动
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    if (!project) return null;

    // 假设 project 数据结构中可能包含 links 数组，如果没有则提供默认值防止报错
    const links = project.links || [
        { label: "Live Demo", url: "#", icon: ExternalLink },
        { label: "Source Code", url: "#", icon: Github }
    ];

    // 假设 project.details 可能不存在，提供默认值
    const details = project.details || {
        methodology: "本项目采用模块化设计，注重高性能与用户体验。",
        features: ["响应式设计", "暗色模式支持", "动态交互"],
        tech: project.tags.join(', ')
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* 背景遮罩 */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal 主体 */}
            <div className={`relative w-full max-w-5xl h-full max-h-[90vh] md:max-h-[85vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 border ${theme.colors.bg} ${theme.colors.border}`}>

                {/* 关闭按钮 (悬浮) */}
                <button
                    onClick={onClose}
                    className={`absolute top-4 right-4 z-30 p-2 md:p-3 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-110 shadow-lg border backdrop-blur-md ${theme.colors.iconBg} ${theme.colors.border} ${theme.colors.text} hover:${theme.colors.primaryBg} hover:text-white hover:border-transparent`}
                >
                    <X className="w-5 h-5" />
                </button>

                {/* 可滚动区域 */}
                <div className="overflow-y-auto w-full h-full scrollbar-hide">

                    {/* 1. 顶部 Hero 图片区域 */}
                    <div className="relative w-full h-64 md:h-80 lg:h-96 shrink-0">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        {/* 渐变遮罩：为了适配不同主题背景色，这里使用 CSS 变量或近似处理 */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90`}></div>

                        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full z-10">
                            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className={`px-3 py-1 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-md border shadow-sm bg-white/10 text-white border-white/20`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none drop-shadow-md text-white`}>
                                {project.title}
                            </h2>
                        </div>
                    </div>

                    {/* 2. 内容详情 Grid */}
                    <div className="p-6 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

                        {/* 左侧：主要描述 (占2列) */}
                        <div className="lg:col-span-2 space-y-8 md:space-y-10">

                            {/* Overview Section */}
                            <div>
                                <h4 className={`flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] mb-4 ${theme.colors.secondary}`}>
                                    <Layers className="w-4 h-4" /> Overview
                                </h4>
                                <p className={`text-base md:text-lg leading-relaxed font-medium ${theme.colors.text}`}>
                                    {project.shortDesc}
                                    <br/><br/>
                                    {/* 这里可以放更详细的描述，如果有的话 */}
                                    这是一个结合了现代设计理念与前沿技术栈的创新项目。我们在开发过程中深入探索了用户交互的边界，力求在功能性与美学之间找到完美的平衡点。
                                </p>
                            </div>

                            {/* Methodology Quote */}
                            <div className={`relative pl-6 md:pl-8 py-4 border-l-4 rounded-r-xl ${theme.colors.primary.replace('text-', 'border-')} ${theme.colors.accentBg}`}>
                                <p className={`text-lg md:text-xl italic font-serif leading-relaxed opacity-90 ${theme.colors.text}`}>
                                    "{details.methodology}"
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div>
                                <h4 className={`flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] mb-6 ${theme.colors.secondary}`}>
                                    <Code2 className="w-4 h-4" /> Key Features
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {details.features.map((f, i) => (
                                        <div key={i} className={`p-4 rounded-xl border flex items-start gap-3 transition-colors ${theme.colors.iconBg} ${theme.colors.border} hover:${theme.colors.accentBorder}`}>
                                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 shadow-[0_0_8px_currentColor] ${theme.colors.primary.replace('text-', 'bg-')} ${theme.colors.primary}`} />
                                            <span className={`text-sm font-bold leading-relaxed ${theme.colors.text}`}>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 右侧：技术栈与链接 (占1列) */}
                        <div className="flex flex-col gap-8">

                            {/* Tech Stack Card */}
                            <div className={`p-6 md:p-8 rounded-2xl border ${theme.colors.iconBg} ${theme.colors.border}`}>
                                <div className={`flex items-center gap-2 mb-6 ${theme.colors.secondary}`}>
                                    <Cpu className="w-4 h-4" />
                                    <span className="text-xs font-black uppercase tracking-widest">Tech Stack</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {details.tech.split(',').map((t, i) => (
                                        <span key={i} className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${theme.colors.bg} ${theme.colors.border} ${theme.colors.text} hover:${theme.colors.accentBorder}`}>
                                            {t.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Links */}
                            <div className="flex flex-col gap-3">
                                {links.map((link, i) => (
                                    <a key={i} href={link.url} target="_blank" rel="noreferrer"
                                       className={`group flex items-center justify-between p-4 px-6 rounded-xl font-bold transition-all border shadow-sm hover:shadow-md hover:-translate-y-1 ${theme.colors.button}`}>
                                        <span className="text-xs uppercase tracking-widest">{link.label}</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 底部留白 */}
                    <div className="h-16"></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;