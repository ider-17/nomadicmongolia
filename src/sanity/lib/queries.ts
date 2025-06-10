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