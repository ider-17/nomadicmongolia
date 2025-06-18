import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const shortItinerary = [
    { day: 1, title: "Partenza dall’Italia" },
    { day: 2, title: "Ulaanbaatar" },
    { day: 3, title: "Ulaanbaatar – Gùn Galuu  (140 km  Tempo in auto 3 ore)" },
    { day: 4, title: "Gùn Galuu – Baga Gazar  (350 km Tempo in auto: 7 ore)" },
    { day: 5, title: "Baga Gazar –  Parco nazionale di Yolin Am  (380 km di strada asfaltata Tempo in auto: 6 ore)" },
    { day: 6, title: "Parco nazionale di Yolin Am" },
    { day: 7, title: "Yolyn Am – Bayanzag (60 km di sterrato Tempo in auto: 2 ore)" },
    { day: 8, title: "Bayanzag (60 km andata e ritorno di sterrato. Tempo in auto: 2 ore)" },
    { day: 9, title: "Bayanzag – il monastero di Onghi (150 km di sterrato. Tempo in auto: 5 ore)" },
    { day: 10, title: "Ongii – Khustai (200 km sterrato + 260 km di strada asfaltata. Tempo in auto 8 ore)" },
    { day: 11, title: "Il parco nazionale di Khustai – 20 km sterrato" },
    { day: 12, title: "Il parco nazionale di Khustai – Ulaanbaatar. (100 km di strada asfaltata.Tempo in auto 2 ore)" },
    { day: 13, title: "Partenza per l’Italia" },
];

const images = [
    {
        id: 1,
        image: "/assets/birds-3.webp",
    }
];

const itineraryData = [
    { day: 1, title: "Partenza dall’Italia", description: "", giugno: "" },
    { day: 2, title: "Ulaanbaatar", description: "Arriviamo all’aeroporto di Ulaanbaatar, incontriamo con le guide e l’autista e trasferimento in hotel e sistemazione. Inizio tour della città che vi porterà in alcuni dei principali siti di questa città unica. Visita al monastero buddista Gandan dove si trova una statua dorata di Buddha alta più di 26 mt. Pranzo in un tipico ristorante mongolo. Visitiamo la famosa piazza Sukhbaatar e il nuovo museo di Genghis Khan, è stato aperto il 11 ottobre 2022. Cena e prenottamento in hotel***. LD", giugno: "1 giugno" },
    { day: 3, title: "Ulaanbaatar – Gùn Galuu  (140 km  Tempo in auto 3 ore)", description: "Dopo la colazione, partenza verso il Parco nazionale di Gùn Galuu per osservare gli uccelli. Colazione, pranzo, cena. Pernottamento in gher per 1 notte. BLD (bagno in comune)", giugno: "2 giugno" },
    { day: 4, title: "Gùn Galuu – Baga Gazar  (350 km Tempo in auto: 7 ore)", description: "Dopo colazione partenza verso il deserto del Gobi (Dundgobi). Passa al Rovine del tempio di Sum Khukh Burd. Si osservano gli uccelli nelle vicinanze del tempio. Arrivo a Baga Gazriin Chuluu, suggestiva formazione rocciosa dove hanno vissuto in passato due monaci molto venerati, perciò meta di pellegrinaggi da parte della gente del posto. Pranzo lungo la strada, cena e pernottamento in gher. BLD (bagno in comune)", giugno: "3 giugno" },
    { day: 5, title: "Baga Gazar –  Parco nazionale di Yolin Am  (380 km di strada asfaltata Tempo in auto: 6 ore)", description: "Dopo colazione, partenza verso il Dalanzadgad, il capoluogo di Umnugobi. Umnugobi è il più grande territorio delle province, dove si frequentano i mineri di minerali. Dopo pranzo partenza verso il parco nazionale dei monti Gurvan Saikhan (Tre bellezze). Escursione nella valle di Yoliin Am, la “valle delle aquile”, habitat di numerose specie selvatiche. Fino a stagione avanzata si può passeggiare nel canyon al fresco di un'incredibile nevaio. Cena e prenotamento in gher. BLD (bagno in comune)", giugno: "4 e 5 giugno 2025" },
    { day: 6, title: "Parco nazionale di Yolin Am", description: "Il giorno successivo, dopo la colazione, si riparte verso Yolin Am per osservare gli uccelli durante tutta la giornata. Pranzo in picnic. Cena e prenotamento in gher stesso.BLD (bagno in comune)", giugno: "4 e 5 giugno 2025" },
    { day: 7, title: "Yolyn Am – Bayanzag (60 km di sterrato Tempo in auto: 2 ore)", description: "Dopo la colazione, partenza verso Bayanzag. Lungo il tragitto, si osservano gli uccelli nella zona di Nutsghen bulag e si prosegue fino al campo base per il pranzo. Cena e il pernottamento in gher. BLD (bagno in comune)", giugno: "6 e 7 giugno 2025" },
    { day: 8, title: "Bayanzag (60 km andata e ritorno di sterrato. Tempo in auto: 2 ore)", description: "Dopo colazione, partenza verso l’antica valle di Bayanzag. L’area è famosa per gli importanti ritrovamenti paleontologici. Escursione alle “rupi fiammeggianti” (così dette per il loro colore al tramonto), dove nel secolo scorso l’avventuriero americano Roy Chapman Andrews ritrovò i primi scheletri e uova fossili di dinosauro. Pranzo, cena e pernottamento in campo turistico. BLD (bagno in comune)", giugno: "" },
    { day: 9, title: "Bayanzag – il monastero di Onghi (150 km di sterrato. Tempo in auto: 5 ore)", description: "Dopo la colazione, partenza verso il rovine di Monastero di Onghi. Si cammina nei dintorni del monastero. In questa area, è possibile osservare uccelli comuni che non sono inclusi nella lista. Pernottamento in gher. BLD (bagno in comune)", giugno: "8 giugno 2025" },
    { day: 10, title: "Ongii – Khustai (200 km sterrato + 260 km di strada asfaltata. Tempo in auto 8 ore)", description: "Dopo la colazione, partenza verso la riserva naturale di Khustai. Oggi si esce dal Gobi. Lungo il tragitto, si fa una sosta al Lago Sacro di Elsen Tasarkhai, dove è possibile osservare uccelli. Pernottamento al campo turistico di Khustai. Pranzo in lungo strada. Colazione, cena pernottamento in gher pranzo lungo la strada. BLD (bagno in comune)", giugno: "9 giugno 2025" },
    { day: 11, title: "Il parco nazionale di Khustai – 20 km sterrato", description: "Dopo la colazione, possibilità di osservare animali selvatici come il cavallo di Przewalski, alci e marmotte nella riserva di Khustai. BLD (bagno in comune)", giugno: "10 giugno 2025" },
    { day: 12, title: "Il parco nazionale di Khustai – Ulaanbaatar. (100 km di strada asfaltata.Tempo in auto 2 ore)", description: "Dopo la colazione, si fa una sosta al laghetto di Khukh nuur e Ulaanbaatar, pernottamento in hotel. Dopo il pranzo, sistemazione in hotel. In serata, possibilità di assistere a uno spettacolo culturale, seguito dalla cena di congedo.", giugno: "11 giugno 2025" },
    { day: 13, title: "", description: "Partenza per l’Italia", giugno: "12 giugno 2025" },
];

const keyBirdSpeciesList = [
    { id: 1, name: "Wooper Swan" },
    { id: 2, name: "Golden Eye" },
    { id: 3, name: "Siberian Blue Robin" },
    { id: 4, name: "White-naped Crane" },
    { id: 5, name: "Siberian Crane" },
    { id: 6, name: "Stejneger's Scoter" },
    { id: 7, name: "Falcated Duck" },
    { id: 8, name: "Mongolian Lark" },
    { id: 9, name: "Saker Falcon" },
    { id: 10, name: "Small snow Finch" },
    { id: 11, name: "Bearded Vulture" },
    { id: 12, name: "Altai Snowcock" },
    { id: 13, name: "Himalayan Griffon" },
    { id: 14, name: "Mongolian accentor" },
    { id: 15, name: "Golden eagle" },
    { id: 16, name: "White winged snow finch" },
    { id: 17, name: "Wall creeper" },
    { id: 18, name: "Rose finchs" },
    { id: 19, name: "Godlewskii Bunting" },
    { id: 20, name: "Oriental Plover" },
    { id: 21, name: "Pallas’s Sandgrouse" },
    { id: 22, name: "Demoiselle crane" },
    { id: 23, name: "Asian short toedlark" },
    { id: 24, name: "Greater Sand Plover" },
    { id: 25, name: "Amur Falcon" },
    { id: 26, name: "Common Kestrel" },
    { id: 27, name: "Daurian Partridge" },
    { id: 28, name: "Meadow Bunting" },
    { id: 29, name: "Steppe Eagle" },
    { id: 30, name: "Black-throated Loon" },
    { id: 31, name: "common crane" },
];

const mammalList = [
    { id: 1, name: "Przewalki’s Horse" },
    { id: 2, name: "Siberian Wapiti Deer" },
    { id: 3, name: "Mongolian Marmot" },
    { id: 4, name: "Siberian Ibex" },
    { id: 5, name: "Goitered Gazelle" },
    { id: 6, name: "Mongolian Gazelle" },
    { id: 7, name: "Asiatic Wild Ass" },
    { id: 8, name: "Pallas’s Pika" },
    { id: 9, name: "Tolai Hare" },
    { id: 10, name: "Mongolian Gerbil" },
    { id: 11, name: "Great Gerbil" },
    { id: 12, name: "Corsac Fox" },
    { id: 13, name: "Red Fox" },
    { id: 14, name: "Long-tailed Ground Squirrel" },
    { id: 15, name: "Alashan Ground Squirrel" },
    { id: 16, name: "Red-cheeked Ground Squirrel" },
    { id: 17, name: "Brandt’s Vole" },
];

// Quota individuale pp a partire da
const travelOptions = [
    { id: 1, description: "6 pax – 3.984,00 € (tre mezzi privati)" },
    { id: 2, description: "tour leader1 – 2.292,00 € (se singola a richiesta +300€)" },
    { id: 3, description: "9 pax – 3.634,00 € (quattro mezzi privati)" },
    { id: 4, description: "tour leader1 – 2.292,00 € (se singola a richiesta +300€)" },
    { id: 5, description: "tour leader2 – 2.988,00 € (se singola a richiesta +300€)" },
];

// La quota comprende
const inclusions = [
    { id: 1, description: "2 notti in Hotel*** a Ulaanbaatar, 9 notti in Campi turistici nelle Gher durante il viaggio" },
    { id: 2, description: "Sistemazione in camera doppia o tripla (singola a richiesta con supplemento)" },
    { id: 3, description: "Bagni privati in hotel e bagni condivisi nelle gher" },
    { id: 4, description: "11 prime colazioni, 11 pranzi, 11 cene" },
    { id: 5, description: "Guida locale per 11 giorni" },
    { id: 6, description: "Trasporto con mezzi 4x4 con autista esperto (Toyota Land Cruiser o Lexus 470)" },
    { id: 7, description: "Biglietti ingresso a tutti i parchi naturali previsti dal programma" },
    { id: 8, description: "Transfert aeroporto – hotel e/o viceversa" },
    { id: 9, description: "Acqua da bere" },
    { id: 10, description: "Lettera di invito per ingresso al paese" },
];

// La quota non comprende
const exclusions = [
    { id: 1, description: "Voli intercontinentali Italy - Ulaanbaatar A/R" },
    { id: 2, description: "Visto ingresso Mongolia (se richiesto)" },
    { id: 3, description: "Supplemento sistemazione in singola Euro 300" },
    { id: 4, description: "Bibite ed alcolici" },
    { id: 5, description: "Tour turistici e naturalistici facoltativi (musei, esposizioni)" },
    { id: 6, description: "Le mance e gli extra in genere" },
];

// Suggerimenti per il viaggio
const equipmentList = [
    { id: 1, description: "Vestiti caldi e comodi" },
    { id: 2, description: "Occhiali da sole, crema SPF, anti-zanzare" },
    { id: 3, description: "Scarpe da montagna e stivali impermeabili" },
    { id: 4, description: "Giacca impermeabile, anti-vento" },
    { id: 5, description: "Cappello, guanti, un paio di calzini pesanti" },
    { id: 6, description: "Cassetta di pronto soccorso" },
    { id: 7, description: "Power Bank, USB" },
    { id: 8, description: "Torcia frontale" },
    { id: 9, description: "Borraccia" },
    { id: 10, description: "Sacco a pelo (-20°C)" },
];




export default function IlDesertoDelEIlFestivalDiNaadamPage() {
    return (
        <div className="bg-white h-screen">

            <Header />

            <section className="w-full min-h-screen text-black px-[150px] pt-25 space-y-6 bg-white pb-6">
                <h1 className="text-center font-bold text-3xl">Tipo di viaggio: Birdwatching
                </h1>

                <h2 className="font-semibold">Durazione: 12 notti e 13 giorni</h2>
                <p>Dal 31 maggio al 12 giugno 2025</p>

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
                    <img key={image.id} src={image.image} alt="Il deserto del Gobi e il festival di Naadam 2025" className="rounded-xl" />
                ))}


                {/* Itinerario dettagliato */}
                <h1 className="text-center text-3xl font-bold">Itinerario dettagliato</h1>

                <h2 className="font-semibold">31 maggio</h2>

                {itineraryData.map((item) => (
                    <div key={item.day}>
                        <h2 className="mb-2 font-semibold">• {item.giugno}</h2>
                        <h2 className="font-semibold">GIORNO {item.day}. {item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}

                <div className="w-full flex gap-4">
                    <div className="w-1/2">
                        <h2 className="font-semibold">Key bird species list :
                        </h2>
                        {keyBirdSpeciesList.map((item) => (
                            <p key={item.id}>{item.id}. {item.name}</p>
                        ))}
                    </div>
                    <div className="w-1/2">
                        <h2 className="font-semibold">Mammal list :
                        </h2>
                        {mammalList.map((item) => (
                            <p key={item.id}>{item.id}. {item.name}</p>
                        ))}
                    </div>
                </div>

                {/* travelOptions */}
                {/* Quota individuale pp a partire da */}
                <h1 className="text-center text-3xl font-bold">Quota individuale pp a partire da</h1>
                {travelOptions.map((des) => (
                    <div key={des.id} className="flex gap-4">
                        <p>✓</p>
                        <p>{des.description}</p>
                    </div>
                ))}

                {/* laQuotaComprende */}
                <h1 className="text-center text-3xl font-bold">Suggerimenti per il viaggio</h1>
                {inclusions.map((des) => (
                    <div key={des.id} className="flex gap-4">
                        <p>✓</p>
                        <p>{des.description}</p>
                    </div>
                ))}

                {/* laQuotaNonComprende */}
                <h1 className="text-center text-3xl font-bold">I nostri vantaggi</h1>
                {exclusions.map((des) => (
                    <div key={des.id} className="flex gap-4">
                        <p>✓</p>
                        <p>{des.description}</p>
                    </div>
                ))}

                <p>N.B. Tutto quanto non citato è escluso dalla voce “La quota comprende”</p>

                {/* equipmentList */}
                <h1 className="text-center text-3xl font-bold">I nostri vantaggi</h1>
                {equipmentList.map((des) => (
                    <div key={des.id} className="flex gap-4">
                        <p>•</p>
                        <p>{des.description}</p>
                    </div>
                ))}

            </section>

            <Footer />
        </div>
    );
}
