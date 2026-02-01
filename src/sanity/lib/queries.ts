import { client } from "./client";

export async function getAboutSection() {
  const query = `*[_type == "aboutSection"][0]{
    mainTitleIt,
    mainTitleEn,
    image,
    sectionTitleIt,
    sectionTitleEn,
    descriptionIt,
    descriptionEn,
    buttonTextIt,
    buttonTextEn,
    buttonLink
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getSlides() {
  const query = `*[_type == "carouselSlide"] | order(_createdAt asc) {
    titleIt,
    titleEn,
    descriptionIt,
    descriptionEn,
    bgImage,
    btnTextIt,
    btnTextEn,
    linkUrl
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getTourData() {
  const query = `*[_type == "tourPage"][0]{
    title,
    sections[]{
      titleIt,
      titleEn,
      contentIt,
      contentEn,
      image{
        asset->{url}
      },
      imagePosition
    }
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getGalleryGroups() {
  const query = `*[_type == "galleryGroup"] | order(_createdAt asc){
    _id,
    title,
    items[]{
      _type,
      _type == "singleImage" => {
        "imageUrl": image.asset->url,
        alt
      },
      _type == "doubleImage" => {
        images[]{
          "imageUrl": asset->url,
          alt
        }
      }
    }
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getBirdWatchingPage() {
  const query = `*[_type == "birdWatchingPage"][0]{
    titleIt,
    titleEn,

    durationIt,
    durationEn,

    dateIt,
    dateEn,

    shortItinerary[]{
      day,
      titleIt,
      titleEn
    },

    images[]{
      asset
    },

    itineraryData[]{
      day,
      titleIt,
      titleEn,
      descriptionIt,
      descriptionEn,
      giugnoIt,
      giugnoEn
    },

    keyBirdSpeciesListIt,
    keyBirdSpeciesListEn,

    mammalListIt,
    mammalListEn,

    travelOptionsIt,
    travelOptionsEn,

    inclusionsIt,
    inclusionsEn,

    exclusionsIt,
    exclusionsEn,

    equipmentListIt,
    equipmentListEn
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getCentroMongoliaPage() {
  const query = `*[_type == "centroMongoliaPage"][0]{
    titleIt,
    titleEn,
    regionIt,
    regionEn,
    durationIt,
    durationEn,
    shortItinerary[]{
      day,
      titleIt,
      titleEn
    },
    images[]{asset},
    itineraryData[]{
      day,
      titleIt,
      titleEn,
      descriptionIt,
      descriptionEn
    },
    laQuotaComprendeIt,
    laQuotaComprendeEn,
    laQuotaNonComprendeIt,
    laQuotaNonComprendeEn
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getDesertoDelGobiPage() {
  const query = `*[_type == "desertoDelGobiPage"][0]{
    titleIt,
    titleEn,
    regionIt,
    regionEn,
    durationIt,
    durationEn,
    shortItinerary[]{
      day,
      titleIt,
      titleEn
    },
    images[]{asset},
    itineraryData[]{
      day,
      titleIt,
      titleEn,
      descriptionIt,
      descriptionEn
    }
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getDesertoNaadamPage() {
  const query = `*[_type == "desertoNaadamPage"][0]{
    titleIt,
    titleEn,
    durationIt,
    durationEn,
    datesIt,
    datesEn,

    shortItinerary[]{
      day,
      titleIt,
      titleEn
    },

    images[]{ asset },

    itineraryData[]{
      day,
      dateIt,
      dateEn,
      titleIt,
      titleEn,
      descriptionIt,
      descriptionEn
    },

    quotaIndividualeIt,
    quotaIndividualeEn,

    laQuotaComprendeIt,
    laQuotaComprendeEn,

    laQuotaNonComprendeIt,
    laQuotaNonComprendeEn
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getOverlandMongolia() {
  const query = `*[_type == "overlandMongolia"][0]{
    titleIt,
    titleEn,
    regionIt,
    regionEn,
    durationIt,
    durationEn,
    shortItinerary[]{
      day,
      titleIt,
      titleEn
    },
    images,
    itineraryData[]{
      day,
      titleIt,
      titleEn,
      descriptionIt,
      descriptionEn
    },
    laQuotaComprendeIt,
    laQuotaComprendeEn,
    laQuotaNonComprendeIt,
    laQuotaNonComprendeEn
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getSteppeGobiPage() {
  const query = `*[_type == "steppeGobiPage"][0]{
    titleIt,
    titleEn,
    regionIt,
    regionEn,
    durationIt,
    durationEn,

    shortItinerary[]{
      day,
      titleIt,
      titleEn
    },

    images,

    itineraryData[]{
      day,
      titleIt,
      titleEn,
      descriptionIt,
      descriptionEn
    },

    laQuotaComprendeIt,
    laQuotaComprendeEn,
    laQuotaNonComprendeIt,
    laQuotaNonComprendeEn
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getTaigaTour() {
  const query = `*[_type == "taigaTour"][0]{
    titleIt,
    titleEn,
    regionIt,
    regionEn,
    durationIt,
    durationEn,
    shortItinerary[]{
      day,
      titleIt,
      titleEn
    },
    images,
    itineraryData[]{
      day,
      titleIt,
      titleEn,
      descriptionIt,
      descriptionEn
    },
    laQuotaComprendeIt,
    laQuotaComprendeEn,
    laQuotaNonComprendeIt,
    laQuotaNonComprendeEn
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getTrekkingTour() {
  const query = `*[_type == "trekkingTourPage"][0]{
    titleIt, titleEn,
    durationIt, durationEn,
    dateRangeIt, dateRangeEn,
    shortItinerary[]{day, titleIt, titleEn},
    images,
    itineraryData[]{day, titleIt, titleEn, descriptionIt, descriptionEn, subDescriptionIt, subDescriptionEn, dateIt, dateEn},
    quataIndividualeIt, quataIndividualeEn,
    laQuotaComprendeIt, laQuotaComprendeEn,
    laQuotaNonComprendeIt, laQuotaNonComprendeEn,
    travelSuggestionsIt, travelSuggestionsEn,
    ourAdvantagesIt, ourAdvantagesEn
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getTours() {
  const res = await client.fetch(`*[_type == "tour"]{
    _id,
    titleIt,
    titleEn,
    duration,
    photo,
    locationsIt,
    locationsEn,
    slug,
    desTitle1It,
    desTitle1En,
    describtion1It,
    describtion1En,
    desTitle2It,
    desTitle2En,
    describtion2It,
    describtion2En,
    btnTextIt,
    btnTextEn
  }`);
  return res;
}

export async function getAboutPage() {
  const query = `*[_type == "aboutPage"][0]{
    vantaggiIt,
    vantaggiEn,
    // benefitsIt,
    // benefitsEn,
    aboutTextIt,
    aboutTextEn,
    team[]{
      name,
      roleIt,
      roleEn,
      description,
      photo
    },
    terms[]{
      titleIt,
      titleEn,
      contentIt,
      contentEn,
    }
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}
