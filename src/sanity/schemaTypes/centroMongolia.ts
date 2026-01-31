import { defineType, defineField } from "sanity";

export const centroMongoliaPage = defineType({
  name: "centroMongoliaPage",
  title: "Centro Della Mongolia Tour",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "region", title: "Region", type: "string" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),

    defineField({
      name: "shortItinerary",
      title: "Short Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number" },
            { name: "title", type: "string" },
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
            { name: "title", type: "string" },
            { name: "description", type: "text" },
          ],
        },
      ],
    }),

    defineField({
      name: "laQuotaComprende",
      title: "La quota comprende",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "laQuotaNonComprende",
      title: "La quota non comprende",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
