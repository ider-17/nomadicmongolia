import { defineType, defineField } from "sanity";

export const tour = defineType({
  name: "tour",
  title: "Tours Page",
  type: "document",
  fields: [
    // Title IT / EN
    defineField({ name: "titleIt", title: "Title IT", type: "string" }),
    defineField({ name: "titleEn", title: "Title EN", type: "string" }),

    // Slug (default source нь италийн title)
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titleIt" },
    }),

    // Main photo
    defineField({
      name: "photo",
      title: "Main photo",
      type: "image",
    }),

    // Duration
    defineField({
      name: "duration",
      title: "Duration (days)",
      type: "number",
    }),

    // Locations IT / EN
    defineField({
      name: "locationsIt",
      title: "Locations IT",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "locationsEn",
      title: "Locations EN",
      type: "array",
      of: [{ type: "string" }],
    }),

    // Day 1
    defineField({
      name: "desTitle1It",
      title: "Day 1 title IT",
      type: "string",
    }),
    defineField({
      name: "desTitle1En",
      title: "Day 1 title EN",
      type: "string",
    }),
    defineField({
      name: "describtion1It",
      title: "Day 1 description IT",
      type: "text",
    }),
    defineField({
      name: "describtion1En",
      title: "Day 1 description EN",
      type: "text",
    }),

    // Day 2
    defineField({
      name: "desTitle2It",
      title: "Day 2 title IT",
      type: "string",
    }),
    defineField({
      name: "desTitle2En",
      title: "Day 2 title EN",
      type: "string",
    }),
    defineField({
      name: "describtion2It",
      title: "Day 2 description IT",
      type: "text",
    }),
    defineField({
      name: "describtion2En",
      title: "Day 2 description EN",
      type: "text",
    }),

    // Button text IT / EN
    defineField({
      name: "btnTextIt",
      title: "Button text IT",
      type: "string",
      initialValue: "Scopri di più",
    }),
    defineField({
      name: "btnTextEn",
      title: "Button text EN",
      type: "string",
      initialValue: "Learn more",
    }),
  ],
});
