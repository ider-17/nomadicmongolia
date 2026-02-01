"use client";

import BuyTravel from "@/components/BuyTravel";
import { urlFor } from "@/sanity/lib/image";
import { useLanguage } from "@/app/context/LanguageContext";

export default function BirdClient({ data }: { data: any }) {
  const { language } = useLanguage();
  const isIt = language === "it";

  return (
    <section className="w-full min-h-screen text-black sm:px-37.5 px-[5%] pt-25 space-y-6 bg-white pb-6 relative">
      <h1 className="text-center font-bold text-3xl">
        {isIt ? data.titleIt : data.titleEn}
      </h1>

      <h2 className="font-semibold">
        {isIt ? data.durationIt : data.durationEn}
      </h2>

      <p>{isIt ? data.dateIt : data.dateEn}</p>

      {/* Short itinerary */}
      <div>
        <h2 className="font-semibold text-xl mb-2">
          {isIt ? "Breve itinerario" : "Short itinerary"}
        </h2>

        {data.shortItinerary.map((item: any) => (
          <div key={item.day} className="flex gap-1">
            <h3 className="font-semibold whitespace-nowrap">
              {isIt ? "Giorno" : "Day"} {item.day}.
            </h3>
            <p>{isIt ? item.titleIt : item.titleEn}</p>
          </div>
        ))}
      </div>

      {/* Images */}
      {data.images.map((img: any, i: number) => (
        <img key={i} src={urlFor(img.asset).url()} className="rounded-xl" />
      ))}

      {/* Detailed itinerary */}
      <h1 className="text-center text-3xl font-bold">
        {isIt ? "Itinerario dettagliato" : "Detailed itinerary"}
      </h1>

      {data.itineraryData.map((item: any, index: number) => (
        <div key={item.day} className="mb-4">
          <h2 className="mb-2 font-semibold">
            • {isIt ? item.giugnoIt : item.giugnoEn}
          </h2>
          <h2 className="font-semibold">
            {index !== 0 ? (isIt ? "GIORNO" : "DAY") + " " : ""}
            {item.day} {isIt ? item.titleIt : item.titleEn}
          </h2>
          <p>{isIt ? item.descriptionIt : item.descriptionEn}</p>
        </div>
      ))}

      {/* Lists helper */}
      <div className="w-full sm:flex gap-2">
        <div className="sm:w-1/2 text-wrap">
          <h2 className="text-start text-3xl font-bold text-wrap">
            {language === "it"
              ? "Lista delle specie di uccelli più importanti"
              : "Key bird species list"}
          </h2>
          {language === "it"
            ? data.keyBirdSpeciesListIt.map((item: any, i: number) => (
                <div key={i}>
                  {i + 1}. {item}
                </div>
              ))
            : data.keyBirdSpeciesListEn.map((item: any, i: number) => (
                <div key={i}>
                  {i + 1}. {item}
                </div>
              ))}
        </div>

        <div className="sm:w-1/2">
          <h2 className="text-start text-3xl font-bold text-wrap">
            {language === "it" ? "Elenco dei mammiferi" : "Mammal list"}
          </h2>
          {language === "it"
            ? data.mammalListIt.map((item: any, i: number) => (
                <div key={i}>
                  {i + 1}. {item}
                </div>
              ))
            : data.mammalListEn.map((item: any, i: number) => (
                <div key={i}>
                  {i + 1}. {item}
                </div>
              ))}
        </div>
      </div>

      <div className="sm:w-full">
        <h2 className="text-center text-3xl font-bold text-wrap">
          {language === "it" ? "Quota individuale" : "Travel options"}
        </h2>
        {language === "it"
          ? data.travelOptionsIt.map((item: any, i: number) => (
              <div key={i} className="flex gap-2 space-y-1">
                <span>✓</span>
                <span>{item}</span>
              </div>
            ))
          : data.travelOptionsEn.map((item: any, i: number) => (
              <div key={i} className="flex gap-2 space-y-1">
                <span>✓</span>
                <span>{item}</span>
              </div>
            ))}
      </div>

      <div className="sm:w-full">
        <h2 className="text-center text-3xl font-bold text-wrap">
          {language === "it" ? "La quota comprende" : "Inclusions"}
        </h2>
        {language === "it"
          ? data.inclusionsIt.map((item: any, i: number) => (
              <div key={i} className="flex gap-2 space-y-1">
                <span>✓</span>
                <span>{item}</span>
              </div>
            ))
          : data.inclusionsEn.map((item: any, i: number) => (
              <div key={i} className="flex gap-2 space-y-1">
                <span>✓</span>
                <span>{item}</span>
              </div>
            ))}
      </div>

      <div className="sm:w-full">
        <h2 className="text-center text-3xl font-bold text-wrap">
          {language === "it" ? "La quota non comprende" : "Exclusions"}
        </h2>
        {language === "it"
          ? data.exclusionsIt.map((item: any, i: number) => (
              <div key={i} className="flex gap-1 space-y-1">
                <span>•</span>
                <span>{item}</span>
              </div>
            ))
          : data.exclusionsEn.map((item: any, i: number) => (
              <div key={i} className="flex gap-1 space-y-1">
                <span>•</span>
                <span>{item}</span>
              </div>
            ))}
      </div>
      <BuyTravel data={data} />
    </section>
  );
}
