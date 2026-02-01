import { getDesertoDelGobiPage } from "@/sanity/lib/queries";
import DesertoDelGobiPageClient from "./DesertoDelGobiClient";

export default async function DesertoDelGobiPageServer() {
  const data = await getDesertoDelGobiPage();
  if (!data) return <p>Loading ...</p>;

  return <DesertoDelGobiPageClient data={data} />;
}
