import { why } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";

export const WhySection = () => (
  <section className="py-20 lg:py-32" id="why">
    <div className="container">
      <div className="max-w-3xl">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-cyan">{why.kicker}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.9rem]">
            {why.title}
          </h2>
        </Reveal>
        <div className="space-y-4">
          {why.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={120 + index * 60}>
              <p className="leading-relaxed text-foreground/[0.78]">{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400}>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {why.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan/35 bg-cyan/[0.08] px-4 py-2 text-xs text-cyan-glow"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
