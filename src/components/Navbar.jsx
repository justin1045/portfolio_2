import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Navbar({ menuOpen, setMenuOpen }) {
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useGSAP(
    () => {
      let lastScroll = 0;
      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          const currentScroll = self.scroll();
          if (currentScroll > 100) {
            if (currentScroll > lastScroll) {
              // Scrolling down
              gsap.to(navRef.current, {
                y: -100,
                duration: 0.3,
                ease: "power2.inOut",
                overwrite: true,
              });
            } else {
              // Scrolling up
              gsap.to(navRef.current, {
                y: 0,
                duration: 0.3,
                ease: "power2.inOut",
                overwrite: true,
              });
            }
          } else {
            gsap.to(navRef.current, {
              y: 0,
              duration: 0.3,
              overwrite: true,
            });
          }
          lastScroll = currentScroll;
        },
      });

      const sections = ["home", "services", "projects", "approach", "testimonials", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
        });
      });
    },
    { scope: navRef }
  );

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "projects", label: "Case Studies" },
    { id: "approach", label: "Process" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-40 bg-[rgba(5,5,5,0.7)] backdrop-blur-xl border-b border-white/5 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#home"
            className="font-bold text-2xl text-white tracking-tight flex items-center gap-2"
            data-cursor="pointer"
          >
            CT<span className="text-blue-500">.</span>
            <span className="text-sm font-normal text-gray-400 hidden sm:inline-block ml-2 border-l border-white/10 pl-4">Digital Studio</span>
          </a>

          {/* Hamburger */}
          <button
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-white active"
                    : "text-gray-400 hover:text-white"
                }`}
                data-cursor="pointer"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary px-5 py-2 text-sm ml-4 hidden lg:inline-flex" data-cursor="pointer">
              <span>Start Project</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;