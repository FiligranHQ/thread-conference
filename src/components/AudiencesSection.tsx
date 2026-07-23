import { Code2, ShieldCheck } from "lucide-react";
import { audiences } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  shield: ShieldCheck,
  code: Code2,
} as const;

/** Accent colors per audience card (cool set only, per v4 rules). */
const cardAccents = [
  { topLine: "hsl(var(--blue))", border: "rgba(52,146,255,0.35)", icon: "hsl(var(--blue))", tagColor: "hsl(var(--blue))" },
  { topLine: "hsl(var(--cyan))", border: "rgba(0,224,255,0.35)", icon: "hsl(var(--cyan))", tagColor: "hsl(var(--cyan))" },
];

export const AudiencesSection = () => (
  <section className="py-20 lg:py-32" id="audiences">
    <div className="container">
      <SectionHeading kicker={audiences.kicker} title={audiences.title} />

      <div className="mt-4 grid gap-6 lg:grid-cols-2">
        {audiences.cards.map((card, index) => {
          const Icon = icons[card.icon];
          const accent = cardAccents[index % cardAccents.length];
          return (
            <Reveal key={card.name} delay={index * 120}>
              <article
                className="hover-lift relative flex h-full flex-col overflow-hidden rounded-[22px] bg-card p-8 md:p-10"
                style={{ border: `1px solid ${accent.border}` }}
              >
                {/* 4px top-line accent */}
                <span
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{ background: accent.topLine }}
                  aria-hidden="true"
                />
                <div className="mb-6 flex items-center gap-4">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px]"
                    style={{
                      background: `${accent.icon.replace(")", " / 0.1)")}`,
                      color: accent.icon,
                    }}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{card.name}</h3>
                    <p className="mt-0.5 font-sans text-sm" style={{ color: accent.tagColor }}>
                      {card.tagline}
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex flex-1 flex-col gap-3">
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="font-sans text-[0.95rem] text-white/70">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
