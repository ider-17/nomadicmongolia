import { client } from "./client"

export async function getAboutSection() {
  const query = `*[_type == "aboutSection"][0]{
    mainTitle,
    sectionTitle,
    description,
    buttonText,
    buttonLink,
    "imageUrl": image.asset->url
  }`

  return await client.fetch(query)
}

export async function getSlides() {
  const query = `*[_type == "carouselSlide"] | order(_createdAt asc){
    _id,
    title,
    description,
    btnText,
    "bgImageUrl": bgImage.asset->url
  }`

  return await client.fetch(query)
}

export async function getAboutPage() {
  return await client.fetch(`*[_type == "aboutPage"][0]{
    title,
    sections[]->{
      title,
      description,
      image {
        asset->{
          url
        }
      },
      imagePosition,
      order
    }
  }`)
}
