export default function BackgroundSystem() {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none bg-[var(--bg-primary)] overflow-hidden" 
      aria-hidden="true"
    >
      {/* 1. Base Dark Layer is handled by the wrapper bg color */}
      
      {/* 2. Soft Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M39 39V1H1v38h38zM0 0h40v40H0V0z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          maskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)"
        }}
      />

      {/* 3. Subtle Radial Aurora Glow */}
      <div className="absolute top-[-20%] left-[20%] w-full h-[60vw] max-w-[1200px] max-h-[800px] rounded-full bg-blue-900/10 blur-[100px] mix-blend-screen opacity-50 sm:opacity-40" />
      <div className="absolute bottom-[-10%] right-[-10%] w-full h-[50vw] max-w-[1000px] max-h-[600px] rounded-full bg-violet-900/10 blur-[120px] mix-blend-screen opacity-30" />

      {/* 3.5. Subtle Light Streaks */}
      <div className="absolute top-[20%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform rotate-[-3deg] blur-[2px]" />
      <div className="absolute top-[60%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-violet-500/10 to-transparent transform rotate-[5deg] blur-[2px]" />
      <div className="absolute top-[85%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform rotate-[-1deg] blur-[2px]" />

      {/* 4. Subtle Noise Texture (Lightweight CSS SVG) */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
