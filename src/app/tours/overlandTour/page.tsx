import OverlandMongoliaClient from "./OverlandMongoliaClient";
import { getOverlandMongolia } from "@/sanity/lib/queries";

export default async function OverlandMongoliaPage() {
  const data = await getOverlandMongolia();
  if (!data) return <p>No data found</p>;

  return <OverlandMongoliaClient data={data} />;
}
