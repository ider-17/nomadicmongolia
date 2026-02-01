import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getAboutSection, getSlides, getTourData } from "@/sanity/lib/queries";
import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/Carousel";
import SectionThree from "@/components/SectionThree";

interface Section {
  titleIt: string;
  titleEn: string;
  contentIt: string;
  contentEn: string;
  imagePosition: "left" | "right";
  image: {
    asset: {
      url: string;
    };
  };
}

export default async function Home() {
  const slides = await getSlides();

  const data = await getTourData();

  if (!data || !data.sections) return <p>Loading ...</p>;

  const aboutSectionData = await getAboutSection();

  if (!aboutSectionData) return null;

  return (
    <div className="bg-white w-full overflow-hidden">
      <Header />

      {/* section 1 */}

      <Carousel slides={slides} />

      {/* section 2 */}

      <AboutSection data={aboutSectionData} />

      {/* section 3 */}

      {data.sections.map((section: Section, index: number) => (
        <SectionThree key={index} section={section} />
      ))}

      <Footer />
    </div>
  );
}
