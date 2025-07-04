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
    { day: 1, title: "Ulaanbaatar", description: "Arrivo all’aeroporto di Ulaanbaatar, incontro con la guida e l’autista e trasferimento in hotel e sistemazione. Inizio tour della città che vi porterà in alcuni dei principali siti di questa città unica. Visita al monastero buddista Gandan dove si trova una statua dorata di Buddha alta più di 26 mt. Pranzo in un tipico ristorante mongolo. Visita della famosa piazza Sukhbaatar e la stutua di Zaisan. Cena e pernottamento in hotel***. LD", luglio: "6 luglio 2025" },
    { day: 2, title: "Ulaanbaatar – Baga Gazriin Chulu (240 km)", description: "Dopo colazione partenza verso il deserto del Gobi (Dundgobi). Arrivo a Baga Gazriin Chuluu, suggestiva formazione rocciosa dove hanno vissuto in passato due monaci molto venerati, perciò meta di pellegrinaggi da parte della gente del posto. Pranzo, cena e pernottamento in campo turistico. BLD", luglio: "7 luglio 2025" },
    { day: 3, title: "Baga Gazriin Chulu - Tsagaan Suvraga (220 km)", description: "Dopo colazione partenza verso Tsagaan Suvraga. Lungo il percorso il paesaggio è caratterizzato da una profonda fenditura del terreno da est verso ovest. Qui si ritrovano molti fossili di origine marina, in quanto la zona era un tempo sommersa dal mare. I colori delle rocce calcare sono determinati da minerali di rame e di molibdeno. Tappa per il pranzo a Mandalgobi il capoluogo di Dundgobi e visita ad un piccolo museo locale. Cena e pernottamento in campo turistico. BLD", luglio: "8 luglio 2025" },
    { day: 4, title: "Tsagaan Suvraga - Yoliin Am (210km)", description: "Dopo colazione, partenza verso il Dalanzadgad, il capoluogo di Umnugobi e visita ad un museo locale. Umnugobi è il più grande territorio delle province, dove si frequentano i mineri di minerali. Dopo la visita partenza verso il campo turistico e dopo il pranzo visita al parco nazionale dei monti Gurvan Saikhan (Tre bellezze). Escursione nella valle di Yoliin Am, la “valle delle aquile”, habitat di numerose specie selvatiche. Fino a stagione avanzata si può passeggiare nel canyon al fresco di un'incredibile nevaio. Cena e prenotamento in campo turistico. BLD", luglio: "9 luglio 2025" },
    { day: 5, title: "NAADAM a DALANZADGAD (90km)", description: "Dopo colazione partenza per il festival di Naadam. Tutta la giornata dedicata per il Festival. Ritorna al campo prima di cena. Cena e pernottamento in campo turistico. BLD", luglio: "10 luglio 2025" },
    { day: 6, title: "Yoliin Am – Khongorin ELS (210 km)", description: "Oggi viaggeremo verso il deserto del Gobi. Dopo colazione, partenza verso le Khongoriin Els. In un territorio misto di deserto e steppa si raggiungono le grandi dune di sabbia di Khongoriin Els, note come “duut mankhan”, le dune che cantano. Le dune raggiungono i 300 metri di altezza e si estendono per 180 km. Pranzo, cena e pernottamento in campo turistico. BLD", luglio: "11 luglio 2025" },
    { day: 7, title: "Khongorin ELS (30 km)", description: "Dopo colazione incontro con una famiglia nomade e possibilità di fare una escursione a dorso di cammello. Il cammello mongolo ha due gobbe ed è molto mansueto per questo facilmente cavalcabile. Dopo pranzo si raggiungono le dune, dove salendo con molta fatica sulla cresta si può godere una magnifica vista del deserto, potremo poi divertirci a scivolarvi sopra per tornare alla base. Pranzo, cena e pernottamento in campo turistico. BLD", luglio: "12 luglio 2025" },
    { day: 8, title: "Khongorin ELS – Bayanzag (180 km)", description: "Attraverso immense distese, proseguimento verso l’antica valle di Bayanzag. L’area è famosa per gli importanti ritrovamenti paleontologici. Escursione alle “rupi fiammeggianti” (così dette per il loro colore al tramonto), dove nel secolo scorso l’avventuriero americano Roy Chapman Andrews ritrovò i primi scheletri e uova fossili di dinosauro. Pranzo, cena e pernottamento in campo turistico. BLD", luglio: "13 luglio 2025" },
    { day: 9, title: "Bayanzag – Ongiin Khiid (160 km)", description: "Partenza verso nord, fino al monastero distrutto di Ongiin Khiid e la catena montuosa del Gobi-Altai. Arrivo e visita delle rovine del Monastero. Dall'alto del pendio dove è stato ricostruito un nuovo monastero, si osserva la vastità dell'insediamento monastico dato alle fiamme in epoca comunista. Pranzo, cena e pernottamento in campo turistico. BLD", luglio: "14 luglio 2025" },
    { day: 10, title: "Ongiin Khiid – Karakorum (250 km)", description: "Dopo colazione partenza verso Karakorum che l’antica capitale imperiale fondata da Genghis Khan, poi distrutta dagli invasori Manciù. Visita al grande monastero buddista di Erdene-Zuu, circondato da un centinaio di stupa. Il monastero fu costruito alla fine del XVI° secolo sui ruderi di Karakorum. Passeggiata fuori le mura fino alla grande tartaruga di pietra, una delle quattro che delimitavano un tempo il perimetro della capitale gengiskhanide. Visita al Museo locale Kharkhorum dove si possono ammirare i reperti archeologici portati alla luce dalla missione tedesca. Pranzo, cena e pernottamento in campo turistico. BLD", luglio: "15 luglio 2025" },
    { day: 11, title: "Karakorum - Parco Nazionale Hustai(260)", description: "Dopo colazione partenza verso il parco nazionale di Hustai, arrivo e sistemazione in un campo turistico. Dopo pranzo visita il centro d’informazione del parco dove ci sono i cavalli selvatici Takhi e più noto il cavallo di Przewalski. Passeggiata alla natura intorno del campo. Cena e pernottamento in campo turistico. BLD", luglio: "16 luglio 2025" },
    { day: 12, title: "Ulaanbaatar (100km)", description: "Dopo colazione, partenza per Ulaanbaatar, arrivo e sistemazione in un hotel del centro. Pranzo in ristorante. Nel tardo pomeriggio, spettacolo folkloristico (ore 18-19), con musiche, danze e canti melodici, canti di gola Hoomii, contorsionismo e danza Tsam, simbolizzante le diverse divinità protettrici del buddismo lamaista. Alla sera cena dell'arrivederci in un tipico ristorante cittadino. BLD", luglio: "17 luglio 2025" },
    { day: 13, title: "Partenza per l’Italia", description: "", luglio: "18 luglio 2025" },
];

const laQuotaComprende = [
    { id: 1, description: "Sistemazione: 2 notti in Hotel*** a Ulaanbaatar e  10  notti  in  Campi  turistici  nelle  Gher  durante  il viaggio, sistemazione in camera doppia (singola a richiesta con supplemento) con bagni privati in hotel e con bagni condivisi nelle gher" },
    { id: 2, description: "11 prime colazioni, 12 pranzi, 12 cene" },
    { id: 3, description: "Guida locale per 13 giorni" },
    { id: 4, description: "Tour della città con sightseeing e ingressi ai musei come da programma" },
    { id: 5, description: "Trasporto con mezzi 4x4 con autista esperto (land cruiser)" },
    { id: 6, description: "Biglietti ingresso a tutti i parchi naturali previsti dal programma" },
    { id: 7, description: "Prova di cavalcata con il cammello" },
    { id: 8, description: "Prova di cavalcata a cavallo" },
    { id: 9, description: "Transfert aeroporto – hotel e/o viceversa" },
    { id: 10, description: "Acqua da bere" },
    { id: 11, description: "Lettera di invito per ingresso al paese" },
];

const laQuotaNonComprende = [
    { id: 1, description: "voli intercontinentali Milano/Roma - Ulaanbaatar A/R" },
    { id: 2, description: "Visto ingresso Mongolia (se richiesto)" },
    { id: 3, description: "Supplemento sistemazione in singola." },
    { id: 4, description: "Bibite ed alcolici" },
    { id: 5, description: "Tour turistici e naturalistici facoltativi (musei, esposizioni)" },
    { id: 6, description: "Le mance e gli extra in genere" },
    { id: 7, description: "Tutto quanto non incluso nella voce “la quota comprende”." },
];


export default function IlDesertoDelEIlFestivalDiNaadamPage() {
    return (
        <div className="bg-white h-screen">

            <Header />

            <section className="w-full min-h-screen text-black px-[150px] pt-25 space-y-6 bg-white pb-6">
                <h1 className="text-center font-bold text-3xl">Il deserto del Gobi e il  festival di Naadam 2025
                </h1>

                <h2 className="font-semibold">Durata: 13 giorni</h2>
                <p> Dal 6 luglio al 18 luglio 2025</p>

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

                <h2 className="font-semibold">Ulaanbaatar, Baga gazriin chuluu, Tsagaan suvraga Deserto dei Gobi, Bayanzag, Valle di Yol, Karakorum, Parco Nazionale Khustai</h2>

                {itineraryData.map((item) => (
                    <div key={item.day}>
                        <h2 className="mb-2 font-semibold">• {item.luglio}</h2>
                        <h2 className="font-semibold">GIORNO {item.day}. {item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}

                <h2 className="font-semibold">Quata individuale:</h2>
                <p>7 pax – 2690 in 2 jeep <br />
                    11 pax – 2490 in 3 jeep <br />

                    8pax – 2880 in 3 jeep <br />
                    11 pax – 2750 in 4 jeep
                </p>

                {/* laQuotaComprende */}
                <h1 className="text-center text-3xl font-bold">Suggerimenti per il viaggio</h1>
                {laQuotaComprende.map((des) => (
                    <div key={des.id} className="flex gap-4 mb-1">
                        <p>✓</p>
                        <p>{des.description}</p>
                    </div>
                ))}

                {/* laQuotaNonComprende */}
                <h1 className="text-center text-3xl font-bold">I nostri vantaggi</h1>
                {laQuotaNonComprende.map((des) => (
                    <div key={des.id} className="flex gap-4 mb-1">
                        <p>✓</p>
                        <p>{des.description}</p>
                    </div>
                ))}

            </section>

            <Footer />
        </div>
    );
}
