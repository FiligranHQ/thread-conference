import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Shared speaker entry shape — used by the homepage teaser and the dedicated speakers page. */
export interface Speaker {
  name: string;
  role: string;
  /** Optional headshot path. Falls back to the generated SVG avatar when omitted. */
  photo?: string;
  /** Optional short bio, shown on the dedicated speakers page. */
  bio?: string;
}

/** V4 avatar accent colors — cool set only (no warm colors on UI elements). */
const avatarAccents = [
  { stroke: "rgba(52,146,255,", fill: "rgba(52,146,255," },
  { stroke: "rgba(0,224,255,", fill: "rgba(0,224,255," },
  { stroke: "rgba(223,255,166,", fill: "rgba(223,255,166," },
  { stroke: "rgba(255,255,255,", fill: "rgba(255,255,255," },
];

export const SpeakerAvatar = ({
  colorIndex,
  photo,
  name,
  size = 84,
}: {
  colorIndex: number;
  photo?: string;
  name?: string;
  size?: number;
}) => {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name ?? ""}
        className="mx-auto mb-5 h-[84px] w-[84px] rounded-full object-cover"
        style={{ height: size, width: size }}
      />
    );
  }

  const accent = avatarAccents[colorIndex % avatarAccents.length];
  return (
    <svg
      className="mx-auto mb-5"
      style={{ width: size }}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="38" stroke={`${accent.stroke}0.4)`} strokeWidth="1.5" strokeDasharray="5 7" />
      <circle cx="40" cy="30" r="11" fill={`${accent.fill}0.2)`} />
      <path d="M18 66c3-13 12-19 22-19s19 6 22 19" fill={`${accent.fill}0.2)`} />
    </svg>
  );
};

export const SpeakerCard = ({
  speaker,
  colorIndex,
  delay = 0,
  compact = false,
}: {
  speaker: Speaker;
  colorIndex: number;
  delay?: number;
  /** Slightly smaller footprint — used for the secondary "Filigran team" section. */
  compact?: boolean;
}) => (
  <Reveal delay={delay}>
    <div
      className={cn(
        "hover-lift h-full rounded-[22px] border border-white/10 bg-card text-center",
        compact ? "p-6" : "p-8",
      )}
    >
      <SpeakerAvatar colorIndex={colorIndex} photo={speaker.photo} name={speaker.name} size={compact ? 68 : 84} />
      <h4 className="mb-1.5 font-display text-[1.02rem] font-bold">{speaker.name}</h4>
      <p className="font-sans text-[0.87rem] text-white/60">{speaker.role}</p>
      {speaker.bio ? (
        <p className="mt-3 font-sans text-[0.82rem] leading-relaxed text-white/45">{speaker.bio}</p>
      ) : null}
    </div>
  </Reveal>
);
