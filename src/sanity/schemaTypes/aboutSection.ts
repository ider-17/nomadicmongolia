export default {
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    // Main title
    {
      name: "mainTitleIt",
      title: "Main Title IT",
      type: "string",
    },
    {
      name: "mainTitleEn",
      title: "Main Title EN",
      type: "string",
    },

    // Image
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    // Section title
    {
      name: "sectionTitleIt",
      title: "Section Title IT",
      type: "string",
    },
    {
      name: "sectionTitleEn",
      title: "Section Title EN",
      type: "string",
    },

    // Description
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

    // Button text
    {
      name: "buttonTextIt",
      title: "Button Text IT",
      type: "string",
    },
    {
      name: "buttonTextEn",
      title: "Button Text EN",
      type: "string",
    },

    // Button link (language-independent)
    {
      name: "buttonLink",
      title: "Button Link",
      type: "string",
    },
  ],
};
