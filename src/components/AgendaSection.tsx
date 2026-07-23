import { useState } from "react";
import { cn } from "@/lib/utils";
import { formatAgendaStartTime } from "@/lib/time";
import { agendaIntro, agendaTracks, roomLabels, type RoomId, type Session } from "@/content/agenda";
import { communityExperiences } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** V4 tag spec: pill, 1.5px border at 40% opacity, tinted text, colored dot. */
const pillStyles: Record<
  RoomId,
  { border: string; color: string; dot: string; timeColor: string }
> = {
  signal: {
    border: "rgba(52,146,255,0.4)",
    color: "#c9e3ff",
    dot: "hsl(var(--blue))",
    timeColor: "hsl(var(--blue))",
  },
  community: {
    border: "rgba(0,224,255,0.4)",
    color: "#b3f4ff",
    dot: "hsl(var(--cyan))",
    timeColor: "hsl(var(--cyan))",
  },
  strategy: {
    border: "rgba(225,132,255,0.4)",
    color: "#f3d9ff",
    dot: "hsl(var(--purple))",
    timeColor: "hsl(var(--purple))",
  },
  lab: {
    border: "rgba(223,255,166,0.4)",
    color: "#eefad0",
    dot: "hsl(var(--lime))",
    timeColor: "hsl(var(--lime))",
  },
  forum: {
    border: "rgba(253,85,104,0.4)",
    color: "#ffd0d6",
    dot: "hsl(var(--pink))",
    timeColor: "hsl(var(--pink))",
  },
  garden: {
    border: "rgba(223,255,166,0.4)",
    color: "#eefad0",
    dot: "hsl(var(--lime))",
    timeColor: "hsl(var(--lime))",
  },
};

const RoomPill = ({ room }: { room: RoomId }) => {
  const style = pillStyles[room];
  return (
    <span
      className="mr-1.5 mt-0.5 inline-flex items-center gap-[0.45em] rounded-full border px-3.5 py-1 font-sans text-[0.72rem] font-semibold tracking-wide"
      style={{ borderColor: style.border, color: style.color }}
    >
      <span
        className="h-[7px] w-[7px] shrink-0 rounded-full"
        style={{ background: style.dot }}
        aria-hidden="true"
      />
      {roomLabels[room]}
    </span>
  );
};

const SessionItem = ({
  session,
  index,
}: {
  session: Session;
  index: number;
}) => {
  const primaryRoom = session.locations[0];
  const timeColor = session.evening
    ? "hsl(var(--lime))"
    : pillStyles[primaryRoom]?.timeColor ?? "hsl(var(--cyan))";
  const dotBorder = session.evening
    ? "hsl(var(--lime))"
    : pillStyles[primaryRoom]?.dot ?? "hsl(var(--cyan))";

  return (
    <Reveal
      as="li"
      delay={index * 60}
      className="relative grid gap-1.5 py-4 pl-12 sm:grid-cols-[76px_1fr] sm:gap-10 sm:pl-0"
    >
      {/* Timeline dot: centered on the vertical rail line (rail is at left-[19px]/sm:left-[107px]).
          Positioned at the rail's exact left offset, then shifted left by half its own
          width via -translate-x-1/2 so it stays perfectly centered regardless of the
          dot's box size or border width (avoids brittle hand-calculated pixel offsets). */}
      <span
        className="absolute left-[19px] top-7 z-[1] h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 bg-background sm:left-[107px]"
        style={{ borderColor: dotBorder }}
        aria-hidden="true"
      />
      <span
        className="mb-0.5 whitespace-nowrap font-mono text-[0.95rem] sm:mb-0 sm:pt-1 sm:text-right"
        style={{ color: timeColor }}
      >
        {formatAgendaStartTime(session.time)}
      </span>
      <div>
        <h4
          className={cn(
            "mb-1 font-display text-[1.06rem] font-bold",
            session.highlight && "text-gradient-cool",
          )}
        >
          {session.title}
        </h4>
        {session.description ? (
          <p className="mb-2 font-sans text-sm text-white/65">
            {session.description}
          </p>
        ) : null}
        {session.locations.map((room) => (
          <RoomPill key={room} room={room} />
        ))}
      </div>
    </Reveal>
  );
};

export const AgendaSection = () => {
  const tabs = [
    ...agendaTracks.map(({ id, label }) => ({ id, label })),
    { id: "community", label: "Community Zone" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeTrack = agendaTracks.find((track) => track.id === activeTab);

  return (
    <section className="py-20 lg:py-32" id="agenda">
      <div className="container">
        <SectionHeading
          kicker={agendaIntro.kicker}
          title={agendaIntro.title}
          description={agendaIntro.description}
        />

        {/* Tab bar — sticky with horizontal scroll on mobile so users can switch
            tracks without scrolling back up; static and wrapping on desktop.
            Note: this must NOT be wrapped in <Reveal>, since Reveal applies a
            (transform-based) translate-y which would break position: sticky. */}
        <div
          className={cn(
            "sticky top-[76px] z-20 -mx-8 mb-10 overflow-x-auto px-8 py-3",
            "shadow-[0_12px_24px_-12px_rgba(0,0,0,0.65)] [scrollbar-width:none] [-ms-overflow-style:none]",
            "[&::-webkit-scrollbar]:hidden",
            "bg-background/95 backdrop-blur-sm",
            "lg:static lg:z-auto lg:mx-0 lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:backdrop-blur-0",
          )}
        >
          <div
            className="flex flex-nowrap gap-2.5 lg:flex-wrap"
            role="tablist"
            aria-label="Agenda tracks"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "shrink-0 rounded-full border px-6 py-2.5 font-sans text-sm font-semibold transition-all duration-200",
                  activeTab === tab.id
                    ? "border-cyan bg-cyan text-ink shadow-glow"
                    : "border-white/10 bg-white/5 text-white/60 hover:border-cyan/60 hover:text-cyan",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTrack ? (
          <ol className="relative">
            {/* Vertical timeline line */}
            <span
              className="absolute bottom-2 left-[19px] top-2 w-px sm:left-[107px]"
              style={{
                background:
                  "linear-gradient(to bottom, hsl(var(--cyan)/0.6), hsl(var(--blue)/0.3), hsl(var(--cyan)/0.08))",
              }}
              aria-hidden="true"
            />
            {activeTrack.sessions.map((session, index) => (
              <SessionItem
                key={`${session.time}-${session.title}`}
                session={session}
                index={index}
              />
            ))}
          </ol>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {communityExperiences.map((experience, index) => (
              <Reveal key={experience.name} delay={index * 60}>
                <div className="hover-lift h-full rounded-[22px] border border-cyan/20 bg-card p-6">
                  <h4 className="mb-2 font-display text-base font-bold text-cyan">
                    {experience.name}
                  </h4>
                  <p className="font-sans text-sm text-white/65">
                    {experience.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
