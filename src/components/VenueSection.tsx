import { Calendar, Flower2, MapPin, Users } from "lucide-react";
import { venue } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Stylized map of the 7th arrondissement with the venue pin. */
const VenueMap = () => (
  <div className="overflow-hidden rounded-xl border border-border/60 bg-[hsl(220_35%_10%)]">
    <svg viewBox="0 0 400 300" fill="none" className="w-full" aria-hidden="true">
      <path d="M0 210 C 80 190, 140 230, 220 210 S 360 180, 400 200" stroke="rgba(51,120,255,.5)" strokeWidth="14" strokeLinecap="round" opacity=".35" />
      <path d="M0 214 C 80 194, 140 234, 220 214 S 360 184, 400 204" stroke="rgba(22,235,249,.45)" strokeWidth="2" />
      <g stroke="rgba(255,255,255,.14)" strokeWidth="1.4">
        <path d="M60 0v150M140 0v170M260 30v140M330 0v160" />
        <path d="M0 60h400M0 120h380M20 170h360" />
      </g>
      <circle cx="200" cy="120" r="46" stroke="rgba(0,191,214,.5)" strokeWidth="1.4" strokeDasharray="4 6" />
      <circle cx="200" cy="120" r="7" fill="#16ebf9" />
      <circle cx="200" cy="120" r="16" stroke="#16ebf9" strokeWidth="1.6" opacity=".5" />
      <text x="200" y="88" textAnchor="middle" fill="rgba(255,255,255,.75)" fontFamily="Sora, sans-serif" fontSize="11" letterSpacing="2">
        SAINT-DOMINIQUE
      </text>
      <text x="86" y="238" fill="rgba(255,255,255,.4)" fontFamily="Sora, sans-serif" fontSize="10" letterSpacing="1.5">
        LA SEINE
      </text>
    </svg>
  </div>
);

export const VenueSection = () => {
  const details = [
    { icon: MapPin, text: venue.address },
    { icon: Calendar, text: venue.dateAndHours },
    { icon: Users, text: venue.capacity },
    { icon: Flower2, text: venue.gardenNote },
  ];

  return (
    <section className="py-20 lg:py-32" id="venue">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading kicker={venue.kicker} title={venue.title} description={venue.description} />
            <Reveal delay={200}>
              <ul className="mb-8 flex flex-col gap-4">
                {details.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3.5 text-[0.98rem] text-foreground/[0.82]">
                    <Icon className="h-5 w-5 shrink-0 text-cyan" />
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={280}>
              <ButtonLink href={venue.mapsUrl} variant="cta" target="_blank" rel="noopener noreferrer">
                Open in Maps
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="card-glass rounded-3xl p-5">
              <VenueMap />
              <div className="grid gap-4 px-2 pb-1 pt-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-cyan">Nearest landmarks</span>
                  <span className="text-sm text-foreground/75">{venue.landmarks}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-cyan">Getting there</span>
                  <span className="text-sm text-foreground/75">{venue.transit}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
