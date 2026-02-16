import React, { useState } from 'react';
import { ArrowRight, Music } from 'lucide-react';

const Projects = ({ isDark, projects, setSelectedProject, theme }) => {
    const [activeTab, setActiveTab] = useState('all');

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        // ★★★ 这里的 className 绝对不能有 bg-slate-xxx，必须是 theme.colors.bg ★★★
        <section id="projects" className={`py-24 md:py-40 px-6 md:px-8 border-y transition-colors duration-500 ${theme.colors.bg} ${theme.colors.border}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-8">
                    <div className="max-w-2xl">
                        {/* 顶部小标题：日间红/夜间金 */}
                        <div className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 md:mb-6 ${theme.colors.primary}`}>
                            Works Archive
                        </div>
                        {/* 大标题：日间黑/夜间白 */}
                        <h2 className={`text-4xl md:text-6xl font-black tracking-tighter mb-4 md:mb-8 font-diary transition-colors ${theme.colors.text}`}>
                            精选作品集.
                        </h2>
                        {/* 描述文字 */}
                        <p className={`text-base md:text-lg font-medium leading-relaxed ${theme.colors.secondary}`}>
                            记录在智能科学与工程实践中的探索，涵盖 AI 算法应用、桌面工具及高性能 Web 系统。
                        </p>
                    </div>

                    {/* Tab 按钮 */}
                    <div className={`flex p-1 rounded-xl border overflow-x-auto whitespace-nowrap scrollbar-hide transition-colors ${theme.colors.iconBg} ${theme.colors.border}`}>
                        {['all', 'desktop', 'web', 'fullstack'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                                    activeTab === tab
                                        ? `${theme.colors.primaryBg} text-white shadow-md`
                                        : `${theme.colors.secondary} hover:opacity-100`
                                }`}
                            >
                                {tab === 'all' ? '全部' : tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 卡片网格 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                            {/* 卡片容器：背景完全动态化 */}
                            <div className={`relative aspect-[16/10] rounded-[2rem] md:rounded-[3rem] overflow-hidden border transition-all duration-700 hover:shadow-2xl lg:hover:-translate-y-2 ${theme.colors.iconBg} ${theme.colors.border}`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                />

                                {/* 标签 Tag */}
                                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={`px-3 py-1 backdrop-blur-md text-[9px] font-black uppercase tracking-widest border rounded-lg shadow-sm ${theme.colors.accentBg} ${theme.colors.primary} ${theme.colors.accentBorder}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 卡片文字信息 */}
                            <div className="mt-6 md:mt-10 px-2 md:px-4">
                                <div className="flex justify-between items-center mb-4">
                                    {/* 标题颜色动态化 */}
                                    <h3 className={`text-2xl md:text-3xl font-black tracking-tight transition-colors group-hover:${theme.colors.primary} ${theme.colors.text}`}>
                                        {project.title}
                                    </h3>
                                    {/* 箭头颜色动态化 */}
                                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${theme.colors.border} ${theme.colors.secondary} group-hover:${theme.colors.primaryBg} group-hover:text-white group-hover:border-transparent`}>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                                <p className={`text-sm md:text-lg leading-relaxed font-medium line-clamp-2 ${theme.colors.secondary}`}>
                                    {project.shortDesc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;