import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/Carousel";
import { getSlides, getTourData } from "@/sanity/lib/queries";

interface Section {
  title: string;
  content: string;
  imagePosition: 'left' | 'right';
  image: {
    asset: {
      url: string;
    };
  };
}

export default async function Home() {

  const slides = await getSlides();

  const data = await getTourData();

  if (!data || !data.sections) return null;

  return (
    <div className="bg-white">

      <Header />

      {/* section 1 */}

      <Carousel slides={slides} />

      {/* section 2 */}

      <AboutSection />

      {/* section 3 */}

      {data.sections.map((section: Section, index: number) => (
        <div key={index} className="w-full text-black px-[150px] mb-20">
          <div className="flex gap-4 items-center">
            {section.imagePosition === 'left' && (
              <div
                className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: `url(${section.image.asset.url})` }}
              ></div>
            )}
            <div className="w-1/2">
              <h1 className="text-3xl font-bold text-center mb-6">{section.title}</h1>
              <p className="text-lg text-justify">{section.content}</p>
            </div>
            {section.imagePosition === 'right' && (
              <div
                className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: `url(${section.image.asset.url})` }}
              ></div>
            )}
          </div>
        </div>
      ))}

      <Footer />

    </div >
  )
};