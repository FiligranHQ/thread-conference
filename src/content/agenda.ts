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
 *   "forum"      -> Community Forum   (community breakout)
 *   "garden"     -> Private Garden     (evening)
 *
 * Optional flags:
 *   highlight: true  -> the session title glows (for big announcements)
 *   evening: true    -> the session is styled as an evening moment
 * ============================================================================
 */

export type RoomId = "signal" | "community" | "strategy" | "lab" | "forum" | "garden";

export interface Session {
  /**
   * Time range (example: "9:30 AM–9:45 AM"). Formatted for display via
   * `formatAgendaTime` (drops duplicate meridiem, adds non-breaking spaces).
   */
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
  forum: "Community Forum",
  garden: "Private Garden",
};

export const agendaIntro = {
  kicker: "October 15, 2026",
  title: "Agenda",
  description: "Draft agenda — sessions and speakers are being finalized.",
} as const;

export const agendaTracks: AgendaTrack[] = [
  {
    id: "plenary",
    label: "Morning plenary",
    sessions: [
      {
        time: "8:30 AM–9:30 AM",
        title: "Registration, Coffee & Community Zone Opens",
        description: "Arrive, grab coffee, explore demos, and start connecting with the community.",
        locations: ["community"],
      },
      {
        time: "9:30 AM–9:45 AM",
        title: "Opening Welcome",
        description: "Kick off the day with key themes, highlights, and what to expect.",
        locations: ["signal"],
      },
      {
        time: "9:45 AM–10:15 AM",
        title: "Filigran Lens: Behind the Build",
        description: "Explore Filigran's vision, momentum, and what is shaping the road ahead.",
        locations: ["signal"],
      },
      {
        time: "10:15 AM–10:30 AM",
        title: "Fireside Chat with Filigran",
        description: "Join an open conversation on product direction, community priorities, and market needs.",
        locations: ["signal"],
      },
      {
        time: "10:30 AM–11:00 AM",
        title: "Networking Break",
        description: "Meet peers, visit demos, and continue conversations across the community space.",
        locations: ["community"],
      },
      {
        time: "11:00 AM–11:30 AM",
        title: "Customer Lens: Life on the Other Side",
        description: "Hear outside perspectives on today's threat intelligence and cyber defense challenges.",
        locations: ["signal"],
      },
      {
        time: "11:30 AM–12:00 PM",
        title: "Current Market Drivers: CTEM & Risk Management",
        description: "Understand emerging risk, governance, and exposure management trends shaping security teams.",
        locations: ["signal"],
      },
      {
        time: "12:00 PM–12:15 PM",
        title: "The Road Ahead: Product Roadmap Highlights",
        description: "Get a high-level look at upcoming product priorities and innovation themes.",
        locations: ["signal"],
      },
      {
        time: "12:15 PM–1:15 PM",
        title: "Networking Lunch",
        description: "Refuel, connect with attendees, and explore the community and demo spaces.",
        locations: ["community"],
      },
    ],
  },
  {
    id: "leaders",
    label: "Leaders track",
    sessions: [
      {
        time: "1:15 PM–1:45 PM",
        title: "Leadership & Community Perspectives",
        description: "A high-level session exploring customer, community, and industry leadership themes.",
        locations: ["signal"],
      },
      {
        time: "1:45 PM–2:15 PM",
        title: "Behind the Briefing: Women's Experiences in Cyber Threat Intelligence",
        description: "A candid conversation on visibility, credibility, leadership, and community in cyber.",
        locations: ["signal"],
      },
      {
        time: "2:15 PM–3:00 PM",
        title: "Operationalizing Threat Knowledge and Resiliency",
        description: "Explore how teams turn intelligence, automation, and resilience into action.",
        locations: ["signal"],
      },
      {
        time: "3:00 PM–3:30 PM",
        title: "Afternoon Break",
        description: "Take a break, reconnect with peers, and explore the Community Zone.",
        locations: ["community"],
      },
      {
        time: "3:30 PM–4:00 PM",
        title: "Customer & Community Story",
        description: "Hear practical perspectives from leaders shaping the future of cyber defense.",
        locations: ["signal"],
      },
      {
        time: "4:00 PM–4:30 PM",
        title: "Executive Leadership Discussion",
        description: "A forward-looking discussion on priorities, challenges, and opportunities for security leaders.",
        locations: ["signal"],
      },
    ],
  },
  {
    id: "industry",
    label: "Industry track",
    sessions: [
      {
        time: "1:15 PM–2:15 PM",
        title: "Government C-Level Roundtable",
        description: "A focused executive exchange on strategy, governance, ROI, and partnerships.",
        locations: ["strategy"],
      },
      {
        time: "2:15 PM–3:00 PM",
        title: "Sector-Focused Strategy Session",
        description: "Explore industry-specific security priorities, challenges, and resilience strategies.",
        locations: ["strategy"],
      },
      {
        time: "3:00 PM–3:30 PM",
        title: "Afternoon Break",
        description: "Take a break, reconnect with peers, and explore the Community Zone.",
        locations: ["community"],
      },
      {
        time: "3:30 PM–4:30 PM",
        title: "Financial Services Customer Session",
        description: "Hear customer perspectives on security, resilience, and transformation in financial services.",
        locations: ["strategy"],
      },
    ],
  },
  {
    id: "practitioner",
    label: "Practitioner track",
    sessions: [
      {
        time: "1:15 PM–2:15 PM",
        title: "THREAD: Unravel",
        description: "A hands-on challenge exploring CTI, incident response, detection, and hidden surprises.",
        locations: ["lab"],
      },
      {
        time: "2:15 PM–3:00 PM",
        title: "Designing the Right Architecture for Your Filigran Journey",
        description: "Learn practical frameworks for scalable, resilient, and future-ready deployment decisions.",
        locations: ["lab"],
      },
      {
        time: "3:00 PM–3:30 PM",
        title: "Afternoon Break",
        description: "Take a break, reconnect with peers, and explore the Community Zone.",
        locations: ["community"],
      },
      {
        time: "3:30 PM–4:00 PM",
        title: "Hands-on Lab: Build Your Own Agent",
        description: "Explore agent-building concepts through a practical, interactive product experience.",
        locations: ["lab"],
      },
      {
        time: "4:00 PM–4:30 PM",
        title: "Interactive Training Session",
        description: "Close the afternoon with an engaging, practical learning experience for practitioners.",
        locations: ["lab"],
      },
    ],
  },
  {
    id: "community-track",
    label: "Community track",
    sessions: [
      {
        time: "1:15 PM–2:00 PM",
        title: "Closing the CTEM Loop",
        description: "Explore how OpenCTI and OpenAEV support the intelligence lifecycle end to end.",
        locations: ["forum"],
      },
      {
        time: "2:00 PM–2:30 PM",
        title: "Community-Led Session",
        description: "A community-driven session highlighting shared experiences, ideas, and open discussion.",
        locations: ["forum"],
      },
      {
        time: "2:30 PM–3:00 PM",
        title: "Community Roundtable",
        description: "Join an interactive discussion shaped by community questions, priorities, and perspectives.",
        locations: ["forum"],
      },
      {
        time: "3:00 PM–3:30 PM",
        title: "Afternoon Break",
        description: "Take a break, reconnect with peers, and explore the Community Zone.",
        locations: ["community"],
      },
      {
        time: "3:30 PM–4:30 PM",
        title: "Roadpick",
        description: "Help shape the roadmap by voting on the product features that matter most.",
        locations: ["forum"],
      },
    ],
  },
  {
    id: "closing",
    label: "Closing & networking",
    sessions: [
      {
        time: "4:30 PM–5:00 PM",
        title: "Awards Ceremony",
        description: "Celebrate community achievements, contributions, and standout moments from the day.",
        locations: ["signal"],
      },
      {
        time: "5:00 PM–6:00 PM",
        title: "Garden Cocktail & Community Aperitif",
        description: "Wrap up the day with drinks, conversation, and informal community networking.",
        locations: ["garden"],
        evening: true,
      },
    ],
  },
];
