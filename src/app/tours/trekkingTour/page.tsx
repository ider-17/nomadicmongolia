import { getTrekkingTour } from "@/sanity/lib/queries";
import TrekkingTourPageClient from "./TrekkingTourClient";

export default async function TrekkingTourPage() {
  const data = await getTrekkingTour();
  if (!data) return <p>Loading...</p>;

  return <TrekkingTourPageClient data={data} />;
}
