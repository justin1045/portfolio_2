export default function GlassCard({ children, className = "", hoverEffect = true }) {
  const baseClasses = "bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-subtle)] rounded-2xl relative overflow-hidden";
  const hoverClasses = hoverEffect 
    ? "transition-all duration-300 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-default)] group" 
    : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {/* Subtle Top Edge Highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
      
      {/* Soft internal gradient glow on hover */}
      {hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
      )}
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
