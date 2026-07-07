/**
 * ============================================================================
 * THREAD — AGENDA
 * ============================================================================
 * The full agenda of the day, organized by track (one tab per track).
 *
 * To add a session: copy an existing block { time, title, ... } and edit it.
 * To remove one: delete the whole block, including the comma.
 *
 * `location` must be one of the venue rooms listed below (it controls the
 * colored pill displayed next to the session):
 *   "signal"     -> Signal Room        (main stage)
 *   "community"  -> Community Zone     (expo floor)
 *   "strategy"   -> Strategy Room      (executive breakout)
 *   "lab"        -> Intelligence Lab   (hands-on breakout)
 *   "simulation" -> Simulation Zone    (scenarios breakout)
 *   "garden"     -> Private Garden     (evening)
 *
 * Optional flags:
 *   highlight: true  -> the session title glows (for big announcements)
 *   evening: true    -> the session is styled as an evening moment
 * ============================================================================
 */

export type RoomId = "signal" | "community" | "strategy" | "lab" | "simulation" | "garden";

export interface Session {
  /** Start time, displayed as-is (example: "09:30"). */
  time: string;
  /** Session title. */
  title: string;
  /** Optional short description below the title. */
  description?: string;
  /** One or several rooms (see the list at the top of this file). */
  locations: RoomId[];
  /** Optional: makes the title glow, for major announcements. */
  highlight?: boolean;
  /** Optional: styles the entry as an evening moment. */
  evening?: boolean;
}

export interface AgendaTrack {
  /** Internal identifier — do not change once created. */
  id: string;
  /** Label displayed on the tab button. */
  label: string;
  sessions: Session[];
}

/** Room display names for the colored pills. */
export const roomLabels: Record<RoomId, string> = {
  signal: "Signal Room",
  community: "Community Zone",
  strategy: "Strategy Room",
  lab: "Intelligence Lab",
  simulation: "Simulation Zone",
  garden: "Private Garden",
};

export const agendaIntro = {
  kicker: "October 15, 2026",
  title: "One day, two tracks, four zones.",
  description:
    "A shared morning plenary, then choose your track. The Community Zone stays alive all day. Draft agenda — sessions and speakers are being finalized.",
} as const;

export const agendaTracks: AgendaTrack[] = [
  {
    id: "plenary",
    label: "Morning plenary",
    sessions: [
      {
        time: "08:30",
        title: "Registration, coffee & Community Zone opens",
        locations: ["community"],
      },
      {
        time: "09:30",
        title: "Opening welcome",
        description: "What the day holds, how the zones work, and how to get the most out of it.",
        locations: ["signal"],
      },
      {
        time: "10:00",
        title: "Opening keynote: The future of threat-informed defense",
        description: "Filigran leadership, joined by an external guest speaker.",
        locations: ["signal"],
      },
      {
        time: "10:45",
        title: "Networking break: the community circuit opens",
        locations: ["community"],
      },
      {
        time: "11:15",
        title: "Customer & community keynote",
        description: "Field stories from the people running threat-informed programs.",
        locations: ["signal"],
      },
      {
        time: "12:00",
        title: "To be announced",
        locations: ["signal"],
      },
      {
        time: "12:15",
        title: "Networking lunch + interactive community experiences",
        locations: ["community", "garden"],
      },
    ],
  },
  {
    id: "executive",
    label: "Executive track",
    sessions: [
      {
        time: "13:30",
        title: "Executive roundtable: Threat-informed decision making",
        description:
          "External leaders, moderated by Filigran. Peer exchange on strategy and decision criteria.",
        locations: ["strategy"],
      },
      {
        time: "14:30",
        title: "Executive industry exchange",
        description: "Customer panels and roundtables by industry.",
        locations: ["strategy"],
      },
      {
        time: "15:45",
        title: "Executive open forum",
        description:
          "Unconference style: community-powered security, CTEM strategy, AI governance, board communication, threat-informed resilience.",
        locations: ["strategy"],
      },
      {
        time: "16:30",
        title: "Innovation briefing: XTM One, OpenAEV and the future of CTEM",
        description: "Roadmap direction and agentic workflows. Non-sales, by design.",
        locations: ["signal"],
      },
      {
        time: "17:15",
        title: "Closing session",
        locations: ["signal"],
      },
      {
        time: "18:00",
        title: "Garden cocktail & community aperitif",
        locations: ["garden"],
        evening: true,
      },
    ],
  },
  {
    id: "practitioner",
    label: "Practitioner track",
    sessions: [
      {
        time: "13:30",
        title: "Intelligence Lab: From intel to action workflows",
        description: "Filigran-led, with real customer workflows.",
        locations: ["lab"],
      },
      {
        time: "13:30",
        title: "Simulation workshop: Adversary validation scenarios",
        description: "Hands-on adversarial exposure validation.",
        locations: ["simulation"],
      },
      {
        time: "14:30",
        title: "Community-led session block",
        description: "Workshops, demos and case studies proposed by the community.",
        locations: ["lab", "simulation"],
      },
      {
        time: "15:45",
        title: "Practitioner open space",
        description:
          "Unconference: detection engineering, CTI workflows, automation, purple teaming, OpenCTI integrations, analyst tradecraft.",
        locations: ["community"],
      },
      {
        time: "16:30",
        title: "Community AMA + contributor sessions",
        locations: ["community"],
      },
      {
        time: "17:15",
        title: "Closing session + community recognition",
        locations: ["signal"],
      },
      {
        time: "18:00",
        title: "Garden cocktail & community aperitif",
        locations: ["garden"],
        evening: true,
      },
    ],
  },
];
