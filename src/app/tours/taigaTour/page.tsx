import TaigaTourPageClient from "./TaigaTourClient";
import { getTaigaTour } from "@/sanity/lib/queries";

export default async function TaigaTourPageServer() {
  const data = await getTaigaTour();

  if (!data) return <p>Loading...</p>;

  return <TaigaTourPageClient data={data} />;
}
