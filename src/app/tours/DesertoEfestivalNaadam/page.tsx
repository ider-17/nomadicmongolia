import CentroNaadamPageClient from "./desertoNaamam";
import { getDesertoNaadamPage } from "@/sanity/lib/queries";

export default async function desertoEFestivalNaadamPage() {
  const data = await getDesertoNaadamPage();
  if (!data) return null;

  return <CentroNaadamPageClient data={data} />;
}
