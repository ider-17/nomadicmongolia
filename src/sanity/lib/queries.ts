import { client } from "./client";

export async function getAboutSection() {
  const query = `*[_type == "aboutSection"][0]{
    mainTitle,
    sectionTitle,
    description,
    buttonText,
    buttonLink,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getSlides() {
  const query = `*[_type == "carouselSlide"] | order(_createdAt asc){
    _id,
    title,
    description,
    btnText,
    "bgImageUrl": bgImage.asset->url,
    linkUrl
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getTourData() {
  const query = `*[_type == "tourPage"][0]{
    title,
    sections[]{
      title,
      content,
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

export async function getCentroMongoliaPage() {
  const query = `*[_type == "centroMongoliaPage"][0]{
    title,
    region,
    duration,
    shortItinerary,
    images,
    itineraryData,
    laQuotaComprende,
    laQuotaNonComprende
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getDesertoDelGobiPage() {
  const query = `*[_type == "desertoDelGobiPage"][0]{
    title,
    region,
    duration,
    shortItinerary,
    images,
    itineraryData
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getDesertoNaadamPage() {
  const query = `*[_type == "desertoNaadamPage"][0]{
    title,
    duration,
    dates,
    shortItinerary,
    images,
    itineraryData,
    quataIndividuale,
    laQuotaComprende,
    laQuotaNonComprende
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getOverlandMongolia() {
  const query = `*[_type == "overlandMongolia"][0]{
    title,
    region,
    duration,
    shortItinerary,
    images,
    itineraryData,
    laQuotaComprende,
    laQuotaNonComprende
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getSteppeGobiPage() {
  const query = `*[_type == "steppeGobiPage"][0]{
    title,
    region,
    duration,
    shortItinerary,
    images,
    itineraryData,
    laQuotaComprende,
    laQuotaNonComprende
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getTaigaTour() {
  const query = `*[_type == "taigaTour"][0]{
    title,
    region,
    duration,
    shortItinerary,
    images,
    itineraryData
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getTrekkingTour() {
  const query = `*[_type == "trekkingTourPage"][0]{
    title,
    duration,
    dateRange,
    shortItinerary,
    images,
    itineraryData,
    quataIndividuale,
    laQuotaComprende,
    laQuotaNonComprende,
    travelSuggestions,
    ourAdvantages
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}

export async function getTours() {
  const query = `*[_type == "tour"] | order(_createdAt asc){
    _id,
    title,
    slug,
    photo,
    duration,
    locations,
    desTitle1,
    describtion1,
    desTitle2,
    describtion2,
    btnText
  }`;

  return await client.fetch(query, {}, { cache: "no-store" });
}
