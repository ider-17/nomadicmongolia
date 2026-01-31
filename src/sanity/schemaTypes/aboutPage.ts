import { defineType, defineField } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "vantaggiIt",
      title: "I nostri vantaggi (IT)",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "benefitsEn",
      title: "Our benefits (EN)",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "aboutText",
      title: "About description",
      type: "text",
    }),

    defineField({
      name: "team",
      title: "Team members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "role", type: "string" },
            // { name: "description", type: "text" },
            { name: "photo", type: "image" },
          ],
        },
      ],
    }),

    defineField({
      name: "terms",
      title: "Terms & Conditions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "content", type: "text" },
            { name: "content2", type: "string" },
            { name: "content3", type: "string" },
            { name: "content4", type: "string" },
          ],
        },
      ],
    }),
  ],
});
