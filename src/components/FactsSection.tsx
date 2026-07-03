import { facts, formatBalance, formatBalanceNote } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

const segmentGradients = [
  "linear-gradient(90deg, #16ebf9, #00bfd6)",
  "linear-gradient(90deg, #00bfd6, #3378ff)",
  "linear-gradient(90deg, #3378ff, #333bff)",
];

export const FactsSection = () => (
  <section className="pb-20 lg:pb-32">
    <div className="container">
      <div className="mb-11 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {facts.map((fact, index) => (
          <Reveal key={fact.label} delay={index * 90}>
            <div className="card-glass hover-lift flex h-full flex-col gap-1.5 rounded-3xl p-8 text-center">
              <span className="text-gradient-cyan text-4xl font-extrabold md:text-5xl lg:text-6xl">
                {fact.value}
              </span>
              <span className="text-[0.95rem] text-foreground/70">{fact.label}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mx-auto max-w-3xl">
          <div className="flex h-[52px] overflow-hidden rounded-full border border-border/60" aria-label="Format balance">
            {formatBalance.map((segment, index) => (
              <div
                key={segment.label}
                className="flex items-center justify-center overflow-hidden whitespace-nowrap text-xs font-semibold"
                style={{
                  width: `${segment.percent}%`,
                  background: segmentGradients[index % segmentGradients.length],
                  color: index === 0 ? "hsl(220 30% 7%)" : "#fff",
                }}
              >
                <span className="truncate px-2">{segment.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center italic text-foreground/60">{formatBalanceNote}</p>
        </div>
      </Reveal>
    </div>
  </section>
);
