import { defineType, defineField } from "sanity";

export const desertoDelGobiPage = defineType({
  name: "desertoDelGobiPage",
  title: "Deserto Del Gobi Tour",
  type: "document",
  fields: [
    defineField({ name: "titleIt", title: "Title (IT)", type: "string" }),
    defineField({ name: "titleEn", title: "Title (EN)", type: "string" }),
    defineField({ name: "regionIt", title: "Region (IT)", type: "string" }),
    defineField({ name: "regionEn", title: "Region (EN)", type: "string" }),
    defineField({ name: "durationIt", title: "Duration (IT)", type: "string" }),
    defineField({ name: "durationEn", title: "Duration (EN)", type: "string" }),

    defineField({
      name: "shortItinerary",
      title: "Short Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number" },
            { name: "titleIt", type: "string" },
            { name: "titleEn", type: "string" },
          ],
        },
      ],
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "itineraryData",
      title: "Itinerary Data",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number" },
            { name: "titleIt", type: "string" },
            { name: "titleEn", type: "string" },
            { name: "descriptionIt", type: "text" },
            { name: "descriptionEn", type: "text" },
          ],
        },
      ],
    }),
  ],
});
