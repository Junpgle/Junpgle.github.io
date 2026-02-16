import React from 'react';
import { Terminal, Bot, Database, Zap } from 'lucide-react';

const TechStack = ({ isDark, theme }) => {
    return (
        // 确保移除所有写死的 bg-slate-xxx
        <section className={`py-24 md:py-40 px-6 md:px-8 border-b transition-colors duration-500 ${theme.colors.bg} ${theme.colors.border}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-28">
                    <div className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 ${theme.colors.primary}`}>
                        Technical Proficiency
                    </div>
                    <h2 className={`text-4xl md:text-6xl font-black tracking-tighter transition-colors font-diary ${theme.colors.text}`}>
                        技术栈清单.
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {[
                        { icon: Terminal, title: "核心语言 / Langs", items: ["Python (AI Focus)", "C++ / Qt Framework", "TypeScript / JS"] },
                        { icon: Bot, title: "AI 模型 / Intelligence", items: ["Gemini / ChatGPT", "GitHub Copilot", "DeepSeek / 豆包"] },
                        { icon: Database, title: "云端架构 / Architecture", items: ["Cloudflare Workers", "D1 SQL Database", "RESTful API Design"] },
                        { icon: Zap, title: "效率工具 / Dev Tools", items: ["React / Vite / Tailwind", "Git / CI/CD Workflow", "PySide6 / Inno Setup"] }
                    ].map((stack, idx) => (
                        // 卡片背景使用 theme.colors.iconBg 或 accentBg
                        <div key={idx} className={`p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border group transition-colors duration-300 ${theme.colors.iconBg} ${theme.colors.border} hover:${theme.colors.accentBorder}`}>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-8 transition-all group-hover:${theme.colors.primaryBg} group-hover:text-white ${isDark ? 'bg-black/20' : 'bg-white/60'} ${theme.colors.primary}`}>
                                <stack.icon className="w-5 h-5" />
                            </div>
                            <h4 className={`text-[10px] font-black uppercase tracking-widest mb-6 ${theme.colors.secondary}`}>
                                {stack.title}
                            </h4>
                            <ul className={`space-y-3 md:space-y-4 font-bold text-sm transition-colors ${theme.colors.text}`}>
                                {stack.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;