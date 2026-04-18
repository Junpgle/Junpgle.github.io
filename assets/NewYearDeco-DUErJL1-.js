import{j as e}from"./index-BrlhA1LU.js";import{r as l}from"./icons-BOAska8y.js";import"./vendor-Dh3zDKDA.js";const f=({isDark:r})=>{const o=typeof window<"u"&&window.innerWidth<768,s=o?6:15,d=l.useMemo(()=>Array.from({length:s}).map((a,i)=>{const t=["#fbbf24","#f59e0b","#ef4444","#dc2626"];return{id:i,left:Math.random()*100+"%",top:Math.random()*80+5+"%",color:t[Math.floor(Math.random()*t.length)],delay:Math.random()*5+"s",duration:Math.random()*2+3+"s",scale:o?Math.random()*.3+.5:Math.random()*.5+.8}}),[o]);return e.jsxs("div",{className:"fixed inset-0 z-0 overflow-hidden pointer-events-none",children:[e.jsx("style",{children:`
                @keyframes swing { 0% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } 100% { transform: rotate(-5deg); } }
                @keyframes bloom {
                    0% { transform: scale(0); opacity: 0; }
                    15% { opacity: 1; }
                    100% { transform: scale(var(--fw-scale)); opacity: 0; }
                }
                .firework-bloom {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    box-shadow: 0 0 60px 30px var(--fw-color), 0 0 100px 60px var(--fw-color);
                    background-color: var(--fw-color);
                    animation: bloom var(--fw-duration) ease-out infinite;
                    animation-delay: var(--fw-delay);
                    opacity: 0;
                }
            `}),r?e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#7f1d1d_1px,transparent_1px)] [background-size:30px_30px] opacity-20"}):e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#ef4444_0.8px,transparent_0.8px)] [background-size:20px_20px] opacity-10"}),d.map(a=>e.jsx("div",{className:"firework-bloom",style:{left:a.left,top:a.top,"--fw-color":a.color,"--fw-delay":a.delay,"--fw-duration":a.duration,"--fw-scale":4*a.scale}},a.id)),e.jsxs("div",{className:"absolute top-0 left-4 md:left-20 w-20 md:w-32 z-50 origin-top",style:{animation:"swing 8s ease-in-out infinite"},children:[e.jsx("div",{className:"w-1 mx-auto h-16 md:h-24 bg-amber-600"}),e.jsx("div",{className:`w-full aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative flex items-center justify-center border-4 ${r?"bg-red-900/95 border-amber-600 text-amber-400 shadow-amber-900/50":"bg-[#dc2626] border-[#fbbf24] text-[#fffbeb] shadow-red-200"}`,children:e.jsx("div",{className:"font-diary font-bold text-3xl md:text-5xl drop-shadow-md",children:"春"})})]}),e.jsxs("div",{className:"absolute -top-6 md:-top-8 right-4 md:right-32 w-14 md:w-20 z-40 origin-top",style:{animation:"swing 6s ease-in-out infinite",animationDelay:"1s"},children:[e.jsx("div",{className:"w-0.5 mx-auto h-16 md:h-24 bg-amber-600"}),e.jsx("div",{className:`w-full aspect-[4/5] rounded-[1.2rem] md:rounded-[1.5rem] shadow-xl relative flex items-center justify-center border-2 ${r?"bg-red-900/95 border-amber-600 text-amber-400":"bg-[#dc2626] border-[#fbbf24] text-[#fffbeb]"}`,children:e.jsx("div",{className:"font-diary font-bold text-xl md:text-2xl drop-shadow-md",children:"福"})})]}),r?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute top-0 right-0 w-[80vw] h-[80vw] rounded-full blur-[120px] bg-red-900/40"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-[80vw] h-[80vw] rounded-full blur-[100px] bg-amber-900/30"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute -top-20 -right-20 w-[80vw] h-[80vw] rounded-full blur-[100px] bg-orange-100/50"}),e.jsx("div",{className:"absolute top-40 left-0 w-[60vw] h-[60vw] rounded-full blur-[80px] bg-red-50/60"})]})]})};export{f as default};
