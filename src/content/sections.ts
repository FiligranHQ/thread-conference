/**
 * ============================================================================
 * THREAD — PAGE SECTIONS COPY
 * ============================================================================
 * All the editorial text of the page sections lives here:
 *   - "Why THREAD"  (the story)
 *   - Audiences     (executives / practitioners)
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
    { name: "Guest speakers", role: "Inspirational voices from the field", href: "/speakers" },
    { name: "Community contributors", role: "The people who build the ecosystem, on stage" },
  ],
  note: "Want to lead a session? The agenda is built with the community, reach out at",
  seeAllLabel: "See all speakers",
} as const;

/** ------------------------------------------------------- DEDICATED SPEAKERS PAGE */

/** Copy for the dedicated "/speakers" page. */
export const speakersPage = {
  kicker: "Voices",
  title: "Every speaker, in one place.",
  description:
    "The full THREAD line-up — Filigran leadership, customer keynotes, guest speakers and community contributors — will be announced soon.",
  comingSoon: "Line-up coming soon",
  eventSpeakers: {
    kicker: "On stage",
    title: "Event speakers",
    description: "The voices leading keynotes, talks and workshops at THREAD.",
    comingSoon: "Speaker line-up coming soon",
  },
  filigranTeam: {
    kicker: "From Filigran",
    title: "The Filigran team",
    description: "The founders, product leaders and engineers behind OpenCTI and OpenAEV.",
    comingSoon: "Team line-up coming soon",
  },
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
    description: "Watch real issues get fixed, live.",
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
    description: "Wine and champagne to toast the community, no theme required.",
  },
  {
    name: "FiligraM photo zone",
    description: "A long-lasting memento. Yes, there might be a photobooth.",
  },
  {
    name: "Swag & collectibles",
    description: "Limited-edition swag, cyber coins and collectible cards. Collect them all.",
  },
] as const;

/** ---------------------------------------------------------------- FAQ */

export interface FaqItem {
  q: string;
  a: string;
  cta?: { type: "convince-boss"; label: string };
}

export interface FaqCategory {
  name: string;
  items: FaqItem[];
}

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
      name: "Registration",
      items: [
        {
          q: "When will registration open?",
          a: "Registration is now open! Please request your seat via the registration form. We will confirm your participation within one week.",
        },
        {
          q: "Is THREAD open to everyone, or is it invitation-only?",
          a: "It's curated and selective by design, not an open trade show. Registrations are individual and non-transferable.",
        },
        {
          q: "How much does it cost to attend?",
          a: "Attendance is completely free of charge.",
        },
        {
          q: "How can I convince my boss to attend?",
          a: "Need to convince your boss? We've got you covered.",
          cta: { type: "convince-boss", label: "Get the Convince Your Manager Letter" },
        },
        {
          q: "Why should I attend?",
          a: "Honestly, why wouldn't you? One day, zero sales pitches, a room built entirely around people who actually do the work: hands-on labs, real threat simulations, and the kind of peer conversations that don't happen at a typical vendor event.",
        },
      ],
    },
    {
      name: "Logistics",
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
          q: "Are my travel expenses (hotel and transport) covered by Filigran?",
          a: "No, travel expenses are entirely at your own charge.",
        },
      ],
    },
    {
      name: "Agenda",
      items: [
        {
          q: "What does a day at THREAD look like?",
          a: "A shared morning plenary (keynotes, community/customer stories, a major product announcement), followed by an afternoon split across multiple tracks/zones, and closing with an awards ceremony and a private garden cocktail.",
        },
        {
          q: "When will the full agenda be published?",
          a: "The full event agenda will be available by mid-August. Check the Agenda tab for real-time updates.",
        },
        {
          q: "Will there be a product announcement?",
          a: "Yes, a major product announcement is planned during the morning plenary.",
        },
        {
          q: "Are there certifications available at THREAD?",
          a: "Yes, the Intelligence Lab track includes Filigran Academy workshops and certification sessions.",
        },
      ],
    },
    {
      name: "Community",
      items: [
        {
          q: 'What\'s the "Community Zone"?',
          a: "It is the heart of the event, active all day: talk-to-the-dev booth, AMAs, contributor wall, roadmap booth, a gamified \"circuit\" experience, product demos, and more.",
        },
        {
          q: "Is there a community awards moment?",
          a: 'Yes, there\'s a dedicated community awards segment called "The Signals," plus an Awards Ceremony on the day\'s agenda.',
        },
      ],
    },
  ] satisfies FaqCategory[],
} as const;
