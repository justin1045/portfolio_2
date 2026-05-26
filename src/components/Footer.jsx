import { socialLinks } from "../data/socialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.05] bg-[#05070d] py-12 md:py-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
              Chirag<span className="text-blue-500">Tank</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              Building clean, responsive, deployment-ready web experiences.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="text-slate-500 hover:text-white transition-colors"
                  aria-label={link.name}
                  data-cursor="pointer"
                >
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 mb-8">
              {["Home", "Services", "Projects", "Process", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  data-cursor="pointer"
                >
                  {item}
                </a>
              ))}
            </nav>
            <p className="text-xs text-slate-600">
              © {currentYear} Chirag Tank. Built with React, Tailwind CSS, GSAP, and Vercel.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
