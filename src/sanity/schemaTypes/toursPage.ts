import { defineType, defineField } from "sanity";

export const tour = defineType({
  name: "tour",
  title: "Tours Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),

    defineField({
      name: "photo",
      title: "Main photo",
      type: "image",
    }),

    defineField({
      name: "duration",
      title: "Duration (days)",
      type: "number",
    }),

    defineField({
      name: "locations",
      title: "Locations",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({ name: "desTitle1", title: "Day 1 title", type: "string" }),
    defineField({
      name: "describtion1",
      title: "Day 1 description",
      type: "text",
    }),

    defineField({ name: "desTitle2", title: "Day 2 title", type: "string" }),
    defineField({
      name: "describtion2",
      title: "Day 2 description",
      type: "text",
    }),

    defineField({
      name: "btnText",
      title: "Button text",
      type: "string",
      initialValue: "Scopri di più",
    }),
  ],
});
