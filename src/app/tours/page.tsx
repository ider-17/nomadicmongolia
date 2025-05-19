import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MapPin } from "lucide-react";

export default function ToursPage() {

    const TOURS = [
        {
            id: 1,
            title: "Taiga tour - avventura e sciamano",
            photo: "/_ZAK4316.webp",
            duration: 10,
            locations: ["Ulaanbaatar", "Khovsgol/Murun", "Tsagaan nuur vilaggio", "Taiga e gli uomini renna", "UB/Parco nazionale di terelj"],
            desTitle1: "GIORNO 1. ULAANBAATAR",
            describtion1: "Arrivo a Ulaanbaatar e incontro con la guida e trasferimento in hotel. La guida propone city tour che dipende dall’orario dell’arrivo. Pranzo in ristorante. Nel pomeriggio visitiamo al centro sciamanico della città. Cena in ristorante e pernottamento in hotel. (LD)",
            desTitle2: "GIORNO 2. KHOVSGOL/MURUN",
            describtion2: "30 km. Prima colazione in hotel e volo per Murun, il capoluogo della provincia di Khuvsgul, la regione del lago Khovsgol. Ci vediamo i nostri autisti e un cuoco. Partenza per il campo turistico. Cena al campo. Pernottamento in una gher, una abitazione tradizionale mongola. (BLD)",
            btnText: "Scopri di più"
        },
        {
            id: 2,
            title: "Steppe e Gobi",
            photo: "/_BAY1429.webp",
            duration: 12,
            locations: ["Ulaanbaatar", "Khovsgol", "Bayanzag", "Khongoriin els", "Valle di yol", "Kharkhorin/Karakorum", "Parco nazionale khustai"],
            desTitle1: "GIORNO 1. ULAANBAATAR",
            describtion1: "Arrivo a Ulaanbaatar e incontro con la guida e trasferimento in hotel. Visita al Monastero Buddista di Gandantegchenling con la cerimonia delle preghiere del mattino. Pranzo in ristorante. Nel pomeriggio visita panoramica della citta, con la grande Piazza Sukhbaatar e il Monumento Zaisan ai caduti costruito su una collina da cui si gode una splendida vista della citta e delle colline circostanti.  Cena in ristorante e pernottamento in hotel. (LD)",
            desTitle2: "GIORNO 2. ULAANBAATAR – KHOVSGOL (150 km. circa)",
            describtion2: "Prima colazione in hotel e volo per Moron o Khatgal (il luogo d’arrivo dipende dal vettore locale), nella regione del lago Khovsgol. Partenza per il campo base. Cena al campo. Pernottamento nelle ger, le tradizionali tende mongole. (BLD)",
            btnText: "Scopri di più"
        },
        {
            id: 3,
            title: "OVERLAND DELLA MONGOLIA TOUR",
            photo: "/_BAY5051.webp",
            duration: 20,
            locations: ["Ulaanbaatar", "Amarbayasgalant", "Khutag undur e il fiume di selenge", "Khatgal e lago khuvsgul", "Lago di khuvsgul", "Uushgiin uvur (Pietra cervi)", "Jargalant hot spring", "Terkhiin tsagaan nuur e khorgiin togoo", "Tsenkher hot spring", "Kharkhorin/Karakorum", "Ongii khiid", "Bayanzag", "Khongoriin els", "Yoliin am", "Baga gazriin chuluu"],
            desTitle1: "",
            describtion1: "",
            desTitle2: "",
            describtion2: "",
            btnText: "Scopri di più"
        },
        {
            id: 4,
            title: "",
            photo: "",
            duration: 1,
            locations: [],
            desTitle1: "",
            describtion1: "",
            desTitle2: "",
            describtion2: "",
            btnText: "Scopri di più"
        },
        {
            id: 5,
            title: "",
            photo: "",
            duration: 1,
            locations: [],
            desTitle1: "",
            describtion1: "",
            desTitle2: "",
            describtion2: "",
            btnText: "Scopri di più"
        },
        {
            id: 6,
            title: "",
            photo: "",
            duration: 1,
            locations: [],
            desTitle1: "",
            describtion1: "",
            desTitle2: "",
            describtion2: "",
            btnText: "Scopri di più"
        },
        {
            id: 7,
            title: "",
            photo: "",
            duration: 1,
            locations: [],
            desTitle1: "",
            describtion1: "",
            desTitle2: "",
            describtion2: "",
            btnText: "Scopri di più"
        },
        {
            id: 8,
            title: "",
            photo: "",
            duration: 1,
            locations: [],
            desTitle1: "",
            describtion1: "",
            desTitle2: "",
            describtion2: "",
            btnText: "Scopri di più"
        }
    ]
    return (
        <div className="bg-white min-h-screen">

            <Header />

            <section className="w-full h-fit pt-[90px] px-[150px] space-y-8">
                {TOURS.map((tour) => {
                    return (
                        <div key={tour.id} className="w-full flex gap-5 text-black">
                            <img className="w-1/2 h-[500px] object-center object-cover rounded-2xl" src={tour.photo} />

                            <div className="w-1/2 pt-4">
                                <div className="flex gap-4 items-center mb-4">
                                    <div className="border-r border-gray-300 pr-2">
                                        <p className="text-center text-2xl font-bold">{tour.duration}</p>
                                        <p className="text-sm">GIORNI</p>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">{tour.title}</h2>
                                        <div className="flex gap-4 flex-wrap">
                                            {tour.locations.map((location, index) => {
                                                return (
                                                    <div key={index} className="flex gap-1 items-center">
                                                        <MapPin size={15} />
                                                        <p>{location}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-300 pt-2 flex flex-col gap-2">
                                    <div>
                                        <h2 className="font-semibold">{tour.desTitle1}</h2>
                                        <p className="text-justify">{tour.describtion1}</p>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold">{tour.desTitle2}</h2>
                                        <p className="text-justify">{tour.describtion2} ...</p>
                                    </div>
                                    <div className="w-full flex justify-end">
                                        <button className="text-black py-1 px-2 border rounded-2xl hover:bg-black hover:text-white">Scopri di più</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </section>

            <Footer />

        </div>
    )
};