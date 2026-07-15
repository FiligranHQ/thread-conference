import { ChevronDown } from "lucide-react";
import { faq } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const FAQSection = () => {
  let globalIndex = 0;

  return (
    <section className="py-20 lg:py-32" id="faq">
      <div className="container">
        <SectionHeading kicker={faq.kicker} title={faq.title} description={faq.description} />

        <div className="mx-auto max-w-3xl space-y-12">
          {faq.categories.map((category) => (
            <div key={category.name}>
              <Reveal>
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                  {category.name}
                </p>
              </Reveal>

              <div className="space-y-3">
                {category.items.map((item) => {
                  const delay = (globalIndex++ % 10) * 60;
                  return (
                    <Reveal key={item.q} delay={delay}>
                      <details className="group card-glass rounded-2xl">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold leading-snug marker:hidden [&::-webkit-details-marker]:hidden">
                          <span>{item.q}</span>
                          <ChevronDown
                            className="h-4 w-4 shrink-0 text-cyan transition-transform duration-300 group-open:rotate-180"
                            aria-hidden="true"
                          />
                        </summary>
                        <div className="border-t border-border/50 px-6 pb-5 pt-4">
                          <p className="text-[0.95rem] leading-relaxed text-foreground/[0.78]">
                            {item.a}
                          </p>
                        </div>
                      </details>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
