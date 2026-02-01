import { notFound } from "next/navigation";
import DesertoNaadamClient from "./DesertoNaadamClient";
import { getDesertoNaadamPage } from "@/sanity/lib/queries";

export default async function DesertoEFestivalNaadamPageServer() {
  const data = await getDesertoNaadamPage();
  if (!data) {
    notFound(); // ← маш чухал
  }

  return <DesertoNaadamClient data={data} />;
}
