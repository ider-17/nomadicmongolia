import BuyTravel from "@/components/BuyTravel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDesertoDelGobiPage } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

type ShortItineraryItem = { day: number; title: string };
type ItineraryItem = { day: number; title: string; description: string };

type DesertoDelGobiPageData = {
  title: string;
  region: string;
  duration: string;
  shortItinerary: ShortItineraryItem[];
  images: SanityImageSource[];
  itineraryData: ItineraryItem[];
};

export default async function DesertoDelGobiPage() {
  const data: DesertoDelGobiPageData | null = await getDesertoDelGobiPage();
  if (!data) return null;

  return (
    <div className="bg-white h-screen">
      <Header />
      <section className="w-full min-h-screen text-black sm:px-37.5 px-[5%] pt-25 space-y-6 bg-white pb-6 relative">
        <BuyTravel />

        <h1 className="text-center font-bold text-3xl">{data.title}</h1>
        <div>
          <p className="font-semibold">Regione: {data.region}</p>
          <p>Durata: {data.duration}</p>
        </div>

        {/* Breve itinerario */}
        <div>
          <h2 className="font-semibold text-xl mb-2">Breve itinerario</h2>
          {data.shortItinerary.map((item) => (
            <div key={item.day} className="flex gap-1">
              <h3 className="font-semibold">Giorno {item.day}.</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Images */}
        {data.images.map((img, index) => (
          <img
            key={index}
            src={urlFor(img).url()}
            alt="Deserto del Gobi Tour"
            className="rounded-xl"
          />
        ))}

        {/* Itinerario dettagliato */}
        <h1 className="text-center text-3xl font-bold">
          Itinerario dettagliato
        </h1>
        {data.itineraryData.map((item, index) => (
          <div key={index}>
            <h2 className="font-semibold">
              {index === 0 ? "" : `GIORNO ${item.day}. `}
              {item.title}
            </h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
