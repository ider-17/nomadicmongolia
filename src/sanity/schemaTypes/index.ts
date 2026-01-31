import { type SchemaTypeDefinition } from "sanity";

import aboutSection from "./aboutSection";
import slideCarousel from "./slideCarousel";
import tourSection from "./tourSection";
import tourPage from "./tourPage";
import galleryGroup from "./galleryGroup";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { aboutPage } from "./aboutPage";
import { birdWatching } from "./birdWatching";
import { centroMongoliaPage } from "./centroMongolia";
import { desertoDelGobiPage } from "./desertoDelGobi";
import { desertoNaadamPage } from "./desertoNaadam";
import { overlandMongolia } from "./overlandMongolia";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    aboutPage,
    birdWatching,
    centroMongoliaPage,
    desertoDelGobiPage,
    desertoNaadamPage,
    overlandMongolia,
    aboutSection,
    slideCarousel,
    tourSection,
    tourPage,
    galleryGroup,
  ],
};
