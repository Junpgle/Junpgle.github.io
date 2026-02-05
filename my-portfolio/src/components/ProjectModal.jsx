import React from 'react';
import { X, ArrowRight, Cpu, Layers, Code2 } from 'lucide-react';

const ProjectModal = ({ project, onClose, isDark }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* 背景遮罩 */}
            <div
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal 主体 */}
            <div className={`relative w-full max-w-5xl h-full max-h-[90vh] md:max-h-[85vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 ${isDark ? 'bg-slate-900 ring-1 ring-slate-800' : 'bg-white ring-1 ring-slate-200'}`}>

                {/* 关闭按钮 (悬浮) */}
                <button
                    onClick={onClose}
                    className={`absolute top-4 right-4 z-30 p-2 rounded-full border transition-all hover:rotate-90 hover:scale-110 shadow-lg ${isDark ? 'bg-slate-800/80 border-slate-700 text-slate-200 backdrop-blur' : 'bg-white/80 border-slate-200 text-slate-700 backdrop-blur'}`}
                >
                    <X className="w-5 h-5" />
                </button>

                {/* 可滚动区域 */}
                <div className="overflow-y-auto w-full h-full scrollbar-hide">

                    {/* 1. 顶部 Hero 图片区域 */}
                    <div className="relative w-full h-56 md:h-80 lg:h-96 shrink-0">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-900 via-slate-900/40' : 'from-white via-white/40'} to-transparent`}></div>

                        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full z-10">
                            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className={`px-3 py-1 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-md border shadow-sm ${isDark ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300' : 'bg-white/90 border-white/50 text-indigo-600'}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none drop-shadow-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                {project.title}
                            </h2>
                        </div>
                    </div>

                    {/* 2. 内容详情 Grid */}
                    <div className="p-6 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

                        {/* 左侧：主要描述 (占2列) */}
                        <div className="lg:col-span-2 space-y-8 md:space-y-10">
                            <div>
                                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                                    <Layers className="w-4 h-4" /> Overview
                                </h4>
                                <p className={`text-base md:text-lg leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {project.shortDesc}
                                </p>
                            </div>

                            {/* 引用样式的方法论 */}
                            <div className={`relative pl-6 md:pl-8 py-2 border-l-4 ${isDark ? 'border-indigo-500 bg-slate-800/30 rounded-r-xl' : 'border-indigo-600 bg-indigo-50/50 rounded-r-xl'}`}>
                                <p className={`text-lg md:text-xl italic font-serif leading-relaxed opacity-90 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                                    "{project.details.methodology}"
                                </p>
                            </div>

                            <div>
                                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                                    <Code2 className="w-4 h-4" /> Key Features
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.details.features.map((f, i) => (
                                        <div key={i} className={`p-4 rounded-xl border flex items-start gap-3 transition-colors ${isDark ? 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/60' : 'bg-slate-50 border-slate-100 hover:bg-slate-100'}`}>
                                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 shadow-[0_0_8px_currentColor] ${isDark ? 'bg-indigo-400 text-indigo-400' : 'bg-indigo-600 text-indigo-600'}`} />
                                            <span className={`text-sm font-bold leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 右侧：技术栈与链接 (占1列) */}
                        <div className="flex flex-col gap-8">
                            {/* 技术栈卡片 */}
                            <div className={`p-6 md:p-8 rounded-2xl border ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                                <div className="flex items-center gap-2 mb-6 text-slate-400">
                                    <Cpu className="w-4 h-4" />
                                    <span className="text-xs font-black uppercase tracking-widest">Tech Stack</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.details.tech.split(',').map((t, i) => (
                                        <span key={i} className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${isDark ? 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500' : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'}`}>
                                            {t.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 链接按钮 */}
                            <div className="flex flex-col gap-3">
                                {project.links.map((link, i) => (
                                    <a key={i} href={link.url} target="_blank" rel="noreferrer"
                                       className={`group flex items-center justify-between p-4 px-6 rounded-xl font-bold transition-all border shadow-sm hover:shadow-md hover:-translate-y-1 ${isDark ? 'bg-white text-slate-950 hover:bg-indigo-400 hover:text-white border-transparent' : 'bg-slate-900 text-white hover:bg-indigo-600 border-slate-900'}`}>
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