import { Calendar, Flower2, MapPin, Users } from "lucide-react";
import venueImage from "../../pictures/les-jardins-saint-dominique.png";
import { venue } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
            <SectionHeading
              kicker={venue.kicker}
              title={venue.title}
              description={venue.description}
            />
            <Reveal delay={200}>
              <ul className="mb-8 flex flex-col gap-4">
                {details.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-3.5 font-sans text-[0.98rem] text-white/78"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-cyan" />
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={280}>
              <ButtonLink
                href={venue.mapsUrl}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="rounded-[22px] border border-white/10 bg-card p-5">
              <div className="overflow-hidden rounded-[14px] border border-white/10 bg-card">
                <img
                  src={venueImage}
                  alt="Les Jardins de Saint-Dominique venue in Paris"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid gap-4 px-2 pb-1 pt-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan">
                    Nearest landmarks
                  </span>
                  <span className="font-sans text-sm text-white/70">
                    {venue.landmarks}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan">
                    Getting there
                  </span>
                  <span className="font-sans text-sm text-white/70">
                    {venue.transit}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
