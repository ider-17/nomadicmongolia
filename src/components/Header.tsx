"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MenuBar } from "./Menu";
import { useLanguage } from "@/app/context/LanguageContext";

export const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`w-full fixed top-0 flex justify-between items-center py-2 bg-[#2fa147] z-50 transition-transform duration-300 h-16 px-[5%] sm:h-fit sm:px-37.5 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div>
        <Link href="/">
          <Image
            src="/assets/logo-footer.webp"
            alt="Nomadic Logo"
            width={120}
            height={24}
            className="object-cover object-center cursor-pointer sm:w-50 sm:h-15 w-30 h-8"
          />
        </Link>
      </div>

      <div className="flex gap-2 text-white">
        <button
          onClick={() => setLanguage("it")}
          className={`cursor-pointer ${language === "it" ? "font-semibold underline underline-offset-8" : ""}`}
        >
          IT
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`cursor-pointer ${language === "en" ? "font-semibold underline underline-offset-8" : ""}`}
        >
          EN
        </button>
      </div>

      <ul className="sm:flex gap-4 *:text-white *:hover:underline *:hover:underline-offset-8 *:font-semibold *:cursor-pointer hidden">
        <li>
          <Link href="/">{language === "it" ? "HOME" : "HOME"}</Link>
        </li>
        <li>
          {/* WHO WE ARE */}
          <Link href="/about">{language === "it" ? "CHI SIAMO" : "ABOUT US"}</Link>
        </li>
        <li>
          {/* GALLERY */}
          <Link href="/gallery">{ language === "it" ? "GALLERIA" : "GALLERY"}</Link>
        </li>
        <li>
          {/* TOURS */}
          <Link href="/tours">{ language === "it" ? "VIAGGI" : "TRIPS"}</Link>
        </li>
        {/* <li>
                    // BOOKING
                    <Link href="/booking">PRENOTA</Link>
                </li> */}
        <li>
          {/* CONTACT US */}
          <Link href="/contacts">{ language === "it" ? "CONTATTI" : "CONTACTS"}</Link>
        </li>
      </ul>

      {/* mobile */}

      <div className="block sm:hidden">
        <MenuBar />
      </div>
    </header>
  );
};
