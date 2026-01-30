import { defineType, defineField } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "iNostriVantaggi",
      title: "I nostri vantaggi",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "ourBenefits",
      title: "Our benefits",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "aboutParagraph",
      title: "About text",
      type: "text",
    }),

    defineField({
      name: "team",
      title: "Team",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "role",
              title: "Role / Description",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Photo",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "terms",
      title: "Terms and Conditions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "content", type: "text" },
          ],
        },
      ],
    }),
  ],
});
