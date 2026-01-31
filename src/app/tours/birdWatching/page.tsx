import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getBirdWatchingPage } from "@/sanity/lib/queries";
import BirdClient from "./BirdClient";

export default async function IlDesertoDelEIlFestivalDiNaadamPage() {
  const data = await getBirdWatchingPage();
  if (!data) return <p>Data not found!</p>;

  return (
    <div className="bg-white h-screen">
      <Header />
      <BirdClient data={data} />
      <Footer />
    </div>
  );
}
