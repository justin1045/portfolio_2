import { useRef, useEffect } from "react";
import gsap from "gsap";

const CODE_SNIPPET = `const developer = {
  name: "Chirag Tank",
  role: "Full-Stack Engineer",
  skills: ["React", "Node.js", "GSAP"],
  passion: "Building digital masterpieces",
  status: "Available for new projects"
};

// Initialize the magic
developer.buildWorldClassExperiences();`;

export default function HeroTerminal() {
  const containerRef = useRef(null);
  const codeRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.5 });

    // Initial window pop-in
    tl.fromTo(
      containerRef.current,
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    // Typing effect
    if (codeRef.current) {
      codeRef.current.innerHTML = ""; // Clear existing
      
      // We will type out the code character by character
      const chars = CODE_SNIPPET.split("");
      let currentHTML = "";
      
      // Simple syntax highlighting map
      const getHighlightedChar = (char, htmlSoFar) => {
        // This is a very simple approximation for visual effect
        let color = "text-slate-300"; // default
        
        // Count quotes to determine if inside string
        const quoteCount = (htmlSoFar.match(/"/g) || []).length;
        const inString = quoteCount % 2 !== 0 || char === '"';
        
        if (inString) {
          color = "text-green-400";
        } else if ("{}[](),;".includes(char)) {
          color = "text-slate-500";
        } else if (":.=".includes(char)) {
          color = "text-blue-400";
        }
        
        return `<span class="${color}">${char === '\n' ? '<br/>' : char === ' ' ? '&nbsp;' : char}</span>`;
      };

      chars.forEach((char) => {
        // Random typing speed between 10ms and 50ms
        const typeSpeed = Math.random() * 0.04 + 0.01;
        
        tl.add(() => {
          if (codeRef.current) {
            currentHTML += getHighlightedChar(char, currentHTML);
            codeRef.current.innerHTML = currentHTML;
          }
        }, `+=${typeSpeed}`);
      });
    }

    // Blinking cursor
    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "steps(1)",
      repeat: -1,
      duration: 0.8
    });

    return () => tl.kill();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="hidden lg:flex w-full max-w-md ml-auto flex-col rounded-xl overflow-hidden border border-white/[0.08] bg-[#0a0a0f]/80 backdrop-blur-xl shadow-2xl shadow-blue-500/[0.05]"
      style={{ opacity: 0 }}
    >
      {/* Mac Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
        <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500/50" />
        <div className="ml-2 text-xs font-mono text-slate-500">developer.js</div>
      </div>

      {/* Code Editor Body */}
      <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
        <div className="flex">
          {/* Line Numbers */}
          <div className="flex flex-col text-slate-600 select-none pr-4 border-r border-white/[0.05] text-right mr-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>

          {/* Code Content */}
          <div className="relative">
            <span ref={codeRef} className="whitespace-pre"></span>
            <span 
              ref={cursorRef} 
              className="inline-block w-2 h-4 bg-blue-400 ml-1 translate-y-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
