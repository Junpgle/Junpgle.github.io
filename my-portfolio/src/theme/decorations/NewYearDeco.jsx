import React from 'react';

const NewYearDeco = ({ isDark }) => {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <style>{`
                @keyframes swing { 0% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } 100% { transform: rotate(-5deg); } }
                @keyframes float-up { 0% { transform: translateY(100vh) scale(0.5); opacity: 0; } 50% { opacity: 0.6; } 100% { transform: translateY(-20vh) scale(1); opacity: 0; } }
            `}</style>

            {/* 1. 背景纹理：剪纸风格圆点 (日间红点，夜间暗金点) */}
            <div className={`absolute inset-0 bg-[radial-gradient(${isDark ? '#7f1d1d' : '#fecaca'}_2px,transparent_2px)] [background-size:40px_40px] opacity-40`}></div>

            {/* 2. 左上角大灯笼 */}
            <div className="absolute -top-10 left-8 md:left-20 w-24 md:w-32 z-50 origin-top" style={{ animation: 'swing 8s ease-in-out infinite' }}>
                <div className="w-1 mx-auto h-12 bg-amber-500"></div> {/* 挂绳 */}
                <div className={`w-full aspect-[4/5] rounded-[2.5rem] shadow-2xl relative flex items-center justify-center border-4 ${isDark ? 'bg-red-900/95 border-amber-600 text-amber-400 shadow-amber-900/50' : 'bg-red-600 border-amber-200 text-amber-50 shadow-red-200'}`}>
                    <div className="font-diary font-bold text-4xl md:text-5xl">春</div>
                    {/* 灯笼穗 */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5">
                        <div className="w-1 h-12 bg-red-500"></div>
                        <div className="w-1 h-10 bg-red-500"></div>
                        <div className="w-1 h-12 bg-red-500"></div>
                    </div>
                </div>
            </div>

            {/* 3. 右上角小灯笼 */}
            <div className="absolute -top-16 right-10 md:right-32 w-16 md:w-20 z-40 origin-top" style={{ animation: 'swing 6s ease-in-out infinite', animationDelay: '1s' }}>
                <div className="w-0.5 mx-auto h-20 bg-amber-500"></div>
                <div className={`w-full aspect-[4/5] rounded-[1.5rem] shadow-xl relative flex items-center justify-center border-2 ${isDark ? 'bg-red-900/95 border-amber-600 text-amber-400' : 'bg-red-600 border-amber-200 text-amber-50'}`}>
                    <div className="font-diary font-bold text-2xl">福</div>
                </div>
            </div>

            {/* 4. 氛围光晕 (日间增强可见度) */}
            {/* 右上大光晕：日间是淡红色，夜间是深红色 */}
            <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none ${isDark ? 'bg-red-900/40' : 'bg-red-200/60'}`}></div>
            {/* 左下大光晕：日间是淡金色，夜间是暗金色 */}
            <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none ${isDark ? 'bg-amber-900/30' : 'bg-amber-100/80'}`}></div>

            {/* 5. 飘落的金粉 (模拟) */}
            <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-amber-400 blur-[1px] animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-red-500 blur-[2px] animate-pulse delay-700"></div>
        </div>
    );
};

export default NewYearDeco;