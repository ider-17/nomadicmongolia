import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const shortItinerary = [
    { day: 1, title: "ULAANBAATAR" },
    { day: 2, title: "KHOVSGOL" },
    { day: 3, title: "KHOVSGOL" },
    { day: 4, title: "ULAANBAATAR" },
    { day: 5, title: "BAYANZAG" },
    { day: 6, title: "KHONGORIIN ELS" },
    { day: 7, title: "VALLE DI YOL" },
    { day: 8, title: "ULAANBAATAR" },
    { day: 9, title: "KHARKHORIN/KARAKORUM" },
    { day: 10, title: "PARCO NAZIONALE KHUSTAI" },
    { day: 11, title: "ULAANBAATAR" },
    { day: 12, title: "PARTENZA" },
];

const images = [
    {
        id: 1,
        image: "/assets/_BAY1429.webp",
    }
]

const itineraryData = [
    {
        day: 1,
        title: "ULAANBAATAR",
        description:
            "Arrivo a Ulaanbaatar e incontro con la guida e trasferimento in hotel. Visita al Monastero Buddista di Gandantegchenling con la cerimonia delle preghiere del mattino. Pranzo in ristorante. Nel pomeriggio visita panoramica della citta, con la grande Piazza Sukhbaatar e il Monumento Zaisan ai caduti costruito su una collina da cui si gode una splendida vista della citta e delle colline circostanti.  Cena in ristorante e pernottamento in hotel. (LD)",
    },
    {
        day: 2,
        title: "ULAANBAATAR – KHOVSGOL (150 km. circa)",
        description:
            "Prima colazione in hotel e volo per Moron o Khatgal (il luogo d’arrivo dipende dal vettore locale), nella regione del lago Khovsgol. Partenza per il campo base. Cena al campo. Pernottamento nelle ger, le tradizionali tende mongole. (BLD)",
    },
    {
        day: 3,
        title: "KHOVSGOL",
        description:
            "Prima colazione al campo. Si visiteranno delle famiglie Tsaatan (Popolo delle Renne) per conoscere i loro usi e costumi. Possibilita di fare delle passeggiate ed un&#39;escursione in motonave sul lago Khovsgol per ammirare lo splendido paesaggio. Cena e pernottamento al campo. BLD",
    },
    {
        day: 4,
        title: "KHOVSGOL – ULAANBAATAR (150 km. circa)",
        description:
            "Prima colazione al campo, partenza per Moron/Khatgal e successivamente volo per Ulaanbaatar.  Sistemazione in hotel.Pranzo in ristorante.Visita al Museo dei Costumi Nazionali delle varie etnie Mongole.Dopo la visita si possono acquistare o ordinare il vestito tradizionale mongolo, il “Deel”, o i gioielli tipici.Cena in ristorante e pernottamento in hotel.BLD",
    },
    {
        day: 5,
        title: "ULAANBAATAR – LE DUNE DEL DESERTO DEI GOBI E BAYANZAG (80 km. circa)",
        description:
            "Prima colazione e trasferimento all’aeroporto. Volo per il Deserto dei Gobi, arrivo nella regione di Omnogobi, nell’essenziale aeroporto Bulagtai o Dalanzadgad(si atterra su una pista di terra battuta).Pranzo al campo.Partenza, per la zona delle dune di sabbia.Visita di Bayanzag, chiamata Flaming Cliffs o Rupi Fiammeggianti.Sistemazione al campo.Cena e pernottamento. BLD",
    },
    {
        day: 6,
        title: "BAYANZAG – KHONGORIIN ELS (200 km. circa)",
        description:
            "Dopo colazione, partenza verso le Khongoriin Els. In un territorio misto di deserto e steppa si raggiungono le grandi dune di sabbia di Khongoriin Els, note come “duut mankhan”, le dune che cantano. Salendo con molta fatica sulla cresta delle dune si può godere una magnifica vista del deserto e... divertirsi a scivolare giù ! Le dune raggiungono i 300 metri di altezza e si resistono per 180 km. oltre l’orizzonte. Incontro con una famiglia nomade e possibilità di fare una escursione a dorso di cammello. Pranzo, cena e pernottamento in campo turistico.",
    },
    {
        day: 7,
        title: "KHONGORIIN ELS – VALLE DI YOL (180 km.circa)",
        description:
            "Vista dell’alba nel deserto. Prima colazione e partenza per il Parco Naturale Gobi Gurvansaikhan, Three Beauties of the Gobi, per osservare la fauna del deserto. Visita alla Valle di Yol, o delle Aquile, una gola stretta e rocciosa a circa 2.500 mt di altitudine, in cui si trovano ghiacciai perenni ed affascinanti canyon.  Pranzo al sacco. Rientro al campo e cena. BLD",
    },
    {
        day: 8,
        title: "GOBI – ULAANBAATAR",
        description:
            "Prima colazione e trasferimento all’aeroporto di Bulagtai. Volo per Ulaanbaatar. Sistemazione in hotel. Visita al Museo di Storia Nazionale.  Pranzo in ristorante. Nel pomeriggio visita al Museo di Choijin Lama Luvsankhaidub. Cena in ristorante e pernottamento. BLD",
    },
    {
        day: 9,
        title: "ULAANBAATAR – Kharkhorin/KARAKORUM (360 km. circa)",
        description:
            "Prima colazione e partenza per Karakorum, antica capitale dell’impero. Durante il tragitto visita del Monastero Erdene Khamba e delle rovine del monastero Ovgon Khiid, situati nella bellissima valle di Khogno Khaan. Visita a Karakorum e alle rovine della citta, al Monastero Erdene Zuu e alle leggendarie  tartarughe di Karakorum. Accanto alla Tartaruga spesso vengono allestite della bancarelle dalla gente del luogo dove e possibile trovare dei souvenir e degli oggetti  tradizionali. Proseguimento per il campo e sistemazione nelle ger. Pranzo al sacco. Rientro e cena al campo, pernottamento. BLD",
    },
    {
        day: 10,
        title: "KARAKORUM – KHUSTAI (260 km. circa)",
        description:
            "Prima colazione e visita il museo di Karakorum e partenza per il Parco Nazionale dei Monti Khustai. Sistemazione al campo e pranzo. Visita ai cavalli selvatici Prjewalsky-Takhi con la guida dei ranger locali e visita del museo a loro dedicato. Rientro e cena al campo. BLD",
    },
    {
        day: 11,
        title: "KHUSTAI – ULAANBAATAR (100 km. circa)",
        description: "Prima colazione e rientro a Ulaanbaatar. Sistemazione in hotel. Pranzo in ristorante. Nel pomeriggio visita al Museo delle Belle Arti Zanabazar, dedicato al grande capo religioso e politico, pittore e cultore. Nel tardo pomeriggio, spettacolo folkloristico Tumen Enkh (ore 18-19), con musiche, danze e canti melodici, canto di gola Hoomii, contorsionismo e danza Tsam, simbolizzante le diverse divinità protettrici del buddismo lamaista. Cena in ristorante e pernottamento. BLD",
    },
    {
        day: 12,
        title: "ULAANBAATAR – ITALIA",
        description: "Prima colazione e trasferimento in aeroporto per il volo di rientro in Italia.",
    },
];

const laQuotaComprende = [
    {
        id: 1,
        description: "Sistemazione: 4 notti in Hotel*** a Ulaanbaatar e 7 notti in Campi turistici nelle Gher durante il viaggio, sistemazione in camera doppia (singola a richiesta con supplemento) con bagni privati in hotel e con bagni condivisi nelle gher",
    },
    {
        id: 2,
        description: "11 prime colazioni, 11 pranzi, 11 cene",
    },
    {
        id: 3,
        description: "Guida locale parlante italiano o inglese per 12 giorni",
    },
    {
        id: 4,
        description: "Tour della città con sightseeing e ingressi ai musei come da programma",
    },
    {
        id: 5,
        description: "Trasporto con mezzi 4x4 tipo minivan con autista esperto",
    },
    {
        id: 6,
        description: "Biglietti ingresso a tutti i parchi naturali previsti dal programma",
    },
    {
        id: 7,
        description: "Cavalcata con il cammello nel deserto del Gobi 1h",
    },
    {
        id: 8,
        description: "Cavalcata a cavallo 1h",
    },
    {
        id: 9,
        description: "Bagno termale a Tsenkher",
    },
    {
        id: 10,
        description: "Transfert aeroporto – hotel e/o viceversa",
    },
    {
        id: 11,
        description: "1,5 lt di acqua in bottiglia al giorno",
    },
    {
        id: 12,
        description: "Lettera di invito per ingresso al paese",
    },
]

const laQuotaNonComprende = [
    {
        id: 1,
        description: "voli intercontinentali Milano/Roma - Ulaanbaatar",
    },
    {
        id: 2,
        description: "Visto ingresso Mongolia (se richiesto)",
    },
    {
        id: 3,
        description: "Supplemento sistemazione in singola Euro 250",
    },
    {
        id: 4,
        description: "Bibite ed alcolici",
    },
    {
        id: 5,
        description: "Tour turistici e naturalistici facoltativi (musei, esposizioni)",
    },
    {
        id: 6,
        description: "Le mance e gli extra in genere",
    },
    {
        id: 7,
        description: "Tutto quanto non incluso nella voce “la quota comprende”.",
    },
]

export default function SteppeGobiPage() {
    return (
        <div className="bg-white h-screen">
            <Header />

            <section className="w-full min-h-screen text-black px-[150px] pt-25 space-y-6 bg-white pb-6">
                <h1 className="text-center font-bold text-3xl">Steppe e Gobi</h1>

                <div>
                    <p className="font-semibold">Regione: centrale, meridionale, settentrionale
                    </p>
                    <p>Durazione: 12 giorni</p>
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
                    <img key={image.id} src={image.image} alt="Steppe del Gobi" className="rounded-xl" />
                ))}


                {/* Itinerario dettagliato */}
                <h1 className="text-center text-3xl font-bold">Itinerario dettagliato</h1>
                {itineraryData.map((item) => (
                    <div key={item.day}>
                        <h2 className="font-semibold">GIORNO {item.day}. {item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}

                {/* nemelt heseg */}
                <h1 className="text-center text-3xl font-bold">La quota comprende</h1>
                <div>
                    {laQuotaComprende.map((des) => (
                        <div key={des.id} className="flex gap-4 mb-1">
                            <p>✓</p>
                            <p>{des.description}</p>
                        </div>
                    ))}
                </div>

                {/* nemelt heseg */}
                <h1 className="text-center text-3xl font-bold">La quota non comprende</h1>
                <div>
                    {laQuotaNonComprende.map((des) => (
                        <div key={des.id} className="flex gap-4 mb-1">
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
