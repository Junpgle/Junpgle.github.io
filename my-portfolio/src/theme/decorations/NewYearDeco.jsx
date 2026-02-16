import React, { useMemo } from 'react';

const NewYearDeco = ({ isDark }) => {
    // ★ 手机适配：检测屏幕宽度，减少烟花数量
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const fireworksCount = isMobile ? 6 : 15; // 手机端只显示6个，PC端15个

    // 使用 useMemo 防止重渲染时烟花位置跳动
    const fireworksData = useMemo(() => {
        return Array.from({ length: fireworksCount }).map((_, i) => {
            const colors = ['#fbbf24', '#f59e0b', '#ef4444', '#dc2626'];
            return {
                id: i,
                left: Math.random() * 100 + '%',      // 全屏宽度
                top: Math.random() * 80 + 5 + '%',    // ★ 修改：分布在 5%~85% 的高度，覆盖全屏
                color: colors[Math.floor(Math.random() * colors.length)],
                delay: Math.random() * 5 + 's',
                duration: Math.random() * 2 + 3 + 's',
                scale: isMobile ? (Math.random() * 0.3 + 0.5) : (Math.random() * 0.5 + 0.8), // 手机端烟花稍微小一点
            };
        });
    }, [isMobile]);

    return (
        // ★ 这里的 fixed inset-0 配合 App.jsx 的 fixed，双重保险
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <style>{`
                @keyframes swing { 0% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } 100% { transform: rotate(-5deg); } }
                @keyframes bloom {
                    0% { transform: scale(0); opacity: 0; }
                    15% { opacity: 1; }
                    100% { transform: scale(var(--fw-scale)); opacity: 0; }
                }
                .firework-bloom {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    box-shadow: 0 0 60px 30px var(--fw-color), 0 0 100px 60px var(--fw-color);
                    background-color: var(--fw-color);
                    animation: bloom var(--fw-duration) ease-out infinite;
                    animation-delay: var(--fw-delay);
                    opacity: 0;
                }
            `}</style>

            {/* 背景纹理 */}
            {isDark ? (
                <div className="absolute inset-0 bg-[radial-gradient(#7f1d1d_1px,transparent_1px)] [background-size:30px_30px] opacity-20"></div>
            ) : (
                <div className="absolute inset-0 bg-[radial-gradient(#ef4444_0.8px,transparent_0.8px)] [background-size:20px_20px] opacity-10"></div>
            )}

            {/* 烟花层 */}
            {fireworksData.map(fw => (
                <div
                    key={fw.id}
                    className="firework-bloom"
                    style={{
                        left: fw.left,
                        top: fw.top,
                        '--fw-color': fw.color,
                        '--fw-delay': fw.delay,
                        '--fw-duration': fw.duration,
                        '--fw-scale': 4 * fw.scale,
                    }}
                ></div>
            ))}

            {/* 灯笼：手机端稍微缩小一点，或者调整位置 */}
            <div className="absolute top-0 left-4 md:left-20 w-20 md:w-32 z-50 origin-top" style={{ animation: 'swing 8s ease-in-out infinite' }}>
                <div className="w-1 mx-auto h-16 md:h-24 bg-amber-600"></div>
                <div className={`w-full aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative flex items-center justify-center border-4 ${
                    isDark ? 'bg-red-900/95 border-amber-600 text-amber-400 shadow-amber-900/50' : 'bg-[#dc2626] border-[#fbbf24] text-[#fffbeb] shadow-red-200'
                }`}>
                    <div className="font-diary font-bold text-3xl md:text-5xl drop-shadow-md">春</div>
                    {/* 穗子代码省略，保持原样即可 */}
                </div>
            </div>

            {/* 右上角小灯笼 */}
            <div className="absolute -top-6 md:-top-8 right-4 md:right-32 w-14 md:w-20 z-40 origin-top" style={{ animation: 'swing 6s ease-in-out infinite', animationDelay: '1s' }}>
                <div className="w-0.5 mx-auto h-16 md:h-24 bg-amber-600"></div>
                <div className={`w-full aspect-[4/5] rounded-[1.2rem] md:rounded-[1.5rem] shadow-xl relative flex items-center justify-center border-2 ${
                    isDark ? 'bg-red-900/95 border-amber-600 text-amber-400' : 'bg-[#dc2626] border-[#fbbf24] text-[#fffbeb]'
                }`}>
                    <div className="font-diary font-bold text-xl md:text-2xl drop-shadow-md">福</div>
                </div>
            </div>

            {/* 光晕：使用 fixed 确保全屏覆盖 */}
            {isDark ? (
                <>
                    <div className="absolute top-0 right-0 w-[80vw] h-[80vw] rounded-full blur-[120px] bg-red-900/40"></div>
                    <div className="absolute bottom-0 left-0 w-[80vw] h-[80vw] rounded-full blur-[100px] bg-amber-900/30"></div>
                </>
            ) : (
                <>
                    <div className="absolute -top-20 -right-20 w-[80vw] h-[80vw] rounded-full blur-[100px] bg-orange-100/50"></div>
                    <div className="absolute top-40 left-0 w-[60vw] h-[60vw] rounded-full blur-[80px] bg-red-50/60"></div>
                </>
            )}
        </div>
    );
};

export default NewYearDeco;