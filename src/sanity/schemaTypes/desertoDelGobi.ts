import { defineType, defineField } from "sanity";

export const desertoDelGobiPage = defineType({
  name: "desertoDelGobiPage",
  title: "Deserto Del Gobi Tour",
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
  ],
});
