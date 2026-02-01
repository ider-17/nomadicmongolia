"use client";

import BuyTravel from "@/components/BuyTravel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { urlFor } from "@/sanity/lib/image";
import { getOverlandMongolia } from "@/sanity/lib/queries";
import { useLanguage } from "@/app/context/LanguageContext";
import { useEffect, useState } from "react";

interface ShortItineraryItem {
  day: number;
  titleIt: string;
  titleEn: string;
}

interface ImageItem {
  asset: {
    url: string;
  };
}

interface ItineraryItem {
  day: number;
  titleIt: string;
  titleEn: string;
  descriptionIt: string;
  descriptionEn: string;
}

interface Tour {
  titleIt: string;
  titleEn: string;
  regionIt: string;
  regionEn: string;
  durationIt: string;
  durationEn: string;
  shortItinerary: ShortItineraryItem[];
  images: ImageItem[];
  itineraryData: ItineraryItem[];
  laQuotaComprendeIt: string[];
  laQuotaComprendeEn: string[];
  laQuotaNonComprendeIt: string[];
  laQuotaNonComprendeEn: string[];
}

export default function OverlandMongoliaPage() {
  const { language } = useLanguage();
  const [tour, setTour] = useState<Tour | null>(null);

  useEffect(() => {
    async function fetchTour() {
      const data = await getOverlandMongolia();
      setTour(data);
    }
    fetchTour();
  }, []);

  if (!tour) return <p>Loading...</p>;

  // Хэлээр сонгох
  const title = language === "it" ? tour.titleIt : tour.titleEn;
  const region = language === "it" ? tour.regionIt : tour.regionEn;
  const duration = language === "it" ? tour.durationIt : tour.durationEn;
  const shortItinerary = tour.shortItinerary.map((item) => ({
    day: item.day,
    title: language === "it" ? item.titleIt : item.titleEn,
  }));
  const itineraryData = tour.itineraryData.map((item) => ({
    day: item.day,
    title: language === "it" ? item.titleIt : item.titleEn,
    description: language === "it" ? item.descriptionIt : item.descriptionEn,
  }));
  const laQuotaComprende =
    language === "it" ? tour.laQuotaComprendeIt : tour.laQuotaComprendeEn;
  const laQuotaNonComprende =
    language === "it" ? tour.laQuotaNonComprendeIt : tour.laQuotaNonComprendeEn;

  return (
    <div className="bg-white">
      <Header />

      <section className="w-full min-h-screen text-black sm:px-37.5 px-[5%] pt-25 space-y-6 bg-white pb-6 relative">
        <BuyTravel />
        <h1 className="text-center font-bold text-3xl">{title}</h1>

        <div>
          <p className="font-semibold">
            {language === "it" ? "Regione" : "Region"}: {region}
          </p>
          <p>
            {language === "it" ? "Durata" : "Duration"}: {duration}
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">
            {language === "it" ? "Breve itinerario" : "Short itinerary"}
          </h2>
          {shortItinerary.map((item) => (
            <div key={item.day} className="flex gap-1">
              <h3 className="font-semibold whitespace-nowrap">
                {language === "it" ? "Giorno" : "Day"} {item.day}.
              </h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {tour.images.map((img: any, index: number) => (
          <img
            key={index}
            src={urlFor(img).url()}
            alt={title}
            className="rounded-xl"
          />
        ))}

        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "Itinerario dettagliato" : "Detailed itinerary"}
        </h1>
        {itineraryData.map((item) => (
          <div key={item.day}>
            <h2 className="font-semibold">
              {language === "it" ? "GIORNO" : "DAY"} {item.day}. {item.title}
            </h2>
            <p>{item.description}</p>
          </div>
        ))}

        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "La quota comprende" : "Included"}
        </h1>
        <div>
          {laQuotaComprende.map((item, index) => (
            <div key={index} className="flex gap-4 mb-1">
              <p>✓</p>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "La quota non comprende" : "Not included"}
        </h1>
        <div>
          {laQuotaNonComprende.map((item, index) => (
            <div key={index} className="flex gap-4 mb-1">
              <p>✓</p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
