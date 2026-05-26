import RevealOnScroll from "./RevealOnScroll";

export default function SectionBridge({ number, eyebrow, message }) {
  return (
    <div className="w-full relative py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center border-t border-b border-white/[0.02] bg-white/[0.01]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
        <RevealOnScroll animation="fade-up" delay={0.1}>
          <div className="flex flex-col items-center gap-3 mb-6">
            <span className="text-xs font-mono text-slate-500 tracking-widest">{number}</span>
            <div className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent" />
            <span className="text-sm font-medium tracking-widest uppercase text-blue-400">
              {eyebrow}
            </span>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll animation="fade-in" delay={0.2}>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light leading-relaxed">
            {message}
          </h3>
        </RevealOnScroll>
      </div>
    </div>
  );
}
