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
  admission: "Inaugural Event",

  /** The one-line pitch under the title. The <accent> words are highlighted. */
  pitch:
    "The annual gathering of the global threat intelligence and cyber defense community — where intelligence, exposure management and action come together.",

  /** Signature sentence at the bottom of the hero. */
  credential: "",
  credentialEmphasis: "",

  /** Email used by all the buttons of the site. */
  contactEmail: "thread@filigran.io",
} as const;

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
    "In the heart of the 7th arrondissement, 5 minutes from Les Invalides — an auditorium, breakout salons, an exhibition floor and a garden for the evening aperitif.",
  address: "49-51 rue Saint-Dominique, 75007 Paris",
  dateAndHours: "Thursday, October 15, 2026 — 9:00am to 6:00pm",
  capacity: "Open to the community — registration now open",
  gardenNote: "Private garden for the evening cocktail",
  landmarks: "Les Invalides · Musée d'Orsay · Assemblée Nationale",
  transit: "Métro 8 · 12 · 13 / RER C — Invalides",
  mapsUrl:
    "https://maps.google.com/?q=Les+Jardins+de+Saint-Dominique,+49+Rue+Saint-Dominique,+75007+Paris",
} as const;

/**
 * Builds an Uber deep link that pre-fills the given address as the drop-off
 * point. Falls back gracefully to the Uber homepage if the app isn't installed.
 */
const buildUberUrl = (formattedAddress: string) =>
  `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${encodeURIComponent(
    formattedAddress,
  )}`;

/** Uber deep link that pre-fills the venue address as the drop-off point. */
export const venueUberUrl = buildUberUrl(`${venue.title}, ${venue.address}`);

/** Suggested hotels near the venue, for the dedicated "Nearby hotels" page. */
export const hotels = [
  {
    name: "Hôtel Bourgogne & Montana",
    address: "3 Rue de Bourgogne, 75007 Paris",
    mapsUrl:
      "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e66fd446ca113b:0x6d06468c5f16ec69?sa=X&ved=1t:8290&hl=fr-FR&ictx=111",
  },
  {
    name: "Hôtel de L'Empereur",
    address: "2 Rue Chevert, 75007 Paris",
    mapsUrl:
      "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e67027ed87adb9:0x92b6d4a9938a4fbd?sa=X&ved=1t:8290&hl=fr-FR&ictx=111",
  },
  {
    name: "Le Pavillon Hôtel",
    address: "54 Rue Saint-Dominique, 75007 Paris",
    mapsUrl:
      "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e66fd9b7d5e1c7:0x371399a68b45e247?sa=X&ved=1t:8290&hl=fr-FR&ictx=111",
  },
  {
    name: "Timhotel Invalides Eiffel",
    address: "35 Boulevard de la Tour-Maubourg, 75007 Paris",
    mapsUrl:
      "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e66fd8329a331f:0xaa35dda874c16329?sa=X&ved=1t:8290&hl=fr-FR&ictx=111",
  },
  {
    name: "L'Opale Noire",
    address: "20 Rue de Bellechasse, 75007 Paris",
    mapsUrl:
      "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e66fa309530ef1:0x53eafdcbd6fd7085?sa=X&ved=1t:8290&ictx=111",
  },
] as const;

/** Per-hotel Uber deep links, keyed by the hotel's own address. */
export const hotelUberUrls = hotels.map((hotel) => ({
  name: hotel.name,
  url: buildUberUrl(`${hotel.name}, ${hotel.address}`),
}));

/** Copy for the dedicated "Nearby hotels" page. */
export const hotelsPage = {
  kicker: "Where to stay",
  title: "Hotels near the venue",
  description:
    "A handful of hotels within walking distance of Les Jardins de Saint-Dominique, in the 7th arrondissement. These are independent suggestions, not official partners — book directly with the hotel of your choice.",
  note: "Not affiliated with or booked by Filigran. Availability and rates are managed by each hotel.",
} as const;

/** Final call-to-action section, at the bottom of the page. */
export const register = {
  kicker: "Join us",
  title: "This is your event.",
  description:
    "THREAD gathers the open-source threat management community — analysts, engineers, contributors and the leaders they work with. One day to share what works, learn from each other and meet in person the people you know from Slack and GitHub.",
  primaryButton: "Request your seat",
  note: "Registration opens soon — leave your details and you will be the first to know.",
} as const;

/** Links displayed in the footer. */
export const footerLinks = {
  filigran: [
    { label: "filigran.io", url: "https://filigran.io" },
    { label: "OpenCTI", url: "https://filigran.io/platforms/opencti/" },
    { label: "OpenAEV", url: "https://filigran.io/platforms/openaev/" },
    { label: "XTM One", url: "https://filigran.io/platform/xtm-one/" },
  ],
  community: [
    { label: "Slack community", url: "https://community.filigran.io/" },
    { label: "GitHub", url: "https://github.com/FiligranHQ" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/filigran/" },
    { label: "X", url: "https://x.com/FiligranHQ" },
    { label: "YouTube", url: "https://www.youtube.com/@Filigran" },
  ],
} as const;

/**
 * HubSpot registration form embedded in the "Join Us" section.
 * Update `portalId` and `formId` with the values from the HubSpot embed code.
 * `region` is "na1" for North America accounts or "eu1" for European accounts.
 */
export const hubspotForm = {
  /** Numeric portal ID, e.g. "1234567". */
  portalId: "26791207",
  /** Form GUID, e.g. "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx". */
  formId: "66daf638-f969-4459-9c5b-1454be0fdb90",
  region: "eu1",
} as const;

export const footerText = {
  description:
    "Filigran provides open-source cybersecurity solutions covering threat intelligence management, adversarial exposure validation and cyber risk management.",
  filigree:
    "Filigran, from filigree — fine threads assembled with precision into something intricate and strong.",
  copyright: `© ${new Date().getFullYear()} Filigran. All rights reserved.`,
} as const;
