import { defineType, defineField, defineArrayMember } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    // ── Event info ─────────────────────────────────────────────────────────
    defineField({
      name: "eventName",
      title: "Event name",
      type: "string",
      description: "Displayed in the hero and the navigation bar.",
      initialValue: "THREAD",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "edition",
      title: "Edition label",
      type: "string",
      description: "Small superscript displayed next to the logo (e.g. '26').",
      initialValue: "26",
    }),
    defineField({
      name: "poweredBy",
      title: "Powered by",
      type: "string",
      description: "Tagline displayed under the big THREAD title.",
      initialValue: "Powered by Filigran",
    }),
    defineField({
      name: "dateLabel",
      title: "Date label",
      type: "string",
      description: "Date displayed for humans (e.g. 'October 15, 2026').",
      initialValue: "October 15, 2026",
    }),
    defineField({
      name: "countdownYear",
      title: "Countdown — year",
      type: "number",
      initialValue: 2026,
      validation: (R) => R.required().integer().min(2024),
    }),
    defineField({
      name: "countdownMonth",
      title: "Countdown — month (1–12)",
      type: "number",
      initialValue: 10,
      validation: (R) => R.required().integer().min(1).max(12),
    }),
    defineField({
      name: "countdownDay",
      title: "Countdown — day",
      type: "number",
      initialValue: 15,
      validation: (R) => R.required().integer().min(1).max(31),
    }),
    defineField({
      name: "countdownHour",
      title: "Countdown — hour (0–23, Paris time)",
      type: "number",
      initialValue: 8,
      validation: (R) => R.required().integer().min(0).max(23),
    }),
    defineField({
      name: "countdownMinute",
      title: "Countdown — minute (0–59)",
      type: "number",
      initialValue: 30,
      validation: (R) => R.required().integer().min(0).max(59),
    }),
    defineField({
      name: "venueShort",
      title: "Venue (short)",
      type: "string",
      description: "Short venue name for the hero banner.",
      initialValue: "Les Jardins de Saint-Dominique, Paris",
    }),
    defineField({
      name: "admission",
      title: "Admission",
      type: "string",
      description: "Third hero banner item (after date and venue).",
      initialValue: "Inaugural Event",
    }),
    defineField({
      name: "pitch",
      title: "Pitch",
      type: "text",
      rows: 3,
      description: "One-line pitch under the title. Displayed as plain text.",
      initialValue:
        "The annual gathering of the global threat intelligence and cyber defense community — where intelligence, exposure management and action come together.",
    }),
    defineField({
      name: "credential",
      title: "Credential",
      type: "string",
      description: "Signature sentence at the bottom of the hero (first part).",
    }),
    defineField({
      name: "credentialEmphasis",
      title: "Credential emphasis",
      type: "string",
      description: "Highlighted portion of the credential sentence.",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact email",
      type: "string",
      description: "Email used by all CTA buttons on the site.",
      initialValue: "events@filigran.io",
      validation: (R) => R.required().email(),
    }),

    // ── At-a-glance band ───────────────────────────────────────────────────
    defineField({
      name: "glance",
      title: "At a glance",
      description: "Four practical facts displayed in the band below the hero.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Calendar", value: "calendar" },
                  { title: "Map", value: "map" },
                  { title: "Tracks", value: "tracks" },
                  { title: "Garden", value: "garden" },
                ],
                layout: "radio",
              },
              validation: (R) => R.required(),
            }),
            defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
            defineField({ name: "detail", title: "Detail", type: "string" }),
          ],
          preview: {
            select: { title: "title", subtitle: "icon" },
          },
        }),
      ],
      validation: (R) => R.required().min(1).max(4),
    }),
    defineField({
      name: "glanceNote",
      title: "At-a-glance note",
      type: "string",
      description: "Sentence displayed under the at-a-glance band.",
      initialValue: "Built around doing: labs, workshops, roundtables and open spaces — not slides.",
    }),

    // ── Venue section ──────────────────────────────────────────────────────
    defineField({
      name: "venueKicker",
      title: "Venue — kicker",
      type: "string",
      initialValue: "The venue",
    }),
    defineField({
      name: "venueTitle",
      title: "Venue — title",
      type: "string",
      initialValue: "Les Jardins de Saint-Dominique",
    }),
    defineField({
      name: "venueDescription",
      title: "Venue — description",
      type: "text",
      rows: 3,
      initialValue:
        "In the heart of the 7th arrondissement, minutes from Les Invalides — an auditorium, breakout salons, an exhibition floor and a garden for the evening aperitif.",
    }),
    defineField({
      name: "venueAddress",
      title: "Venue — address",
      type: "string",
      initialValue: "49-51 rue Saint-Dominique, 75007 Paris",
    }),
    defineField({
      name: "venueDateAndHours",
      title: "Venue — date and hours",
      type: "string",
      initialValue: "Thursday, October 15, 2026 — 08:30 to 19:00",
    }),
    defineField({
      name: "venueCapacity",
      title: "Venue — capacity note",
      type: "string",
      initialValue: "Open to the community — registration opening soon",
    }),
    defineField({
      name: "venueGardenNote",
      title: "Venue — garden note",
      type: "string",
      initialValue: "Private garden for the evening cocktail",
    }),
    defineField({
      name: "venueLandmarks",
      title: "Venue — landmarks",
      type: "string",
      initialValue: "Les Invalides · Musée d'Orsay · Assemblée Nationale",
    }),
    defineField({
      name: "venueTransit",
      title: "Venue — transit",
      type: "string",
      initialValue: "Métro 8 · 12 · 13 / RER C — Invalides",
    }),
    defineField({
      name: "venueMapsUrl",
      title: "Venue — Google Maps URL",
      type: "url",
      initialValue:
        "https://maps.google.com/?q=Les+Jardins+de+Saint-Dominique,+49+Rue+Saint-Dominique,+75007+Paris",
    }),

    // ── Register / CTA section ─────────────────────────────────────────────
    defineField({
      name: "registerKicker",
      title: "Register — kicker",
      type: "string",
      initialValue: "Join us",
    }),
    defineField({
      name: "registerTitle",
      title: "Register — title",
      type: "string",
      initialValue: "This is your event.",
    }),
    defineField({
      name: "registerDescription",
      title: "Register — description",
      type: "text",
      rows: 3,
      initialValue:
        "THREAD gathers the open-source threat management community — analysts, engineers, contributors and the leaders they work with. One day to share what works, learn from each other and meet in person the people you know from Slack and GitHub.",
    }),
    defineField({
      name: "registerPrimaryButton",
      title: "Register — primary button label",
      type: "string",
      initialValue: "Request your seat",
    }),
    defineField({
      name: "registerSecondaryButton",
      title: "Register — secondary button label",
      type: "string",
      initialValue: "Propose a session",
    }),
    defineField({
      name: "registerNote",
      title: "Register — note",
      type: "string",
      initialValue:
        "Registration opens soon — leave your details and you will be the first to know.",
    }),

    // ── Footer ─────────────────────────────────────────────────────────────
    defineField({
      name: "footerFiligranLinks",
      title: "Footer — Filigran links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string", validation: (R) => R.required() }),
            defineField({ name: "url", title: "URL", type: "url", validation: (R) => R.required() }),
          ],
          preview: { select: { title: "label", subtitle: "url" } },
        }),
      ],
    }),
    defineField({
      name: "footerCommunityLinks",
      title: "Footer — Community links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string", validation: (R) => R.required() }),
            defineField({ name: "url", title: "URL", type: "url", validation: (R) => R.required() }),
          ],
          preview: { select: { title: "label", subtitle: "url" } },
        }),
      ],
    }),
    defineField({
      name: "footerDescription",
      title: "Footer — company description",
      type: "text",
      rows: 2,
      initialValue:
        "Filigran provides open-source cybersecurity solutions covering threat intelligence management, adversarial exposure validation and cyber risk management.",
    }),
    defineField({
      name: "footerFiligree",
      title: "Footer — filigree note",
      type: "string",
      initialValue:
        "Filigran, from filigree — fine threads assembled with precision into something intricate and strong.",
    }),
    defineField({
      name: "footerTagline",
      title: "Footer — tagline",
      type: "string",
      initialValue: "Cohesion · Openness · Responsibility · Equity",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
