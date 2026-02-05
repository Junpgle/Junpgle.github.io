import React, { useState, useEffect } from 'react';
import {
    Github, ArrowRight, Database, BrainCircuit, Binary, Terminal, Bot,
    Mail, Send, Loader2, Code, Zap, Music, Moon, Sun, Monitor, AlertCircle, CheckCircle2
} from 'lucide-react';

// 引入拆分的数据和组件
import { projects } from './projects.js';
import ProjectModal from './components/ProjectModal';

// ★ 这里修改为你的阿里云 ECS 公网 IP (开发时如果本地测试可以用 localhost)
const API_URL = '/api/contact';

const App = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // 表单状态: idle | loading | success | error
    const [formState, setFormState] = useState('idle');
    // 新增：专门存储具体的错误信息（例如：发送太频繁）
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    // 主题状态
    const [theme, setTheme] = useState('system');
    const [isDark, setIsDark] = useState(false);

    // 初始化
    useEffect(() => {
        setIsLoaded(true);
        const savedTheme = localStorage.getItem('theme') || 'system';
        setTheme(savedTheme);
        applyTheme(savedTheme);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (savedTheme === 'system') applyTheme('system');
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const applyTheme = (selectedTheme) => {
        let shouldBeDark = false;
        if (selectedTheme === 'system') {
            shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        } else {
            shouldBeDark = selectedTheme === 'dark';
        }
        setIsDark(shouldBeDark);
        document.documentElement.classList.toggle('dark', shouldBeDark);
    };

    const toggleTheme = () => {
        let newTheme;
        if (theme === 'light') newTheme = 'dark';
        else if (theme === 'dark') newTheme = 'system';
        else newTheme = 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // --- 核心：连接后端 ECS ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setFormState('loading');
        setErrorMessage(''); // 重置错误信息

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setFormState('success');
                setFormData({ name: '', email: '', message: '' }); // 清空
                // 3秒后重置按钮状态，方便再次发送
                setTimeout(() => setFormState('idle'), 5000);
            } else {
                // 这里会捕获后端返回的 "msg" (例如：发送太频繁...)
                throw new Error(data.msg || '发送失败');
            }
        } catch (error) {
            console.error('API Error:', error);
            setErrorMessage(error.message); // 设置具体的错误信息
            setFormState('error');
        }
    };

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <div className={`min-h-screen font-sans antialiased transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-400 overflow-x-hidden ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-[#f8fafc] text-slate-700'}`}>
            <style>{`
                @keyframes reveal { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
                @keyframes drift { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(10px, 10px); } }
                .animate-reveal { animation: reveal 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-drift { animation: drift 8s ease-in-out infinite; }
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-300 ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200/50'}`}>
                <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isDark ? 'bg-white text-slate-950 group-hover:bg-indigo-400' : 'bg-slate-900 text-white group-hover:bg-indigo-600'}`}>
                            <Terminal className="w-4 h-4" />
                        </div>
                        <span className={`font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>Junpgle</span>
                    </div>

                    <div className="flex items-center space-x-4 md:space-x-12">
                        <div className="hidden sm:flex items-center space-x-6 md:space-x-12 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
                            <a href="#projects" className={`transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>Works</a>
                            <a href="#contact" className={`transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>Contact</a>
                            <a href="https://github.com/Junpgle" target="_blank" rel="noopener noreferrer" className={`transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>
                                <Github className="w-4 h-4" />
                            </a>
                        </div>

                        <button onClick={toggleTheme} className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-slate-800 text-yellow-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                            {theme === 'light' && <Sun className="w-4 h-4" />}
                            {theme === 'dark' && <Moon className="w-4 h-4" />}
                            {theme === 'system' && <Monitor className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={`relative min-h-screen flex items-center px-6 md:px-8 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
                <div className={`absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-30`}></div>
                <div className={`absolute top-[10%] right-[5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full blur-[80px] md:blur-[100px] pointer-events-none transition-colors duration-300 ${isDark ? 'bg-indigo-900/20' : 'bg-indigo-50'}`}></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-20">
                    <div className={`transition-all duration-1000 ${isLoaded ? 'animate-reveal' : 'opacity-0'}`}>
                        <div className="mb-6 md:mb-10">
                            <span className={`font-bold text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase px-4 py-1.5 border rounded-full inline-block transition-colors ${isDark ? 'text-indigo-400 border-indigo-900/50 bg-indigo-950/30' : 'text-indigo-600 border-indigo-100 bg-indigo-50/50'}`}>
                                IST Sophomore
                            </span>
                        </div>
                        <h1 className={`text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-black tracking-tighter leading-[0.9] mb-8 break-words transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            HI,<br />
                            I'M <span className="text-indigo-500 dark:text-indigo-400 whitespace-nowrap inline-block">JUNPGLE</span>
                        </h1>
                        <div className="flex items-center space-x-4 mt-8 md:mt-12">
                            <div className={`h-px w-8 md:w-12 transition-colors ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}></div>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-400">Code · Intelligence · Innovation</p>
                        </div>
                    </div>

                    <div className={`relative flex justify-center items-center transition-all duration-1000 delay-200 ${isLoaded ? 'animate-reveal' : 'opacity-0'} mt-8 lg:mt-0`}>
                        <div className="relative w-full max-w-[260px] md:max-w-md aspect-square">
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:h-48 h-32 md:w-48 border shadow-2xl rounded-[2rem] md:rounded-[3rem] flex items-center justify-center animate-float transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
                                <BrainCircuit className={`w-12 md:w-20 h-12 md:h-20 opacity-80 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                            </div>
                            {/* Decorative icons */}
                            <div className={`absolute top-4 md:top-10 left-4 md:left-10 p-4 md:p-6 border shadow-xl rounded-xl md:rounded-2xl animate-drift transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800 text-slate-500' : 'bg-white border-slate-50 text-slate-400'}`}><Code className="w-4 md:w-6 h-4 md:h-6" /></div>
                            <div className={`absolute bottom-4 md:bottom-10 right-4 md:right-10 p-4 md:p-6 border shadow-xl rounded-xl md:rounded-2xl animate-drift delay-1000 transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800 text-indigo-400' : 'bg-white border-slate-50 text-indigo-400'}`}><Binary className="w-4 md:w-6 h-4 md:h-6" /></div>
                            <div className={`absolute inset-0 border rounded-full scale-110 md:scale-125 opacity-20 transition-colors ${isDark ? 'border-slate-700' : 'border-slate-100'}`}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`py-24 md:py-40 px-6 md:px-8 border-y transition-colors duration-300 ${isDark ? 'bg-slate-950 border-slate-800/60' : 'bg-white border-slate-200/60'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-8">
                        <div className="max-w-2xl">
                            <div className="text-[9px] md:text-[10px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-6">Works Archive</div>
                            <h2 className={`text-4xl md:text-6xl font-black tracking-tighter mb-4 md:mb-8 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>精选作品集.</h2>
                            <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                                记录在智能科学与工程实践中的探索，涵盖 AI 算法应用、桌面工具及高性能 Web 系统。
                            </p>
                        </div>
                        <div className={`flex p-1 rounded-xl md:rounded-2xl border overflow-x-auto whitespace-nowrap scrollbar-hide transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                            {['all', 'desktop', 'web'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 md:px-8 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${
                                        activeTab === tab
                                            ? (isDark ? 'bg-slate-800 text-indigo-400 shadow-sm' : 'bg-white text-indigo-600 shadow-sm')
                                            : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                                    }`}
                                >
                                    {tab === 'all' ? '全部' : tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                                <div className={`relative aspect-[16/10] rounded-[2rem] md:rounded-[3rem] overflow-hidden border transition-all duration-700 hover:shadow-2xl lg:hover:-translate-y-2 ${isDark ? 'bg-slate-900 border-slate-800 hover:shadow-indigo-900/20' : 'bg-slate-50 border-slate-200 hover:shadow-indigo-100'}`}>
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                                    <div className="absolute top-6 md:top-10 left-6 md:left-10 flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className={`px-3 md:px-4 py-1 md:py-1.5 backdrop-blur-md text-[8px] md:text-[9px] font-black uppercase tracking-widest border rounded-lg md:rounded-xl shadow-sm transition-colors ${isDark ? 'bg-slate-900/90 text-indigo-400 border-slate-700' : 'bg-white/95 text-indigo-600 border-slate-100'}`}>{tag}</span>
                                        ))}
                                    </div>
                                    {project.id === '4dmusic' && (
                                        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 animate-pulse">
                                            <Music className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                        </div>
                                    )}
                                </div>
                                <div className="mt-6 md:mt-10 px-2 md:px-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className={`text-2xl md:text-3xl font-black tracking-tight transition-colors group-hover:text-indigo-500 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{project.title}</h3>
                                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border flex items-center justify-center transition-all ${isDark ? 'border-slate-800 text-slate-500 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600' : 'border-slate-200 text-slate-300 group-hover:bg-indigo-600 group-hover:text-white'}`}>
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
            <section className={`py-24 md:py-40 px-6 md:px-8 border-b transition-colors duration-300 ${isDark ? 'bg-slate-950 border-slate-800/60' : 'bg-white border-slate-200/60'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-28">
                        <div className="text-[9px] md:text-[10px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4">Technical Proficiency</div>
                        <h2 className={`text-4xl md:text-6xl font-black tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>技术栈清单.</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { icon: Terminal, title: "核心语言 / Langs", items: ["Python (AI Focus)", "C++ / Qt Framework", "TypeScript / JS"] },
                            { icon: Bot, title: "AI 模型 / Intelligence", items: ["Gemini / ChatGPT", "GitHub Copilot", "DeepSeek / 豆包"] },
                            { icon: Database, title: "云端架构 / Architecture", items: ["Cloudflare Workers", "D1 SQL Database", "RESTful API Design"] },
                            { icon: Zap, title: "效率工具 / Dev Tools", items: ["React / Vite / Tailwind", "Git / CI/CD Workflow", "PySide6 / Inno Setup"] }
                        ].map((stack, idx) => (
                            <div key={idx} className={`p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border group transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-8 transition-all group-hover:bg-indigo-600 group-hover:text-white ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-white text-slate-700'}`}>
                                    <stack.icon className="w-5 h-5" />
                                </div>
                                <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">{stack.title}</h4>
                                <ul className={`space-y-3 md:space-y-4 font-bold text-sm transition-colors ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                                    {stack.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-24 md:py-48 px-6 md:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-[#f8fafc]'}`}>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                    <div className="flex-1 text-center lg:text-left w-full">
                        <h2 className={`text-6xl md:text-8xl font-black tracking-tighter mb-8 md:mb-12 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>联系我.</h2>
                        <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-md mb-12 md:mb-16 mx-auto lg:mx-0">
                            无论是智能算法交流，还是工程项目合作，欢迎通过邮件联系。
                        </p>
                        <a href="mailto:junpgle@qq.com" className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 group">
                            <div className={`w-16 md:w-20 h-16 md:h-20 rounded-2xl md:rounded-[2rem] border flex items-center justify-center transition-all duration-500 shadow-xl group-hover:bg-indigo-600 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                                <Mail className={`w-6 md:w-8 h-6 md:h-8 transition-colors group-hover:text-white ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Archive</div>
                                <div className={`text-xl md:text-2xl font-black transition-colors break-all group-hover:text-indigo-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>junpgle@qq.com</div>
                            </div>
                        </a>
                    </div>

                    <div className={`w-full max-w-lg p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border shadow-2xl relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200/60'}`}>
                        {formState === 'success' ? (
                            <div className="py-6 md:py-10 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className={`text-2xl md:text-3xl font-black mb-4 tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>消息已送达</h3>
                                <p className="text-slate-400 font-medium mb-10 leading-relaxed text-sm md:text-lg">
                                    邮件已通过 ECS 服务器成功推送到我的终端。我会尽快回复。
                                </p>
                                <button onClick={() => setFormState('idle')} className="w-full py-4 text-slate-400 hover:text-slate-600 font-bold transition-all text-sm">
                                    发送另一条
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                                {formState === 'error' && (
                                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" />
                                        {/* 显示具体的错误信息（如：发送太频繁） */}
                                        {errorMessage || '服务器连接失败，请稍后重试'}
                                    </div>
                                )}

                                {['Name', 'Email'].map((field) => (
                                    <div className="relative" key={field}>
                                        <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400 absolute -top-5 left-2">{field}</label>
                                        <input
                                            name={field.toLowerCase()}
                                            value={formData[field.toLowerCase()]}
                                            onChange={handleInputChange}
                                            type={field === 'Email' ? 'email' : 'text'}
                                            required
                                            disabled={formState === 'loading'}
                                            placeholder={field === 'Name' ? "您的称呼" : "您的邮箱"}
                                            className={`w-full border-none rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:ring-4 focus:ring-indigo-500/20 transition-all outline-none text-sm md:text-base ${isDark ? 'bg-slate-900 text-white placeholder:text-slate-600' : 'bg-slate-50 text-slate-900 placeholder:text-slate-400'} disabled:opacity-50`}
                                        />
                                    </div>
                                ))}
                                <div className="relative">
                                    <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400 absolute -top-5 left-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        disabled={formState === 'loading'}
                                        placeholder="想对我说的话..."
                                        rows="3"
                                        className={`w-full border-none rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:ring-4 focus:ring-indigo-500/20 transition-all resize-none outline-none text-sm md:text-base ${isDark ? 'bg-slate-900 text-white placeholder:text-slate-600' : 'bg-slate-50 text-slate-900 placeholder:text-slate-400'} disabled:opacity-50`}
                                    ></textarea>
                                </div>
                                <button disabled={formState === 'loading'} type="submit" className={`w-full font-black py-5 md:py-7 rounded-2xl md:rounded-3xl transition-all shadow-xl flex items-center justify-center space-x-3 active:scale-95 disabled:opacity-70 ${isDark ? 'bg-white text-slate-950 hover:bg-indigo-400 hover:text-white' : 'bg-slate-900 hover:bg-indigo-600 text-white'}`}>
                                    {formState === 'loading' ? <><span className="text-xs md:text-sm uppercase tracking-widest">正在推送</span><Loader2 className="w-5 h-5 animate-spin" /></> : <><span className="text-xs md:text-sm uppercase tracking-widest">即时发送</span><Send className="w-4 h-4" /></>}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-16 md:py-24 px-6 md:px-8 border-t transition-colors duration-300 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200/60'}`}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-slate-400">
                    <div>© 2026 Designed by Junpgle.</div>
                    <div className="flex space-x-10 md:space-x-16">
                        <a href="https://github.com/Junpgle" target="_blank" className={`transition-all hover:text-indigo-500 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>GitHub</a>
                        <a href="#projects" className={`transition-all hover:text-indigo-500 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>Archive</a>
                    </div>
                </div>
            </footer>

            {/* Modal Component */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
                isDark={isDark}
            />
        </div>
    );
};

export default App;