import { defineType, defineField, defineArrayMember } from "sanity";

/** Valid room IDs — must match the RoomId type in src/content/agenda.ts */
const roomOptions = [
  { title: "Signal Room (main stage)", value: "signal" },
  { title: "Community Zone (expo floor)", value: "community" },
  { title: "Strategy Room (executive)", value: "strategy" },
  { title: "Intelligence Lab (hands-on)", value: "lab" },
  { title: "Simulation Zone (scenarios)", value: "simulation" },
  { title: "Private Garden (evening)", value: "garden" },
];

/** One session slot within a track. */
const sessionType = defineArrayMember({
  name: "session",
  type: "object",
  fields: [
    defineField({
      name: "time",
      title: "Start time",
      type: "string",
      description: 'Displayed as-is (e.g. "09:30").',
      validation: (R) => R.required(),
    }),
    defineField({
      name: "title",
      title: "Session title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "locations",
      title: "Room(s)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        list: roomOptions,
      },
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: "highlight",
      title: "Highlight (title glows)",
      type: "boolean",
      description: "Makes the session title glow — for major announcements.",
      initialValue: false,
    }),
    defineField({
      name: "evening",
      title: "Evening style",
      type: "boolean",
      description: "Styles the entry as an evening moment (green accent).",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "time" },
  },
});

/** One agenda track (tab). */
export const agendaTrack = defineType({
  name: "agendaTrack",
  title: "Agenda track",
  type: "document",
  fields: [
    defineField({
      name: "trackId",
      title: "Track ID",
      type: "slug",
      description:
        'Internal identifier used in code. Once set, do not change it (e.g. "plenary", "executive", "practitioner").',
      options: { source: "label" },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "label",
      title: "Tab label",
      type: "string",
      description: "Label shown on the tab button (e.g. 'Morning plenary').",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first. Plenary = 1, Executive = 2, Practitioner = 3.",
      initialValue: 10,
      validation: (R) => R.required().integer().min(1),
    }),
    defineField({
      name: "sessions",
      title: "Sessions",
      type: "array",
      of: [sessionType],
      validation: (R) => R.required().min(1),
    }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "label", subtitle: "trackId.current" },
  },
});

/** Global intro copy for the agenda section (singleton). */
export const agendaSettings = defineType({
  name: "agendaSettings",
  title: "Agenda settings",
  type: "document",
  fields: [
    defineField({
      name: "kicker",
      title: "Kicker",
      type: "string",
      initialValue: "October 15, 2026",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "One day, two tracks, four zones.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      initialValue:
        "A shared morning plenary, then choose your track. The Community Zone stays alive all day. Draft agenda — sessions and speakers are being finalized.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Agenda settings" }),
  },
});
