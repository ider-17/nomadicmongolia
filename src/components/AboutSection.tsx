"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function AboutSection({ data }: any) {
  const { language } = useLanguage();

  return (
    <section className="w-full h-fit text-black sm:px-37.5 sm:mb-20 mb-10 px-[5%]">
      <h1 className="text-center font-bold text-4xl my-5 mb-10">
        {language === "it" ? data.mainTitleIt : data.mainTitleEn}
      </h1>
      <div className="sm:flex gap-4 sm:items-center sm:pb-0 pb-10">
        <div
          className="sm:w-1/2 w-full h-100 bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400 mb-5"
          style={{ backgroundImage: `url(${urlFor(data.image)})` }}
        ></div>

        <div className="sm:w-1/2 w-full">
          <h1 className="text-3xl font-bold text-center mb-6">
            {language === "it" ? data.sectionTitleIt : data.sectionTitleEn}
          </h1>
          <p className="text-center text-lg">
            {language === "it" ? data.descriptionIt : data.descriptionEn}
            <Link href={data.buttonLink}>
              <button className="ml-3 border border-black py-0 px-1 rounded-2xl hover:bg-black hover:text-white cursor-pointer active:bg-black active:text-white">
                {language === "it" ? data.buttonTextIt : data.buttonTextEn}
              </button>
            </Link>
          </p>
        </div>
      </div>
      <hr className="sm:hidden block" />
    </section>
  );
}
