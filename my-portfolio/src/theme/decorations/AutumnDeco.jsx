import React from 'react';

const AutumnDeco = ({ isDark }) => {
    // 生成随机落叶
    const leaves = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${10 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 5}s`,
        color: ['#f97316', '#eab308', '#78350f'][Math.floor(Math.random() * 3)] // 橙、黄、褐
    }));

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <style>{`
                @keyframes fall {
                    0% { transform: translateY(-10vh) rotate(0deg) translateX(0); opacity: 1; }
                    100% { transform: translateY(110vh) rotate(720deg) translateX(20px); opacity: 0; }
                }
            `}</style>

            {leaves.map(leaf => (
                <div
                    key={leaf.id}
                    className="absolute top-0 w-4 h-4 rounded-tl-[100%] rounded-br-[100%] opacity-80"
                    style={{
                        left: leaf.left,
                        backgroundColor: leaf.color,
                        animation: `fall ${leaf.animationDuration} linear infinite`,
                        animationDelay: leaf.animationDelay,
                    }}
                ></div>
            ))}

            {/* 暖色背景光晕 */}
            <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-orange-900' : 'bg-orange-200'}`}></div>
        </div>
    );
};
export default AutumnDeco;