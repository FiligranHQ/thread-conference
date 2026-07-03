import { useState } from "react";
import { cn } from "@/lib/utils";
import { agendaIntro, agendaTracks, roomLabels, type RoomId, type Session } from "@/content/agenda";
import { communityExperiences } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillStyles: Record<RoomId, string> = {
  signal: "text-[#16ebf9] border-[#16ebf9]/40 bg-[#16ebf9]/[0.07]",
  community: "text-[#6ea8ff] border-[#3378ff]/45 bg-[#3378ff]/[0.08]",
  strategy: "text-[#9aa8ff] border-[#333bff]/50 bg-[#333bff]/10",
  lab: "text-[#4fd6e8] border-[#00bfd6]/45 bg-[#00bfd6]/[0.08]",
  simulation: "text-[#b3e6ff] border-[#7acdff]/40 bg-[#7acdff]/[0.08]",
  garden: "text-[#2fd27e] border-[#2fd27e]/45 bg-[#2fd27e]/[0.08]",
};

const RoomPill = ({ room }: { room: RoomId }) => (
  <span
    className={cn(
      "mr-1.5 mt-0.5 inline-block rounded-full border px-3.5 py-1 text-[0.72rem] font-semibold tracking-wide",
      pillStyles[room],
    )}
  >
    {roomLabels[room]}
  </span>
);

const SessionItem = ({ session, index }: { session: Session; index: number }) => (
  <Reveal as="li" delay={index * 60} className="relative grid gap-1.5 py-4 pl-12 sm:grid-cols-[72px_1fr] sm:gap-10 sm:pl-0">
    {/* Timeline dot */}
    <span
      className={cn(
        "absolute left-[15px] top-7 z-[1] h-2.5 w-2.5 rounded-full border-2 bg-background sm:left-[87px]",
        session.evening ? "border-[#2fd27e]" : "border-cyan",
        session.highlight && "shadow-[0_0_14px_hsl(187_100%_42%/0.8)]",
      )}
      aria-hidden="true"
    />
    <span
      className={cn(
        "pt-1 font-mono text-[0.95rem] sm:text-right",
        session.evening ? "text-[#2fd27e]" : "text-cyan",
      )}
    >
      {session.time}
    </span>
    <div>
      <h4
        className={cn(
          "mb-1 text-[1.06rem] font-bold",
          session.highlight && "text-gradient-cyan",
        )}
      >
        {session.title}
      </h4>
      {session.description ? (
        <p className="mb-2 text-sm text-foreground/[0.68]">{session.description}</p>
      ) : null}
      {session.locations.map((room) => (
        <RoomPill key={room} room={room} />
      ))}
    </div>
  </Reveal>
);

export const AgendaSection = () => {
  const tabs = [...agendaTracks.map(({ id, label }) => ({ id, label })), { id: "community", label: "Community Zone" }];
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

        <Reveal>
          <div className="mb-10 flex flex-wrap gap-2.5" role="tablist" aria-label="Agenda tracks">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-full border px-6 py-2.5 text-sm font-semibold transition-all duration-200",
                  activeTab === tab.id
                    ? "border-cyan bg-cyan text-background shadow-glow"
                    : "border-white/10 bg-white/5 text-foreground/65 hover:border-cyan/60 hover:text-cyan",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {activeTrack ? (
          <ol className="relative">
            {/* Vertical timeline line */}
            <span
              className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-cyan/60 via-blue-500/35 to-cyan/[0.08] sm:left-[91px]"
              aria-hidden="true"
            />
            {activeTrack.sessions.map((session, index) => (
              <SessionItem key={`${session.time}-${session.title}`} session={session} index={index} />
            ))}
          </ol>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {communityExperiences.map((experience, index) => (
              <Reveal key={experience.name} delay={index * 60}>
                <div className="card-glass hover-lift h-full rounded-3xl p-6">
                  <h4 className="mb-2 text-base font-bold text-cyan">{experience.name}</h4>
                  <p className="text-sm text-foreground/70">{experience.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
