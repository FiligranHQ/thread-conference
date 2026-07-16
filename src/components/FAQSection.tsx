import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ConvinceYourBossModal } from "@/components/ConvinceYourBossModal";

export const FAQSection = () => {
  let globalIndex = 0;
  const [bossModalOpen, setBossModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-32" id="faq">
      <div className="container">
        <SectionHeading
          kicker={faq.kicker}
          title={faq.title}
          description={faq.description}
        />

        <div className="mx-auto max-w-3xl space-y-12">
          {faq.categories.map((category) => (
            <div key={category.name}>
              <Reveal>
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                  {category.name}
                </p>
              </Reveal>

              <div className="space-y-3">
                {category.items.map((item) => {
                  const delay = (globalIndex++ % 10) * 60;
                  return (
                    <Reveal key={item.q} delay={delay}>
                      <details className="group rounded-[22px] border border-white/10 bg-card">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display font-semibold leading-snug marker:hidden [&::-webkit-details-marker]:hidden">
                          <span>{item.q}</span>
                          <ChevronDown
                            className="h-4 w-4 shrink-0 text-cyan transition-transform duration-300 group-open:rotate-180"
                            aria-hidden="true"
                          />
                        </summary>
                        <div className="border-t border-white/8 px-6 pb-5 pt-4">
                          <p
                            className="font-sans text-[0.95rem] leading-relaxed text-white/70"
                            dangerouslySetInnerHTML={{ __html: item.a }}
                          />
                          {item.cta?.type === "convince-boss" && (
                            <div className="mt-4">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setBossModalOpen(true)}
                              >
                                {item.cta.label}
                              </Button>
                            </div>
                          )}
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

      <ConvinceYourBossModal
        open={bossModalOpen}
        onClose={() => setBossModalOpen(false)}
      />
    </section>
  );
};
