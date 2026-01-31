"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Hexagon from "@/components/Hexagon";
import { getAboutPage } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default function AboutPage() {
  const [selectedTab, setSelectedTab] = useState("about");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getAboutPage().then(setData);
  }, []);

  if (!data) return null;

  return (
    <div className="bg-white text-black min-h-screen overflow-hidden">
      <Header />

      <section className="w-full sm:px-37.5 px-[5%] sm:pt-22.5 pt-14 mb-2">
        {/* Tabs */}
        <ul className="flex gap-5 font-semibold">
          <li
            onClick={() => setSelectedTab("about")}
            className={`cursor-pointer ${selectedTab === "about" && "border-b-2"}`}
          >
            CHI SIAMO
          </li>
          <li
            onClick={() => setSelectedTab("terms")}
            className={`cursor-pointer ${selectedTab === "terms" && "border-b-2"}`}
          >
            TERMS AND CONDITIONS
          </li>
        </ul>

        {/* ABOUT */}
        <div className="w-full flex flex-col gap-5 sm:pt-6">
          {selectedTab === "about" && (
            <section className="space-y-6">
              {/* I nostri vantaggi */}
              <div>
                <h2 className="text-center text-2xl font-bold mb-3">
                  I nostri vantaggi
                </h2>
                <div className="sm:grid sm:grid-cols-2 sm:grid-rows-8 gap-1">
                  {data.vantaggiIt?.map((item: string, index: number) => (
                    <p key={index} className="flex gap-2">
                      <span>•</span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Our benefits */}
              <div className="flex flex-col items-center">
                <h2 className="text-center text-2xl font-bold">Our benefits</h2>
                <div className="flex flex-col items-start">
                  {data.benefitsEn?.map((item: string, index: number) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>

              {/* About text */}
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-center">
                  Grazie per aver visitato il nostro sito!
                </h2>
                <p className="text-justify">{data.aboutText}</p>

                {/* Team */}
                <div className="w-full sm:flex block gap-6 space-y-2">
                  {data.team?.map((member: any, index: number) => (
                    <div key={index} className="sm:w-1/2 w-full space-y-1">
                      {member.photo?.asset && (
                        <img
                          src={urlFor(member.photo).url()}
                          alt={member.name}
                          className="sm:w-75 sm:h-87.5 w-[80%] h-80 mx-auto rounded-2xl object-cover"
                        />
                      )}

                      <p className="font-semibold text-center text-lg">
                        {member.name}
                      </p>
                      <p className="text-center sm:w-1/2 w-full mx-auto">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why choose us */}
              <div className="w-full mt-4">
                <div className="flex gap-2 justify-center *:text-3xl *:font-bold">
                  <h2>Perchè Scegliere</h2>
                  <p className="text-[#327236]">Noi ?</p>
                </div>
                <Hexagon />
              </div>
            </section>
          )}

          {/* TERMS */}
          {selectedTab === "terms" &&
            data.terms?.map((item: any, index: number) => (
              <div key={index} className="space-y-2">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p>{item.content}</p>
                {item.content2 && <p>{item.content2}</p>}
                {item.content3 && <p>{item.content3}</p>}
                {item.content4 && <p>{item.content4}</p>}
              </div>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}