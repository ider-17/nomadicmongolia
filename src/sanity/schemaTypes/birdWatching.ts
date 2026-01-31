import { defineField, defineType } from "sanity";

export const birdWatching = defineType({
  name: "birdWatchingPage",
  title: "Birdwatching Tour",
  type: "document",
  fields: [
    defineField({
      name: "titleIt",
      type: "string",
      title: "Page Title (IT)",
    }),
    defineField({
      name: "titleEn",
      type: "string",
      title: "Page Title (EN)",
    }),

    defineField({
      name: "durationIt",
      type: "string",
      title: "Durata (IT)",
    }),
    defineField({
      name: "durationEn",
      type: "string",
      title: "Duration (EN)",
    }),

    defineField({
      name: "dateIt",
      type: "string",
      title: "Date (IT)",
    }),
    defineField({
      name: "dateEn",
      type: "string",
      title: "Date (EN)",
    }),

    defineField({
      name: "shortItinerary",
      type: "array",
      title: "Breve itinerario / Short itinerary",
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

    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "itineraryData",
      type: "array",
      title: "Itinerario dettagliato",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number" },
            { name: "titleIt", type: "string", title: "Title (IT)" },
            { name: "titleEn", type: "string", title: "Title (EN)" },
            {
              name: "descriptionIt",
              type: "text",
              title: "Description (IT)",
            },
            {
              name: "descriptionEn",
              type: "text",
              title: "Description (EN)",
            },
            { name: "giugnoIt", type: "string", title: "Month (IT)" },
            { name: "giugnoEn", type: "string", title: "Month (EN)" },
          ],
        },
      ],
    }),

    defineField({
      name: "keyBirdSpeciesListIt",
      type: "array",
      title: "Key bird species (IT)",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "keyBirdSpeciesListEn",
      type: "array",
      title: "Key bird species (EN)",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "mammalListIt",
      type: "array",
      title: "Mammal list (IT)",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "mammalListEn",
      type: "array",
      title: "Mammal list (EN)",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "travelOptionsIt",
      type: "array",
      title: "Travel options (IT)",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "travelOptionsEn",
      type: "array",
      title: "Travel options (EN)",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "inclusionsIt",
      type: "array",
      title: "La quota comprende (IT)",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "inclusionsEn",
      type: "array",
      title: "Inclusions (EN)",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "exclusionsIt",
      type: "array",
      title: "La quota non comprende (IT)",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "exclusionsEn",
      type: "array",
      title: "Exclusions (EN)",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "equipmentListIt",
      type: "array",
      title: "Suggerimenti per il viaggio (IT)",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "equipmentListEn",
      type: "array",
      title: "Travel tips (EN)",
      of: [{ type: "string" }],
    }),
  ],
});
