import { defineType, defineField } from "sanity";

export const desertoNaadamPage = defineType({
  name: "desertoNaadamPage",
  title: "Deserto del Gobi e Festival di Naadam",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "dates", title: "Dates", type: "string" }),

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
            { name: "date", type: "string" }, // Luglio field
          ],
        },
      ],
    }),

    defineField({
        name: "quataIndividuale",
        title: "Quata individuale",
        type: "array",
        of: [{type: "string"}]
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
