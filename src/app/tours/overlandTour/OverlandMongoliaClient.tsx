"use client";

import BuyTravel from "@/components/BuyTravel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { urlFor } from "@/sanity/lib/image";
import { useLanguage } from "@/app/context/LanguageContext";

type Props = { data: any };

export default function OverlandMongoliaClient({ data }: Props) {
  const { language } = useLanguage();

  const title = language === "it" ? data.titleIt : data.titleEn;
  const region = language === "it" ? data.regionIt : data.regionEn;
  const duration = language === "it" ? data.durationIt : data.durationEn;

  return (
    <div className="bg-white">
      <Header />

      <section className="w-full min-h-screen text-black sm:px-37.5 px-[5%] pt-25 space-y-6 bg-white pb-6 relative">
        <h1 className="text-center font-bold text-3xl">{title}</h1>

        <div>
          <p className="font-semibold">{region}</p>
          <p>{duration}</p>
        </div>

        {/* Short Itinerary */}
        <div>
          <h2 className="font-semibold text-xl mb-2">
            {language === "it" ? "Breve itinerario" : "Short Itinerary"}
          </h2>
          {data.shortItinerary.map((item: any) => (
            <div key={item.day} className="flex gap-1">
              <h3 className="font-semibold">
                {language === "it" ? "Giorno" : "Day"} {item.day}.
              </h3>
              <p>{language === "it" ? item.titleIt : item.titleEn}</p>
            </div>
          ))}
        </div>

        {data.images.map((img: any, index: number) => (
          <img
            key={index}
            src={urlFor(img).url()}
            alt={title}
            className="rounded-xl"
          />
        ))}

        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "Itinerario dettagliato" : "Detailed Itinerary"}
        </h1>

        {data.itineraryData.map((item: any) => (
          <div key={item.day}>
            <h2 className="font-semibold">
              {language === "it" ? `GIORNO ${item.day}.` : `DAY ${item.day}.`}{" "}
              {language === "it" ? item.titleIt : item.titleEn}
            </h2>
            <p>{language === "it" ? item.descriptionIt : item.descriptionEn}</p>
          </div>
        ))}

        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "La quota comprende" : "Included"}
        </h1>
        {language === "it"
          ? data.laQuotaComprendeIt.map((item: any, index: number) => (
              <div key={index} className="flex gap-4 mb-1">
                <p>✓</p>
                <p>{item}</p>
              </div>
            ))
          : data.laQuotaComprendeEn.map((item: any, index: number) => (
              <div key={index} className="flex gap-4 mb-1">
                <p>✓</p>
                <p>{item}</p>
              </div>
            ))}

        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "La quota non comprende" : "Not included"}
        </h1>
        {language === "it"
          ? data.laQuotaNonComprendeIt.map((item: any, index: number) => (
              <div key={index} className="flex gap-4 mb-1">
                <p>✓</p>
                <p>{item}</p>
              </div>
            ))
          : data.laQuotaNonComprendeEn.map((item: any, index: number) => (
              <div key={index} className="flex gap-4 mb-1">
                <p>✓</p>
                <p>{item}</p>
              </div>
            ))}
        <BuyTravel data={data} />
      </section>

      <Footer />
    </div>
  );
}
