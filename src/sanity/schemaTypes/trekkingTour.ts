import { defineType, defineField } from "sanity";

export const trekkingTourPage = defineType({
  name: "trekkingTourPage",
  title: "Trekking Tour",
  type: "document",
  fields: [
    // Title IT / EN
    defineField({ name: "titleIt", title: "Title IT", type: "string" }),
    defineField({ name: "titleEn", title: "Title EN", type: "string" }),

    // Duration IT / EN
    defineField({ name: "durationIt", title: "Duration IT", type: "string" }),
    defineField({ name: "durationEn", title: "Duration EN", type: "string" }),

    // Date range IT / EN
    defineField({
      name: "dateRangeIt",
      title: "Date range IT",
      type: "string",
    }),
    defineField({
      name: "dateRangeEn",
      title: "Date range EN",
      type: "string",
    }),

    // Short itinerary IT / EN
    defineField({
      name: "shortItinerary",
      title: "Short itinerary / Breve itinerario",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number" },
            { name: "titleIt", type: "string", title: "Title IT" },
            { name: "titleEn", type: "string", title: "Title EN" },
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

    // Detailed itinerary IT / EN
    defineField({
      name: "itineraryData",
      title: "Itinerary data / Itinerario dettagliato",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number" },
            { name: "titleIt", type: "string", title: "Title IT" },
            { name: "titleEn", type: "string", title: "Title EN" },
            { name: "descriptionIt", type: "text", title: "Description IT" },
            { name: "descriptionEn", type: "text", title: "Description EN" },
            {
              name: "subDescriptionIt",
              type: "string",
              title: "Sub description IT",
            },
            {
              name: "subDescriptionEn",
              type: "string",
              title: "Sub description EN",
            },
            { name: "dateIt", type: "string", title: "Date IT" },
            { name: "dateEn", type: "string", title: "Date EN" },
          ],
        },
      ],
    }),

    // Quota individuale IT / EN
    defineField({
      name: "quataIndividualeIt",
      title: "Quota individuale IT",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "quataIndividualeEn",
      title: "Individual quota EN",
      type: "array",
      of: [{ type: "string" }],
    }),

    // La quota comprende IT / EN
    defineField({
      name: "laQuotaComprendeIt",
      title: "La quota comprende IT",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "laQuotaComprendeEn",
      title: "Included EN",
      type: "array",
      of: [{ type: "string" }],
    }),

    // La quota non comprende IT / EN
    defineField({
      name: "laQuotaNonComprendeIt",
      title: "La quota non comprende IT",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "laQuotaNonComprendeEn",
      title: "Not included EN",
      type: "array",
      of: [{ type: "string" }],
    }),

    // Travel suggestions IT / EN
    defineField({
      name: "travelSuggestionsIt",
      title: "Suggerimenti per il viaggio IT",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "travelSuggestionsEn",
      title: "Travel suggestions EN",
      type: "array",
      of: [{ type: "string" }],
    }),

    // Our advantages IT / EN
    defineField({
      name: "ourAdvantagesIt",
      title: "I nostri vantaggi IT",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "ourAdvantagesEn",
      title: "Our advantages EN",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
