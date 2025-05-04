"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Нэгдүгээр слайд",
    description: "Энэ бол таны анхны слайд. Та энд дурын текст, зураг болон дизайн оруулах боломжтой.",
    bgImage: "/_ZAK4316.webp",
    btnText: "Дэлгэрэнгүй",
  },
  {
    id: 2,
    title: "Хоёрдугаар слайд",
    description: "Энэ бол хоёр дахь слайд. Танд хэрэгтэй мэдээллээ энд оруулаарай.",
    bgImage: "/_BAY5051.webp",
    btnText: "Судлах",
  },
  {
    id: 3,
    title: "Гуравдугаар слайд",
    description: "Гурав дахь слайд нь таны өнгө төрх, мэдээлэл агуулж болно.",
    bgImage: "/_BAY1429.webp",
    btnText: "Үзэх",
  },
  {
    id: 4,
    title: "Дөрөвдүгээр слайд",
    description: "Дөрөвдэх слайдад тусгай мэдээлэл, танилцуулга оруулах боломжтой.",
    bgImage: "/_BAY0058.webp",
    btnText: "Захиалах",
  },
  {
    id: 5,
    title: "Тавдугаар слайд",
    description: "Сүүлийн слайд. Та энд холбоо барих мэдээлэл эсвэл дуусгалын мэдээлэл оруулж болно.",
    bgImage: "/SED_8320.jpg",
    btnText: "Холбогдох",
  },
];

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  useEffect(() => {
    if (touchStartX && touchEndX) {
      if (touchStartX - touchEndX > 50) {
        nextSlide();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
      }
    }
  }, [touchStartX, touchEndX]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  // Автоматаар шилжүүлэх код (хэрэгтэй бол идэвхжүүлнэ)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white">

      <section className="bg-white w-full h-[780px] flex justify-center px-[150px]">

        <Header />

        {/* <div className="w-full h-2/3 bg-cover bg-center transition-all duration-1000 ease-in-out rounded-2xl mt-[90px]" style={{ backgroundImage: `url("./_ZAK4316 copy.webp")` }}>
        </div> */}

        <div className="relative max-w-6xl mx-auto h-[600px] w-full overflow-hidden rounded-lg shadow-xl mt-[90px]">
          {/* Slides container with transition */}
          <div
            className="h-full flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-full flex items-end justify-center text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              >
                <div className="max-w-2xl mx-auto px-6 py-4 text-center mb-15">
                  <h2 className="text-4xl font-bold mb-4 drop-shadow-md">{slide.title}</h2>
                  <p className="text-lg mb-6">{slide.description}</p>
                  <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    {slide.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center gap-30 p-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/70 hover:bg-white/90 shadow-md transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/70 hover:bg-white/90 shadow-md transition-all duration-300"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
              ></button>
            ))}
          </div>
        </div>

      </section >

      <section className="w-full h-fit text-black px-[150px] mb-6">
        <h1 className="text-2xl font-bold text-center mb-6">Grazie per aver visitato il nostro sito!</h1>

        <p className="text-center">Siamo un tour operatore locale con staff nazionali, fondata dai staff mongoli con più di 10 anni
          di esperienza nel settore turistico. Proponiamo viaggi di tutti tipi dal costa meno al viaggio di
          lusso, dal viaggio privato a quello di gruppo in Mongolia. Offriamo consulenza gratuita
          sull’organizzazione del viaggio e personalizzazione degli itinerari, il nostro esperto e qualificato
          team è in grado di supportare tutte le vostre necessità prima e dopo la partenza.
          <Link href="/about">
            <button className="ml-3 border border-black py-1 px-2 rounded-2xl hover:bg-black hover:text-white cursor-pointer">See more</button>
          </Link>
        </p>

      </section>

      <Footer />

    </div >
  )
};