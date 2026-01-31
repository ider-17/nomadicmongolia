import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import BuyTravel from "@/components/BuyTravel";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type ShortItineraryItem = { day: number; title: string };
type ItineraryDataItem = {
  day: number;
  title: string;
  description: string;
  giugno: string;
};

export default async function IlDesertoDelEIlFestivalDiNaadamPage() {
  const birdWatchingPageData = await client.fetch(
    `*[_type == "birdWatchingPage"][0]{
    title,
    duration,
    date,
    shortItinerary[]{day, title},
    images[]{asset},
    itineraryData[]{day, title, description, giugno},
    keyBirdSpeciesList[],
    mammalList[],
    travelOptions[],
    inclusions[],
    exclusions[],
    equipmentList[]
  }`,
    {},
    { cache: "no-store" }
  );

  return (
    <div className="bg-white h-screen">
      <Header />

      <section className="w-full min-h-screen text-black sm:px-37.5 px-[5%] pt-25 space-y-6 bg-white pb-6 relative">
        <BuyTravel />

        <h1 className="text-center font-bold text-3xl">
          Tipo di viaggio: Birdwatching
        </h1>
        <h2 className="font-semibold">Durata: {birdWatchingPageData.duration}</h2>
        <p>{birdWatchingPageData.date}</p>

        {/* Breve itinerario */}
        <div>
          <h2 className="font-semibold text-xl mb-2">Breve itinerario</h2>
          {birdWatchingPageData.shortItinerary.map((item: ShortItineraryItem) => (
            <div key={item.day} className="flex gap-1">
              <h3 className="font-semibold whitespace-nowrap">
                Giorno {item.day}.
              </h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Images */}
        {birdWatchingPageData.images.map((img: any, i: number) => (
          <img
            key={i}
            src={urlFor(img.asset).url()}
            alt="Il deserto del Gobi e il festival di Naadam 2025"
            className="rounded-xl"
          />
        ))}

        {/* Itinerario dettagliato */}
        <h1 className="text-center text-3xl font-bold">
          Itinerario dettagliato
        </h1>
        {birdWatchingPageData.itineraryData.map((item: ItineraryDataItem) => (
          <div key={item.day}>
            <h2 className="mb-2 font-semibold">• {item.giugno}</h2>
            <h2 className="font-semibold">
              GIORNO {item.day}. {item.title}
            </h2>
            <p>{item.description}</p>
          </div>
        ))}

        {/* Species lists */}
        <div className="w-full flex gap-4">
          <div className="w-1/2">
            <h2 className="font-semibold">Key bird species list :</h2>
            {birdWatchingPageData.keyBirdSpeciesList.map(
              (bird: string, i: number) => (
                <p key={i}>
                  {i + 1}. {bird}
                </p>
              )
            )}
          </div>
          <div className="w-1/2">
            <h2 className="font-semibold">Mammal list :</h2>
            {birdWatchingPageData.mammalList.map((m: string, i: number) => (
              <p key={i}>
                {i + 1}. {m}
              </p>
            ))}
          </div>
        </div>

        {/* Travel Options */}
        <h1 className="text-center text-3xl font-bold">
          Quota individuale pp a partire da
        </h1>
        {birdWatchingPageData.travelOptions.map((opt: string, i: number) => (
          <div key={i} className="flex gap-4 mb-1">
            <p>✓</p>
            <p>{opt}</p>
          </div>
        ))}

        {/* Inclusions */}
        <h1 className="text-center text-3xl font-bold">
          Suggerimenti per il viaggio
        </h1>
        {birdWatchingPageData.inclusions.map((inc: string, i: number) => (
          <div key={i} className="flex gap-4 mb-1">
            <p>✓</p>
            <p>{inc}</p>
          </div>
        ))}

        {/* Exclusions */}
        <h1 className="text-center text-3xl font-bold">I nostri vantaggi</h1>
        {birdWatchingPageData.exclusions.map((exc: string, i: number) => (
          <div key={i} className="flex gap-4 mb-1">
            <p>✓</p>
            <p>{exc}</p>
          </div>
        ))}
        <p>
          N.B. Tutto quanto non citato è escluso dalla voce “La quota comprende”
        </p>

        {/* Equipment List */}
        <h1 className="text-center text-3xl font-bold">I nostri vantaggi</h1>
        {birdWatchingPageData.equipmentList.map((eq: string, i: number) => (
          <div key={i} className="flex gap-4 mb-1">
            <p>•</p>
            <p>{eq}</p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
