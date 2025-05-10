"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Taiga tour",
    description: "avventura e sciamano",
    bgImage: "/_ZAK4316.webp",
    btnText: "View more",
  },
  {
    id: 2,
    title: "Overland della Mongolia tour",
    description: "Regione: centrale, meridionale, settentrionale Durazione: 20 giorni",
    bgImage: "/_BAY5051.webp",
    btnText: "View",
  },
  {
    id: 3,
    title: "Centro della Mongolia",
    description: "Regione: centrale Durazione: 7 giorni",
    bgImage: "/_BAY0058.webp",
    btnText: "Үзэх",
  },
  {
    id: 4,
    title: "Deserto del Gobi",
    description: "Regione: centrale, meridionale Durazione: 12 giorni",
    bgImage: "/_BAY1429.webp",
    btnText: "Захиалах",
  },
  {
    id: 5,
    title: "Steppe e Gobi",
    description: "Regione: centrale, meridionale, settentrionale Durazione: 12 giorni",
    bgImage: "/_BAY1429.webp",
    btnText: "Дэлгэрэнгүй",
  },
  {
    id: 6,
    title: "Il deserto del Gobi e il festival di Naadam 2025",
    description: "Durazione: 13 giorni Dal 6 luglio al 18 luglio 2025",
    bgImage: "/DSC_0124.JPG",
    btnText: "Дэлгэрэнгүй",
  },
  {
    id: 7,
    title: "Trekking Tour in Mongolia",
    description: "Durazione: 16 giorni Dal 4 agosto al 19 agosto 2025",
    bgImage: "/pexels-julia-volk-5110958.jpg",
    btnText: "Дэлгэрэнгүй",
  },
  {
    id: 8,
    title: "Birdwatching",
    description: "Durazione: 12 notti e 13 giorni Dal 31 maggio al 12 giugno 2025",
    bgImage: "/mongolianlove.webp",
    btnText: "Дэлгэрэнгүй",
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

      <Header />

      <section className="bg-white w-full h-[780px] flex justify-center px-[150px] pt-[90px]">

        <div className="relative mx-auto h-[600px] w-full overflow-hidden rounded-lg shadow-xl hover:-translate-y-1 transition-all duration-300 hover:scale-105">
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
                <div className="max-w-5xl mx-auto px-6 py-4 text-center mb-15">
                  <h2 className="text-4xl font-bold mb-4 drop-shadow-md">{slide.title}</h2>
                  <p className="text-lg mb-6 drop-shadow-md">{slide.description}</p>
                  <Link href="/tours">
                    <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                      {slide.btnText}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center gap-45 p-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/70 hover:bg-white/90 shadow-md transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/70 hover:bg-white/90 shadow-md transition-all duration-300 cursor-pointer"
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

      <section className="w-full h-fit text-black px-[150px] mb-20">
        <h1 className="text-center font-bold text-4xl my-5 mb-10">Grazie per aver visitato il nostro sito!</h1>
        <div className="flex gap-4 items-center">
          <div className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400" style={{ backgroundImage: `url("/SED_8320.jpg")` }}></div>

          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-center mb-6">CHI SIAMO?</h1>

            <p className="text-center text-lg">Siamo un tour operatore locale con staff nazionali, fondata dai staff mongoli con più di 10 anni
              di esperienza nel settore turistico. Proponiamo viaggi di tutti tipi dal costa meno al viaggio di
              lusso, dal viaggio privato a quello di gruppo in Mongolia. Offriamo consulenza gratuita
              sull’organizzazione del viaggio e personalizzazione degli itinerari, il nostro esperto e qualificato
              team è in grado di supportare tutte le vostre necessità prima e dopo la partenza.
              <Link href="/about">
                <button className="ml-3 border border-gray-400 py-1 px-2 rounded-2xl hover:bg-gray-100 cursor-pointer">See more</button>
              </Link>
            </p>
          </div>
        </div>

      </section>

      <section className="w-full text-black px-[150px] mb-20">

        <div className="flex gap-4 items-center">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-center mb-6">MONGOLIA</h1>

            <p className="text-center text-lg">La nostra paese, Mongolia, è uno stato dell&#39;Asia Centrale ed è il secondo più grande del mondo.
              Con  i suoi 1.566.000 km²  e una popolazione di circa 3,2 milioni di persone. Nonostante questo
              dato che abbiamo  la più bassa densità di abitanti al mondo . La nostra paese è  privo di accesso al
              mare  e confina a Nord con la  Russia  e a Sud con la  Cina . Un luogo misterioso ed affascinante
              adatto per una vacanza diversa dal solito. Il fascino della popolazione, lo sciamanesimo e una
              storia millenaria sono alcuni dei motivi che rendono la Mongolia una meta che ha molto da
              offrire ai suoi visitatori.
            </p>
          </div>

          <div className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400" style={{ backgroundImage: `url("/map.webp")` }}></div>

        </div>
      </section>

      <section className="w-full text-black px-[150px] mb-20">

        <div className="flex gap-4 items-center">
          <div className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400" style={{ backgroundImage: `url("/DSC_0069.JPG")` }}></div>

          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-center mb-6">ULAANBAATOR</h1>

            <p className="text-center text-lg">è la  capitale  e la città più grande, dove risiede circa il 45,9% della  popolazione .
              Ulaanbaatar è diventata unica vera città della Mongolia. La sua architettura è un groviglio di
              fatiscenti appartamenti di epoca sovietica e moderna. Recentemente, la città ha goduto di un
              rinnovamento, con la nascita di molti caffè, ristoranti, negozi alla moda e un monumento ai
              Beatles, e, stranamente, uno dei migliori negozi LEGO fuori della Danimarca. Ulaanbaatar
              è ricca di monasteri, musei, mercati e mille altre sorprese.
              {/* end oguulber dutuu */}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full text-black px-[150px] mb-20">

        <div className="flex gap-4 items-center">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-center mb-6">I NOMADI</h1>

            <p className="text-lg text-justify">In Mongolia si trovano le ultime società nomadi sopravvissute che seguono stili di vita pastorali
              che da anni non siamo stati per niente toccata come il progresso dei paesi sviluppati.
              L&#39;emozionante contatto diretto con gli ospitalissimi abitanti della steppa e del deserto legati
              ancora a tradizioni millenarie. Questo si può ammirare soprattutto a Gobi, uno dei deserti più
              emozionanti del pianeta, con paesaggi fiabeschi e nomadi a cammello. Circa il 30% della nostra
              popolazione è  nomade , dedita prevalentemente all&#39; allevamento . Noi alleviamo cinque animali: il
              cavallo, il camello, la muca, la pecora e la capra da latte e da carne questi sono tradizionalmente
              divisi in uso e ci sono 70 milioni di capi di bestiame e 300.000 persone vivono di pastorizia.
            </p>
          </div>

          <div className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400" style={{ backgroundImage: `url("/_BAY0058.webp")` }}></div>

        </div>
      </section>

      <section className="w-full text-black px-[150px] mb-20">

        <div className="flex gap-4 items-center">
          <div className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400" style={{ backgroundImage: `url("/pexels-lazarevkirill-8532283.jpg")` }}></div>

          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-center mb-6">NATURA</h1>

            <p className="text-center text-lg">La Mongolia è uno dei paesi meno densamente popolati della terra. Davanti ai occhi, le distese,
              gli scenari sono stupefacenti e immacolati, qui vivono animali rari e selvatici allo stato puro
              soprattutto nelle zone centrali del Paese. Il paese presenta tre grandi aree geografiche da nord a
              sud: la montagna boscosa, la steppa e il deserto del Gobi. Inoltre la Mongolia è uno dei paesi più
              alti del mondo, anche se le sue montagne superano raramente i 4.000 metri, l&#39;altitudine media si
              aggira intorno ai 1.500 metri.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full text-black px-[150px] mb-20">

        <div className="flex gap-4 items-start">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-center mb-6">LA GHER</h1>

            <p className="text-lg text-justify">è l’abitazione tradizionale mongola, ha una struttura molto particolare ed unica nel
              suo genere. Può essere smontata in breve tempo e caricata sui carri in occasione del cambio dei
              pascoli.
              Oggi giorno si può riconoscere facilmente una gher stabile, da una che viene spostata ai campi
              stagionali, grazie alla piattaforma su cui poggia ed alla base che, nelle abitazioni fisse, può essere
              cementata.L’ossatura della gher è costituita da un intreccio di tralicci di legno, khana, che hanno
              misure standard e vengono affiancati l’uno all’altro in modo di costituire un recinto circolare. La
              porta, khalga, di legno decorato, viene rivolta sempre a sud.Al centro della gher si pongono due
              baghana, strutture portanti che servono per sorreggere la cupola del tetto, toono, alla quale
              poggiano gli uni, i pali di legno che costituiscono il tetto vero e proprio. Il tutto è poi rivestito di
              panni di feltro e
            </p>
          </div>
          <div className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400" style={{ backgroundImage: `url("/pexels-lazarevkirill-8532283.jpg")` }}></div>

        </div>
        <p className="text-lg text-justify">teli di cotone bianco incerati (è questa un’usanza moderna).Gli spazi all’interno
          della gher hanno una forte valenza sociale e non si può sedere ovunque si desideri, si deve al
          contrario rispettare una specifica divisione gerarchica che vede il posto d’onore al nord
          (destinato agli dei) e i posti di minor prestigio distribuiti man mano verso sud ove sta la soglia
          della casa. Il lato destro è destinato agli uomini, il sinistro alle donne. Al centro la stufa, simbolo
          della famiglia e della progenie, il cui fuoco rappresenta la continuazione genealogica e la cui
          “custodia” è affidata al figlio più giovane Otgon (dal turco principe del fuoco) che è
          generalmente anche l’erede delle sostanze paterne. In realtà occuparsi del fuoco sono le donne
          che lo accendono la mattina presto e lo alimentano durante il giorno per cucinare e scaldare
          l’abitazione.</p>
      </section>

      <Footer />

    </div >
  )
};