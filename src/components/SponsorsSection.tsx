import { sponsors } from "@/content/sponsors";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tierOrder = ["Premier", "Partner", "Supporter"] as const;

export const SponsorsSection = () => {
  if (!sponsors.show || sponsors.items.length === 0) return null;

  const sorted = [...sponsors.items].sort((a, b) => {
    const ai = a.tier ? tierOrder.indexOf(a.tier) : tierOrder.length;
    const bi = b.tier ? tierOrder.indexOf(b.tier) : tierOrder.length;
    return ai - bi;
  });

  return (
    <section className="border-t border-white/10 py-16 lg:py-24" id="sponsors">
      <div className="container">
        <SectionHeading
          kicker={sponsors.kicker}
          title={sponsors.title}
          align="center"
        />
        <Reveal delay={120}>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {sorted.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sponsor.name}
                className="opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <img
                  src={sponsor.logoPath}
                  alt={sponsor.name}
                  className="h-10 w-auto md:h-12"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
