import { zones } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const zoneAccents: Record<string, string> = {
  electric: "linear-gradient(90deg, #16ebf9, #00bfd6)",
  cyan: "linear-gradient(90deg, #00bfd6, #3378ff)",
  blue: "linear-gradient(90deg, #16ebf9, #3378ff)",
  indigo: "linear-gradient(90deg, #3378ff, #333bff)",
  green: "linear-gradient(90deg, #2fd27e, #16ebf9)",
};

export const ZonesSection = () => (
  <section className="py-20 lg:py-32" id="experience">
    <div className="container">
      <SectionHeading kicker={zones.kicker} title={zones.title} description={zones.description} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {zones.cards.map((zone, index) => (
          <Reveal key={zone.name} delay={index * 80}>
            <article className="card-glass hover-lift relative h-full overflow-hidden rounded-3xl p-8">
              <span
                className="absolute inset-x-0 top-0 h-[3px] opacity-85"
                style={{ background: zoneAccents[zone.color] }}
                aria-hidden="true"
              />
              <span className="font-mono text-xs tracking-[0.2em] text-foreground/40">{zone.id}</span>
              <h3 className="mb-0.5 mt-3 text-xl font-bold">{zone.name}</h3>
              <p className="mb-4 text-xs uppercase tracking-[0.14em] text-cyan">{zone.kind}</p>
              <p className="text-sm leading-relaxed text-foreground/[0.72]">{zone.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
