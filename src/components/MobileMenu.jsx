import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function MobileMenu({ menuOpen, setMenuOpen }) {
  const menuRef = useRef(null);

  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Case Studies" },
    { id: "approach", label: "Process" },
    { id: "contact", label: "Contact" },
  ];

  // Close on Escape key and window resize (Orientation Trap Fix)
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen, setMenuOpen]);

  // GSAP staggered entrance
  useGSAP(
    () => {
      if (!menuRef.current) return;
      const menuLinks = menuRef.current.querySelectorAll(".mobile-link");
      const socials = menuRef.current.querySelector(".mobile-socials");

      if (menuOpen) {
        // Force-reset opacity before animating (BUG-15 fix)
        gsap.set(menuLinks, { y: 40, opacity: 0 });
        if (socials) gsap.set(socials, { y: 20, opacity: 0 });

        gsap.to(
          menuLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.1,
          }
        );
        if (socials) {
          gsap.to(
            socials,
            { y: 0, opacity: 1, duration: 0.4, ease: "power3.out", delay: 0.5 }
          );
        }
      }
    },
    { scope: menuRef, dependencies: [menuOpen] }
  );

  return (
    <div
      ref={menuRef}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-400 ease-in-out ${
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{
        background: "rgba(5, 5, 5, 0.98)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      role="dialog"
      aria-modal={menuOpen}
      aria-label="Navigation menu"
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white text-2xl cursor-pointer hover:text-blue-400 transition-colors"
        aria-label="Close Menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation Links */}
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={() => setMenuOpen(false)}
          className="mobile-link text-4xl md:text-5xl font-bold text-white my-4 hover:text-blue-400 transition-colors"
          style={{ opacity: 0 }}
        >
          {link.label}
        </a>
      ))}

      {/* Social links */}
      <div
        className="mobile-socials flex items-center gap-8 mt-12"
        style={{ opacity: 0 }}
      >
        <a
          href="https://github.com/justin1045"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/chiragtank-developer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
