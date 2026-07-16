/**
 * ============================================================================
 * THREAD — PAGE SECTIONS COPY
 * ============================================================================
 * All the editorial text of the page sections lives here:
 *   - "Why THREAD"  (the story)
 *   - Audiences     (executives / practitioners)
 *   - Zones         (the five experience zones)
 *   - Speakers      (placeholder cards until the line-up is announced)
 *
 * Edit the text between quotes ("...") — no code knowledge required.
 * ============================================================================
 */

/** ---------------------------------------------------------------- WHY */

export const why = {
  kicker: "Why THREAD",
  title: "Every investigation starts with one small thing.",
  /** Each entry below is one paragraph. Add or remove paragraphs freely. */
  paragraphs: [
    "An anomaly. An indicator. A signal that does not quite fit. So you pull on it — carefully, patiently. One connection reveals another. A pattern starts to emerge. What looked like noise gradually becomes a picture: the structure of a threat, visible at last.",
    "That is not a metaphor. That is what this community does every day — in SOCs, CTI teams, CERTs and research labs around the world.",
    "THREAD brings that community into one room. The people who use and build OpenCTI and OpenAEV, who write the connectors, share the playbooks, report the bugs and answer each other's questions on Slack and GitHub — together in person, for one day. Because some threads only connect when people actually meet.",
  ],
  /** Small pills displayed under the story — grounded in Filigran's CORE values. */
  tags: [
    "Plenary sessions",
    "Community-led workshops",
    "Interactive demos",
  ],
} as const;

/** ---------------------------------------------------------------- AUDIENCES */

export const audiences = {
  kicker: "Two audiences, one thread",
  title: "Built for the people who do the work — and the people who decide.",
  cards: [
    {
      name: "Security Leaders",
      tagline: "Strategic. Decision-makers. Focus on cyber risk reduction.",
      icon: "shield" as const,
      paragraphs: [
        "A high-value, high-touch experience designed around strategic insights, trusted peer conversations, and tangible outcomes.",
        "Expect closed-door roundtables with CISOs and security leaders from leading organizations — by industry, off the record, no sales pressure. Strategic clarity on XTM, CTEM, NIS2, DORA, and what comes next.",
      ],
    },
    {
      name: "Practitioners",
      tagline: "Hands-on. Community-led. Focus on technology optimization.",
      icon: "code" as const,
      paragraphs: [
        "A community-first gathering: CTI analysts, SOC teams, red/blue/purple teamers, GRC practitioners, open-source contributors — all in the same room. This is your event.",
        "Expect hands-on labs, Filigran certification sessions, adversarial simulations, CTF challenges, and the kind of frank, unfiltered conversations that only happen when the right people are in the same room.",
      ],
    },
  ],
} as const;

/** ---------------------------------------------------------------- ZONES */

export const zones = {
  kicker: "The experience",
  title: "One venue, six spaces.",
  description:
    "A main stage, an expo floor and three breakout rooms, each with its own purpose, from keynotes to hands-on labs to roundtables. Plus the garden for the evening.",
  /**
   * The `color` controls the top border of each card.
   * Available colors: "electric" | "cyan" | "blue" | "indigo" | "green"
   */
  cards: [
    {
      id: "01",
      name: "Signal Room",
      kind: "Main stage · Auditorium",
      description:
        "Vision, keynotes and thought leadership. Community and customer stories, major announcements: the moments everyone shares.",
      color: "electric" as const,
    },
    {
      id: "02",
      name: "Community Zone",
      kind: "Expo floor · All day",
      description:
        "The heart of THREAD. Talk-to-the-Dev, Ask-Me-Anything corner, Debug Live, contribution wall, roadmap booth, the OpenBAR and the interactive circuit.",
      color: "cyan" as const,
    },
    {
      id: "03",
      name: "Strategy Room",
      kind: "Breakout · Executive",
      description:
        "Roundtables and industry exchanges for security leaders. Honest discussions between people facing the same challenges.",
      color: "indigo" as const,
    },
    {
      id: "04",
      name: "Intelligence Lab",
      kind: "Breakout · Hands-on",
      description:
        "From intel to action: hands-on labs, use-case workshops, Filigran Academy sessions and certification.",
      color: "blue" as const,
    },
    {
      id: "05",
      name: "Simulation Zone",
      kind: "Breakout · Scenarios",
      description:
        "Command-center energy: scenario-based exercises, adversarial validation workshops and CTF sessions.",
      color: "electric" as const,
    },
    {
      id: "+",
      name: "The Garden",
      kind: "Private garden · Evening",
      description:
        "The evening aperitif in the private garden. Cocktails at the OpenBAR and time with the community to close the day.",
      color: "green" as const,
    },
  ],
} as const;

/** ---------------------------------------------------------------- SPEAKERS */

export const speakers = {
  kicker: "Voices",
  title: "The people on stage do the work.",
  description:
    "Filigran founders and product leaders, customer CISOs, government voices and community contributors. The full line-up will be announced soon.",
  /** Placeholder cards — replace with real names + photos when announced. */
  cards: [
    { name: "Filigran leadership", role: "Vision keynote and product announcements" },
    { name: "Customer keynotes", role: "Transformation stories from security leaders" },
    { name: "Guest speakers", role: "Inspirational voices from the field" },
    { name: "Community contributors", role: "The people who build the ecosystem, on stage" },
  ],
  note: "Want to lead a session? The agenda is built with the community, reach out at",
} as const;

/** ---------------------------------------------------------------- COMMUNITY ZONE */

export const communityExperiences = [
  {
    name: "Talk-to-the-Dev booth",
    description: "Meet the engineers behind the platforms. Ask the hard questions.",
  },
  {
    name: "Debug Live",
    description: "Watch real issues get fixed, live. Bring your own edge cases.",
  },
  {
    name: "Contribution Wall",
    description: "The names that make the ecosystem: top contributors, bug finders, community voices.",
  },
  {
    name: "Roadmap booth",
    description: "Where the platforms are heading — and your chance to bend the curve.",
  },
  {
    name: "The circuit",
    description: "A stamped card, a trail of booths and pods, a raffle at the end. Explore everything, win things.",
  },
  {
    name: "The OpenBAR",
    description: "Theme cocktails named after the conference names that did not make it.",
  },
  {
    name: "FiligraM photo zone",
    description: "A long-lasting memento. Yes, there will be a photobooth.",
  },
  {
    name: "Swag & collectibles",
    description: "Limited-edition swag, cyber coins and collectible cards. Collect them all.",
  },
] as const;

/** ---------------------------------------------------------------- FAQ */

export const faq = {
  kicker: "FAQ",
  title: "Your questions, answered.",
  description:
    "Everything you need to know before joining THREAD — from logistics to agenda.",
  categories: [
    {
      name: "General / About THREAD",
      items: [
        {
          q: "What is THREAD?",
          a: "Thread, powered by Filigran, is the annual gathering of the global threat intelligence and cyber defense community. It's a community-driven experience, not a vendor conference, built around real practitioners and real leaders.",
        },
        {
          q: "Is THREAD a Filigran product launch or sales event?",
          a: "No. THREAD is explicitly positioned as <em>not</em> a vendor conference, trade show, or product launch. It's community-first and practitioner-led, with no sales agenda.",
        },
      ],
    },
    {
      name: "Date & Logistics",
      items: [
        {
          q: "When and where does THREAD take place?",
          a: "Thursday, October 15, 2026, at Les Jardins Saint Dominique, Paris (7th arrondissement). One full day, in person.",
        },
        {
          q: "Will there be a broadcast of the event?",
          a: "No, the event will not be live-streamed. However, the sessions will be recorded and made available afterward for those who are unable to attend in person.",
        },
        {
          q: "How much does it cost to attend?",
          a: "Attendance is completely free of charge.",
        },
      ],
    },
    {
      name: "Attendance",
      items: [
        {
          q: "Is THREAD open to everyone, or is it invitation-only?",
          a: "It's curated and selective by design <s>(\"selected, not targeted\")</s>, not an open trade show. Registrations are individual and non-transferable.",
        },
        {
          q: "Why should I attend?",
          a: "Honestly, why wouldn't you? One day, zero sales pitches, a room built entirely around people who actually do the work: hands-on labs, real threat simulations, and the kind of peer conversations that don't happen at a typical vendor event. Need to convince your boss? We've got you covered with our Convince Your Manager Letter.",
        },
      ],
    },
  ],
} as const;
