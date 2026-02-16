import React, { useMemo } from 'react';

const AutumnDeco = ({ isDark }) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const leafCount = isMobile ? 8 : 15;

    const leaves = useMemo(() => Array.from({ length: leafCount }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        animationDuration: 10 + Math.random() * 10 + 's',
        animationDelay: Math.random() * 5 + 's',
        color: ['#f97316', '#eab308', '#78350f'][Math.floor(Math.random() * 3)]
    })), [isMobile]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <style>{`
                @keyframes fall {
                    0% { transform: translateY(-10vh) rotate(0deg) translateX(0); opacity: 1; }
                    100% { transform: translateY(110vh) rotate(720deg) translateX(20px); opacity: 0; }
                }
            `}</style>

            {leaves.map(leaf => (
                <div
                    key={leaf.id}
                    // 简单的落叶形状：使用 border-radius 模拟叶子
                    className="absolute top-0 w-3 h-3 md:w-4 md:h-4 rounded-tl-[100%] rounded-br-[100%] opacity-80"
                    style={{
                        left: leaf.left,
                        backgroundColor: leaf.color,
                        animation: `fall ${leaf.animationDuration} linear infinite`,
                        animationDelay: leaf.animationDelay,
                    }}
                ></div>
            ))}

            <div className={`absolute bottom-0 left-0 w-full h-1/2 rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-orange-900' : 'bg-orange-200'}`}></div>
        </div>
    );
};
export default AutumnDeco;