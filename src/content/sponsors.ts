/**
 * ============================================================================
 * THREAD — SPONSORS & SPONSORSHIP PACKAGES
 * ============================================================================
 * Two sections live here:
 *
 *   1. `sponsorship`  — the "Become a sponsor" packages section (always visible)
 *   2. `sponsors`     — the sponsor logo showcase (hidden until you have sponsors)
 *
 * ── HOW TO ADD A SPONSOR LOGO ──────────────────────────────────────────────
 *   1. Drop the logo file into the `public/sponsors/` folder.
 *      (Create the folder if it doesn't exist yet.)
 *      Name it clearly, e.g. `acme-corp.svg` or `acme-corp.png`.
 *      SVG is preferred — it scales perfectly at any size.
 *
 *   2. Add an entry to the `sponsors.items` array below:
 *        { name: "Acme Corp", logoPath: "/sponsors/acme-corp.svg", url: "https://acme.com", tier: "Premier" }
 *
 *   3. Set `sponsors.show` to `true` (it is `false` by default).
 *      When `false` the entire logo section is invisible — no empty grid,
 *      no layout shift. Flip it to `true` when you have at least one sponsor.
 *
 *   4. Push to main — done. No other code changes needed.
 *
 * ── HOW TO RENAME / EDIT TIERS ────────────────────────────────────────────
 *   Edit the `name`, `tagline`, and `perks` fields in `sponsorship.tiers`
 *   below. The tier `color` controls the accent stripe on each card:
 *   available values are "electric" | "cyan" | "blue" | "indigo".
 *   Mark the featured tier with `highlighted: true` (only one at a time).
 * ============================================================================
 */

/** ------------------------------------------------------- SPONSORSHIP PACKAGES */

export const sponsorship = {
  kicker: "Sponsors",
  title: "Support the community. Shape the conversation.",
  description:
    "THREAD is a community-first event. Sponsors make it possible — and become part of it. Reach out to discuss the packages and find the best fit for your organization.",
  /**
   * One card per tier. Rename the `name` fields to your actual tier names
   * once they are defined. The order here is the order on screen (left → right).
   */
  tiers: [
    {
      name: "Supporter",
      tagline: "Visibility and community presence at THREAD.",
      perks: [
        "Logo on the THREAD website",
        "Brand presence at the venue",
        "Complimentary passes",
      ],
      highlighted: false,
      color: "blue" as const,
    },
    {
      name: "Partner",
      tagline: "Extended visibility and a seat at the table.",
      perks: [
        "All Supporter benefits",
        "Logo in event communications",
        "Branded presence in the Community Zone",
        "Additional complimentary passes",
      ],
      highlighted: true,
      color: "cyan" as const,
    },
    {
      name: "Premier",
      tagline: "Premier presence across the full event.",
      perks: [
        "All Partner benefits",
        "Speaking or workshop opportunity",
        "Premier logo placement — website, signage & slides",
        "Extended complimentary passes",
        "Co-branded communications",
      ],
      highlighted: false,
      color: "electric" as const,
    },
  ],
  /** Label for the CTA button at the bottom of every tier card. */
  cta: "Become a sponsor",
  /** Small note displayed under the tier grid. */
  note: "All packages are on request — get in touch and we will find the right fit.",
} as const;

/** ------------------------------------------------------- SPONSOR LOGOS */

export interface SponsorItem {
  /** Displayed as the image alt text and aria-label on the link. */
  name: string;
  /**
   * Path to the logo file relative to the `public/` folder.
   * Example: "/sponsors/acme-corp.svg"
   */
  logoPath: string;
  /** Sponsor website — opens in a new tab. */
  url: string;
  /**
   * Optional — must match one of the tier `name` values above.
   * Premier sponsors are displayed first, then Partner, then Supporter.
   */
  tier?: "Premier" | "Partner" | "Supporter";
}

export const sponsors: {
  /**
   * Set to `true` when you have at least one confirmed sponsor.
   * The entire logo section is hidden while this is `false`.
   */
  show: boolean;
  kicker: string;
  title: string;
  items: SponsorItem[];
} = {
  show: false,
  kicker: "Our sponsors",
  title: "The organizations making THREAD possible.",
  items: [
    // Add sponsor entries here. Example:
    // { name: "Acme Corp", logoPath: "/sponsors/acme-corp.svg", url: "https://acme.com", tier: "Premier" },
  ],
};
