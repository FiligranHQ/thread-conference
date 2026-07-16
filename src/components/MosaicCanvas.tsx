import { useEffect, useRef } from "react";

/**
 * Generative pixel-block mosaic art — the THREAD v2 brand signature.
 * Echoes "noise becomes signal": scattered colour blocks with fractal-noise
 * grain overlay, used as a background texture behind hero sections,
 * register bands and venue map placeholders.
 *
 * Renders onto a single <canvas> instead of a DOM node per cell, so the grid
 * is built once (and rebuilt only on resize) rather than on every scroll frame.
 * Opacity changes from scroll are applied as a CSS property, which the browser
 * handles entirely on the compositor thread with no repaint.
 *
 * Respects prefers-reduced-motion (skips resize-driven rebuilds, renders static).
 */

const PALETTE = [
  "#3090F0", // blue
  "#00D8F0", // cyan
  "#D8F0A0", // lime
  "#D878F0", // purple
  "#F0489C", // magenta
  "#F04860", // pink
];

const CELL_PX = 28; // target cell size in pixels

export interface MosaicCanvasProps {
  /** Fill density 0–1. Hero ≈ 0.35, venue ≈ 0.60, full art ≈ 0.85. */
  density?: number;
  /** Probability that an active cell expands to a 2×2 block. */
  cluster?: number;
  /** Opacity of the mosaic layer itself (before the center mask). */
  opacity?: number;
  /**
   * When true, applies a radial gradient mask that keeps the center of the
   * container dark so overlaid text stays legible (use for hero sections).
   */
  centerMask?: boolean;
  className?: string;
}

export const MosaicCanvas = ({
  density = 0.35,
  cluster = 0.1,
  opacity = 0.7,
  centerMask = false,
  className,
}: MosaicCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Keep latest density/cluster in refs so build() always reads current values
  // without listing them as effect dependencies — the grid rebuilds only on
  // mount and resize, never on scroll.
  const densityRef = useRef(density);
  densityRef.current = density;
  const clusterRef = useRef(cluster);
  clusterRef.current = cluster;

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const build = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;

      const w = container.offsetWidth;
      const h = container.offsetHeight;
      if (!w || !h) return;

      // Assigning width/height clears the canvas automatically.
      canvas.width = w;
      canvas.height = h;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const d = densityRef.current;
      const c = clusterRef.current;
      const cols = Math.ceil(w / CELL_PX);
      const rows = Math.ceil(h / CELL_PX);
      const cellW = w / cols;
      const cellH = h / rows;
      const total = cols * rows;
      const occ = new Array(total).fill(false);

      for (let i = 0; i < total; i++) {
        if (occ[i]) continue;
        const row = Math.floor(i / cols);
        const col = i % cols;

        if (Math.random() < d) {
          ctx.fillStyle = PALETTE[Math.floor(Math.random() * PALETTE.length)];

          // Occasionally expand to a 2×2 block
          if (
            !prefersReduced &&
            Math.random() < c &&
            col < cols - 1 &&
            row < rows - 1 &&
            !occ[i + 1] &&
            !occ[i + cols] &&
            !occ[i + cols + 1]
          ) {
            ctx.fillRect(col * cellW, row * cellH, cellW * 2, cellH * 2);
            occ[i + 1] = occ[i + cols] = occ[i + cols + 1] = true;
          } else {
            ctx.fillRect(col * cellW, row * cellH, cellW, cellH);
          }
        }
      }
    };

    build();

    // Rebuild on resize only when reduced-motion is not preferred.
    if (!prefersReduced) {
      const ro = new ResizeObserver(build);
      if (containerRef.current) ro.observe(containerRef.current);
      return () => ro.disconnect();
    }
  // density and cluster are intentionally omitted from the dependency array.
  // They are read via refs inside build() so rebuilds are driven by resize
  // only — never by scroll-triggered prop changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      {/* Single canvas — replaces the per-cell div grid.
          opacity is a compositor-only property: changing it never triggers a
          repaint, keeping scroll perfectly smooth. */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          opacity,
          willChange: "opacity",
          contain: "paint",
        }}
      />

      {/* Grain texture overlay — single element (replaces per-cell mosaic-grain ::after pseudo-elements) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          mixBlendMode: "overlay",
          opacity: 0.45,
          background:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Center radial mask — clears the middle for hero text legibility */}
      {centerMask && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 70% at 50% 44%, hsl(240 25% 2% / 0.92) 0%, hsl(240 25% 2% / 0.78) 38%, hsl(240 25% 2% / 0.35) 65%, transparent 100%)",
          }}
        />
      )}
    </div>
  );
};
