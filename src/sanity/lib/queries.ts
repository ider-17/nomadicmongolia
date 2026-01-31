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
