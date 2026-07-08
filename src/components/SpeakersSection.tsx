import { speakers } from "@/content/sections";
import { event } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const avatarColors = ["rgba(0,191,214,", "rgba(51,120,255,", "rgba(22,235,249,", "rgba(255,255,255,"];

const SpeakerAvatar = ({ colorIndex, photoUrl, name }: { colorIndex: number; photoUrl?: string; name: string }) => {
  if (photoUrl) {
    return (
      <img
        src={photoUrl}
        alt={name}
        className="mx-auto mb-5 h-[84px] w-[84px] rounded-full object-cover"
      />
    );
  }
  const color = avatarColors[colorIndex % avatarColors.length];
  return (
    <svg className="mx-auto mb-5 w-[84px]" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="38" stroke={`${color}.4)`} strokeWidth="1.5" strokeDasharray="5 7" />
      <circle cx="40" cy="30" r="11" fill={`${color}.25)`} />
      <path d="M18 66c3-13 12-19 22-19s19 6 22 19" fill={`${color}.25)`} />
    </svg>
  );
};

export const SpeakersSection = () => (
  <section className="py-20 lg:py-32" id="speakers">
    <div className="container">
      <SectionHeading kicker={speakers.kicker} title={speakers.title} description={speakers.description} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {speakers.cards.map((speaker, index) => (
          <Reveal key={speaker.name} delay={index * 90}>
            <div className="card-glass hover-lift h-full rounded-3xl p-8 text-center">
              <SpeakerAvatar
                colorIndex={index}
                photoUrl={"photoUrl" in speaker ? (speaker as { photoUrl?: string }).photoUrl : undefined}
                name={speaker.name}
              />
              <h4 className="mb-1.5 text-[1.02rem] font-bold">{speaker.name}</h4>
              <p className="text-[0.87rem] text-foreground/65">{speaker.role}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={300}>
        <p className="mt-10 text-[0.95rem] text-foreground/65">
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
