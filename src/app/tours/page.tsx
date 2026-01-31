"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { getTours } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default function ToursPage() {
  const [tours, setTours] = useState<any[]>([]);
  const [showAllLocations, setShowAllLocations] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    getTours().then(setTours);
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
        {tours.map((tour) => (
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
                  <p className="text-sm">GIORNI</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">{tour.title}</h2>

                  <div className="flex gap-4 flex-wrap items-center">
                    {tour.locations
                      .slice(
                        0,
                        showAllLocations[tour._id] ? tour.locations.length : 3
                      )
                      .map((loc: string, i: number) => (
                        <div key={i} className="flex gap-1 items-center">
                          <MapPin size={15} />
                          <p>{loc}</p>
                        </div>
                      ))}

                    {tour.locations.length > 3 && (
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
                  <h2 className="font-semibold">{tour.desTitle1}</h2>
                  <p>{tour.describtion1}</p>
                </div>

                <div>
                  <h2 className="font-semibold">{tour.desTitle2}</h2>
                  <p>{tour.describtion2} ...</p>
                </div>

                <div className="flex justify-end">
                  <Link href={`/tours/${tour.slug.current}`}>
                    <button className="py-1 px-2 border rounded-2xl hover:bg-black hover:text-white">
                      {tour.btnText}
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

// const TOURS = [
//   {
//     id: 1,
//     title: "Taiga tour - avventura e sciamano",
//     photo: "/assets/_ZAK4316.webp",
//     duration: 10,
//     locations: [
//       "Ulaanbaatar",
//       "Khovsgol/Murun",
//       "Tsagaan nuur vilaggio",
//       "Taiga e gli uomini renna",
//       "UB/Parco nazionale di terelj",
//     ],
//     desTitle1: "GIORNO 1. ULAANBAATAR",
//     describtion1:
//       "Arrivo a Ulaanbaatar e incontro con la guida e trasferimento in hotel. La guida propone city tour che dipende dall’orario dell’arrivo. Pranzo in ristorante. Nel pomeriggio visitiamo al centro sciamanico della città. Cena in ristorante e pernottamento in hotel. (LD)",
//     desTitle2: "GIORNO 2. KHOVSGOL/MURUN",
//     describtion2:
//       "30 km. Prima colazione in hotel e volo per Murun, il capoluogo della provincia di Khuvsgul, la regione del lago Khovsgol. Ci vediamo i nostri autisti e un cuoco. Partenza per il campo turistico. Cena al campo. Pernottamento in una gher, una abitazione tradizionale mongola. (BLD)",
//     btnText: "Scopri di più",
//     linkURL: "/tours/taigaTour",
//   },
//   {
//     id: 2,
//     title: "Steppe e Gobi",
//     photo: "/assets/_BAY1429.webp",
//     duration: 12,
//     locations: [
//       "Ulaanbaatar",
//       "Khovsgol",
//       "Bayanzag",
//       "Khongoriin els",
//       "Valle di yol",
//       "Kharkhorin/Karakorum",
//       "Parco nazionale khustai",
//     ],
//     desTitle1: "GIORNO 1. ULAANBAATAR",
//     describtion1:
//       "Arrivo a Ulaanbaatar e incontro con la guida e trasferimento in hotel. Visita al Monastero Buddista di Gandantegchenling con la cerimonia delle preghiere del mattino. Pranzo in ristorante. Nel pomeriggio visita panoramica della citta, con la grande Piazza Sukhbaatar e il Monumento Zaisan ai caduti costruito su una collina da cui si gode una splendida vista della citta e delle colline circostanti.  Cena in ristorante e pernottamento in hotel. (LD)",
//     desTitle2: "GIORNO 2. ULAANBAATAR – KHOVSGOL (150 km. circa)",
//     describtion2:
//       "Prima colazione in hotel e volo per Moron o Khatgal (il luogo d’arrivo dipende dal vettore locale), nella regione del lago Khovsgol. Partenza per il campo base. Cena al campo. Pernottamento nelle ger, le tradizionali tende mongole. (BLD)",
//     btnText: "Scopri di più",
//     linkURL: "/tours/steppeGobi",
//   },
//   {
//     id: 3,
//     title: "OVERLAND DELLA MONGOLIA TOUR",
//     photo: "/assets/_BAY5051.webp",
//     duration: 20,
//     locations: [
//       "Ulaanbaatar",
//       "Amarbayasgalant",
//       "Khutag undur e il fiume di selenge",
//       "Khatgal e lago khuvsgul",
//       "Lago di khuvsgul",
//       "Uushgiin uvur (Pietra cervi)",
//       "Jargalant hot spring",
//       "Terkhiin tsagaan nuur e khorgiin togoo",
//       "Tsenkher hot spring",
//       "Kharkhorin/Karakorum",
//       "Ongii khiid",
//       "Bayanzag",
//       "Khongoriin els",
//       "Yoliin am",
//       "Baga gazriin chuluu",
//     ],
//     desTitle1:
//       "GIORNO 1. ULAANBAATAR: LA CAPITALE DELLA MONGOLIA MODERNA. 25km",
//     describtion1:
//       "Arrivo a Ulaanbaatar e operazioni di frontiera, incontro con la guida e trasferimento in hotel. Visita al Monastero Buddista di Gandantegchenling con la cerimonia delle preghiere del mattino. Pranzo in ristorante.Nel pomeriggio visita panoramica della citta, con la Piazza Sukhbaatar e il Monumento Zaisan ai caduti in guerra.Proseguimento con la visita al museo nazionale storico. Cena e pernottamento.LD",
//     desTitle2: "GIORNO 2. MONASTERO DI AMARBAYASGALANT. 360 km.",
//     describtion2:
//       "Dopo colazione partenza per il monestero di Amarbayasgalant e` piu` bello della Mongolia, eretto per ordine dell’imperatore Manchu` in memoria di grande lama buddista mongolo Zanabazar. Passeggiata nella Valle. Firmata il pranzo a Darkhan seconda citta` della Mongolia. Cena e pernottamento in campo turistico. BLD",
//     btnText: "Scopri di più",
//     linkURL: "/tours/overlandTour",
//   },
//   {
//     id: 4,
//     title: "CENTRO DELLA MONGOLIA /7giorni/",
//     photo: "/assets/mountain.webp",
//     duration: 7,
//     locations: [
//       "Ulaanbaatar",
//       "Khogno khaan",
//       "Karakorum",
//       "Parco nazionale khustai",
//       "Terelj",
//       "Partenza",
//     ],
//     desTitle1: "Giorno 1. ULAANBAATAR",
//     describtion1:
//       "Arrivo a Ulaanbaatar e incontro con la guida e trasferimento in hotel. Visita al Monastero Buddista di Gandantegchenling con la cerimonia delle preghiere del mattino. Pranzo in ristorante. Nel pomeriggio visita panoramica della citta, con la grande Piazza Sukhbaatar e il Monumento Zaisan ai caduti costruito su una collina da cui si gode una splendida vista della citta e delle colline circostanti. Cena in ristorante e pernottamento in hotel.",
//     desTitle2: "GIORNO 2. ULAANBAATAR – KHOGNO KHAAN (280 km circa)",
//     describtion2:
//       "Prima colazione in hotel e partenza per Khogno visita del Monastero Erdene Khamba e delle rovine del monastero Ovgon Khiid, situati nella bellissima valle di Khogno Khaan. E’ possibilità a visitare una famiglia nomade e possibiletà a cavalcare i cavalli e cammelli. Pranzo al sacco, cena e pernottamento al campo",
//     btnText: "Scopri di più",
//     linkURL: "/tours/centroMongolia",
//   },
//   {
//     id: 5,
//     title: "DESERTO DEL GOBI",
//     photo: "/assets/_BAY1429.webp",
//     duration: 12,
//     locations: [
//       "Ulaanbaatar",
//       "Baga gazriin chuluu",
//       "Tsagaan suvraga",
//       "Valle yol",
//       "Khongoriin els",
//       "Bayanzag",
//       "Ongii khiid",
//       "Kharkhorin/Karakorum",
//       "Parco nazionale khustai",
//       "Parco nazionale terelj",
//       "Partenza",
//     ],
//     desTitle1: "GIORNO 1. ULAANBAATAR: LA CAPITALE DELLA MONGOLIA MODERNA",
//     describtion1:
//       "Arrivo a Ulaanbaatar e operazioni di frontiera, incontro con la guida e trasferimento in hotel. Visitiamo al Monastero Buddista di Gandantegchenling con la cerimonia delle preghiere del mattino. Pranzo in ristorante. Nel pomeriggio visitiamo panoramica della citta, con la Piazza Sukhbaatar e il Monumento Zaisan ai caduti in guerra. Cena e pernottamento. (LD)",
//     desTitle2: "GIORNO 2. BAGA GAZRIIN CHULUU. 240 km",
//     describtion2:
//       "Partenza verso sud e il deserto del Gobi (Dundgobi). Arrivo a Baga Gazriin Chuluu, suggestiva formazione rocciosa dove hanno vissuto in passato due monaci molto venerati, perciò meta di pellegrinaggi da parte della gente del posto. Lungo la strada si possono avvistare branchi di gazzelle, gruppi di cammelli e rari accampamenti di nomadi. Pranzo in &quot;guanz&quot; lungo il percorso, presso una delle tipiche trattorie mongole. Cena e pernottamento in campo turistico. (BLD)",
//     btnText: "Scopri di più",
//     linkURL: "/tours/desertoDelGobi",
//   },
//   {
//     id: 6,
//     title: "Trekking Tour in Mongolia",
//     photo: "/assets/_BAY1429.webp",
//     duration: 16,
//     locations: [
//       "Ulaanbaatar",
//       "Elsen tasarkhai",
//       "Kharakhorum",
//       "Il monastero di Tuvkhun",
//       " la cascata di Ulaan Tsutgalan e Uliastain gol",
//       "il villaggio Erdenetsogt",
//       "la valle di Mandal",
//       "Arvaikheer",
//       "il parco nazionale di Khustai",
//     ],
//     desTitle1: "1° giorno: Partenza dall’ Italia per Ulaanbaatar",
//     describtion1: "",
//     desTitle2: "2° giorno: Ulaanbaatar",
//     describtion2:
//       "Arriviamo all’aeroporto di Ulaanbaatar, incontriamo con le guide e l’autista e trasferimento in hotel e sistemazione. Inizio tour della città che vi porterà in alcuni dei principali siti di questa città unica. Visita al monastero buddista Gandan dove si trova una statua dorata di Buddha alta più di 26 mt. Pranzo in un tipico ristorante mongolo. Visitiamo la famosa piazza Sukhbaatar e il nuovo museo di Genghis Khan, è stato aperto il 11 ottobre 2022. Cena e prenottamento in hotel***. LD",
//     btnText: "Scopri di più",
//     linkURL: "/tours/trekkingTour",
//   },
//   {
//     id: 7,
//     title: "Il deserto del Gobi e il festival di Naadam 2025",
//     photo: "/assets/DSC_0338_444535242363286.JPG",
//     duration: 13,
//     locations: [
//       "Ulaanbaatar",
//       "Baga Gazriin Chulu",
//       "Tsagaan Suvraga",
//       "Yoliin Am",
//       "DALANZADGAD",
//       "Khongorin ELS",
//       "Bayanzag",
//       "Ongiin Khiid ",
//       "Karakorum",
//       "Parco Nazionale Hustai",
//     ],
//     desTitle1: "1o giorno: Ulaanbaatar",
//     describtion1:
//       "Arrivo all’aeroporto di Ulaanbaatar, incontro con la guida e l’autista e trasferimento in hotel e sistemazione. Inizio tour della città che vi porterà in alcuni dei principali siti di questa città unica. Visita al monastero buddista Gandan dove si trova una statua dorata di Buddha alta più di 26 mt. Pranzo in un tipico ristorante mongolo. Visita della famosa piazza Sukhbaatar e la stutua di Zaisan. Cena e pernottamento in hotel***. LD",
//     desTitle2: "2o giorno:  Ulaanbaatar – Baga Gazriin Chulu (240 km)",
//     describtion2:
//       "Dopo colazione partenza verso il deserto del Gobi (Dundgobi). Arrivo a Baga Gazriin Chuluu, suggestiva formazione rocciosa dove hanno vissuto in passato due monaci molto venerati, perciò meta di pellegrinaggi da parte della gente del posto. Pranzo, cena e pernottamento in campo turistico. BLD",
//     btnText: "Scopri di più",
//     linkURL: "/tours/desertoEfestivalNaadam",
//   },
//   {
//     id: 8,
//     title: "Tipo di viaggio: Birdwatching",
//     photo: "/assets/birds-3.webp",
//     duration: 13,
//     locations: [
//       "Ulaanbaatar",
//       "Gùn Galuu",
//       "Baga Gazar",
//       "Parco nazionale di Yolin Am",
//       "Bayanzag",
//       "il monastero di Onghi",
//       "Khustai",
//     ],
//     desTitle1: "Giorno 1.Partenza dall’Italia",
//     describtion1: "",
//     desTitle2: "Giorno 2. Ulaanbaatar",
//     describtion2:
//       "Arriviamo all’aeroporto di Ulaanbaatar, incontriamo con le guide e l’autista e trasferimento in hotel e sistemazione. Inizio tour della città che vi porterà in alcuni dei principali siti di questa città unica. Visita al monastero buddista Gandan dove si trova una statua dorata di Buddha alta più di 26 mt. Pranzo in un tipico ristorante mongolo. Visitiamo la famosa piazza Sukhbaatar e il nuovo museo di Genghis Khan, è stato aperto il 11 ottobre 2022. Cena e prenottamento in hotel***. LD",
//     btnText: "Scopri di più",
//     linkURL: "/tours/birdWatching",
//   },
// ];
