import { defineType, defineField } from "sanity";

export const trekkingTourPage = defineType({
  name: "trekkingTourPage",
  title: "Trekking Tour",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "dateRange", title: "Date range", type: "string" }),

    defineField({
      name: "shortItinerary",
      title: "Short itinerary",
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
      title: "Itinerary data",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number" },
            { name: "title", type: "string" },
            { name: "description", type: "text" },
            { name: "subDescription", type: "string" },
            { name: "date", title: "Date", type: "string" },
          ],
        },
      ],
    }),

    defineField({
      name: "quataIndividuale",
      title: "Quota individuale a partire da",
      type: "array",
      of: [{ type: "string" }],
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

    defineField({
      name: "travelSuggestions",
      title: "Suggerimenti per il viaggio",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "ourAdvantages",
      title: "I nostri vantaggi",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
