import { defineField, defineType } from "sanity";

export const overlandMongolia = defineType({
  name: "overlandMongolia",
  title: "Overland Della Mongolia Tour",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "region", title: "Regione", type: "string" }),
    defineField({ name: "duration", title: "Durata", type: "string" }),
    defineField({
      name: "shortItinerary",
      title: "Breve Itinerario",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", title: "Giorno", type: "number" },
            { name: "title", title: "Titolo", type: "string" },
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
      title: "Itinerario Dettagliato",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", title: "Giorno", type: "number" },
            { name: "title", title: "Titolo", type: "string" },
            { name: "description", title: "Descrizione", type: "text" },
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
