import React from 'react';

const DefaultDeco = ({ isDark, theme }) => {
    const isActuallyDark = theme?.id === 'cyberDark' || (theme?.id !== 'cyberLight' && isDark);

    return (
        // 改为 fixed
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

            {/* 网格纹理 */}
            <div className={`absolute inset-0 [background-size:40px_40px] opacity-[0.15] ${
                isActuallyDark
                    ? 'bg-[radial-gradient(#64748b_1px,transparent_1px)]'
                    : 'bg-[radial-gradient(#94a3b8_1px,transparent_1px)]'
            }`}></div>

            {/* 光斑 */}
            <div className={`absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-20 ${
                isActuallyDark ? 'bg-indigo-600' : 'bg-indigo-400'
            }`}></div>

            <div className={`absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] rounded-full blur-[140px] opacity-20 ${
                isActuallyDark ? 'bg-blue-600' : 'bg-blue-300'
            }`}></div>

            {/* 几何动画 */}
            <div className={`absolute top-1/4 left-4 md:left-10 w-16 h-16 md:w-20 md:h-20 border rounded-full opacity-10 animate-[spin_10s_linear_infinite] ${
                isActuallyDark ? 'border-indigo-400' : 'border-indigo-600'
            }`}></div>
            <div className={`absolute bottom-1/3 right-4 md:right-20 w-8 h-8 md:w-10 md:h-10 border rotate-45 opacity-10 animate-bounce ${
                isActuallyDark ? 'border-sky-400' : 'border-sky-600'
            }`}></div>
        </div>
    );
};

export default DefaultDeco;