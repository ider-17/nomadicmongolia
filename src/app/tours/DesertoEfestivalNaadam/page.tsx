import DesertoNaadamClient from "./DesertoNaadamClient";
import { getDesertoNaadamPage } from "@/sanity/lib/queries";

export default async function Page() {
  const data = await getDesertoNaadamPage();
  if (!data) return null;

  return <DesertoNaadamClient data={data} />;
}
