import { defineType, defineField } from "sanity";

export const centroMongoliaPage = defineType({
  name: "centroMongoliaPage",
  title: "Centro Della Mongolia Tour",
  type: "document",
  fields: [
    // Page Title
    defineField({ name: "titleIt", title: "Title (IT)", type: "string" }),
    defineField({ name: "titleEn", title: "Title (EN)", type: "string" }),

    // Region / Duration
    defineField({ name: "regionIt", title: "Region (IT)", type: "string" }),
    defineField({ name: "regionEn", title: "Region (EN)", type: "string" }),
    defineField({ name: "durationIt", title: "Duration (IT)", type: "string" }),
    defineField({ name: "durationEn", title: "Duration (EN)", type: "string" }),

    // Short Itinerary
    defineField({
      name: "shortItinerary",
      title: "Short Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number" },
            { name: "titleIt", type: "string", title: "Title (IT)" },
            { name: "titleEn", type: "string", title: "Title (EN)" },
          ],
        },
      ],
    }),

    // Images
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),

    // Detailed Itinerary
    defineField({
      name: "itineraryData",
      title: "Itinerary Data",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number" },
            { name: "titleIt", type: "string", title: "Title (IT)" },
            { name: "titleEn", type: "string", title: "Title (EN)" },
            { name: "descriptionIt", type: "text", title: "Description (IT)" },
            { name: "descriptionEn", type: "text", title: "Description (EN)" },
          ],
        },
      ],
    }),

    // Inclusions / Exclusions
    defineField({
      name: "laQuotaComprendeIt",
      title: "La quota comprende (IT)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "laQuotaComprendeEn",
      title: "La quota comprende (EN)",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "laQuotaNonComprendeIt",
      title: "La quota non comprende (IT)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "laQuotaNonComprendeEn",
      title: "La quota non comprende (EN)",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
