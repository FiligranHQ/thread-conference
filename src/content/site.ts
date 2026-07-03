/**
 * ============================================================================
 * THREAD — SITE SETTINGS
 * ============================================================================
 * This file contains the general information of the event.
 * Edit the text between quotes ("...") and save: the website updates
 * automatically after the change is pushed to the `main` branch.
 *
 * >>> You never need to touch any other folder than `src/content/`. <<<
 * ============================================================================
 */

export const event = {
  /** Event name, displayed in the hero and the navigation bar. */
  name: "THREAD",

  /** Edition label displayed next to the logo (small superscript). */
  edition: "26",

  /** Tagline displayed under the big THREAD title. */
  poweredBy: "Powered by Filigran",

  /** Date of the event. Used for display only. */
  dateLabel: "October 15, 2026",

  /**
   * Date used by the live countdown (year, month, day, hour, minute).
   * Month is written as a normal number: 10 = October.
   * Timezone: Paris.
   */
  countdownTo: { year: 2026, month: 10, day: 15, hour: 8, minute: 30 },

  /** Venue, short version for the hero banner. */
  venueShort: "Les Jardins de Saint-Dominique, Paris",

  /** Third item shown in the hero banner (after date and venue). */
  admission: "First edition",

  /** The one-line pitch under the title. The <accent> words are highlighted. */
  pitch:
    "The annual gathering of the global threat intelligence and cyber defense community — where intelligence, exposure and action come together.",

  /** Signature sentence at the bottom of the hero. */
  credential: "By the community, for the community —",
  credentialEmphasis: "one day to learn, share and meet.",

  /** Email used by all the buttons of the site. */
  contactEmail: "events@filigran.io",
} as const;

/** Words scrolling in the ribbon under the hero — the actual craft of the day. */
export const marqueeWords = [
  "Threat intelligence",
  "Exposure management",
  "Detection engineering",
  "Adversary simulation",
  "Purple teaming",
  "Analyst tradecraft",
  "Open source",
  "October 15 · Paris",
] as const;

/**
 * "At a glance" band: four practical facts about the day.
 * `icon` must be one of: "calendar" | "map" | "tracks" | "garden"
 */
export const glance = [
  {
    icon: "calendar" as const,
    title: "October 15, 2026",
    detail: "One full day, morning plenary to evening aperitif",
  },
  {
    icon: "map" as const,
    title: "Les Jardins de Saint-Dominique",
    detail: "Rue Saint-Dominique, Paris 7e — by Les Invalides",
  },
  {
    icon: "tracks" as const,
    title: "Two afternoon tracks",
    detail: "Executive roundtables · practitioner labs & workshops",
  },
  {
    icon: "garden" as const,
    title: "Garden evening",
    detail: "Community aperitif at the OpenBAR",
  },
] as const;

/** Sentence displayed under the "at a glance" band. */
export const glanceNote =
  "Built around doing: labs, workshops, roundtables and open spaces — not slides.";

/** Venue details section. */
export const venue = {
  kicker: "The venue",
  title: "Les Jardins de Saint-Dominique",
  description:
    "In the heart of the 7th arrondissement, minutes from Les Invalides — an auditorium, breakout salons, an exhibition floor and a garden for the evening aperitif.",
  address: "49-51 rue Saint-Dominique, 75007 Paris",
  dateAndHours: "Thursday, October 15, 2026 — 08:30 to 19:00",
  capacity: "Open to the community — registration opening soon",
  gardenNote: "Private garden for the evening cocktail",
  landmarks: "Les Invalides · Musée d'Orsay · Assemblée Nationale",
  transit: "Métro 8 · 12 · 13 / RER C — Invalides",
  mapsUrl:
    "https://maps.google.com/?q=Les+Jardins+de+Saint-Dominique,+49+Rue+Saint-Dominique,+75007+Paris",
} as const;

/** Final call-to-action section, at the bottom of the page. */
export const register = {
  kicker: "Join us",
  title: "This is your event.",
  description:
    "THREAD gathers the open-source threat management community — analysts, engineers, contributors and the leaders they work with. One day to share what works, learn from each other and meet in person the people you know from Slack and GitHub.",
  primaryButton: "Register your interest",
  secondaryButton: "Propose a session",
  note: "Registration opens soon — leave your details and you will be the first to know.",
} as const;

/** Links displayed in the footer. */
export const footerLinks = {
  filigran: [
    { label: "filigran.io", url: "https://filigran.io" },
    { label: "OpenCTI", url: "https://filigran.io/platforms/opencti/" },
    { label: "OpenAEV", url: "https://filigran.io/platforms/openaev/" },
    { label: "XTM One", url: "https://filigran.io/offerings/xtm-one/" },
  ],
  community: [
    { label: "Slack community", url: "https://community.filigran.io/" },
    { label: "GitHub", url: "https://github.com/FiligranHQ" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/filigran/" },
    { label: "X", url: "https://x.com/FiligranHQ" },
    { label: "YouTube", url: "https://www.youtube.com/@Filigran" },
  ],
} as const;

export const footerText = {
  description:
    "Filigran provides open-source cybersecurity solutions covering threat intelligence management, adversarial exposure validation and cyber risk management.",
  filigree:
    "Filigran, from filigree — fine threads assembled with precision into something intricate and strong.",
  copyright: `© ${new Date().getFullYear()} Filigran. All rights reserved.`,
  tagline: "Cohesion · Openness · Responsibility · Equity",
} as const;
