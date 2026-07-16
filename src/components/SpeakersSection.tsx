import { speakers } from "@/content/sections";
import { event } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** V2 avatar accent colors — cool set only (no warm colors on UI elements). */
const avatarAccents = [
  { stroke: "rgba(48,144,240,", fill: "rgba(48,144,240," },
  { stroke: "rgba(0,216,240,",  fill: "rgba(0,216,240,"  },
  { stroke: "rgba(216,240,160,",fill: "rgba(216,240,160,"},
  { stroke: "rgba(255,255,255,",fill: "rgba(255,255,255,"},
];

const SpeakerAvatar = ({ colorIndex }: { colorIndex: number }) => {
  const accent = avatarAccents[colorIndex % avatarAccents.length];
  return (
    <svg className="mx-auto mb-5 w-[84px]" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="38" stroke={`${accent.stroke}0.4)`} strokeWidth="1.5" strokeDasharray="5 7" />
      <circle cx="40" cy="30" r="11" fill={`${accent.fill}0.2)`} />
      <path d="M18 66c3-13 12-19 22-19s19 6 22 19" fill={`${accent.fill}0.2)`} />
    </svg>
  );
};

export const SpeakersSection = () => (
  <section className="py-20 lg:py-32" id="speakers">
    <div className="container">
      <SectionHeading
        kicker={speakers.kicker}
        title={speakers.title}
        description={speakers.description}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {speakers.cards.map((speaker, index) => (
          <Reveal key={speaker.name} delay={index * 90}>
            <div className="hover-lift h-full rounded-[22px] border border-white/10 bg-card p-8 text-center">
              <SpeakerAvatar colorIndex={index} />
              <h4 className="mb-1.5 font-display text-[1.02rem] font-bold">
                {speaker.name}
              </h4>
              <p className="font-sans text-[0.87rem] text-white/60">{speaker.role}</p>
            </div>
          </Reveal>
        ))}
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
          .
        </p>
      </Reveal>
    </div>
  </section>
);
