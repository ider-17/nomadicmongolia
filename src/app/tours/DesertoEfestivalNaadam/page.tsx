import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const shortItinerary = [
    { day: 1, title: "Ulaanbaatar" },
    { day: 2, title: "Ulaanbaatar – Baga Gazriin Chulu (240 km)" },
    { day: 3, title: "Baga Gazriin Chulu - Tsagaan Suvraga (220 km)" },
    { day: 4, title: "Tsagaan Suvraga - Yoliin Am (210km)" },
    { day: 5, title: "NAADAM a DALANZADGAD (90km)" },
    { day: 6, title: "Yoliin Am – Khongorin ELS (210 km)" },
    { day: 7, title: "Khongorin ELS (30 km)" },
    { day: 8, title: "Khongorin ELS – Bayanzag (180 km)" },
    { day: 9, title: "Bayanzag – Ongiin Khiid (160 km)" },
    { day: 10, title: "Ongiin Khiid – Karakorum (250 km)" },
    { day: 11, title: "Karakorum - Parco Nazionale Hustai(260)" },
    { day: 12, title: "Ulaanbaatar (100km)" },
    { day: 13, title: "Partenza per l’Italia" },
];

const images = [
    {
        id: 1,
        image: "/assets/_BAY1429.webp",
    }
];

const itineraryData = [
    { day: 1, title: "", description: "", luglio: "" },
    { day: 2, title: "", description: "", luglio: "" },
    { day: 3, title: "", description: "", luglio: "" },
    { day: 4, title: "", description: "", luglio: "" },
    { day: 5, title: "", description: "", luglio: "" },
    { day: 6, title: "", description: "", luglio: "" },
    { day: 7, title: "", description: "", luglio: "" },
    { day: 8, title: "", description: "", luglio: "" },
    { day: 9, title: "", description: "", luglio: "" },
    { day: 10, title: "", description: "", luglio: "" },
    { day: 11, title: "", description: "", luglio: "" },
    { day: 12, title: "", description: "", luglio: "" },
    { day: 13, title: "", description: "", luglio: "" },
    { day: 14, title: "", description: "", luglio: "" },
    { day: 15, title: "", description: "", luglio: "" },
    { day: 16, title: "", description: "", luglio: "" },
    { day: 17, title: "", description: "", luglio: "" },
    { day: 18, title: "", description: "", luglio: "" },
    { day: 19, title: "", description: "", luglio: "" },
    { day: 20, title: "", description: "", luglio: "" },
];

const laQuotaComprende = [
    { id: 1, description: "" },
    { id: 2, description: "" },
    { id: 3, description: "" },
    { id: 4, description: "" },
    { id: 5, description: "" },
    { id: 6, description: "" },
    { id: 7, description: "" },
    { id: 8, description: "" },
    { id: 9, description: "" },
    { id: 10, description: "" },
    { id: 11, description: "" },
    { id: 12, description: "" },
];

const laQuotaNonComprende = [
    { id: 1, description: "" },
    { id: 2, description: "" },
    { id: 3, description: "" },
    { id: 4, description: "" },
    { id: 5, description: "" },
    { id: 6, description: "" },
    { id: 7, description: "" },
];


export default function IlDesertoDelEIlFestivalDiNaadamPage() {
    return (
        <div className="bg-white h-screen">

            <Header />

            <section className="w-full min-h-screen text-black px-[150px] pt-25 space-y-6 bg-white pb-6">
                <h1 className="text-center font-bold text-3xl">Centro della Mongolia /7giorni/</h1>

                <p>Regione: centrale, meridionale <br />
                    Durazione: 12 giorni
                </p>

                {/* Breve itinerario */}
                <div>
                    <h2 className="font-semibold text-xl mb-2">Breve itinerario</h2>
                    {shortItinerary.map((item) => (
                        <div key={item.day} className="flex gap-1">
                            <h3 className="font-semibold">Giorno {item.day}.</h3>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>

                {images.map((image) => (
                    <img key={image.id} src={image.image} alt="Overland della Mongolia Tour" className="rounded-xl" />
                ))}


                {/* Itinerario dettagliato */}
                <h1 className="text-center text-3xl font-bold">Itinerario dettagliato</h1>

                <h2 className="font-semibold">Ulaanbaatar, Baga gazriin chuluu, Tsagaan suvraga Deserto dei Gobi, Bayanzag, Valle di Yol, Karakorum, Parco Nazionale Khustai</h2>

                {itineraryData.map((item) => (
                    <div key={item.day}>
                        <h2 className="font-semibold">GIORNO {item.day}. {item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}

            </section>

            <Footer />
        </div>
    );
}
