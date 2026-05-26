import { useRef, createElement } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const isTouchDevice =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: none)").matches;

export default function MagneticButton({
  children,
  strength = 0.3,
  className = "",
  as = "div",
}) {
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      // No setup animations needed — magnetic effect is event-driven
    },
    { scope: containerRef }
  );

  const handleMouseMove = contextSafe((e) => {
    if (isTouchDevice) return;

    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    const threshold = 100;

    if (distance < threshold) {
      // Clamp translation to ±15px
      const maxTranslate = 15;
      const moveX = Math.max(-maxTranslate, Math.min(maxTranslate, distX * strength));
      const moveY = Math.max(-maxTranslate, Math.min(maxTranslate, distY * strength));

      gsap.to(el, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  });

  const handleMouseLeave = contextSafe(() => {
    if (isTouchDevice) return;

    const el = containerRef.current;
    if (!el) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
      overwrite: "auto",
    });
  });

  return createElement(
    as,
    {
      ref: containerRef,
      className,
      onMouseMove: isTouchDevice ? undefined : handleMouseMove,
      onMouseLeave: isTouchDevice ? undefined : handleMouseLeave,
    },
    children
  );
}
