import React from 'react';

const WinterDeco = ({ isDark }) => {
    // 生成随机雪花
    const snowflakes = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${2 + Math.random() * 4}px`,
        animationDuration: `${5 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: 0.3 + Math.random() * 0.7
    }));

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <style>{`
                @keyframes snow {
                    0% { transform: translateY(-10px) translateX(0); }
                    25% { transform: translateY(25vh) translateX(15px); }
                    50% { transform: translateY(50vh) translateX(-15px); }
                    75% { transform: translateY(75vh) translateX(15px); }
                    100% { transform: translateY(110vh) translateX(0); }
                }
            `}</style>

            {/* 雪花 */}
            {snowflakes.map(flake => (
                <div
                    key={flake.id}
                    className="absolute top-0 bg-white rounded-full"
                    style={{
                        left: flake.left,
                        width: flake.size,
                        height: flake.size,
                        opacity: flake.opacity,
                        animation: `snow ${flake.animationDuration} linear infinite`,
                        animationDelay: flake.animationDelay,
                    }}
                ></div>
            ))}

            {/* 底部积雪/寒冷光晕 */}
            <div className={`absolute bottom-0 w-full h-32 blur-[60px] opacity-40 ${isDark ? 'bg-sky-900' : 'bg-sky-200'}`}></div>
        </div>
    );
};
export default WinterDeco;