import { defineType, defineField } from "sanity";

export const steppeGobiPage = defineType({
  name: "steppeGobiPage",
  title: "Steppe e Gobi Tour",
  type: "document",
  fields: [
    // ===== BASIC INFO =====
    defineField({ name: "titleIt", title: "Title IT", type: "string" }),
    defineField({ name: "titleEn", title: "Title EN", type: "string" }),

    defineField({ name: "regionIt", title: "Region IT", type: "string" }),
    defineField({ name: "regionEn", title: "Region EN", type: "string" }),

    defineField({ name: "durationIt", title: "Duration IT", type: "string" }),
    defineField({ name: "durationEn", title: "Duration EN", type: "string" }),

    // ===== SHORT ITINERARY =====
    defineField({
      name: "shortItinerary",
      title: "Short Itinerary / Breve Itinerario",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", title: "Day / Giorno", type: "number" },
            { name: "titleIt", title: "Title IT", type: "string" },
            { name: "titleEn", title: "Title EN", type: "string" },
          ],
        },
      ],
    }),

    // ===== IMAGES =====
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),

    // ===== DETAILED ITINERARY =====
    defineField({
      name: "itineraryData",
      title: "Itinerary Data / Itinerario Dettagliato",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", title: "Day / Giorno", type: "number" },
            { name: "titleIt", title: "Title IT", type: "string" },
            { name: "titleEn", title: "Title EN", type: "string" },
            {
              name: "descriptionIt",
              title: "Description IT",
              type: "text",
            },
            {
              name: "descriptionEn",
              title: "Description EN",
              type: "text",
            },
          ],
        },
      ],
    }),

    // ===== INCLUDED =====
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

    // ===== NOT INCLUDED =====
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
