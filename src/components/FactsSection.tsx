import { CalendarDays, MapPin, Split, Wine } from "lucide-react";
import { glance, glanceNote } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

const icons = {
  calendar: CalendarDays,
  map: MapPin,
  tracks: Split,
  garden: Wine,
} as const;

export const FactsSection = () => (
  <section className="pb-20 lg:pb-32">
    <div className="container">
      <div className="mb-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {glance.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <Reveal key={item.title} delay={index * 90}>
              <div className="card-glass hover-lift flex h-full flex-col rounded-3xl p-7">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mb-1.5 text-base font-bold leading-snug">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/65">{item.detail}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={200}>
        <p className="text-center text-foreground/60">{glanceNote}</p>
      </Reveal>
    </div>
  </section>
);
