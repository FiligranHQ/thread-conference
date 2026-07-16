import { CalendarDays, MapPin, Split, Wine } from "lucide-react";
import { glance, glanceNote } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

const icons = {
  calendar: CalendarDays,
  map: MapPin,
  tracks: Split,
  garden: Wine,
} as const;

/** Icon accent colors per glance card (cool set only, per v2 rules). */
const iconColors = [
  "hsl(var(--cyan))",
  "hsl(var(--blue))",
  "hsl(var(--lime))",
  "hsl(var(--cyan))",
] as const;

export const FactsSection = () => (
  <section className="pb-20 lg:pb-32">
    <div className="container">
      <div className="mb-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {glance.map((item, index) => {
          const Icon = icons[item.icon];
          const iconColor = iconColors[index % iconColors.length];
          return (
            <Reveal key={item.title} delay={index * 90}>
              <div className="hover-lift flex h-full flex-col rounded-[22px] border border-white/10 bg-card p-7">
                <span
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px]"
                  style={{
                    background: `${iconColor.replace("hsl", "hsla").replace(")", ", 0.1)")}`,
                    color: iconColor,
                  }}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mb-1.5 font-display text-base font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-white/60">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={200}>
        <p className="text-center font-sans text-white/55">{glanceNote}</p>
      </Reveal>
    </div>
  </section>
);
