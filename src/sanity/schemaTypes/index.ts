import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { aboutPage } from "./aboutPage";
import aboutSection from "./aboutSection";
import slideCarousel from "./slideCarousel";
import tourSection from "./tourSection";
import tourPage from "./tourPage";
import galleryGroup from "./galleryGroup";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    aboutPage,
    aboutSection,
    slideCarousel,
    tourSection,
    tourPage,
    galleryGroup,
  ],
};
