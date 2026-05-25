import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CustomCursor() {
  const containerRef = useRef(null);
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // default true to avoid flash

  // Detect touch device after mount
  useEffect(() => {
    setIsTouchDevice(
      window.matchMedia("(hover: none)").matches || "ontouchstart" in window
    );
  }, []);

  // Add / remove cursor:none on body
  useEffect(() => {
    if (isTouchDevice) return;
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "";
    };
  }, [isTouchDevice]);

  useGSAP(
    () => {
      if (isTouchDevice) return;

      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;

      const outerX = gsap.quickTo(outer, "x", { duration: 0.35, ease: "power3.out" });
      const outerY = gsap.quickTo(outer, "y", { duration: 0.35, ease: "power3.out" });
      const innerX = gsap.quickTo(inner, "x", { duration: 0.15, ease: "power3.out" });
      const innerY = gsap.quickTo(inner, "y", { duration: 0.15, ease: "power3.out" });

      const onMouseMove = (e) => {
        if (!visible) setVisible(true);
        outerX(e.clientX);
        outerY(e.clientY);
        innerX(e.clientX);
        innerY(e.clientY);
      };

      const getHoverType = (target) => {
        let el = target;
        for (let i = 0; i < 5 && el; i++) {
          if (el.dataset?.cursor) return el.dataset.cursor;
          const tag = el.tagName;
          if (tag === "A" || tag === "BUTTON") return "link";
          el = el.parentElement;
        }
        return null;
      };

      const onMouseOver = (e) => {
        const type = getHoverType(e.target);
        if (!type) return;

        if (type === "pointer") {
          gsap.to(outer, {
            width: 48, height: 48,
            borderColor: "rgba(59, 130, 246, 1)",
            mixBlendMode: "difference",
            duration: 0.3, ease: "power2.out",
          });
          gsap.to(inner, { scale: 0, duration: 0.3, ease: "power2.out" });
        } else if (type === "link") {
          gsap.to(outer, {
            width: 40, height: 40,
            borderColor: "rgba(59, 130, 246, 0.8)",
            duration: 0.3, ease: "power2.out",
          });
        }
      };

      const onMouseOut = (e) => {
        const type = getHoverType(e.target);
        if (!type) return;

        gsap.to(outer, {
          width: 32, height: 32,
          borderColor: "rgba(59, 130, 246, 0.5)",
          mixBlendMode: "normal",
          duration: 0.3, ease: "power2.out",
        });
        gsap.to(inner, { scale: 1, duration: 0.3, ease: "power2.out" });
      };

      const onMouseLeave = () => setVisible(false);
      const onMouseEnter = () => setVisible(true);

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseover", onMouseOver);
      document.addEventListener("mouseout", onMouseOut);
      document.documentElement.addEventListener("mouseleave", onMouseLeave);
      document.documentElement.addEventListener("mouseenter", onMouseEnter);

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseover", onMouseOver);
        document.removeEventListener("mouseout", onMouseOut);
        document.documentElement.removeEventListener("mouseleave", onMouseLeave);
        document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      };
    },
    { scope: containerRef, dependencies: [isTouchDevice] }
  );

  // Hide when body overflow is hidden (mobile menu open)
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsHidden(document.body.style.overflow === "hidden");
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });
    return () => observer.disconnect();
  }, []);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  const cursorOpacity = visible && !isHidden ? 1 : 0;

  return (
    <div ref={containerRef} aria-hidden="true">
      <div
        ref={outerRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 32, height: 32, borderRadius: "50%",
          border: "1.5px solid rgba(59, 130, 246, 0.5)",
          pointerEvents: "none", zIndex: 9999,
          transform: "translate(-50%, -50%)",
          willChange: "transform",
          opacity: cursorOpacity,
          transition: "opacity 0.15s ease",
          mixBlendMode: "normal",
        }}
      />
      <div
        ref={innerRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 6, height: 6, borderRadius: "50%",
          backgroundColor: "rgb(59, 130, 246)",
          pointerEvents: "none", zIndex: 9999,
          transform: "translate(-50%, -50%)",
          willChange: "transform",
          opacity: cursorOpacity,
          transition: "opacity 0.15s ease",
        }}
      />
    </div>
  );
}
