"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { getTours } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { useLanguage } from "../context/LanguageContext";

export default function ToursPageClient({ data }: any) {
  const { language } = useLanguage();
  const [showAllLocations, setShowAllLocations] = useState<
    Record<string, boolean>
  >({});

  const [tours, setTours] = useState<any[]>([]);

  useEffect(() => {
    getTours().then((res) => {
      if (Array.isArray(res)) {
        setTours(res);
      } else if (Array.isArray(res.tours)) {
        setTours(res.tours);
      } else {
        setTours([]);
      }
    });
  }, []);

  const toggleLocations = (id: string) => {
    setShowAllLocations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Header />

      <section className="w-full sm:pt-22.5 pt-15 sm:px-37.5 px-[5%] space-y-8 mb-6 min-h-screen">
        {tours.map((tour: any) => (
          <div
            key={tour._id}
            className="w-full flex gap-5 text-black items-center"
          >
            <img
              className="w-1/2 h-125 object-cover rounded-2xl hidden sm:block"
              src={urlFor(tour.photo).url()}
            />

            <div className="sm:w-1/2 w-full pt-4">
              <hr />

              <div className="flex gap-4 items-center mb-4 mt-2">
                <div className="border-r pr-2">
                  <p className="text-2xl font-bold text-center">
                    {tour.duration}
                  </p>
                  <p className="text-sm">
                    {language === "it" ? "GIORNI" : "DAY"}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {language === "it" ? tour.titleIt : tour.titleEn}
                  </h2>

                  <div className="flex gap-4 flex-wrap items-center">
                    {language === "it"
                      ? tour.locationsIt
                          .slice(
                            0,
                            showAllLocations[tour._id]
                              ? tour.locationsIt.length
                              : 3
                          )
                          .map((loc: string, i: number) => (
                            <div key={i} className="flex gap-1 items-center">
                              <MapPin size={15} />
                              <p>{loc}</p>
                            </div>
                          ))
                      : tour.locationsEn
                          .slice(
                            0,
                            showAllLocations[tour._id]
                              ? tour.locationsEn.length
                              : 3
                          )
                          .map((loc: string, i: number) => (
                            <div key={i} className="flex gap-1 items-center">
                              <MapPin size={15} />
                              <p>{loc}</p>
                            </div>
                          ))}

                    {language === "it"
                      ? tour.locationsIt.length > 3 && (
                          <button
                            onClick={() => toggleLocations(tour._id)}
                            className="text-sm text-blue-600"
                          >
                            {showAllLocations[tour._id] ? "less" : "... more"}
                          </button>
                        )
                      : tour.locationsEn.length > 3 && (
                          <button
                            onClick={() => toggleLocations(tour._id)}
                            className="text-sm text-blue-600"
                          >
                            {showAllLocations[tour._id] ? "less" : "... more"}
                          </button>
                        )}
                  </div>
                </div>
              </div>

              <img
                className="w-full sm:hidden h-125 object-cover rounded-2xl mb-2"
                src={urlFor(tour.photo).url()}
              />

              <div className="border-t pt-2 flex flex-col gap-4">
                <div>
                  <h2 className="font-semibold">
                    {language === "it" ? tour.desTitle1It : tour.desTitle1En}
                  </h2>
                  <p>
                    {language === "it"
                      ? tour.describtion1It
                      : tour.describtion1En}
                  </p>
                </div>

                <div>
                  <h2 className="font-semibold">
                    {language === "it" ? tour.desTitle2It : tour.desTitle2En}
                  </h2>
                  <p>
                    {language === "it"
                      ? tour.describtion2It
                      : tour.describtion2En}{" "}
                    ...
                  </p>
                </div>

                <div className="flex justify-end">
                  <Link href={`/tours/${tour.slug.current}`}>
                    <button className="py-1 px-2 border rounded-2xl hover:bg-black hover:text-white">
                      {language === "it" ? tour.btnTextIt : tour.btnTextEn}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
