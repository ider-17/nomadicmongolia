"use client";

import BuyTravel from "@/components/BuyTravel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { urlFor } from "@/sanity/lib/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { SanityImageSource } from "@sanity/image-url";

export default function TrekkingTourPageClient({ data }: any) {
  const { language } = useLanguage();

  return (
    <div className="bg-white">
      <Header />

      <section className="w-full min-h-screen text-black px-[5%] pt-25 space-y-6 pb-6 sm:px-37.5">
        <BuyTravel />

        {/* Title */}
        <h1 className="text-center font-bold text-3xl">
          {language === "it" ? data.titleIt : data.titleEn}
        </h1>

        {/* Region & Duration */}
        <div>
          <p className="font-semibold">
            {language === "it" ? data.regionIt : data.regionEn}
          </p>
          <p>{language === "it" ? data.durationIt : data.durationEn}</p>
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

        {/* Images */}
        {data.images.map((img: SanityImageSource, index: number) => (
          <img
            key={index}
            src={urlFor(img).url()}
            alt={
              language === "it"
                ? "Centro Mongolia Tour"
                : "Central Mongolia Tour"
            }
            className="rounded-xl"
          />
        ))}

        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "Itinerario dettagliato" : "Detailed itinerary"}
        </h1>

        {data.itineraryData.map((item: any, index: number) => (
          <div key={item.day} className="mb-4">
            <h2 className="mb-2">
              • {language === "it" ? item.dateIt : item.dateEn}
            </h2>
            <h2 className="font-semibold">
              {language === "it" ? "GIORNO" : "DAY "} {item.day}.{" "}
              {language === "it" ? item.titleIt : item.titleEn}
            </h2>
            <p>{language === "it" ? item.descriptionIt : item.descriptionEn}</p>
            <p className="mt-2">{language === "it" ? item.subDescriptionIt : item.subDescriptionEn}</p>
          </div>
        ))}

        <div className="sm:w-full">
          <h2 className="text-center text-3xl font-bold text-wrap">
            {language === "it" ? "Quota individuale" : "Travel options"}
          </h2>
          {language === "it"
            ? data.quataIndividualeIt.map((item: any, i: number) => (
                <div key={i} className="flex gap-2 space-y-1">
                  <span>✓</span>
                  <span>{item}</span>
                </div>
              ))
            : data.quataIndividualeEn.map((item: any, i: number) => (
                <div key={i} className="flex gap-2 space-y-1">
                  <span>✓</span>
                  <span>{item}</span>
                </div>
              ))}
        </div>

        {/* Quota */}
        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "La quota comprende" : "Included"}
        </h1>
        <div>
          {(language === "it"
            ? data.laQuotaComprendeIt
            : data.laQuotaComprendeEn
          ).map((text: string, index: number) => (
            <div key={index} className="flex gap-4 mb-1">
              <p>✓</p>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "La quota non comprende" : "Not Included"}
        </h1>
        <div>
          {(language === "it"
            ? data.laQuotaNonComprendeIt
            : data.laQuotaNonComprendeEn
          ).map((text: string, index: number) => (
            <div key={index} className="flex gap-4 mb-1">
              <p>✓</p>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "Suggerimenti per il viaggio" : "Travel Tips"}
        </h1>
        <div>
          {(language === "it"
            ? data.travelSuggestionsIt
            : data.travelSuggestionsEn
          ).map((text: string, index: number) => (
            <div key={index} className="flex gap-4 mb-1">
              <p>✓</p>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <h1 className="text-center text-3xl font-bold">
          {language === "it" ? "I nostri vantaggi" : "Our Advantages"}
        </h1>
        <div>
          {(language === "it"
            ? data.ourAdvantagesIt
            : data.ourAdvantagesEn
          ).map((text: string, index: number) => (
            <div key={index} className="flex gap-4 mb-1">
              <p>✓</p>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
