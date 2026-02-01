"use client";

import { useEffect, useState } from "react";
import BuyTravel from "@/components/BuyTravel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDesertoDelGobiPage } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { useLanguage } from "@/app/context/LanguageContext";
import type { SanityImageSource } from "@sanity/image-url";

type ShortItineraryItem = {
  day: number;
  titleIt: string;
  titleEn: string;
};

type ItineraryItem = {
  day: number;
  titleIt: string;
  titleEn: string;
  descriptionIt: string;
  descriptionEn: string;
};

type DesertoDelGobiPageData = {
  titleIt: string;
  titleEn: string;
  regionIt: string;
  regionEn: string;
  durationIt: string;
  durationEn: string;
  shortItinerary: ShortItineraryItem[];
  images: SanityImageSource[];
  itineraryData: ItineraryItem[];
};

export default function DesertoDelGobiPage() {
  const [data, setData] = useState<DesertoDelGobiPageData | null>(null);
  const { language } = useLanguage(); // "it" | "en"

  useEffect(() => {
    getDesertoDelGobiPage().then(setData);
  }, []);

  if (!data) return <p>loading...</p>;

  const isIt = language === "it";

  return (
    <div className="bg-white h-screen">
      <Header />

      <section className="w-full min-h-screen text-black sm:px-37.5 px-[5%] pt-25 space-y-6 bg-white pb-6 relative">
        <BuyTravel />

        <h1 className="text-center font-bold text-3xl">
          {isIt ? data.titleIt : data.titleEn}
        </h1>

        <div>
          <p className="font-semibold">
            {isIt ? data.regionIt : data.regionEn}
          </p>
          <p>{isIt ? data.durationIt : data.durationEn}</p>
        </div>

        {/* Breve itinerario */}
        <div>
          <h2 className="font-semibold text-xl mb-2">
            {isIt ? "Breve itinerario" : "Short itinerary"}
          </h2>

          {data.shortItinerary.map((item) => (
            <div key={item.day} className="flex gap-1">
              <h3 className="font-semibold">
                {isIt ? "Giorno" : "Day"} {item.day}.
              </h3>
              <p>{isIt ? item.titleIt : item.titleEn}</p>
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
          {isIt ? "Itinerario dettagliato" : "Detailed itinerary"}
        </h1>

        {data.itineraryData.map((item, index) => (
          <div key={index}>
            <h2 className="font-semibold">
              {index === 0
                ? ""
                : isIt
                  ? `GIORNO ${item.day}. `
                  : `DAY ${item.day}. `}
              {isIt ? item.titleIt : item.titleEn}
            </h2>
            <p>{isIt ? item.descriptionIt : item.descriptionEn}</p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
