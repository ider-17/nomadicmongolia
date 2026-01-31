import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import AboutClient from "./AboutClient";
import { getAboutPage } from "@/sanity/lib/queries";

export default async function AboutPage() {
  const data = await getAboutPage();

  if (!data) return <p>Data not found!</p>;

  return (
    <div className="bg-white text-black min-h-screen overflow-hidden">
      <Header />
      <AboutClient data={data} />
      <Footer />
    </div>
  );
}
