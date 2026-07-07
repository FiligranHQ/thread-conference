import { Code2, ShieldCheck } from "lucide-react";
import { audiences } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  shield: ShieldCheck,
  code: Code2,
} as const;

export const AudiencesSection = () => (
  <section className="py-20 lg:py-32" id="audiences">
    <div className="container">
      <SectionHeading kicker={audiences.kicker} title={audiences.title} />

      <div className="mt-4 grid gap-6 lg:grid-cols-2">
        {audiences.cards.map((card, index) => {
          const Icon = icons[card.icon];
          return (
            <Reveal key={card.name} delay={index * 120}>
              <article className="card-glass hover-lift flex h-full flex-col rounded-3xl p-8 md:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{card.name}</h3>
                    <p className="mt-0.5 text-sm text-cyan">{card.tagline}</p>
                  </div>
                </div>

                <div className="mb-6 flex flex-1 flex-col gap-4">
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[0.95rem] leading-relaxed text-foreground/[0.78]">
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
