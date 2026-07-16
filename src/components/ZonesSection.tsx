import { zones } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** V2 zone accent spec: solid color top-line + tinted border (35% opacity). */
const zoneAccent: Record<
  string,
  { topLine: string; border: string; kindColor: string }
> = {
  blue: {
    topLine: "hsl(var(--blue))",
    border: "rgba(48,144,240,0.35)",
    kindColor: "hsl(var(--blue))",
  },
  cyan: {
    topLine: "hsl(var(--cyan))",
    border: "rgba(0,216,240,0.35)",
    kindColor: "hsl(var(--cyan))",
  },
  purple: {
    topLine: "hsl(var(--purple))",
    border: "rgba(216,120,240,0.35)",
    kindColor: "hsl(var(--purple))",
  },
  lime: {
    topLine: "hsl(var(--lime))",
    border: "rgba(216,240,160,0.35)",
    kindColor: "hsl(var(--lime))",
  },
  magenta: {
    topLine: "hsl(var(--magenta))",
    border: "rgba(240,72,156,0.35)",
    kindColor: "hsl(var(--magenta))",
  },
  gradient: {
    topLine: "linear-gradient(90deg,hsl(var(--blue)),hsl(var(--cyan)),hsl(var(--lime)))",
    border: "rgba(0,216,240,0.35)",
    kindColor: "hsl(var(--cyan))",
  },
};

export const ZonesSection = () => (
  <section className="py-20 lg:py-32" id="experience">
    <div className="container">
      <SectionHeading
        kicker={zones.kicker}
        title={zones.title}
        description={zones.description}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {zones.cards.map((zone, index) => {
          const accent = zoneAccent[zone.color] ?? zoneAccent.cyan;
          return (
            <Reveal key={zone.name} delay={index * 80}>
              <article
                className="hover-lift relative h-full overflow-hidden rounded-[22px] bg-card p-8"
                style={{ border: `1px solid ${accent.border}` }}
              >
                {/* 4px solid top-line accent */}
                <span
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{ background: accent.topLine }}
                  aria-hidden="true"
                />
                <span className="font-mono text-xs tracking-[0.2em] text-white/40">
                  {zone.id}
                </span>
                <h3 className="mb-0.5 mt-3 font-display text-xl font-bold">
                  {zone.name}
                </h3>
                <p
                  className="mb-4 text-xs uppercase tracking-[0.14em]"
                  style={{ color: accent.kindColor }}
                >
                  {zone.kind}
                </p>
                <p className="font-sans text-sm leading-relaxed text-white/70">
                  {zone.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
