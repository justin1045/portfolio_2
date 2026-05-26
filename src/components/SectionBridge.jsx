import RevealOnScroll from "./RevealOnScroll";

export default function SectionBridge({ number, eyebrow, message }) {
  return (
    <div className="w-full relative py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center border-t border-b border-white/10 bg-[rgba(255,255,255,0.02)] backdrop-blur-md">
      {/* Soft glow behind the line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(6,182,212,0.03)] to-transparent pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-3xl mx-auto px-5 text-center relative z-10 flex flex-col items-center">
        <RevealOnScroll animation="fade-up" delay={0.1}>
          <div className="flex flex-col items-center gap-4 mb-6">
            <span className="text-xs font-mono text-slate-400 tracking-widest bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.05]">
              {number}
            </span>
            
            <div className="relative flex justify-center">
              {/* Thin gradient light line */}
              <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 opacity-80" />
              <div className="absolute top-0 w-[1px] h-12 bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 blur-sm opacity-50" />
            </div>

            <span className="text-sm font-semibold tracking-widest uppercase text-white drop-shadow-md">
              {eyebrow}
            </span>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll animation="fade-in" delay={0.2}>
          <h3 className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] font-medium leading-relaxed max-w-xl mx-auto">
            {message}
          </h3>
        </RevealOnScroll>
      </div>
    </div>
  );
}
