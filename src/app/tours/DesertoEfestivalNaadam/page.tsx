import BuyTravel from "@/components/BuyTravel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDesertoNaadamPage } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function DesertoNaadamPage() {
  const data = await getDesertoNaadamPage();

  if (!data) return null;

  return (
    <div className="bg-white h-screen">
      <Header />

      <section className="w-full min-h-screen text-black sm:px-37.5 px-[5%] pt-25 space-y-6 bg-white pb-6 relative">
        <BuyTravel />
        <h1 className="text-center font-bold text-3xl">{data.title}</h1>
        <h2 className="font-semibold">Durata: {data.duration}</h2>
        <p>{data.dates}</p>

        {/* Breve Itinerario */}
        <div>
          <h2 className="font-semibold text-xl mb-2">Breve itinerario</h2>
          {data.shortItinerary.map((item: any) => (
            <div key={item.day} className="flex gap-1">
              <h3 className="font-semibold whitespace-nowrap">
                Giorno {item.day}.
              </h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Images */}
        {data.images.map((img: any, index: number) => (
          <img
            key={index}
            src={urlFor(img).url()}
            alt={data.title}
            className="rounded-xl"
          />
        ))}

        {/* Itinerario dettagliato */}
        <h1 className="text-center text-3xl font-bold">
          Itinerario dettagliato
        </h1>
        {data.itineraryData.map((item: any, index: number) => (
          <div key={index}>
            <h2 className="font-semibold">
              {index === 0 ? "" : `GIORNO ${item.day}. `}
              {item.title}
            </h2>
            <p>{item.description}</p>
          </div>
        ))}

        <h2 className="font-semibold">Quata individuale:</h2>
        <div className="flex flex-col gap-4">
          {data.quataIndividuale.map((desc: string, i: number) => (
            <p key={i}>{desc}</p>
          ))}
        </div>

        {/* La Quota Comprende */}
        <h1 className="text-center text-3xl font-bold">
          Suggerimenti per il viaggio
        </h1>
        {data.laQuotaComprende.map((desc: string, i: number) => (
          <div key={i} className="flex gap-4 mb-1">
            <p>✓</p>
            <p>{desc}</p>
          </div>
        ))}

        {/* La Quota Non Comprende */}
        <h1 className="text-center text-3xl font-bold">I nostri vantaggi</h1>
        {data.laQuotaNonComprende.map((desc: string, i: number) => (
          <div key={i} className="flex gap-4 mb-1">
            <p>✓</p>
            <p>{desc}</p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
