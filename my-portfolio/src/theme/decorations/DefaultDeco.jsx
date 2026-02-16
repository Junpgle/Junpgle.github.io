import React from 'react';
const DefaultDeco = ({ isDark }) => (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className={`absolute inset-0 bg-[radial-gradient(${isDark ? '#1e293b' : '#e2e8f0'}_1px,transparent_1px)] [background-size:40px_40px] opacity-30`}></div>
        <div className={`absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-30 ${isDark ? 'bg-indigo-900/20' : 'bg-indigo-50'}`}></div>
    </div>
);
export default DefaultDeco;