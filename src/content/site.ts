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

  /** Admission note shown in the hero banner. */
  admission: "Invitation only",

  /** The one-line pitch under the title. The <accent> words are highlighted. */
  pitch:
    "The annual gathering of the global threat intelligence and cyber defense community — where intelligence, exposure and action come together.",

  /** Signature sentence at the bottom of the hero. */
  credential: "Kept small on purpose —",
  credentialEmphasis: "for the people who do the work.",

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

/** Key facts displayed in the "facts" band. */
export const facts = [
  { value: "Oct 15", label: "one full day in Paris" },
  { value: "2", label: "tracks: executive & practitioner" },
  { value: "5", label: "spaces across the venue" },
  { value: "1", label: "evening aperitif in the garden" },
] as const;

/** Sentence displayed under the facts band. */
export const factsNote =
  "Built around doing: labs, workshops, roundtables and open spaces — not slides.";

/** Venue details section. */
export const venue = {
  kicker: "The venue",
  title: "Les Jardins de Saint-Dominique",
  description:
    "A discreet address in the 7th arrondissement, minutes from Les Invalides — an auditorium, intimate salons, an exhibition floor and a private garden for the evening aperitif.",
  address: "49-51 rue Saint-Dominique, 75007 Paris",
  dateAndHours: "Thursday, October 15, 2026 — 08:30 to 19:00",
  capacity: "Attendance by invitation",
  gardenNote: "Private garden for the evening cocktail",
  landmarks: "Les Invalides · Musée d'Orsay · Assemblée Nationale",
  transit: "Métro 8 · 12 · 13 / RER C — Invalides",
  mapsUrl:
    "https://maps.google.com/?q=Les+Jardins+de+Saint-Dominique,+49+Rue+Saint-Dominique,+75007+Paris",
} as const;

/** Final call-to-action section, at the bottom of the page. */
export const register = {
  kicker: "Join us",
  title: "Kept small on purpose.",
  description:
    "THREAD gathers the open-source threat management community — analysts, engineers, contributors and the leaders they work with. Attendance is by invitation, and space is limited. If that sounds like you, tell us who you are.",
  primaryButton: "Request an invitation",
  secondaryButton: "Propose a session",
  note: "Registration opens soon. Invitations are personal and non-transferable.",
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
