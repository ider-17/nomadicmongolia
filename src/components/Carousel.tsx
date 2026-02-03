"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Slide {
  _id: string;
  titleIt: string;
  titleEn: string;
  descriptionIt: string;
  descriptionEn: string;
  btnTextIt: string;
  btnTextEn: string;
  bgImage: string;
  linkUrl: string;
}

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // 👉 drag states
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // 👉 refs
  const touchStartX = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // ---------- Slide controls ----------
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // ---------- Auto slide ----------
  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [slides.length]);

  // ---------- Touch handlers ----------
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    stopAutoSlide();
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !touchStartX.current) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - touchStartX.current);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    if (Math.abs(dragOffset) > 50) {
      dragOffset < 0 ? nextSlide() : prevSlide();
    }

    setDragOffset(0);
    touchStartX.current = null;
    startAutoSlide();
  };

  // ---------- Keyboard ----------
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // ---------- JSX ----------
  return (
    <section className="bg-white w-full sm:h-195 h-180 flex justify-center sm:px-37.5 sm:pt-22.5 pt-20 px-[5%]">
      <div
        className="relative mx-auto h-150 w-full overflow-hidden rounded-lg shadow-xl touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div
          className={`h-full flex ${
            isDragging
              ? "transition-none"
              : "transition-transform duration-300 ease-out"
          }`}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-full relative flex items-end justify-center text-white overflow-hidden"
            >
              {/* Background image */}
              <Image
                src={urlFor(slide.bgImage)
                  .width(1920)
                  .height(1080)
                  .quality(75)
                  .format("webp")
                  .url()}
                alt="Slide background"
                fill
                priority={i === 0} // зөвхөн эхний slide
                placeholder="blur"
                blurDataURL={urlFor(slide.bgImage)
                  .width(20)
                  .height(10)
                  .blur(50)
                  .url()}
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/10 z-10" />

              {/* Content */}
              <div className="relative z-20 max-w-5xl mx-auto px-6 py-4 text-center mb-15">
                <h2 className="text-4xl font-bold mb-4 drop-shadow-md">
                  {language === "it" ? slide.titleIt : slide.titleEn}
                </h2>
                <p className="text-lg mb-6 drop-shadow-md">
                  {language === "it"
                    ? slide.descriptionIt
                    : slide.descriptionEn}
                </p>

                <Link href={slide.linkUrl}>
                  <button
                    className="
            bg-white/20
            backdrop-blur-md
            border border-white/30
            text-white
            font-semibold
            px-6 py-3
            rounded-full
            shadow-lg
            hover:bg-white/30
            hover:text-gray-800
            transition-all duration-300
          "
                  >
                    {language === "it" ? slide.btnTextIt : slide.btnTextEn}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-45 p-4">
          <button
            onClick={() => {
              stopAutoSlide();
              prevSlide();
              startAutoSlide();
            }}
            className="p-2 rounded-full bg-white/70 hover:bg-white/90 shadow-md cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => {
              stopAutoSlide();
              nextSlide();
              startAutoSlide();
            }}
            className="p-2 rounded-full bg-white/70 hover:bg-white/90 shadow-md cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-7.5 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoSlide();
                goToSlide(index);
                startAutoSlide();
              }}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
