import React, { useState, useEffect } from 'react';
import {
    Github,
    ArrowRight,
    X,
    Database,
    BrainCircuit,
    Cpu,
    Binary,
    Terminal,
    Activity,
    Mail,
    Send,
    Bot,
    CheckCircle2,
    Loader2,
    AlertCircle,
    Code,
    Zap,
    ExternalLink
} from 'lucide-react';

const App = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [formState, setFormState] = useState('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;
        setFormState('loading');
        await new Promise(resolve => setTimeout(resolve, 1000));
        setFormState('success');
    };

    const openMailClient = () => {
        const mailtoUrl = `mailto:junpgle@qq.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AContact: ${formData.email}`;
        window.open(mailtoUrl, '_self');
    };

    const resetForm = () => {
        setFormData({ name: '', email: '', message: '' });
        setFormState('idle');
    };

    const projects = [
        {
            id: "guide-2025",
            title: "GUIDE 2025 — 年度报告生成器",
            shortDesc: "纯浏览器端驱动的静态年度回顾网页生成器。支持视差滚动与烟花交互，数据 100% 隐私安全。",
            image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80&w=800",
            tags: ["Web", "隐私保护", "动态交互"],
            category: "web",
            links: [{ label: "立即创作", url: "https://github.com/Junpgle/2025-Summary" }],
            details: {
                methodology: "打造专属于你的年度高光时刻。这是一个完全运行在浏览器端的静态网页生成器，不经过服务器保存，绝对隐私安全。",
                features: ["绝对隐私：所有照片、文字仅存在浏览器或导出为 JSON。", "定制时间轴：智能压缩图片，平衡加载速度与画质。", "视效增强：纯静态实现烟花粒子系统与视差滚动。"],
                tech: "HTML5 File API + Canvas + LocalStorage。极致的端侧数据持久化方案。"
            }
        },
        {
            id: "learnword",
            title: "LearnWord — 智能单词记忆工具",
            shortDesc: "基于三阶段记忆闭环（认知→自测→输出）的科学记忆工具，结合算法驱动复习逻辑。",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "记忆算法", "桌面应用"],
            category: "desktop",
            links: [{ label: "查看代码", url: "https://github.com/Junpgle/LearnWord" }],
            details: {
                methodology: "核心采用“三阶段递进学习法”，将记忆过程建模为认知-检索-重建三个阶段。",
                features: ["智能复习：对抗记忆遗忘曲线，动态调整频率。", "三阶段自测：强制大脑进行深度加工，实现牢固记忆。", "高压测试：模拟考场环境，强化应试能力。"],
                tech: "PySide6 构建，采用 AppData 数据隔离与智能热更新机制。"
            }
        },
        {
            id: "hfut-exam",
            title: "HFUT 创新创业题库系统",
            shortDesc: "服务两百多名用户的在线题库，基于 Cloudflare D1 边缘数据库构建。",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
            tags: ["边缘计算", "SQL", "Cloudflare"],
            category: "web",
            links: [{ label: "在线体验", url: "https://hfut-innovation-and-entrepreneurship-question-bank.pages.dev/" }],
            details: {
                methodology: "通过边缘计算（Cloudflare Workers）降低响应延迟，构建高性能的校园服务应用。",
                features: ["数据库迁移：从 NoSQL 迁移至 SQL (D1)，极大提升响应速度。", "云端同步：跨设备学习记录无缝衔接。", "错题算法：基于全站数据分析发现共性薄弱点。"],
                tech: "Cloudflare Workers 全栈开发，D1 边缘数据库存储。"
            }
        }
    ];

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-700 overflow-x-hidden">
            <style>{`
        @keyframes reveal { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes drift { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(10px, 10px); } }
        .animate-reveal { animation: reveal 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-drift { animation: drift 8s ease-in-out infinite; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>

            {/* 导航 */}
            <nav className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                            <Terminal className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-900 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">Junpgle</span>
                    </div>
                    <div className="flex items-center space-x-6 md:space-x-12 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
                        <a href="#projects" className="text-slate-400 hover:text-indigo-600 transition-colors">Works</a>
                        <a href="#contact" className="text-slate-400 hover:text-indigo-600 transition-colors">Contact</a>
                        <a href="https://github.com/Junpgle" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                            <Github className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center px-6 md:px-8 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>
                <div className="absolute top-[10%] right-[5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-indigo-50 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-20">
                    <div className={`transition-all duration-1000 ${isLoaded ? 'animate-reveal' : 'opacity-0'}`}>
                        <div className="mb-6 md:mb-10">
              <span className="text-indigo-600 font-bold text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase px-4 py-1.5 border border-indigo-100 bg-indigo-50/50 rounded-full inline-block">
                IST Sophomore
              </span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-slate-900 tracking-tighter leading-[0.85] mb-8 break-words">
                            HI,<br />
                            I'M <span className="text-indigo-600">JUNPGLE</span>
                        </h1>
                        <div className="flex items-center space-x-4 mt-8 md:mt-12">
                            <div className="h-px w-8 md:w-12 bg-slate-200"></div>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-400">Code · Intelligence · Innovation</p>
                        </div>
                    </div>

                    <div className={`relative flex justify-center items-center transition-all duration-1000 delay-200 ${isLoaded ? 'animate-reveal' : 'opacity-0'} mt-8 lg:mt-0`}>
                        <div className="relative w-full max-w-[280px] md:max-w-md aspect-square">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:h-48 h-32 md:w-48 bg-white border border-slate-100 shadow-2xl rounded-[2rem] md:rounded-[3rem] flex items-center justify-center animate-float">
                                <BrainCircuit className="w-12 md:w-20 h-12 md:h-20 text-indigo-600 opacity-80" />
                            </div>
                            <div className="absolute top-4 md:top-10 left-4 md:left-10 p-4 md:p-6 bg-white border border-slate-50 shadow-xl rounded-xl md:rounded-2xl animate-drift text-slate-400">
                                <Code className="w-4 md:w-6 h-4 md:h-6" />
                            </div>
                            <div className="absolute bottom-4 md:bottom-10 right-4 md:right-10 p-4 md:p-6 bg-white border border-slate-50 shadow-xl rounded-xl md:rounded-2xl animate-drift delay-1000 text-indigo-400">
                                <Binary className="w-4 md:w-6 h-4 md:h-6" />
                            </div>
                            <div className="absolute inset-0 border border-slate-100 rounded-full scale-110 md:scale-125 opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-24 md:py-40 px-6 md:px-8 border-y border-slate-200/60 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-8">
                        <div className="max-w-2xl">
                            <div className="text-[9px] md:text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-6">Works Archive</div>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4 md:mb-8">精选作品集.</h2>
                            <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                                记录在智能科学与工程实践中的探索，涵盖 AI 算法应用、桌面工具及高性能 Web 系统。
                            </p>
                        </div>
                        <div className="flex bg-slate-50 p-1 rounded-xl md:rounded-2xl border border-slate-200 overflow-x-auto whitespace-nowrap">
                            {['all', 'desktop', 'web'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 md:px-8 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${
                                        activeTab === tab ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                                >
                                    {tab === 'all' ? '全部' : tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                                <div className="relative aspect-[16/10] bg-slate-50 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-slate-200 transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-100 lg:hover:-translate-y-2">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                                    <div className="absolute top-6 md:top-10 left-6 md:left-10 flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 md:px-4 py-1 md:py-1.5 bg-white/95 backdrop-blur-md text-[8px] md:text-[9px] text-indigo-600 font-black uppercase tracking-widest border border-slate-100 rounded-lg md:rounded-xl shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-8 md:mt-12 px-2 md:px-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-slate-200 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                            <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-medium line-clamp-2">{project.shortDesc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 md:py-40 px-6 md:px-8 bg-white border-b border-slate-200/60">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-28">
                        <div className="text-[9px] md:text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4">Technical Proficiency</div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">技术栈清单.</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        <div className="p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-100 group">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                <Terminal className="w-5 h-5" />
                            </div>
                            <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">核心语言 / Langs</h4>
                            <ul className="space-y-3 md:space-y-4 text-slate-900 font-bold text-sm">
                                <li>Python (AI Focus)</li>
                                <li>C++ / Qt Framework</li>
                                <li>TypeScript / JS</li>
                            </ul>
                        </div>
                        <div className="p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-100 group">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                <Bot className="w-5 h-5" />
                            </div>
                            <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">AI 模型 / Intelligence</h4>
                            <ul className="space-y-3 md:space-y-4 text-slate-900 font-bold text-sm">
                                <li>Gemini / ChatGPT</li>
                                <li>GitHub Copilot</li>
                                <li>DeepSeek / 豆包</li>
                            </ul>
                        </div>
                        <div className="p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-100 group">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                <Database className="w-5 h-5" />
                            </div>
                            <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">云端架构 / Architecture</h4>
                            <ul className="space-y-3 md:space-y-4 text-slate-900 font-bold text-sm">
                                <li>Cloudflare Workers</li>
                                <li>D1 SQL Database</li>
                                <li>RESTful API Design</li>
                            </ul>
                        </div>
                        <div className="p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-100 group">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                <Zap className="w-5 h-5" />
                            </div>
                            <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">效率工具 / Dev Tools</h4>
                            <ul className="space-y-3 md:space-y-4 text-slate-900 font-bold text-sm">
                                <li>React / Vite / Tailwind</li>
                                <li>Git / CI/CD Workflow</li>
                                <li>PySide6 / Inno Setup</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-24 md:py-48 px-6 md:px-8 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                    <div className="flex-1 text-center lg:text-left w-full">
                        <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 md:mb-12">联系我.</h2>
                        <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-md mb-12 md:mb-16 mx-auto lg:mx-0">
                            无论是智能算法交流，还是工程项目合作，欢迎通过邮件联系。
                        </p>
                        <a href="mailto:junpgle@qq.com" className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 group">
                            <div className="w-16 md:w-20 h-16 md:h-20 rounded-2xl md:rounded-[2rem] bg-white border border-slate-200 flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-500 shadow-xl">
                                <Mail className="w-6 md:w-8 h-6 md:h-8 text-indigo-600 group-hover:text-white" />
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">Email Archive</div>
                                <div className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors break-all">junpgle@qq.com</div>
                            </div>
                        </a>
                    </div>

                    <div className="w-full max-w-lg p-8 md:p-14 bg-white rounded-[2.5rem] md:rounded-[4rem] border border-slate-200/60 shadow-2xl relative overflow-hidden">
                        {formState === 'success' ? (
                            <div className="py-6 md:py-10 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <AlertCircle className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight">请手动完成下一步</h3>
                                <p className="text-slate-400 font-medium mb-10 leading-relaxed text-sm md:text-lg">
                                    系统无法直接发送。请点击下方按钮，使用您的邮件客户端发送。
                                </p>
                                <div className="flex flex-col gap-4">
                                    <button onClick={openMailClient} className="w-full py-4 md:py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl md:rounded-2xl transition-all shadow-xl flex items-center justify-center space-x-3">
                                        <Mail className="w-5 h-5" />
                                        <span>唤起邮件客户端</span>
                                    </button>
                                    <button onClick={resetForm} className="w-full py-4 text-slate-400 hover:text-slate-600 font-bold transition-all text-sm">返回修改</button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                                <div className="relative">
                                    <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-300 absolute -top-5 left-2">Name</label>
                                    <input name="name" value={formData.name} onChange={handleInputChange} type="text" required placeholder="您的称呼" className="w-full bg-slate-50 border-none rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-sm md:text-base" />
                                </div>
                                <div className="relative">
                                    <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-300 absolute -top-5 left-2">Email</label>
                                    <input name="email" value={formData.email} onChange={handleInputChange} type="email" required placeholder="您的邮箱" className="w-full bg-slate-50 border-none rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-sm md:text-base" />
                                </div>
                                <div className="relative">
                                    <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-300 absolute -top-5 left-2">Message</label>
                                    <textarea name="message" value={formData.message} onChange={handleInputChange} required placeholder="想对我说的话..." rows="3" className="w-full bg-slate-50 border-none rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:ring-4 focus:ring-indigo-500/10 transition-all resize-none outline-none text-sm md:text-base"></textarea>
                                </div>
                                <button disabled={formState === 'loading'} type="submit" className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-black py-5 md:py-7 rounded-2xl md:rounded-3xl transition-all shadow-xl flex items-center justify-center space-x-3 active:scale-95 disabled:opacity-70">
                                    {formState === 'loading' ? <><span className="text-xs md:text-sm uppercase tracking-widest">准备中</span><Loader2 className="w-5 h-5 animate-spin" /></> : <><span className="text-xs md:text-sm uppercase tracking-widest">发送消息</span><Send className="w-4 h-4" /></>}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 md:py-24 px-6 md:px-8 bg-white border-t border-slate-200/60">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-slate-300">
                    <div>© 2026 Designed by Junpgle.</div>
                    <div className="flex space-x-10 md:space-x-16">
                        <a href="https://github.com/Junpgle" target="_blank" className="text-slate-900 hover:text-indigo-600 transition-all">GitHub</a>
                        <a href="#projects" className="text-slate-900 hover:text-indigo-600 transition-all">Archive</a>
                    </div>
                </div>
            </footer>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
                    <div className="relative w-full max-w-5xl h-full max-h-[90vh] bg-white border border-slate-100 rounded-[2rem] md:rounded-[4rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
                        <button onClick={() => setSelectedProject(null)} className="absolute top-6 md:top-12 right-6 md:right-12 z-50 text-slate-300 hover:text-indigo-600 transition-all">
                            <X className="w-8 h-8" />
                        </button>
                        <div className="overflow-y-auto p-8 md:p-16">
                            <div className="mb-4 text-indigo-600 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px]">{selectedProject.tags.join(" // ")}</div>
                            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 md:mb-16 tracking-tighter leading-tight">{selectedProject.title}</h2>
                            <div className="space-y-12 md:space-y-24">
                                <div className="relative pl-6 md:pl-12 border-l-2 border-indigo-600"><p className="text-xl md:text-3xl text-slate-500 leading-relaxed font-light italic">{selectedProject.details.methodology}</p></div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                                    <div className="p-8 md:p-12 bg-slate-50 rounded-2xl md:rounded-[3rem] border border-slate-100">
                                        <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-indigo-600/40 mb-8 md:mb-12">Core Highlights</h4>
                                        <ul className="space-y-6 md:space-y-10">
                                            {selectedProject.details.features.map((f, i) => (
                                                <li key={i} className="flex items-start text-base md:text-lg text-slate-500 font-medium"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-4 md:mr-6 mt-2.5 shrink-0"></span>{f}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-between gap-12">
                                        <div><h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-indigo-600/40 mb-6 md:mb-10">Technical Specs</h4><p className="text-slate-500 leading-relaxed text-base md:text-lg font-medium">{selectedProject.details.tech}</p></div>
                                        <div className="space-y-4">
                                            {selectedProject.links.map((link, i) => (
                                                <a key={i} href={link.url} target="_blank" className="flex items-center justify-between p-6 md:p-8 bg-slate-900 text-white rounded-2xl md:rounded-3xl font-black transition-all hover:bg-indigo-600 shadow-xl group/link">
                                                    <span className="uppercase tracking-widest text-[10px] md:text-xs">{link.label}</span><ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;