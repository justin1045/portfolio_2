import RevealOnScroll from "./RevealOnScroll";

export default function SectionHeader({ 
  number, 
  eyebrow, 
  title, 
  description, 
  align = "left", 
  maxWidth = "max-w-2xl" 
}) {
  return (
    <div className={`mb-16 sm:mb-24 ${align === "center" ? "text-center mx-auto" : ""} ${maxWidth}`}>
      <RevealOnScroll animation="fade-up" delay={0.1}>
        <div className={`flex items-center gap-4 mb-4 ${align === "center" ? "justify-center" : ""}`}>
          {number && (
            <span className="text-sm font-mono text-blue-400/80 bg-blue-500/10 px-2 py-1 rounded">
              {number}
            </span>
          )}
          {eyebrow && (
            <span className="text-sm font-medium tracking-widest uppercase text-slate-400">
              {eyebrow}
            </span>
          )}
        </div>
      </RevealOnScroll>
      
      <RevealOnScroll animation="fade-up" delay={0.2}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h2>
      </RevealOnScroll>
      
      {description && (
        <RevealOnScroll animation="fade-up" delay={0.3}>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {description}
          </p>
        </RevealOnScroll>
      )}
    </div>
  );
}
