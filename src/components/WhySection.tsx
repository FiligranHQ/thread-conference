import { why } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";

export const WhySection = () => (
  <section className="py-20 lg:py-32" id="why">
    <div className="container">
      <div className="max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-4">{why.kicker}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
            {why.title}
          </h2>
        </Reveal>
        <div className="space-y-4">
          {why.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={120 + index * 60}>
              <p className="font-sans leading-relaxed text-white/70">{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400}>
          {/* V4 tags: pill with dot + border tint, cyan variant */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {why.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-[0.45em] rounded-full border px-4 py-2 font-sans text-xs font-semibold"
                style={{
                  borderColor: "rgba(0,224,255,0.4)",
                  color: "#b3f4ff",
                }}
              >
                <span
                  className="h-[7px] w-[7px] shrink-0 rounded-full"
                  style={{ background: "hsl(var(--cyan))" }}
                  aria-hidden="true"
                />
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
