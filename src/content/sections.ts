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
    "That is not a metaphor. That is literally what everyone in this community does every day.",
    "It is also who we are. Filigran comes from filigree — the craft of assembling extremely fine threads into something precise, intricate and strong. Our logo is a ball of yarn. Pull one thread, and the structure reveals itself.",
    "THREAD works the same way. One conversation leads to another. One idea connects to the next. Someone in the room may hold the thread you have been looking for. Together, the community weaves something no report, feed or vendor briefing can replicate: shared intelligence built on trust, experience and real-world practice.",
  ],
  /** Small pills displayed under the story. */
  tags: [
    "Community-driven, not a vendor conference",
    "Practitioner-first",
    "High-touch for leaders",
  ],
} as const;

/** ---------------------------------------------------------------- AUDIENCES */

export const audiences = {
  kicker: "Two audiences, one thread",
  title: "Built for the people who do the work — and the people who decide.",
  cards: [
    {
      name: "Security leaders",
      tagline: "High-signal. Strategic. Peer-level.",
      icon: "shield" as const,
      points: [
        "An exclusive, small-group environment — peer conversations, zero sales pressure",
        "Strategic clarity: exposure + intelligence → decision → action",
        "Peer benchmarks on operationalizing threat intelligence and exposure management",
        "A clear view of what is next: roadmap direction and ecosystem momentum",
      ],
      quote: "“Selected, not targeted.”",
    },
    {
      name: "Practitioners",
      tagline: "Hands-on. Community-led. Fun, yet smart.",
      icon: "code" as const,
      points: [
        "Sessions led by people who do the work — not people who sell to people who do the work",
        "Concrete skills and workflows to apply right away: tradecraft, setups, playbooks",
        "Labs, workshops, scenario learning and certification",
        "Community belonging: this is your event — with recognition for contributions",
      ],
      quote: "“It did not feel like a vendor event.”",
    },
  ],
} as const;

/** ---------------------------------------------------------------- ZONES */

export const zones = {
  kicker: "The experience",
  title: "Five zones. One woven day.",
  description:
    "Les Jardins de Saint-Dominique becomes a living map: follow your thread from the main stage to the labs, from roundtables to the garden.",
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
        "Executive roundtables, industry exchanges and deep discussions — per industry, peer-level, off the record when it matters.",
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
        "One hour of privatized garden for the community aperitif. Theme cocktails at the OpenBAR — named after the conference names that did not make it.",
      color: "green" as const,
    },
  ],
} as const;

/** ---------------------------------------------------------------- SPEAKERS */

export const speakers = {
  kicker: "Voices",
  title: "Speakers worth the thread.",
  description:
    "Filigran founders and product leaders, customer CISOs, government voices and community contributors. The full line-up will be announced soon.",
  /** Placeholder cards — replace with real names + photos when announced. */
  cards: [
    { name: "Filigran leadership", role: "Vision keynote and product announcements" },
    { name: "Customer keynotes", role: "Transformation stories from security leaders" },
    { name: "Guest speakers", role: "Inspirational voices from the field" },
    { name: "Community contributors", role: "The people who build the ecosystem, on stage" },
  ],
  note: "Want to lead a session? Sessions are curated with the community — reach out at",
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
