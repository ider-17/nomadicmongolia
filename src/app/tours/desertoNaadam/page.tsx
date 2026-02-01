import DesertoNaadamClient from "./DesertoNaadamClient";
import { getDesertoNaadamPage } from "@/sanity/lib/queries";

export default async function DesertoEFestivalNaadamPageServer() {
  const data = await getDesertoNaadamPage();
  if (!data) return <p>Loading ...</p>;

  return <DesertoNaadamClient data={data} />;
}
