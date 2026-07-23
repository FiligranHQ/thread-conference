import { ArrowUpRight } from "lucide-react";
import { speakers } from "@/content/sections";
import { event } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpeakerAvatar } from "@/components/speakers/SpeakerCard";
import { cn } from "@/lib/utils";

export const SpeakersSection = () => (
  <section className="py-20 lg:py-32" id="speakers">
    <div className="container">
      <SectionHeading
        kicker={speakers.kicker}
        title={speakers.title}
        description={speakers.description}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {speakers.cards.map((speaker, index) => {
          const href = "href" in speaker ? speaker.href : undefined;
          const cardClassName = cn(
            "hover-lift group relative flex h-full flex-col rounded-[22px] border border-white/10 bg-card p-8 text-center",
            href && "cursor-pointer hover:border-cyan/40",
          );
          const cardContent = (
            <>
              {href ? (
                <ArrowUpRight
                  className="absolute right-5 top-5 h-4 w-4 text-cyan/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  aria-hidden="true"
                />
              ) : null}
              <SpeakerAvatar colorIndex={index} />
              <h4 className="mb-1.5 font-display text-[1.02rem] font-bold">
                {speaker.name}
              </h4>
              <p className="font-sans text-[0.87rem] text-white/60">{speaker.role}</p>
            </>
          );

          return (
            <Reveal key={speaker.name} delay={index * 90}>
              {href ? (
                <a href={href} className={cardClassName}>
                  {cardContent}
                </a>
              ) : (
                <div className={cardClassName}>{cardContent}</div>
              )}
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={300}>
        <p className="mt-10 font-sans text-[0.95rem] text-white/60">
          {speakers.note}{" "}
          <a
            href={`mailto:${event.contactEmail}`}
            className="border-b border-cyan/40 text-cyan transition-colors hover:border-cyan"
          >
            {event.contactEmail}
          </a>
          . <a
            href="/speakers"
            className="ml-1 inline-flex items-center gap-1 border-b border-cyan/40 text-cyan transition-colors hover:border-cyan"
          >
            {speakers.seeAllLabel}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </p>
      </Reveal>
    </div>
  </section>
);
