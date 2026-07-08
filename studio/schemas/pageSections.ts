import { defineType, defineField, defineArrayMember } from "sanity";

export const pageSections = defineType({
  name: "pageSections",
  title: "Page sections",
  type: "document",
  groups: [
    { name: "why", title: "Why THREAD" },
    { name: "audiences", title: "Audiences" },
    { name: "zones", title: "Zones" },
    { name: "speakers", title: "Speakers" },
    { name: "community", title: "Community Zone" },
  ],
  fields: [
    // ── Why THREAD ─────────────────────────────────────────────────────────
    defineField({
      name: "whyKicker",
      title: "Kicker",
      type: "string",
      group: "why",
      initialValue: "Why THREAD",
    }),
    defineField({
      name: "whyTitle",
      title: "Title",
      type: "string",
      group: "why",
      initialValue: "Every investigation starts with one small thing.",
    }),
    defineField({
      name: "whyParagraphs",
      title: "Story paragraphs",
      description: "Each item is one paragraph. Add or remove freely.",
      type: "array",
      group: "why",
      of: [defineArrayMember({ type: "text", rows: 3 })],
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: "whyTags",
      title: "Tags",
      description: "Small pills displayed under the story.",
      type: "array",
      group: "why",
      of: [defineArrayMember({ type: "string" })],
    }),

    // ── Audiences ──────────────────────────────────────────────────────────
    defineField({
      name: "audiencesKicker",
      title: "Kicker",
      type: "string",
      group: "audiences",
      initialValue: "Two audiences, one thread",
    }),
    defineField({
      name: "audiencesTitle",
      title: "Title",
      type: "string",
      group: "audiences",
      initialValue: "Built for the people who do the work — and the people who decide.",
    }),
    defineField({
      name: "audiencesCards",
      title: "Audience cards",
      type: "array",
      group: "audiences",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
            defineField({ name: "tagline", title: "Tagline", type: "string" }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Shield", value: "shield" },
                  { title: "Code", value: "code" },
                ],
                layout: "radio",
              },
            }),
            defineField({
              name: "paragraphs",
              title: "Paragraphs",
              type: "array",
              of: [defineArrayMember({ type: "text", rows: 2 })],
            }),
          ],
          preview: { select: { title: "name", subtitle: "tagline" } },
        }),
      ],
    }),

    // ── Zones ──────────────────────────────────────────────────────────────
    defineField({
      name: "zonesKicker",
      title: "Kicker",
      type: "string",
      group: "zones",
      initialValue: "The experience",
    }),
    defineField({
      name: "zonesTitle",
      title: "Title",
      type: "string",
      group: "zones",
      initialValue: "One venue, five spaces.",
    }),
    defineField({
      name: "zonesDescription",
      title: "Description",
      type: "text",
      rows: 2,
      group: "zones",
      initialValue:
        "A main stage, an expo floor and three breakout rooms, each with its own purpose, from keynotes to hands-on labs to roundtables. Plus the garden for the evening.",
    }),
    defineField({
      name: "zonesCards",
      title: "Zone cards",
      type: "array",
      group: "zones",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "id", title: "ID (e.g. '01')", type: "string", validation: (R) => R.required() }),
            defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
            defineField({ name: "kind", title: "Kind (subtitle)", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            defineField({
              name: "color",
              title: "Accent color",
              type: "string",
              options: {
                list: [
                  { title: "Electric (cyan-yellow)", value: "electric" },
                  { title: "Cyan", value: "cyan" },
                  { title: "Blue", value: "blue" },
                  { title: "Indigo", value: "indigo" },
                  { title: "Green", value: "green" },
                ],
                layout: "radio",
              },
            }),
          ],
          preview: { select: { title: "name", subtitle: "kind" } },
        }),
      ],
    }),

    // ── Speakers ───────────────────────────────────────────────────────────
    defineField({
      name: "speakersKicker",
      title: "Kicker",
      type: "string",
      group: "speakers",
      initialValue: "Voices",
    }),
    defineField({
      name: "speakersTitle",
      title: "Title",
      type: "string",
      group: "speakers",
      initialValue: "The people on stage do the work.",
    }),
    defineField({
      name: "speakersDescription",
      title: "Description",
      type: "text",
      rows: 2,
      group: "speakers",
      initialValue:
        "Filigran founders and product leaders, customer CISOs, government voices and community contributors. The full line-up will be announced soon.",
    }),
    defineField({
      name: "speakersCards",
      title: "Speaker cards",
      description:
        "Add real speakers here when announced. Photo is optional — the site shows a placeholder if none is provided.",
      type: "array",
      group: "speakers",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
            defineField({ name: "role", title: "Role / tagline", type: "string" }),
            defineField({
              name: "photo",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "role", media: "photo" },
          },
        }),
      ],
    }),
    defineField({
      name: "speakersNote",
      title: "Speakers note (before email)",
      type: "string",
      group: "speakers",
      initialValue: "Want to lead a session? The agenda is built with the community — reach out at",
    }),

    // ── Community Zone experiences ──────────────────────────────────────────
    defineField({
      name: "communityExperiences",
      title: "Community Zone experiences",
      description: "Cards shown in the Community Zone tab of the agenda.",
      type: "array",
      group: "community",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "name", subtitle: "description" } },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Page sections" }),
  },
});
