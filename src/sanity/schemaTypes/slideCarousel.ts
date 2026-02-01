export default {
  name: "carouselSlide",
  title: "Carousel Slide",
  type: "document",
  fields: [
    // Title
    {
      name: "titleIt",
      title: "Title IT",
      type: "string",
    },
    {
      name: "titleEn",
      title: "Title EN",
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

    // Background Image
    {
      name: "bgImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    // Button Text
    {
      name: "btnTextIt",
      title: "Button Text IT",
      type: "string",
      initialValue: "Scopri di più",
    },
    {
      name: "btnTextEn",
      title: "Button Text EN",
      type: "string",
      initialValue: "Learn more",
    },

    // Link (language-independent)
    {
      name: "linkUrl",
      title: "Link URL",
      type: "string",
    },
  ],
};
