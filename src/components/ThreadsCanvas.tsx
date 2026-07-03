import { useEffect, useRef } from "react";

/**
 * Animated background: fine "threads" (curved lines with drifting nodes)
 * woven across the hero, echoing the Filigran filigree identity.
 * Purely decorative — respects prefers-reduced-motion.
 */
export const ThreadsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let t = 0;

    interface Thread {
      baseY: number;
      amplitude: number;
      wavelength: number;
      speed: number;
      opacity: number;
      hue: "cyan" | "blue";
    }

    const threads: Thread[] = Array.from({ length: 9 }, (_, i) => ({
      baseY: (i + 1) / 10,
      amplitude: 18 + Math.random() * 42,
      wavelength: 0.6 + Math.random() * 1.4,
      speed: 0.12 + Math.random() * 0.25,
      opacity: 0.05 + Math.random() * 0.12,
      hue: Math.random() > 0.5 ? "cyan" : "blue",
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, width, height);

      for (const thread of threads) {
        ctx.beginPath();
        const yBase = thread.baseY * height;
        for (let x = 0; x <= width; x += 8) {
          const phase = (x / width) * Math.PI * 2 * thread.wavelength + t * thread.speed * 10;
          const y = yBase + Math.sin(phase) * thread.amplitude + Math.sin(phase * 0.37) * thread.amplitude * 0.5;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle =
          thread.hue === "cyan"
            ? `rgba(22, 235, 249, ${thread.opacity})`
            : `rgba(51, 120, 255, ${thread.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
};
