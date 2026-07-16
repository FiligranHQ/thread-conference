import { useEffect, useRef } from "react";

/**
 * Generative pixel-block mosaic art — the THREAD v2 brand signature.
 * Echoes "noise becomes signal": scattered colour blocks with fractal-noise
 * grain overlay, used as a background texture behind hero sections,
 * register bands and venue map placeholders.
 *
 * Respects prefers-reduced-motion (skips animation, renders static).
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
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const build = () => {
      const container = containerRef.current;
      const grid = gridRef.current;
      if (!container || !grid) return;

      const w = container.offsetWidth;
      const h = container.offsetHeight;
      if (!w || !h) return;

      const cols = Math.ceil(w / CELL_PX);
      const rows = Math.ceil(h / CELL_PX);
      const total = cols * rows;

      grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
      grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

      const occ = new Array(total).fill(false);
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < total; i++) {
        if (occ[i]) continue;
        const row = Math.floor(i / cols);
        const col = i % cols;
        const cell = document.createElement("div");
        cell.style.position = "relative";

        if (Math.random() < density) {
          const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
          cell.style.background = color;
          cell.className = "mosaic-grain";

          // Occasionally expand to a 2×2 block
          if (
            !prefersReduced &&
            Math.random() < cluster &&
            col < cols - 1 &&
            row < rows - 1 &&
            !occ[i + 1] &&
            !occ[i + cols] &&
            !occ[i + cols + 1]
          ) {
            cell.style.gridColumn = `${col + 1} / span 2`;
            cell.style.gridRow = `${row + 1} / span 2`;
            occ[i + 1] = occ[i + cols] = occ[i + cols + 1] = true;
          }
        } else {
          cell.style.background = "transparent";
        }

        fragment.appendChild(cell);
      }

      grid.replaceChildren(fragment);
    };

    build();

    // Rebuild on resize only when reduced-motion is not preferred
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const ro = new ResizeObserver(build);
      if (containerRef.current) ro.observe(containerRef.current);
      return () => ro.disconnect();
    }
  }, [density, cluster]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      {/* Mosaic grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid"
        style={{ opacity }}
      />

      {/* Grain texture overlay */}
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
