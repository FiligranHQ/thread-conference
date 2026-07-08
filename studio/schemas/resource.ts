import { defineType, defineField } from "sanity";

/** One scrolling ribbon item (blog post, customer story, report…). */
export const resource = defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Badge",
      type: "string",
      description: 'Small badge shown before the title. Keep it short (e.g. "Blog", "Customer story", "Report").',
      validation: (R) => R.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the content, displayed as the clickable link.",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "Full link to the content on filigran.io. Opens in a new tab.",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first in the scrolling ribbon.",
      initialValue: 10,
    }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "type" },
  },
});
