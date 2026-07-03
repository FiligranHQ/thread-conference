import { facts, factsNote } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export const FactsSection = () => (
  <section className="pb-20 lg:pb-32">
    <div className="container">
      <div className="mb-9 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {facts.map((fact, index) => (
          <Reveal key={fact.label} delay={index * 90}>
            <div className="card-glass hover-lift flex h-full flex-col gap-1.5 rounded-3xl p-8 text-center">
              <span className="text-gradient-cyan text-4xl font-extrabold md:text-5xl">
                {fact.value}
              </span>
              <span className="text-[0.95rem] text-foreground/70">{fact.label}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="text-center italic text-foreground/60">{factsNote}</p>
      </Reveal>
    </div>
  </section>
);
