import { defineType, defineField, defineArrayMember } from "sanity";

/** One sponsor (document — one per company). */
export const sponsor = defineType({
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Company name",
      type: "string",
      description: "Used as the image alt text and aria-label.",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description:
        "Upload an SVG or PNG logo. SVG is preferred — it scales perfectly at any size. The image is served from Sanity CDN.",
      options: { accept: ".svg,.png,.jpg,.webp" },
    }),
    defineField({
      name: "url",
      title: "Website URL",
      type: "url",
      description: "Opens in a new tab when the logo is clicked.",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "tier",
      title: "Sponsorship tier",
      type: "string",
      description: "Controls display order: Premier → Partner → Supporter.",
      options: {
        list: [
          { title: "Premier", value: "Premier" },
          { title: "Partner", value: "Partner" },
          { title: "Supporter", value: "Supporter" },
        ],
        layout: "radio",
      },
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "tier", media: "logo" },
  },
});

/** Global sponsorship section settings (singleton). */
export const sponsorshipSettings = defineType({
  name: "sponsorshipSettings",
  title: "Sponsorship settings",
  type: "document",
  fields: [
    // ── Sponsor logo showcase ───────────────────────────────────────────────
    defineField({
      name: "show",
      title: "Show sponsor logos",
      type: "boolean",
      description:
        "Set to ON when you have at least one confirmed sponsor. The entire logo section is hidden while this is OFF.",
      initialValue: false,
    }),
    defineField({
      name: "showcaseKicker",
      title: "Logo showcase — kicker",
      type: "string",
      initialValue: "Our sponsors",
    }),
    defineField({
      name: "showcaseTitle",
      title: "Logo showcase — title",
      type: "string",
      initialValue: "The organizations making THREAD possible.",
    }),

    // ── Sponsorship packages section ────────────────────────────────────────
    defineField({
      name: "packagesKicker",
      title: "Packages — kicker",
      type: "string",
      initialValue: "Sponsors",
    }),
    defineField({
      name: "packagesTitle",
      title: "Packages — title",
      type: "string",
      initialValue: "Support the community. Shape the conversation.",
    }),
    defineField({
      name: "packagesDescription",
      title: "Packages — description",
      type: "text",
      rows: 3,
      initialValue:
        "THREAD is a community-first event. Sponsors make it possible — and become part of it. Reach out to discuss the packages and find the best fit for your organization.",
    }),
    defineField({
      name: "packagesCta",
      title: "Packages — CTA button label",
      type: "string",
      initialValue: "Become a sponsor",
    }),
    defineField({
      name: "packagesNote",
      title: "Packages — note",
      type: "string",
      initialValue: "All packages are on request — get in touch and we will find the right fit.",
    }),
    defineField({
      name: "tiers",
      title: "Sponsorship tiers",
      description: "One card per tier. The order here is the order on screen (left → right).",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Tier name", type: "string", validation: (R) => R.required() }),
            defineField({ name: "tagline", title: "Tagline", type: "string" }),
            defineField({
              name: "perks",
              title: "Perks",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({
              name: "highlighted",
              title: "Featured (highlighted card)",
              type: "boolean",
              description: "Only one tier should be highlighted at a time.",
              initialValue: false,
            }),
            defineField({
              name: "color",
              title: "Accent color",
              type: "string",
              options: {
                list: [
                  { title: "Electric", value: "electric" },
                  { title: "Cyan", value: "cyan" },
                  { title: "Blue", value: "blue" },
                  { title: "Indigo", value: "indigo" },
                ],
                layout: "radio",
              },
            }),
          ],
          preview: { select: { title: "name", subtitle: "tagline" } },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Sponsorship settings" }),
  },
});
