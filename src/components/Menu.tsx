"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function MenuBar() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative">
      {/* Menu icon */}
      <button onClick={() => setOpen((prev) => !prev)}>
        <Menu color="white" />
      </button>

      {open && (
        <div
          className="flex flex-col border rounded-md absolute right-0 top-0 bg-[#2fa147] text-center
          *:text-white *:py-2 *:px-4 *:rounded-md
          *:hover:bg-white *:hover:text-[#2fa147]
          *:active:text-[#2fa147] *:active:bg-white"
        >
          <Link href="/" onClick={() => setOpen(false)}>
            {language === "it" ? "HOME" : "HOME"}
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            {language === "it" ? "CHI SIAMO" : "ABOUT US"}
          </Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>
            {language === "it" ? "GALLERIA" : "GALLERY"}
          </Link>
          <Link href="/tours" onClick={() => setOpen(false)}>
            {language === "it" ? "VIAGGI" : "TRIPS"}
          </Link>
          <Link href="/contacts" onClick={() => setOpen(false)}>
            {language === "it" ? "CONTATTI" : "CONTACTS"}
          </Link>
        </div>
      )}
    </div>
  );
}
