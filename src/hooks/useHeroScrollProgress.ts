import { useEffect, useRef, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const useHeroScrollProgress = (targetId = "why") => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const computeProgress = () => {
      // Deduplicate: if a frame is already scheduled, skip queuing another.
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const target = document.getElementById(targetId);
        const targetTop = target
          ? target.getBoundingClientRect().top + window.scrollY
          : window.innerHeight;
        const range = Math.max(1, targetTop);
        setProgress(clamp(window.scrollY / range, 0, 1));
      });
    };

    computeProgress();
    window.addEventListener("scroll", computeProgress, { passive: true });
    window.addEventListener("resize", computeProgress);

    return () => {
      window.removeEventListener("scroll", computeProgress);
      window.removeEventListener("resize", computeProgress);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [targetId]);

  return progress;
};
