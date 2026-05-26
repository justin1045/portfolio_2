import { forwardRef } from 'react';

const SectionShell = forwardRef(({ 
  id, 
  children, 
  className = "", 
  variant = "default", // default | compact
  glowPosition = "none" // none | top-left | center | bottom-right
}, ref) => {
  
  const paddingClass = variant === "hero" 
    ? "py-0"
    : variant === "compact" 
      ? "py-12 sm:py-16 lg:py-20" 
      : "py-16 sm:py-24 lg:py-32";

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`relative w-full z-10 ${paddingClass} ${className}`}
    >
      {/* Optional Local Spotlight Glow per section */}
      {glowPosition === "top-left" && (
        <div className="absolute top-0 left-0 w-full max-w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-50" aria-hidden="true" />
      )}
      {glowPosition === "center" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-40" aria-hidden="true" />
      )}
      {glowPosition === "bottom-right" && (
        <div className="absolute bottom-0 right-0 w-full max-w-[600px] h-[600px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-50" aria-hidden="true" />
      )}

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
});

SectionShell.displayName = "SectionShell";
export default SectionShell;
