"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { urlFor } from "@/sanity/lib/image";
import React, { useState } from "react";

interface SectionItemProps {
  section: {
    titleIt: string;
    titleEn: string;
    contentIt: string;
    contentEn: string;
    image: { asset: { url: string } };
    imagePosition: "left" | "right";
  };
}

const SectionThree: React.FC<SectionItemProps> = ({ section }) => {
  const { language } = useLanguage();
  const [showMore, setShowMore] = useState(false);
  const maxLength = 500;

  const content = language === "it" ? section.contentIt : section.contentEn;
  const isLongText = content.length > maxLength;
  const visibleText = showMore ? content : content.slice(0, maxLength);

  return (
    <div className="w-full text-black sm:px-37.5 sm:mb-20 px-[5%]">
      <div className="sm:flex gap-4 items-center sm:mb-0 mb-5 sm:mt-0 mt-5">
        {section.imagePosition === "left" && (
          <div
            className="sm:w-1/2 w-full h-100 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(${urlFor(section.image)})` }}
          ></div>
        )}
        <div className="sm:w-1/2 w-full sm:mt-0 mt-4">
          <h1 className="text-3xl font-bold text-center mb-6">
            {language === "it" ? section.titleIt : section.titleEn}
          </h1>
          <p className="text-lg text-justify mb-5 sm:mb-0">
            {visibleText}
            {showMore ? "" : "..."}
            {isLongText && (
              <span
                onClick={() => setShowMore(!showMore)}
                className="text-blue-600 cursor-pointer ml-2"
              >
                {showMore ? "less" : "more"}
              </span>
            )}
          </p>
        </div>
        {section.imagePosition === "right" && (
          <div
            className="sm:w-1/2 w-full h-100 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(${urlFor(section.image)})` }}
          ></div>
        )}
      </div>
      <hr className="sm:hidden block" />
    </div>
  );
};

export default SectionThree;
