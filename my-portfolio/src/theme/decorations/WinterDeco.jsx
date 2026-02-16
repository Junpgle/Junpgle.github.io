import React, { useMemo } from 'react';

const WinterDeco = ({ isDark }) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const snowCount = isMobile ? 15 : 30;

    const snowflakes = useMemo(() => Array.from({ length: snowCount }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        size: (2 + Math.random() * 4) + 'px',
        animationDuration: 5 + Math.random() * 10 + 's',
        animationDelay: Math.random() * 5 + 's',
        opacity: 0.3 + Math.random() * 0.7
    })), [isMobile]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <style>{`
                @keyframes snow {
                    0% { transform: translateY(-10px) translateX(0); }
                    25% { transform: translateY(25vh) translateX(15px); }
                    50% { transform: translateY(50vh) translateX(-15px); }
                    75% { transform: translateY(75vh) translateX(15px); }
                    100% { transform: translateY(110vh) translateX(0); }
                }
            `}</style>

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

            <div className={`absolute bottom-0 w-full h-64 blur-[80px] opacity-40 ${isDark ? 'bg-sky-900' : 'bg-sky-200'}`}></div>
        </div>
    );
};
export default WinterDeco;