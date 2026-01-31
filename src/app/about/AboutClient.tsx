"use client";

import { useState } from "react";
import Hexagon from "@/components/Hexagon";
import { urlFor } from "@/sanity/lib/image";
import { useLanguage } from "../context/LanguageContext"; // context-аа ашиглаж байна

export default function AboutClient({ data }: { data: any }) {
  const [selectedTab, setSelectedTab] = useState("about");
  const { language } = useLanguage();

  return (
    <section className="bg-white w-full sm:px-37.5 px-[5%] sm:pt-22.5 pt-14 mb-2">
      {/* Tabs */}
      <ul className="flex gap-5 font-semibold">
        <li
          onClick={() => setSelectedTab("about")}
          className={`cursor-pointer ${
            selectedTab === "about" ? "border-b-2" : ""
          }`}
        >
          {language === "it" ? "CHI SIAMO" : "ABOUT US"}
        </li>
        <li
          onClick={() => setSelectedTab("terms")}
          className={`cursor-pointer ${
            selectedTab === "terms" ? "border-b-2" : ""
          }`}
        >
          {language === "it" ? "TERMINI E CONDIZIONI" : "TERMS AND CONDITIONS"}
        </li>
      </ul>

      <div className="w-full flex flex-col gap-5 sm:pt-6">
        {/* ABOUT TAB */}
        {selectedTab === "about" && (
          <section className="space-y-6">
            {/* I nostri vantaggi / Our advantages */}
            <div>
              <h2 className="text-center text-2xl font-bold mb-3">
                {language === "it" ? "I nostri vantaggi" : "Our advantages"}
              </h2>
              <div className="sm:grid sm:grid-cols-2 h-fit gap-1">
                {(language === "it" ? data.vantaggiIt : data.vantaggiEn)?.map(
                  (item: string, index: number) => (
                    <p key={index} className="flex gap-2">
                      <span>•</span>
                      <span>{item}</span>
                    </p>
                  )
                )}
              </div>
            </div>

            {/* Our benefits */}
            {/* <div className="flex flex-col items-center">
              <h2 className="text-center text-2xl font-bold">
                {language === "it" ? "I nostri benefici" : "Our benefits"}
              </h2>
              <div className="flex flex-col items-start">
                {(language === "it" ? data.benefitsIt : data.benefitsEn)?.map(
                  (item: string, index: number) => (
                    <p key={index}>{item}</p>
                  )
                )}
              </div>
            </div> */}

            {/* About text */}
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-center">
                {language === "it"
                  ? "Grazie per aver visitato il nostro sito!"
                  : "Thank you for visiting our website!"}
              </h2>
              <p className="text-justify">
                {language === "it" ? data.aboutTextIt : data.aboutTextEn}
              </p>

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
                    <p className="sm:w-1/2 w-full mx-auto text-justify">
                      {language === "it" ? member.roleIt : member.roleEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why choose us */}
            <div className="w-full mt-4">
              <div className="flex gap-2 justify-center *:text-3xl *:font-bold">
                <h2>{language === "it" ? "Perchè Scegliere" : "Why choose"}</h2>
                <p className="text-[#327236]">
                  {language === "it" ? "Noi ?" : "Us?"}
                </p>
              </div>
              <Hexagon />
            </div>
          </section>
        )}

        {/* TERMS TAB */}
        {selectedTab === "terms" &&
          data.terms?.map((item: any, index: number) => (
            <div key={index} className="space-y-2">
              <h2 className="text-2xl font-semibold">
                {language === "it" ? item.titleIt : item.titleEn}
              </h2>
              <p>{language === "it" ? item.contentIt : item.contentEn}</p>
              {item.content2It && (
                <p>{language === "it" ? item.content2It : item.content2En}</p>
              )}
              {item.content3It && (
                <p>{language === "it" ? item.content3It : item.content3En}</p>
              )}
              {item.content4It && (
                <p>{language === "it" ? item.content4It : item.content4En}</p>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}
