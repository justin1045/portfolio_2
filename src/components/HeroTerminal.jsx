import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroTerminal() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    tl.fromTo(
      containerRef.current,
      { y: 30, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );

    tl.fromTo(
      ".workspace-item",
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    );

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="flex w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:ml-auto flex-col rounded-2xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-subtle)] shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative"
      style={{ opacity: 0 }}
    >
      {/* Subtle Glow Behind Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/5 pointer-events-none" />

      {/* Mac Window Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-600/50 hover:bg-red-500/80 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-slate-600/50 hover:bg-amber-500/80 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-slate-600/50 hover:bg-green-500/80 transition-colors" />
        </div>
        <div className="text-[11px] font-mono text-slate-500 flex items-center gap-2">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          workspace.dev
        </div>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Main Content Area */}
      <div className="p-6 relative z-10 flex flex-col gap-6">
        
        {/* Status Pills */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 workspace-item">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[11px] font-medium tracking-wide uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
            Responsive
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-medium tracking-wide uppercase">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Tested
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[11px] font-medium tracking-wide uppercase">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Deployed
          </span>
        </div>

        {/* Code Snippet */}
        <div className="bg-[#05070D] rounded-xl p-4 border border-[var(--border-subtle)] font-mono text-[13px] leading-relaxed workspace-item">
          <div className="flex gap-4">
            <div className="flex flex-col text-slate-600 select-none text-right">
              <span>1</span><span>2</span><span>3</span><span>4</span>
            </div>
            <div className="text-slate-300">
              <span className="text-purple-400">export default function</span> <span className="text-blue-400">App</span>() {'{'}
              <br/>
              &nbsp;&nbsp;<span className="text-purple-400">return</span> (
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">Layout</span> <span className="text-emerald-400">responsive</span>=<span className="text-slate-500">{'{'}</span><span className="text-amber-400">true</span><span className="text-slate-500">{'}'}</span>&gt;
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">PremiumExperience</span> /&gt;
            </div>
          </div>
        </div>

        {/* Stack Cards */}
        <div className="grid grid-cols-3 gap-3 workspace-item">
          <div className="flex flex-col items-center justify-center py-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl hover:bg-[var(--bg-card-hover)] transition-colors">
            <div className="w-8 h-8 flex items-center justify-center text-cyan-400 mb-2">
              <svg className="w-6 h-6 animate-[spin_10s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
            </div>
            <span className="text-[11px] font-medium text-slate-400">React</span>
          </div>
          
          <div className="flex flex-col items-center justify-center py-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl hover:bg-[var(--bg-card-hover)] transition-colors">
            <div className="w-8 h-8 flex items-center justify-center text-sky-400 mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 18.25C8.548 18.25 5.75 15.452 5.75 12C5.75 8.548 8.548 5.75 12 5.75C15.452 5.75 18.25 8.548 18.25 12C18.25 15.452 15.452 18.25 12 18.25Z" fill="currentColor"/><path d="M12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5ZM12 13.75C11.0335 13.75 10.25 12.9665 10.25 12C10.25 11.0335 11.0335 10.25 12 10.25C12.9665 10.25 13.75 11.0335 13.75 12C13.75 12.9665 12.9665 13.75 12 13.75Z" fill="currentColor"/></svg>
            </div>
            <span className="text-[11px] font-medium text-slate-400">Tailwind</span>
          </div>

          <div className="flex flex-col items-center justify-center py-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl hover:bg-[var(--bg-card-hover)] transition-colors">
            <div className="w-8 h-8 flex items-center justify-center text-emerald-400 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <span className="text-[11px] font-medium text-slate-400">APIs</span>
          </div>
        </div>

      </div>
    </div>
  );
}
