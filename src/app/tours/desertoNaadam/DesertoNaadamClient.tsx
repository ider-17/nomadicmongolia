"use client";

import BuyTravel from "@/components/BuyTravel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { urlFor } from "@/sanity/lib/image";
import { useLanguage } from "@/app/context/LanguageContext";

type Props = { data: any };

export default function DesertoNaadamClient({ data }: Props) {
  const { language } = useLanguage();

  return (
    <div className="bg-white h-screen">
      <Header />

      <section className="w-full min-h-screen text-black sm:px-37.5 px-[5%] pt-25 space-y-6 bg-white pb-6 relative">

        <h1 className="text-center font-bold text-3xl">
          {language === "it" ? data.titleIt : data.titleEn}
        </h1>

        <h2 className="font-semibold">
          {language === "it" ? data.durationIt : data.durationEn}
        </h2>

        <p>{language === "it" ? data.datesIt : data.datesEn}</p>

        {/* Breve Itinerario */}
        <div>
          <h2 className="font-semibold text-xl mb-2">
            {language === "it" ? "Breve itinerario" : "Short itinerary"}
          </h2>
          {data.shortItinerary.map((item: any) => (
            <div key={item.day} className="flex gap-1">
              <h3 className="font-semibold whitespace-nowrap">
                {language === "it" ? "Giorno" : "Day"} {item.day}.
              </h3>
              <p>{language === "it" ? item.titleIt : item.titleEn}</p>
            </div>
          ))}
        </div>

        {/* Images */}
        {data.images.map((img: any, index: number) => (
          <img
            key={index}
            src={urlFor(img).url()}
            alt={language === "it" ? data.titleIt : data.titleEn}
            className="rounded-xl"
          />
        ))}

        {/* Itinerario dettagliato */}
        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "Itinerario dettagliato" : "Detailed itinerary"}
        </h1>

        {data.itineraryData.map((item: any, index: number) => (
          <div key={index}>
            <h2 className="font-semibold">
              {language === "it"
                ? `GIORNO ${index + 1}. `
                : `DAY ${item.day}. `}
              {language === "it" ? item.titleIt : item.titleEn}
            </h2>
            <p>{language === "it" ? item.descriptionIt : item.descriptionEn}</p>
          </div>
        ))}

        {/* Quota individuale */}
        <h2 className="font-semibold text-3xl">
          {language === "it" ? "Quota individuale" : "Individual price"}:
        </h2>
        <div className="flex flex-col gap-4">
          {(language === "it"
            ? data.quotaIndividualeIt
            : data.quotaIndividualeEn
          ).map((desc: string, i: number) => (
            <p key={i}>{desc}</p>
          ))}
        </div>

        {/* La Quota Comprende */}
        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "La quota comprende" : "Included"}
        </h1>
        {(language === "it"
          ? data.laQuotaComprendeIt
          : data.laQuotaComprendeEn
        ).map((desc: string, i: number) => (
          <div key={i} className="flex gap-4 mb-1">
            <p>✓</p>
            <p>{desc}</p>
          </div>
        ))}

        {/* La Quota Non Comprende */}
        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "La quota non comprende" : "Not included"}
        </h1>
        {(language === "it"
          ? data.laQuotaNonComprendeIt
          : data.laQuotaNonComprendeEn
        ).map((desc: string, i: number) => (
          <div key={i} className="flex gap-4 mb-1">
            <p>✓</p>
            <p>{desc}</p>
          </div>
        ))}
        <BuyTravel data={data} />
      </section>

      <Footer />
    </div>
  );
}
