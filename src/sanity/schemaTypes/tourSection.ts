export default {
    name: "tourSection",
    type: "object",
    title: "Tour Section",
    fields: [
      // Title
      {
        name: "titleIt",
        type: "string",
        title: "Section Title IT",
      },
      {
        name: "titleEn",
        type: "string",
        title: "Section Title EN",
      },
  
      // Content
      {
        name: "contentIt",
        type: "text",
        title: "Content IT",
      },
      {
        name: "contentEn",
        type: "text",
        title: "Content EN",
      },
  
      // Image (language independent)
      {
        name: "image",
        type: "image",
        title: "Image",
      },
  
      // Image position (language independent)
      {
        name: "imagePosition",
        type: "string",
        title: "Image Position",
        options: {
          list: [
            { title: "Left", value: "left" },
            { title: "Right", value: "right" },
          ],
          layout: "radio",
        },
      },
    ],
  };
  