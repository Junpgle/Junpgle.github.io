import React from 'react';
const SpringDeco = ({ isDark }) => (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* 简单的静态樱花装饰，实际项目中可用 Canvas 实现动态飘落 */}
        <div className={`absolute top-0 right-0 w-full h-full opacity-30 ${isDark ? 'bg-[radial-gradient(#fbcfe8_1px,transparent_1px)]' : 'bg-[radial-gradient(#f472b6_1px,transparent_1px)]'} [background-size:20px_20px]`}></div>
        <div className={`absolute top-20 right-20 w-32 h-32 rounded-full blur-3xl opacity-40 ${isDark ? 'bg-pink-900' : 'bg-pink-300'}`}></div>
    </div>
);
export default SpringDeco;