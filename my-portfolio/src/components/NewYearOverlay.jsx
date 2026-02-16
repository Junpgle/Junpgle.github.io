import React from 'react';

const NewYearOverlay = ({ isDark }) => {
    return (
        <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
            <style>{`
                @keyframes swing { 0% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } 100% { transform: rotate(-5deg); } }
                .animate-swing { animation: swing 6s ease-in-out infinite; transform-origin: top center; }
            `}</style>

            {/* 左上角大灯笼 */}
            <div className="absolute -top-10 left-10 md:left-20 w-24 md:w-32 animate-swing z-50">
                <div className="w-1 mx-auto h-16 bg-amber-500"></div>
                <div className={`w-full aspect-[4/5] rounded-[3rem] shadow-2xl relative flex items-center justify-center border-4 ${isDark ? 'bg-red-900/90 border-amber-500/50' : 'bg-red-600/90 border-amber-200'}`}>
                    <div className="text-amber-300 font-diary text-4xl md:text-5xl font-bold">春</div>
                    {/* 灯笼穗 */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-1">
                        <div className="w-1 h-16 bg-red-500"></div>
                        <div className="w-1 h-12 bg-red-500"></div>
                        <div className="w-1 h-16 bg-red-500"></div>
                    </div>
                </div>
            </div>

            {/* 右上角小灯笼 */}
            <div className="absolute -top-16 right-8 md:right-32 w-16 md:w-20 animate-swing z-50" style={{ animationDelay: '1s' }}>
                <div className="w-0.5 mx-auto h-24 bg-amber-500"></div>
                <div className={`w-full aspect-[4/5] rounded-[2rem] shadow-2xl relative flex items-center justify-center border-2 ${isDark ? 'bg-red-900/90 border-amber-500/50' : 'bg-red-600/90 border-amber-200'}`}>
                    <div className="text-amber-300 font-diary text-2xl md:text-3xl font-bold">福</div>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-0.5">
                        <div className="w-0.5 h-10 bg-red-500"></div>
                        <div className="w-0.5 h-8 bg-red-500"></div>
                    </div>
                </div>
            </div>

            {/* 背景纹理 (祥云/剪纸风格) */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none ${isDark ? 'bg-red-900' : 'bg-red-100'}`}></div>
            <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none ${isDark ? 'bg-amber-900' : 'bg-amber-100'}`}></div>
        </div>
    );
};

export default NewYearOverlay;