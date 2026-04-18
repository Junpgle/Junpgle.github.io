import{j as a}from"./index-D5L2Aau_.js";import{r as i}from"./icons-BOAska8y.js";import"./vendor-Dh3zDKDA.js";const p=({isDark:s})=>{const n=typeof window<"u"&&window.innerWidth<768,o=n?15:30,e=i.useMemo(()=>Array.from({length:o}).map((t,r)=>({id:r,left:Math.random()*100+"%",size:2+Math.random()*4+"px",animationDuration:5+Math.random()*10+"s",animationDelay:Math.random()*5+"s",opacity:.3+Math.random()*.7})),[n]);return a.jsxs("div",{className:"fixed inset-0 z-0 overflow-hidden pointer-events-none",children:[a.jsx("style",{children:`
                @keyframes snow {
                    0% { transform: translateY(-10px) translateX(0); }
                    25% { transform: translateY(25vh) translateX(15px); }
                    50% { transform: translateY(50vh) translateX(-15px); }
                    75% { transform: translateY(75vh) translateX(15px); }
                    100% { transform: translateY(110vh) translateX(0); }
                }
            `}),e.map(t=>a.jsx("div",{className:"absolute top-0 bg-white rounded-full",style:{left:t.left,width:t.size,height:t.size,opacity:t.opacity,animation:`snow ${t.animationDuration} linear infinite`,animationDelay:t.animationDelay}},t.id)),a.jsx("div",{className:`absolute bottom-0 w-full h-64 blur-[80px] opacity-40 ${s?"bg-sky-900":"bg-sky-200"}`})]})};export{p as default};
