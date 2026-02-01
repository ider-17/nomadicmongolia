import ToursPageClient from "./ToursPageClient";
import { getTours } from "@/sanity/lib/queries";

export default async function ToursPageServer() {
  const res = await getTours();
  const tours = Array.isArray(res.tours) ? res.tours : [];
  return <ToursPageClient data={tours} />;
}
