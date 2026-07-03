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
    "That is not a metaphor. That is what this community does every day — in SOCs, CTI teams, CERTs and research labs around the world, much of it on open-source tools built and improved together.",
    "It is also where Filigran comes from. The name means filigree — fine threads assembled with precision into something intricate and strong. Our logo is a ball of yarn: thread by thread, the picture becomes clear.",
    "THREAD brings that community into one room. The people who use and build OpenCTI and OpenAEV, who write the connectors, share the playbooks, report the bugs and answer each other's questions on Slack and GitHub — together in person, for one day. Because some threads only connect when people actually meet.",
  ],
  /** Small pills displayed under the story — grounded in Filigran's CORE values. */
  tags: [
    "Open source at the core",
    "Community-led sessions",
    "Everyone at the same table",
  ],
} as const;

/** ---------------------------------------------------------------- AUDIENCES */

export const audiences = {
  kicker: "Two audiences, one thread",
  title: "Built for the people who do the work — and the people who decide.",
  cards: [
    {
      name: "Security leaders",
      tagline: "Strategic. Honest. Between peers.",
      icon: "shield" as const,
      points: [
        "Roundtable conversations with other security leaders — real talk, no sales agenda",
        "How other leaders operationalize threat intelligence and exposure management, with real benchmarks",
        "Roundtables per industry: finance, retail, government",
        "A clear view of where the ecosystem and the roadmap are heading",
      ],
      quote: "“I actually learned something.”",
    },
    {
      name: "Practitioners",
      tagline: "Hands-on. Community-led. Fun, yet smart.",
      icon: "code" as const,
      points: [
        "Sessions led by people who do the work — analysts, engineers, contributors",
        "Skills and workflows to apply the next day: tradecraft, setups, playbooks",
        "Labs, CTF, adversary simulation workshops and certification",
        "Recognition for the contributions that make the ecosystem work",
      ],
      quote: "“I had fun with smart people.”",
    },
  ],
} as const;

/** ---------------------------------------------------------------- ZONES */

export const zones = {
  kicker: "The experience",
  title: "One venue, five spaces.",
  description:
    "A main stage, an expo floor and three breakout rooms — each with its own purpose, from keynotes to hands-on labs to roundtables. Plus the garden for the evening.",
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
        "Vision, keynotes and thought leadership. Community and customer stories, major announcements — the moments everyone shares.",
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
        "Roundtables and industry exchanges for security leaders — honest discussions between people facing the same challenges.",
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
        "The evening aperitif in the private garden — cocktails at the OpenBAR and time with the community to close the day.",
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
  note: "Want to lead a session? The agenda is built with the community — reach out at",
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
