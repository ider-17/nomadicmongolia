import { defineType, defineField } from "sanity";

export const desertoNaadamPage = defineType({
  name: "desertoNaadamPage",
  title: "Deserto del Gobi & Naadam Festival",
  type: "document",
  fields: [
    // ===== BASIC INFO =====
    defineField({ name: "titleIt", title: "Title (IT)", type: "string" }),
    defineField({ name: "titleEn", title: "Title (EN)", type: "string" }),

    defineField({ name: "durationIt", title: "Duration (IT)", type: "string" }),
    defineField({ name: "durationEn", title: "Duration (EN)", type: "string" }),

    defineField({ name: "datesIt", title: "Dates (IT)", type: "string" }),
    defineField({ name: "datesEn", title: "Dates (EN)", type: "string" }),

    // ===== SHORT ITINERARY =====
    defineField({
      name: "shortItinerary",
      title: "Short Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number" },
            { name: "titleIt", title: "Title (IT)", type: "string" },
            { name: "titleEn", title: "Title (EN)", type: "string" },
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
      title: "Itinerary Data",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number" },
            { name: "dateIt", title: "Date (IT)", type: "string" },
            { name: "dateEn", title: "Date (EN)", type: "string" },
            { name: "titleIt", title: "Title (IT)", type: "string" },
            { name: "titleEn", title: "Title (EN)", type: "string" },
            { name: "descriptionIt", title: "Description (IT)", type: "text" },
            { name: "descriptionEn", title: "Description (EN)", type: "text" },
          ],
        },
      ],
    }),

    // ===== PRICE =====
    defineField({
      name: "quotaIndividualeIt",
      title: "Quota individuale (IT)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "quotaIndividualeEn",
      title: "Individual price (EN)",
      type: "array",
      of: [{ type: "string" }],
    }),

    // ===== INCLUDED =====
    defineField({
      name: "laQuotaComprendeIt",
      title: "La quota comprende (IT)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "laQuotaComprendeEn",
      title: "Included (EN)",
      type: "array",
      of: [{ type: "string" }],
    }),

    // ===== NOT INCLUDED =====
    defineField({
      name: "laQuotaNonComprendeIt",
      title: "La quota non comprende (IT)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "laQuotaNonComprendeEn",
      title: "Not included (EN)",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
