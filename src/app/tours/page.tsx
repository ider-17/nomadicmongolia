import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MapPin } from "lucide-react";

export default function ToursPage() {

    const TOURS = [
        {
            id: 1,
            title: "Taiga tour - avventura e sciamano",
            photo: "/assets/_ZAK4316.webp",
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
            photo: "/assets/_BAY1429.webp",
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
            photo: "/assets/_BAY5051.webp",
            duration: 20,
            locations: ["Ulaanbaatar", "Amarbayasgalant", "Khutag undur e il fiume di selenge", "Khatgal e lago khuvsgul", "Lago di khuvsgul", "Uushgiin uvur (Pietra cervi)", "Jargalant hot spring", "Terkhiin tsagaan nuur e khorgiin togoo", "Tsenkher hot spring", "Kharkhorin/Karakorum", "Ongii khiid", "Bayanzag", "Khongoriin els", "Yoliin am", "Baga gazriin chuluu"],
            desTitle1: "GIORNO 1. ULAANBAATAR: LA CAPITALE DELLA MONGOLIA MODERNA. 25km",
            describtion1: "Arrivo a Ulaanbaatar e operazioni di frontiera, incontro con la guida e trasferimento in hotel. Visita al Monastero Buddista di Gandantegchenling con la cerimonia delle preghiere del mattino. Pranzo in ristorante.Nel pomeriggio visita panoramica della citta, con la Piazza Sukhbaatar e il Monumento Zaisan ai caduti in guerra.Proseguimento con la visita al museo nazionale storico. Cena e pernottamento.LD",
            desTitle2: "GIORNO 2. MONASTERO DI AMARBAYASGALANT. 360 km.",
            describtion2: "Dopo colazione partenza per il monestero di Amarbayasgalant e` piu` bello della Mongolia, eretto per ordine dell’imperatore Manchu` in memoria di grande lama buddista mongolo Zanabazar. Passeggiata nella Valle. Firmata il pranzo a Darkhan seconda citta` della Mongolia. Cena e pernottamento in campo turistico. BLD",
            btnText: "Scopri di più"
        },
        {
            id: 4,
            title: "CENTRO DELLA MONGOLIA /7giorni/",
            photo: "/assets/pexels-lazarevkirill-8532283.jpg",
            duration: 7,
            locations: ["Ulaanbaatar", "Khogno khaan", "Karakorum", "Parco nazionale khustai", "Terelj", "Partenza"],
            desTitle1: "Giorno 1. ULAANBAATAR",
            describtion1: "Arrivo a Ulaanbaatar e incontro con la guida e trasferimento in hotel. Visita al Monastero Buddista di Gandantegchenling con la cerimonia delle preghiere del mattino. Pranzo in ristorante. Nel pomeriggio visita panoramica della citta, con la grande Piazza Sukhbaatar e il Monumento Zaisan ai caduti costruito su una collina da cui si gode una splendida vista della citta e delle colline circostanti. Cena in ristorante e pernottamento in hotel.",
            desTitle2: "GIORNO 2. ULAANBAATAR – KHOGNO KHAAN (280 km circa)",
            describtion2: "Prima colazione in hotel e partenza per Khogno visita del Monastero Erdene Khamba e delle rovine del monastero Ovgon Khiid, situati nella bellissima valle di Khogno Khaan. E’ possibilità a visitare una famiglia nomade e possibiletà a cavalcare i cavalli e cammelli. Pranzo al sacco, cena e pernottamento al campo",
            btnText: "Scopri di più"
        },
        {
            id: 5,
            title: "DESERTO DEL GOBI",
            photo: "/assets/_BAY1429.webp",
            duration: 12,
            locations: ["Ulaanbaatar", "Baga gazriin chuluu", "Tsagaan suvraga", "Valle yol", "Khongoriin els", "Bayanzag", "Ongii khiid", "Kharkhorin/Karakorum", "Parco nazionale khustai", "Parco nazionale terelj", "Partenza"],
            desTitle1: "GIORNO 1. ULAANBAATAR: LA CAPITALE DELLA MONGOLIA MODERNA",
            describtion1: "Arrivo a Ulaanbaatar e operazioni di frontiera, incontro con la guida e trasferimento in hotel. Visitiamo al Monastero Buddista di Gandantegchenling con la cerimonia delle preghiere del mattino. Pranzo in ristorante. Nel pomeriggio visitiamo panoramica della citta, con la Piazza Sukhbaatar e il Monumento Zaisan ai caduti in guerra. Cena e pernottamento. (LD)",
            desTitle2: "GIORNO 2. BAGA GAZRIIN CHULUU. 240 km",
            describtion2: "Partenza verso sud e il deserto del Gobi (Dundgobi). Arrivo a Baga Gazriin Chuluu, suggestiva formazione rocciosa dove hanno vissuto in passato due monaci molto venerati, perciò meta di pellegrinaggi da parte della gente del posto. Lungo la strada si possono avvistare branchi di gazzelle, gruppi di cammelli e rari accampamenti di nomadi. Pranzo in &quot;guanz&quot; lungo il percorso, presso una delle tipiche trattorie mongole. Cena e pernottamento in campo turistico. (BLD)",
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
                        <div key={tour.id} className="w-full flex gap-5 text-black items-center">
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
                                <div className="border-t border-gray-300 pt-2 flex flex-col gap-4">
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