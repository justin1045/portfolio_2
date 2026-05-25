import { useRef, useEffect, useCallback } from "react";

// Gradient blob configuration
const BLOBS = [
  { x: 0.3, y: 0.3, r: 0.35, color: [59, 130, 246], speed: 0.0003, phase: 0 },      // Blue
  { x: 0.7, y: 0.6, r: 0.3, color: [139, 92, 246], speed: 0.0004, phase: 2 },       // Purple
  { x: 0.5, y: 0.8, r: 0.28, color: [6, 182, 212], speed: 0.00035, phase: 4 },      // Cyan
  { x: 0.2, y: 0.7, r: 0.22, color: [245, 158, 11], speed: 0.00025, phase: 1.5 },   // Amber (warm)
];

export default function GradientMesh() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animRef = useRef(null);
  const blobStateRef = useRef(
    BLOBS.map((b) => ({ ...b, cx: b.x, cy: b.y }))
  );

  const draw = useCallback((time) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    // Clear
    ctx.clearRect(0, 0, w, h);

    const blobs = blobStateRef.current;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    for (let i = 0; i < blobs.length; i++) {
      const blob = blobs[i];
      const baseBlob = BLOBS[i];

      // Organic floating motion using sine waves
      const t = time * baseBlob.speed;
      const floatX = Math.sin(t + baseBlob.phase) * 0.08;
      const floatY = Math.cos(t * 1.3 + baseBlob.phase) * 0.06;

      // Subtle mouse influence (desktop only, gentle)
      const mouseInfluence = 0.03;
      const targetX = baseBlob.x + floatX + (mx - 0.5) * mouseInfluence;
      const targetY = baseBlob.y + floatY + (my - 0.5) * mouseInfluence;

      // Smooth lerp
      blob.cx += (targetX - blob.cx) * 0.02;
      blob.cy += (targetY - blob.cy) * 0.02;

      // Draw radial gradient blob
      const px = blob.cx * w;
      const py = blob.cy * h;
      const radius = baseBlob.r * Math.min(w, h);

      // Pulsating radius
      const pulse = 1 + Math.sin(t * 2 + baseBlob.phase) * 0.05;
      const finalRadius = radius * pulse;

      const gradient = ctx.createRadialGradient(px, py, 0, px, py, finalRadius);
      const [r, g, b] = baseBlob.color;
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.12)`);
      gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.06)`);
      gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, 0.02)`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  // Handle resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for performance
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      // Reset canvas dimensions for draw calls
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Mouse tracking (desktop only)
  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(hover: none)").matches || "ontouchstart" in window;
    if (isTouchDevice) return;

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
      aria-hidden="true"
    />
  );
}
