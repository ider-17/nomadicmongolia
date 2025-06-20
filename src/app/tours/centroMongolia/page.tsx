import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const shortItinerary = [
    { day: 1, title: "ULAANBAATAR" },
    { day: 2, title: "KHOGNO KHAAN" },
    { day: 3, title: "KARAKORUM" },
    { day: 4, title: "PARCO NAZIONALE KHUSTAI" },
    { day: 5, title: "TERELJ" },
    { day: 6, title: "ULAANBAATAR" },
    { day: 7, title: "PARTENZA" },
];

const images = [
    {
        id: 1,
        image: "/assets/talbai.webp",
    }
];

const itineraryData = [
    { day: 1, title: "ULAANBAATAR", description: "Arrivo a Ulaanbaatar e incontro con la guida e trasferimento in hotel. Visita al Monastero Buddista di Gandantegchenling con la cerimonia delle preghiere del mattino. Pranzo in ristorante. Nel pomeriggio visita panoramica della citta, con la grande Piazza Sukhbaatar e il Monumento Zaisan ai caduti costruito su una collina da cui si gode una splendida vista della citta e delle colline circostanti. Cena in ristorante e pernottamento in hotel." },
    { day: 2, title: "ULAANBAATAR – KHOGNO KHAAN (280 km circa)", description: "Prima colazione in hotel e partenza per Khogno visita del Monastero Erdene Khamba e delle rovine del monastero Ovgon Khiid, situati nella bellissima valle di Khogno Khaan. E’ possibilità a visitare una famiglia nomade e possibiletà a cavalcare i cavalli e cammelli. Pranzo al sacco, cena e pernottamento al campo" },
    { day: 3, title: "KHOGNO KHAAN – KARAKORUM (80 km circa)", description: "Prima colazione e partenza per Karakorum, antica capitale dell’impero. Visita a Karakorum e alle rovine della citta, al Monastero Erdene Zuu e alle leggendarie  tartarughe di Karakorum. Accanto alla Tartaruga spesso vengono allestite della bancarelle dalla gente del luogo dove e possibile trovare dei souvenir e degli oggetti  tradizionali. Nel Pomeriggio visita al museo di kharkhorin/karakorum degli scavi. Proseguimento per il campo e sistemazione nelle gher. Rientro e cena al campo, pernottamento." },
    { day: 4, title: "KARAKORUM – KHUSTAI (260 km circa)", description: "Prima colazione e partenza per il Parco Nazionale dei Monti Khustai. Sistemazione al campo e pranzo. Visita ai cavalli selvatici Prjewalsky-Takhi con la guida dei ranger locali e visita del museo a loro dedicato. Rientro e cena al campo." },
    { day: 5, title: "KHUSTAI –  TERELJ (165 km circa)", description: "Prima colazione e partenza per partenza per il Parco Nazionale di Terelj. È un bellissimo parco, dove vediamo incredibili formazioni rocciose e paesaggi. Puoi fare escursioni o cavalcare. Sistemazione in campo. Nel pomeriggio visita al monestero di Ariyabal e roccia di Melkhii khad. Rientro e cena al campo." },
    { day: 6, title: "TERELJ – ULAANBAATAR (65 km)", description: "Prima colazione e rientro a Ulaanbaatar. Prima di riemtrare nella città visita una statua gigante di Gengis Khaan. Sistemazione in hotel. Pranzo in ristorante. Nel tardo pomeriggio, spettacolo folkloristico Tumen Enkh (ore 18-19), con musiche, danze e canti melodici, canto di gola Hoomii, contorsionismo e danza Tsam, simbolizzante le diverse divinità protettrici del buddismo lamaista. Cena in ristorante e pernottamento." },
    { day: 7, title: "ULAANBAATAR – ITALIA", description: "Prima colazione e trasferimento in aeroporto per il volo di rientro in Italia." },
];

const laQuotaComprende = [
    { id: 1, description: "Sistemazione: 2 notti in Hotel*** a Ulaanbaatar e 5 notti in Campi turistici nelle Gher durante il viaggio, sistemazione in camera doppia (singola a richiesta con supplemento) con bagni privati in hotel e con bagni condivisi nelle gher" },
    { id: 2, description: "6 prime colazioni, 6 pranzi, 6 cene" },
    { id: 3, description: "Guida locale parlante italiano o inglese per 6 giorni" },
    { id: 4, description: "Tour della città con sightseeing e ingressi ai musei come da programma" },
    { id: 5, description: "Trasporto con mezzi 4x4 tipo minivan con autista esperto" },
    { id: 6, description: "Biglietti ingresso a tutti i parchi naturali previsti dal programma" },
    { id: 7, description: "Cavalcata con il cammello nel deserto del Gobi 1h" },
    { id: 8, description: "Cavalcata a cavallo 1h" },
    { id: 9, description: "Bagno termale a Tsenkher" },
    { id: 10, description: "Transfert aeroporto – hotel e/o viceversa" },
    { id: 11, description: "1,5 lt di acqua in bottiglia al giorno" },
    { id: 12, description: "Lettera di invito per ingresso al paese" },
];

const laQuotaNonComprende = [
    { id: 1, description: "voli intercontinentali Milano/Roma - Ulaanbaatar" },
    { id: 2, description: "Visto ingresso Mongolia (se richiesto)" },
    { id: 3, description: "Supplemento sistemazione in singola Euro 130" },
    { id: 4, description: "Bibite ed alcolici" },
    { id: 5, description: "Tour turistici e naturalistici facoltativi (musei, esposizioni)" },
    { id: 6, description: "Le mance e gli extra in genere" },
    { id: 7, description: "Tutto quanto non incluso nella voce “la quota comprende”." },
];


export default function OverlandDellaMongoliaPage() {
    return (
        <div className="bg-white h-screen">
            <Header />

            <section className="w-full min-h-screen text-black px-[150px] pt-25 space-y-6 bg-white pb-6">
                <h1 className="text-center font-bold text-3xl">Centro della Mongolia /7giorni/</h1>

                <div>
                    <p className="font-semibold">Regione: centrale</p>
                    <p>Durazione: 7 giorni
                    </p>
                </div>

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

                <h2 className="font-semibold">Ulaanbaatar, Khogno Khaan, Karakorum , Parco Nazionale Khustai, Parco Nazionale Terelj</h2>

                {itineraryData.map((item) => (
                    <div key={item.day}>
                        <h2 className="font-semibold">GIORNO {item.day}. {item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}

                {/* laQuotaComprende */}
                <h1 className="text-center text-3xl font-bold">La quota comprende</h1>
                <div>
                    {laQuotaComprende.map((des) => (
                        <div key={des.id} className="flex gap-4">
                            <p>✓</p>
                            <p>{des.description}</p>
                        </div>
                    ))}
                </div>

                {/* laQuotaNonComprende */}
                <h1 className="text-center text-3xl font-bold">La quota non comprende</h1>
                <div>
                    {laQuotaNonComprende.map((des) => (
                        <div key={des.id} className="flex gap-4">
                            <p>✓</p>
                            <p>{des.description}</p>
                        </div>
                    ))}
                </div>

            </section>

            <Footer />
        </div>
    );
}
