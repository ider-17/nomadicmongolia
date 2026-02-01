import { defineField, defineType } from "sanity";

export const overlandMongolia = defineType({
  name: "overlandMongolia",
  title: "Overland Della Mongolia Tour",
  type: "document",
  fields: [
    defineField({ name: "titleIt", title: "Title IT", type: "string" }),
    defineField({ name: "titleEn", title: "Title EN", type: "string" }),
    defineField({ name: "regionIt", title: "Regione IT", type: "string" }),
    defineField({ name: "regionEn", title: "Region EN", type: "string" }),
    defineField({ name: "durationIt", title: "Durata IT", type: "string" }),
    defineField({ name: "durationEn", title: "Duration EN", type: "string" }),

    defineField({
      name: "shortItinerary",
      title: "Breve Itinerario / Short Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", title: "Giorno / Day", type: "number" },
            { name: "titleIt", title: "Titolo IT", type: "string" },
            { name: "titleEn", title: "Title EN", type: "string" },
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
      title: "Itinerario Dettagliato / Detailed Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", title: "Giorno / Day", type: "number" },
            { name: "titleIt", title: "Titolo IT", type: "string" },
            { name: "titleEn", title: "Title EN", type: "string" },
            { name: "descriptionIt", title: "Descrizione IT", type: "text" },
            { name: "descriptionEn", title: "Description EN", type: "text" },
          ],
        },
      ],
    }),

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

    defineField({
      name: "laQuotaNonComprendeIt",
      title: "La quota non comprende IT",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "laQuotaNonComprendeEn",
      title: "Not Included EN",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
