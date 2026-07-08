/**
 * sanity/schemas.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Sanity Studio schema definitions for the THREAD conference website.
 *
 * HOW TO USE
 * ──────────
 * 1. Create a new Sanity project at https://www.sanity.io/get-started
 *    (or use an existing one).
 *
 * 2. Create a Sanity Studio project in a separate directory:
 *      npm create sanity@latest -- --project <YOUR_PROJECT_ID> --dataset production
 *
 * 3. Copy this file into the Studio's `schemaTypes/` directory and import
 *    all exports in your `schemaTypes/index.ts`:
 *      export const schemaTypes = [
 *        siteSettings, pageContent, agendaTrack,
 *        resource, sponsorshipConfig, sponsor,
 *      ];
 *
 * 4. Add the following GitHub repository secrets so the CI pipeline can pull
 *    content at build time:
 *      SANITY_PROJECT_ID   your project ID (visible in sanity.io/manage)
 *      SANITY_DATASET      dataset name (usually "production")
 *      SANITY_TOKEN        a read-only API token
 *
 * 5. Create the singleton documents in the Studio:
 *      • "Site Settings"      (type: siteSettings)
 *      • "Page Content"       (type: pageContent)
 *      • "Sponsorship Config" (type: sponsorshipConfig)
 *    and as many agendaTrack, resource, and sponsor documents as needed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { defineType, defineField, defineArrayMember } from "sanity";

// ─── Reusable field groups ────────────────────────────────────────────────────

const linkField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({ name: "label", title: "Label", type: "string" }),
      defineField({ name: "url", title: "URL", type: "url" }),
    ],
  });

// ─── siteSettings (singleton) ─────────────────────────────────────────────────

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    // ── Event ──
    defineField({
      name: "event",
      title: "Event",
      type: "object",
      fields: [
        defineField({ name: "name", title: "Event name", type: "string" }),
        defineField({ name: "edition", title: "Edition label", type: "string" }),
        defineField({ name: "poweredBy", title: "Powered-by line", type: "string" }),
        defineField({ name: "dateLabel", title: "Date label (display only)", type: "string" }),
        defineField({
          name: "countdownTo",
          title: "Countdown target",
          type: "object",
          fields: [
            defineField({ name: "year", type: "number", title: "Year" }),
            defineField({ name: "month", type: "number", title: "Month (1–12)" }),
            defineField({ name: "day", type: "number", title: "Day" }),
            defineField({ name: "hour", type: "number", title: "Hour (Paris time)" }),
            defineField({ name: "minute", type: "number", title: "Minute" }),
          ],
        }),
        defineField({ name: "venueShort", title: "Venue (short)", type: "string" }),
        defineField({ name: "admission", title: "Admission label", type: "string" }),
        defineField({ name: "pitch", title: "Pitch sentence", type: "text" }),
        defineField({ name: "credential", title: "Credential sentence", type: "string" }),
        defineField({ name: "credentialEmphasis", title: "Credential emphasis", type: "string" }),
        defineField({ name: "contactEmail", title: "Contact email", type: "string" }),
      ],
    }),

    // ── At a glance ──
    defineField({
      name: "glance",
      title: "At a glance",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: { list: ["calendar", "map", "tracks", "garden"] },
            }),
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "detail", type: "string", title: "Detail" }),
          ],
        }),
      ],
    }),
    defineField({ name: "glanceNote", title: "At-a-glance note", type: "string" }),

    // ── Venue ──
    defineField({
      name: "venue",
      title: "Venue section",
      type: "object",
      fields: [
        defineField({ name: "kicker", type: "string", title: "Kicker" }),
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({ name: "address", type: "string", title: "Address" }),
        defineField({ name: "dateAndHours", type: "string", title: "Date & hours" }),
        defineField({ name: "capacity", type: "string", title: "Capacity note" }),
        defineField({ name: "gardenNote", type: "string", title: "Garden note" }),
        defineField({ name: "landmarks", type: "string", title: "Landmarks" }),
        defineField({ name: "transit", type: "string", title: "Transit" }),
        defineField({ name: "mapsUrl", type: "url", title: "Google Maps URL" }),
      ],
    }),

    // ── Register ──
    defineField({
      name: "register",
      title: "Register section",
      type: "object",
      fields: [
        defineField({ name: "kicker", type: "string", title: "Kicker" }),
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({ name: "primaryButton", type: "string", title: "Primary button label" }),
        defineField({ name: "secondaryButton", type: "string", title: "Secondary button label" }),
        defineField({ name: "note", type: "string", title: "Note" }),
      ],
    }),

    // ── Footer ──
    defineField({
      name: "footerLinks",
      title: "Footer links",
      type: "object",
      fields: [
        defineField({
          name: "filigran",
          title: "Filigran links",
          type: "array",
          of: [defineArrayMember({ type: "object", fields: [linkField("label", "Label"), linkField("url", "URL")] })],
        }),
        defineField({
          name: "community",
          title: "Community links",
          type: "array",
          of: [defineArrayMember({ type: "object", fields: [linkField("label", "Label"), linkField("url", "URL")] })],
        }),
      ],
    }),
    defineField({
      name: "footerText",
      title: "Footer text",
      type: "object",
      fields: [
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({ name: "filigree", type: "text", title: "Filigree sentence" }),
      ],
    }),

    // ── Agenda intro ──
    defineField({
      name: "agendaIntro",
      title: "Agenda intro",
      type: "object",
      fields: [
        defineField({ name: "kicker", type: "string", title: "Kicker" }),
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "description", type: "text", title: "Description" }),
      ],
    }),
  ],
});

// ─── pageContent (singleton) ──────────────────────────────────────────────────

export const pageContent = defineType({
  name: "pageContent",
  title: "Page Content",
  type: "document",
  fields: [
    // ── Why section ──
    defineField({
      name: "why",
      title: "Why THREAD section",
      type: "object",
      fields: [
        defineField({ name: "kicker", type: "string", title: "Kicker" }),
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({
          name: "paragraphs",
          type: "array",
          title: "Paragraphs",
          of: [defineArrayMember({ type: "text" })],
        }),
        defineField({
          name: "tags",
          type: "array",
          title: "Tags",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),

    // ── Audiences ──
    defineField({
      name: "audiences",
      title: "Audiences section",
      type: "object",
      fields: [
        defineField({ name: "kicker", type: "string", title: "Kicker" }),
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({
          name: "cards",
          type: "array",
          title: "Audience cards",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "name", type: "string", title: "Name" }),
                defineField({ name: "tagline", type: "string", title: "Tagline" }),
                defineField({
                  name: "icon",
                  type: "string",
                  title: "Icon",
                  options: { list: ["shield", "code"] },
                }),
                defineField({
                  name: "paragraphs",
                  type: "array",
                  title: "Paragraphs",
                  of: [defineArrayMember({ type: "text" })],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ── Experience zones ──
    defineField({
      name: "zones",
      title: "Experience zones section",
      type: "object",
      fields: [
        defineField({ name: "kicker", type: "string", title: "Kicker" }),
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({
          name: "cards",
          type: "array",
          title: "Zone cards",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "id", type: "string", title: "ID (e.g. 01)" }),
                defineField({ name: "name", type: "string", title: "Name" }),
                defineField({ name: "kind", type: "string", title: "Kind (subtitle)" }),
                defineField({ name: "description", type: "text", title: "Description" }),
                defineField({
                  name: "color",
                  type: "string",
                  title: "Accent color",
                  options: { list: ["electric", "cyan", "blue", "indigo", "green"] },
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ── Speakers ──
    defineField({
      name: "speakers",
      title: "Speakers section",
      type: "object",
      fields: [
        defineField({ name: "kicker", type: "string", title: "Kicker" }),
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({
          name: "cards",
          type: "array",
          title: "Speaker placeholder cards",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "name", type: "string", title: "Name" }),
                defineField({ name: "role", type: "string", title: "Role" }),
              ],
            }),
          ],
        }),
        defineField({ name: "note", type: "string", title: "Note (before email link)" }),
      ],
    }),

    // ── Community experiences ──
    defineField({
      name: "communityExperiences",
      title: "Community experiences",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", title: "Name" }),
            defineField({ name: "description", type: "text", title: "Description" }),
          ],
        }),
      ],
    }),
  ],
});

// ─── agendaTrack (multiple) ───────────────────────────────────────────────────

export const agendaTrack = defineType({
  name: "agendaTrack",
  title: "Agenda Track",
  type: "document",
  fields: [
    defineField({
      name: "trackId",
      title: "Track ID",
      type: "string",
      description: "Internal identifier — do not change once created (e.g. plenary, executive, practitioner).",
    }),
    defineField({ name: "label", title: "Tab label", type: "string" }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first.",
    }),
    defineField({
      name: "sessions",
      title: "Sessions",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "time", type: "string", title: "Time (e.g. 09:30)" }),
            defineField({ name: "title", type: "string", title: "Session title" }),
            defineField({ name: "description", type: "text", title: "Description (optional)" }),
            defineField({
              name: "locations",
              title: "Locations",
              type: "array",
              of: [
                defineArrayMember({
                  type: "string",
                  options: {
                    list: [
                      { title: "Signal Room", value: "signal" },
                      { title: "Community Zone", value: "community" },
                      { title: "Strategy Room", value: "strategy" },
                      { title: "Intelligence Lab", value: "lab" },
                      { title: "Simulation Zone", value: "simulation" },
                      { title: "Private Garden", value: "garden" },
                    ],
                  },
                }),
              ],
            }),
            defineField({
              name: "highlight",
              type: "boolean",
              title: "Highlight (glow effect)",
              initialValue: false,
            }),
            defineField({
              name: "evening",
              type: "boolean",
              title: "Evening session",
              initialValue: false,
            }),
          ],
        }),
      ],
    }),
  ],
});

// ─── resource (multiple) ─────────────────────────────────────────────────────

export const resource = defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Badge type",
      type: "string",
      description: "Short label shown before the title (e.g. Blog, Customer story, Report).",
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "url", title: "URL", type: "url" }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first in the scrolling ribbon.",
    }),
  ],
});

// ─── sponsorshipConfig (singleton) ────────────────────────────────────────────

export const sponsorshipConfig = defineType({
  name: "sponsorshipConfig",
  title: "Sponsorship Config",
  type: "document",
  fields: [
    defineField({
      name: "show",
      title: "Show sponsor logos section",
      type: "boolean",
      description: "Set to true once you have at least one confirmed sponsor.",
      initialValue: false,
    }),
    defineField({ name: "kicker", title: "Logos section kicker", type: "string" }),
    defineField({ name: "title", title: "Logos section title", type: "string" }),
    defineField({
      name: "sponsorship",
      title: "Sponsorship packages section",
      type: "object",
      fields: [
        defineField({ name: "kicker", type: "string", title: "Kicker" }),
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({
          name: "tiers",
          type: "array",
          title: "Tiers",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "name", type: "string", title: "Tier name" }),
                defineField({ name: "tagline", type: "string", title: "Tagline" }),
                defineField({
                  name: "perks",
                  type: "array",
                  title: "Perks",
                  of: [defineArrayMember({ type: "string" })],
                }),
                defineField({
                  name: "highlighted",
                  type: "boolean",
                  title: "Featured tier",
                  initialValue: false,
                }),
                defineField({
                  name: "color",
                  type: "string",
                  title: "Accent color",
                  options: { list: ["electric", "cyan", "blue", "indigo"] },
                }),
              ],
            }),
          ],
        }),
        defineField({ name: "cta", type: "string", title: "CTA button label" }),
        defineField({ name: "note", type: "string", title: "Note" }),
      ],
    }),
  ],
});

// ─── sponsor (multiple) ───────────────────────────────────────────────────────

export const sponsor = defineType({
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({
      name: "logoPath",
      title: "Logo path",
      type: "string",
      description:
        "Path to the logo file relative to the public/ folder (e.g. /sponsors/acme-corp.svg).",
    }),
    defineField({ name: "url", title: "Website URL", type: "url" }),
    defineField({
      name: "tier",
      title: "Tier",
      type: "string",
      options: { list: ["Premier", "Partner", "Supporter"] },
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first. Premier sponsors are always shown first.",
    }),
  ],
});
