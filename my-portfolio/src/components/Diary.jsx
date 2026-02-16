import React, {useState, useMemo} from 'react';
import {BookHeart, ArrowRight, ExternalLink} from 'lucide-react';
import {diaryData} from '../data/diary'; // 确保路径正确

const Diary = ({isDark, theme}) => {
    // 随机打乱逻辑
    const shuffledDiary = useMemo(() => {
        const shuffled = [...diaryData];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }, []);

    const [isDiaryExpanded, setIsDiaryExpanded] = useState(false);

    return (
        <section id="diary"
                 className={`py-24 md:py-40 px-6 md:px-8 border-b transition-colors duration-500 ${theme.colors.bg} ${theme.colors.border}`}>
            <div className="max-w-[1600px] mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
                    <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors border-2 ${theme.colors.iconBg} ${theme.colors.accentBorder} ${theme.colors.primary}`}>
                        <BookHeart className="w-8 h-8"/>
                    </div>
                    <h2 className={`font-diary text-4xl md:text-6xl mb-4 transition-colors ${theme.colors.primary}`}>
                        随笔与碎碎念
                    </h2>
                    <p className={`text-[10px] uppercase tracking-[0.3em] font-bold ${theme.colors.secondary}`}>
                        The First Page of Diary
                    </p>

                    <a
                        href="https://docs.qq.com/form/page/DRkFVQUdJSGVqWVFs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-8 group flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all hover:-translate-y-1 hover:shadow-lg ${theme.colors.iconBg} ${theme.colors.border} ${theme.colors.secondary} hover:${theme.colors.primary} hover:${theme.colors.accentBorder}`}
                    >
                        <span>✨ 点我留言 / Leave a Message</span>
                        <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"/>
                    </a>
                </div>

                {/* Diary Grid */}
                <div className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${
                    isDiaryExpanded ? 'max-h-[3000000px]' : 'max-h-[600px] md:max-h-[800px]'
                }`}>

                    <div
                        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 sm:gap-8 w-full px-2 sm:px-0 space-y-12 pb-12">
                        {shuffledDiary.map((entry, index) => {
                            const rotClass = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-1'][index % 6];
                            const floatDur = 6 + (index % 4);

                            return (
                                <div
                                    key={entry.id}
                                    className={`break-inside-avoid relative mb-12 w-full z-0 hover:z-10`}
                                    style={{animation: `float ${floatDur}s ease-in-out infinite`}}
                                >
                                    <div
                                        className={`relative p-6 sm:p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transform transition-all duration-500 backdrop-blur-md border group ${rotClass} hover:rotate-0 hover:scale-[1.02] ${theme.colors.iconBg} ${theme.colors.border} hover:border-transparent`}>

                                        {/* 胶带装饰 (颜色动态变化) */}
                                        <div
                                            className={`absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 backdrop-blur-md border shadow-sm rotate-[-4deg] z-10 opacity-50 ${theme.colors.accentBg} ${theme.colors.accentBorder}`}></div>

                                        {/* 用户信息 */}
                                        <div
                                            className={`flex items-center gap-3 mb-6 pb-4 border-b border-dashed opacity-80 ${theme.colors.border}`}>
                                            <div
                                                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border-2 shadow-sm ${theme.colors.bg} ${theme.colors.border} ${theme.colors.primary}`}>
                                                {entry.avatar}
                                            </div>
                                            <div className="flex flex-col">
                                                <span
                                                    className={`text-sm font-bold ${theme.colors.text}`}>{entry.nickname}</span>
                                                <span
                                                    className={`text-[9px] uppercase tracking-widest ${theme.colors.secondary}`}>{entry.date}</span>
                                            </div>
                                        </div>

                                        {/* 消息内容 */}
                                        <div className="flex flex-col gap-4">
                                            {entry.messages.map((msg) => (
                                                msg.type === 'text' ? (
                                                    <div key={msg.id}
                                                         className={`p-4 md:p-5 rounded-2xl relative shadow-sm border ${theme.colors.bg} ${theme.colors.border}`}>
                                                        <div
                                                            className={`font-diary text-xl sm:text-2xl leading-relaxed whitespace-pre-wrap ${theme.colors.text}`}>
                                                            {msg.content}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div key={msg.id}
                                                         className={`relative rounded-xl overflow-hidden shadow-sm border p-1 ${theme.colors.bg} ${theme.colors.border}`}>
                                                        <img src={msg.content} alt="diary"
                                                             className="w-full h-auto object-cover rounded-lg transform transition-transform duration-700 hover:scale-105"/>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Gradient Mask (遮罩层，需要手动处理颜色，因为 tailwind gradient 很难完全动态化，这里用近似方案) */}
                    <div
                        className={`absolute bottom-0 left-0 w-full h-48 md:h-80 pointer-events-none transition-opacity duration-1000 z-10 bg-gradient-to-t to-transparent ${theme.colors.gradient} ${isDiaryExpanded ? 'opacity-0' : 'opacity-100'}`}>

                    </div>

                    </div>
                    {/* Control Button */}
                    <div className="flex justify-center mt-8 md:mt-12 relative z-20">
                        <button
                            onClick={() => setIsDiaryExpanded(!isDiaryExpanded)}
                            className={`group relative px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] border transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 ${theme.colors.iconBg} ${theme.colors.border} ${theme.colors.secondary} hover:${theme.colors.primary} hover:${theme.colors.accentBorder}`}
                        >
                            <span>{isDiaryExpanded ? 'Collapse Archive' : 'Read Full Diary'}</span>
                            <ArrowRight
                                className={`w-4 h-4 transition-transform duration-500 ${isDiaryExpanded ? '-rotate-90' : 'rotate-90'}`}/>
                        </button>
                    </div>
                </div>
        </section>
);
};

export default Diary;