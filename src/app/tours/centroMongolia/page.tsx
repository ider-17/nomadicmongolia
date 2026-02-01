import CentroMongoliaPageClient from "./centroClient";
import { getCentroMongoliaPage } from "@/sanity/lib/queries";

export default async function CentroMongoliaPageServer() {
  const data = await getCentroMongoliaPage();
  if (!data) return <p>Loading ...</p>;

  return <CentroMongoliaPageClient data={data} />;
}
