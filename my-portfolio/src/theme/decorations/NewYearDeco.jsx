import React from 'react';

// 1. 在组件外部静态生成随机烟花数据 (避免重复计算)
const fireworksCount = 15; // 烟花数量
const fireworksData = Array.from({ length: fireworksCount }).map((_, i) => {
    const colors = ['#fbbf24', '#f59e0b', '#ef4444', '#dc2626']; // 金、橙、红、深红
    return {
        id: i,
        left: Math.random() * 90 + 5 + '%', // 避免太靠边
        top: Math.random() * 50 + 10 + '%',  // 主要分布在中上部天空
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5 + 's',      // 随机延迟，错开绽放时间
        duration: Math.random() * 2 + 3 + 's', // 随机动画时长 (3-5秒)
        scale: Math.random() * 0.5 + 0.8,    // 随机大小
    };
});

const NewYearDeco = ({ isDark }) => {
    // 注意：由于春节主题现在强制锁定为夜间深色模式，这里其实不需要用到 isDark 判断了，
    // 但为了代码结构的统一性，我们保留它，直接写死深色样式即可。

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <style>{`
                /* 灯笼摇晃动画 */
                @keyframes swing { 0% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } 100% { transform: rotate(-5deg); } }
                
                /* ★ 新增：烟花绽放动画 ★ */
                @keyframes bloom {
                    0% {
                        transform: scale(0);
                        opacity: 0;
                    }
                    15% {
                        opacity: 1; /* 瞬间点亮 */
                    }
                    100% {
                        transform: scale(var(--fw-scale)); /* 放大 */
                        opacity: 0; /* 消散 */
                    }
                }
                
                .firework-bloom {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    /* 利用很大的模糊半径和阴影来模拟爆炸的光晕感 */
                    box-shadow: 0 0 60px 30px var(--fw-color), 0 0 100px 60px var(--fw-color);
                    background-color: var(--fw-color);
                    animation: bloom var(--fw-duration) ease-out infinite;
                    animation-delay: var(--fw-delay);
                    opacity: 0; /* 初始不可见 */
                }
            `}</style>

            {/* === 背景层 === */}

            {/* 1. 深色纹理底色 */}
            <div className="absolute inset-0 bg-[radial-gradient(#7f1d1d_1px,transparent_1px)] [background-size:30px_30px] opacity-20"></div>

            {/* 2. ★ 新增：烟花渲染层 (在纹理之上，灯笼之下) ★ */}
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
                        '--fw-scale': 4 * fw.scale, // 爆炸放大的倍数
                    }}
                ></div>
            ))}

            {/* === 前景装饰层 === */}

            {/* 3. 左上角大灯笼 */}
            <div className="absolute top-0 left-6 md:left-20 w-24 md:w-32 z-50 origin-top" style={{ animation: 'swing 8s ease-in-out infinite' }}>
                <div className="w-1 mx-auto h-24 bg-amber-600"></div>
                <div className="w-full aspect-[4/5] rounded-[2.5rem] shadow-2xl relative flex items-center justify-center border-4 bg-red-900/95 border-amber-600 text-amber-400 shadow-amber-900/50">
                    <div className="font-diary font-bold text-4xl md:text-5xl drop-shadow-md">春</div>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5">
                        <div className="w-1 h-12 bg-red-600"></div>
                        <div className="w-1 h-10 bg-red-600"></div>
                        <div className="w-1 h-12 bg-red-600"></div>
                    </div>
                </div>
            </div>

            {/* 4. 右上角小灯笼 */}
            <div className="absolute -top-8 right-8 md:right-32 w-16 md:w-20 z-40 origin-top" style={{ animation: 'swing 6s ease-in-out infinite', animationDelay: '1s' }}>
                <div className="w-0.5 mx-auto h-24 bg-amber-600"></div>
                <div className="w-full aspect-[4/5] rounded-[1.5rem] shadow-xl relative flex items-center justify-center border-2 bg-red-900/95 border-amber-600 text-amber-400">
                    <div className="font-diary font-bold text-2xl drop-shadow-md">福</div>
                </div>
            </div>

            {/* 5. 底部氛围光晕 */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] bg-amber-900/30"></div>

            {/* 6. 飘落装饰 (保留几个作为近景层次) */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rotate-45 bg-amber-500 opacity-60 animate-pulse"></div>
            <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-red-500 opacity-60 animate-pulse delay-1000"></div>
        </div>
    );
};

export default NewYearDeco;