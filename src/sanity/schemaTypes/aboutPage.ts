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
      name: "vantaggiEn",
      title: "Our advantages (EN)",
      type: "array",
      of: [{ type: "string" }],
    }),
    // defineField({
    //   name: "benefitsIt",
    //   title: "Our benefits (IT)",
    //   type: "array",
    //   of: [{ type: "string" }],
    // }),
    // defineField({
    //   name: "benefitsEn",
    //   title: "Our benefits (EN)",
    //   type: "array",
    //   of: [{ type: "string" }],
    // }),
    defineField({
      name: "aboutTextIt",
      title: "About description (IT)",
      type: "text",
    }),
    defineField({
      name: "aboutTextEn",
      title: "About description (EN)",
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
            { name: "roleIt", type: "string" },
            { name: "roleEn", type: "string" },
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
            { name: "titleIt", type: "string" },
            { name: "titleEn", type: "string" },
            { name: "contentIt", type: "text" },
            { name: "contentEn", type: "text" },
          ],
        },
      ],
    }),
  ],
});
