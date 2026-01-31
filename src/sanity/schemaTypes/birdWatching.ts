import { defineField, defineType } from "sanity";

export const birdWatching = defineType({
  name: "birdWatchingPage",
  title: "Birdwatching Tour",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Page Title" }),
    defineField({ name: "duration", type: "string", title: "Durata" }),
    defineField({ name: "date", type: "string", title: "Date" }),

    defineField({
      name: "shortItinerary",
      type: "array",
      title: "Breve Itinerario",
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
            { name: "title", type: "string" },
            { name: "description", type: "text" },
            { name: "giugno", type: "string" },
          ],
        },
      ],
    }),

    defineField({
      name: "keyBirdSpeciesList",
      type: "array",
      title: "Key bird species list",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "mammalList",
      type: "array",
      title: "Mammal list",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "travelOptions",
      type: "array",
      title: "Travel Options",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "inclusions",
      type: "array",
      title: "La quota comprende",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "exclusions",
      type: "array",
      title: "La quota non comprende",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "equipmentList",
      type: "array",
      title: "Suggerimenti per il viaggio",
      of: [{ type: "string" }],
    }),
  ],
});
