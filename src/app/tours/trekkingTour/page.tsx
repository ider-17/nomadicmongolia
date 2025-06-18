import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const shortItinerary = [
    { day: 1, title: "Partenza dall’ Italia per Ulaanbaatar" },
    { day: 2, title: "Ulaanbaatar" },
    { day: 3, title: "Ulaanbaatar - Elsen tasarkhai – 280km (strada asfaltata)" },
    { day: 4, title: "Elsen tasarkhai – Kharakhorum – 160km (strada asfaltata)" },
    { day: 5, title: "Kharakhorum – Il monastero di Tuvkhun – 100km (fuoristrada)" },
    { day: 6, title: "Il monastero di Tuvkhun – la cascata di Ulaan Tsutgalan e Uliastain gol – 100km (fuoristrada)" },
    { day: 7, title: "Uliastain gol" },
    { day: 8, title: "Uliastain gol – il villaggio Erdenetsogt 130km (fuoristrada)" },
    { day: 9, title: "e giorno 10. Il villaggio Erdenetsogt – la valle di Mandal – 110km (fuoristrada)" },
    { day: 10, title: "" },
    { day: 11, title: "la valle di Mandal – Arvaikheer – 360км" },
    { day: 12, title: "Arvaikheer - il parco nazionale di Khustai 320km" },
    { day: 13, title: "il parco nazionale di Khustai" },
    { day: 14, title: "Mongol Nomadic – Ulaanbaatar – 130км (strada asfaltata)" },
    { day: 15, title: "" },
    { day: 16, title: "Al mattino presto, trasferimento all’aereoporto e partenza l’Italia." }
];

const images = [
    {
        id: 1,
        image: "/assets/mountain.webp",
    }
];

const itineraryData = [
    {
        day: 1, title: "Partenza dall’ Italia per Ulaanbaatar", description: "",
        agosto: "4 agosto 2025"
    },
    { day: 2, title: "Ulaanbaatar", description: "Arriviamo all’aeroporto di Ulaanbaatar, incontriamo con le guide e l’autista e trasferimento in hotel e sistemazione. Inizio tour della città che vi porterà in alcuni dei principali siti di questa città unica. Visita al monastero buddista Gandan dove si trova una statua dorata di Buddha alta più di 26 mt. Pranzo in un tipico ristorante mongolo. Visitiamo la famosa piazza Sukhbaatar e il nuovo museo di Genghis Khan, è stato aperto il 11 ottobre 2022. Cena e prenottamento in hotel***. LD", agosto: "5 agosto 2025" },
    {
        day: 3, title: "Ulaanbaatar - Elsen tasarkhai – 280km (strada asfaltata)", description: "Dopo colazione partiamo verso l’ovest. Arrivo alle sabbie d’Elsen tasarkhai e montagna di Khugnu Khaan. Arriviamo al nostro campo tendato e pranziamo. Dopo pranzo riposiamo un attimo e facciamo trekking verso il recente templi buddista Erdene Khamba e rovine di un antico monastero Uvgun. Sistemazione nelle tende. BLD",
        subDescription: "Percorso: circa10km", agosto: "6 agosto 2025"
    },
    { day: 4, title: "Elsen tasarkhai – Kharakhorum – 160km (strada asfaltata)", description: "Dopo colazione partiamo verso Karakorum che l’antica capitale imperiale fondata da Genghis Khan, poi distrutta dagli invasori Manciù. Dopo colazione e Alla periferia dell'odierno villaggio di Kharkhorin, visita al singolare scultura della boovon khad /pietra fallica/. Visita al grande monastero buddista di Erdene-Zuu, circondato da un centinaio di stupa. Il monastero fu costruito alla fine del XVI° secolo sui ruderi di Karakorum. Passeggiata fuori le mura fino alla grande tartaruga di pietra, una delle quattro che delimitavano un tempo il perimetro della capitale gengiskhanide. Visita al Museo locale dove si possono ammirare i reperti archeologici portati alla luce dalla missione tedesca. Dopo la visita risaliamo in mezzi privati e arriviamo alla montagna da dove cominciamo il trekking dopo il giorno. Pranzo, cena e sistemazione nelle nostre tende. BLD", agosto: "7 agosto 2025" },
    {
        day: 5, title: "Kharakhorum – Il monastero di Tuvkhun – 100km (fuoristrada)", description: "Dopo colazione arriviamo al parcheggio della Montagna di Tuvkhun Ovoo Shireet (2300m slm). Cominciamo a camminare in salita fino alla cima della montagna dove si trova il monestero di Tuvkhun, fu stato fondato dal primo Santo Zanabazar del Buddhismo mongolo dal 1651. Visitiamo i resti dei templi e dopo la visita andiamo in discesa. Pranzo in picnic, cena e sistemazione nelle nostre tende. BLD",
        subDescription: "Percorso: circa 10km, 500 m dislivello complessivo in salita", agosto: "8 agosto 2025"
    },
    {
        day: 6, title: "Il monastero di Tuvkhun – la cascata di Ulaan Tsutgalan e Uliastain gol – 100km (fuoristrada)", description: "Dopo colazione partiamo verso Ulaan Tsutgalan, la più grande cascata della Mongolia (25m) nella valle dell'Orkhon, fu stata inscritta dall'UNESCO nell'elenco dei siti patrimonio dell'umanità. Pranziamo nelle gher nomade. Dopo pranzo partenza verso il fiume di Uliastain gol. Cena e sistemazione nelle nostre tende. BLD",
        subDescription: "", agosto: "9 agosto 2025"
    },
    {
        day: 7, title: "Uliastain gol", description: "Dopo colazione facciamo camminata dal nostro campo tendato facendo un giro ad anello. Pranzo in picnic, cena e sistemazione nelle nostre tende. BLD",
        subDescription: "", agosto: "10 agosto 2025"
    },
    {
        day: 8, title: "Uliastain gol – il villaggio Erdenetsogt 130km (fuoristrada)", description: "Dopo colazione partiamo verso il villaggio di Erdenetsogt, una città della regione di Bayankhongor. Visitiamo un piccolo monestero locale di Erdenetsogt si chiama Khachin Lama. È la possibilità di sentire una preghiera o conversare con i monaci. Dopo la visita ripendiamo la strada e ci arriviamo a Shatar chuluu, si chiama in italiano la pietra degli scacchi, pietra di cervo che sono antiche tombe di 3000 a.C. Cena e sistemazione nelle nostre tende. BLD",
        subDescription: "", agosto: "11 agosto 2025"
    },
    {
        day: 9, title: "Il villaggio Erdenetsogt – la valle di Mandal – 110km (fuoristrada)", description: "Dopo colazione partenza verso la vale di Mandal dove c’è la natura spedida, dopo pranzo facciamo trekking per vedere le sedie sacre di pietra dei monaci dove facevano meditazione  nel 1700. Avete la possibilità di fare una breve meditazione. Pranzo, cena e sistemazione nelle nostre tende. BLD",
        subDescription: "", agosto: "12 e 13 agosto 2025"
    },
    {
        day: 10, title: "Il villaggio Erdenetsogt – la valle di Mandal – 110km (fuoristrada)", description: "Il giorno successivo, dopo colazione facciamo trekking seguindo alla riva del fiume di Tsagaan Turuut e vediamo le buddha sono dipinte alle roccie dai nomaci nel 1700. Pranzo al sacco, cena e sistemazione nelle nostre tende. La famiglia ci offre un tè con il latte di yak e altri prodotti lattieri come Aaruul (cagliata essiccata), byaslag (formaggio semplice) e burro. Ci assaggiamo i piatti tradizionali. BLD",
        subDescription: "Percorso: circa 18 km", agosto: "12 e 13 agosto 2025"
    },
    { day: 11, title: "la valle di Mandal – Arvaikheer – 360км", description: "Dopo colazione partiamo verso Arvaikheer, il capoluogo della provincia di Ovorkhangai. Prima passiamo alla provincia di  Bayankhongor e pranziamo al ristorante locale e dopo pranzo visita al museo locale. Riprendiamo il nostro pulmino e arriviamo ad Arvaikheer. Pranzo, cena e sistemazione in hotel locale. (BLD)", agosto: "14 agosto 2025" },
    { day: 12, title: "Arvaikheer - il parco nazionale di Khustai 320km", description: "Dopo colazione partenza verso il parco nazionale di Hustai, arrivo e sistemazione in un campo turistico. Dopo pranzo lungo la strada e  visita il centro d’informazione del parco dove ci sono i cavalli selvatici Takhi e più noto il cavallo di Przewalski. Passeggiata alla natura intorno del campo. Cena e pernottamento in campo turistico. BLD", agosto: "15 agosto 2025" },
    { day: 13, title: "il parco nazionale di Khustai", description: "Dopo la colazione, partenza dal campo turistico con pulmino arriviamo  a dove possiamo fare la camminata. Pranzo in picnic e cena e pernottamento in campo turistico. BLD", agosto: "16 agosto 2025" },
    { day: 14, title: "Mongol Nomadic – Ulaanbaatar – 130км (strada asfaltata)", description: "Dopo la colazione, partenza per il campo turistico di Mongol nomadic dove vediamo un evento di “Nomadi Mongoli”, assaggia i cibi tradizionali, musica tradizionale, spostamento di carrozza di manzi e camelli, gioco tradizionale ed ecc. Dopo pranzo partenza per Ulaanbaatar, arrivo e sistemazione in un hotel del centro. Proseguimento con la visita museo storico nazionale ricco di vestiti e armamenti tipici del popolo mongolo. Cena libera. BL", agosto: "17 agosto 2025" },
    { day: 15, title: "", description: "Dopo la colazione, andaimo a visitare il mercato aperto a Ulaanbaatar. Pranzo in ristorante locale e shopping. Nel tardo pomeriggio, spettacolo folkloristico (ore 18-19), con musiche, danze e canti melodici, canti di gola Hoomii, contorsionismo e danza Tsam, simbolizzante le diverse divinità protettrici del buddismo lamaista. Alla sera cena dell'arrivederci in un tipico ristorante cittadino. BLD", agosto: "18 agosto 2025" },
    { day: 16, title: "", description: "Al mattino presto, trasferimento all’aereoporto e partenza l’Italia.", agosto: "19 agosto 2025" },
];

const laQuotaComprende = [
    { id: 1, description: "Sistemazione: 3 notti in Hotel*** a Ulaanbaatar, 1 notte in hotel locale, 8 notte in tende e 2  notti  in  Campi  turistici  nelle  Gher  durante  il viaggio, sistemazione in camera doppia (singola a richiesta con supplemento) con bagni privati in hotel e con bagni condivisi nelle gher" },
    { id: 2, description: "14 prime colazioni, 14 pranzi, 13 cene" },
    { id: 3, description: "Guida locale parlante italiano o inglese per 14 giorni" },
    { id: 4, description: "Tour della città con sightseeing e ingressi ai musei come da programma" },
    { id: 5, description: "Trasporto con mezzi 4x4 con autista esperto uaz furgon (pullman russo)" },
    { id: 6, description: " Biglietti ingresso a tutti i parchi naturali previsti dal programma" },
    { id: 7, description: "Transfert aeroporto – hotel e/o viceversa" },
    { id: 8, description: "Acqua da bere" },
    { id: 9, description: " Lettera di invito per ingresso al paese" },
];

const laQuotaNonComprende = [
    { id: 1, description: "voli intercontinentali Italy - Ulaanbaatar A/R" },
    { id: 2, description: "Visto ingresso Mongolia (se richiesto)" },
    { id: 3, description: "Supplemento sistemazione in singola Euro 350" },
    { id: 4, description: "Bibite ed alcolici" },
    { id: 5, description: "Tour turistici e naturalistici facoltativi (musei, esposizioni)" },
    { id: 6, description: "Le mance e gli extra in genere" },
    { id: 7, description: "Tutto quanto non incluso nella voce “la quota comprende”" },
];

const travelSuggestions = [
    { id: 1, description: "Vestiti caldi, di cotone, comodi" },
    { id: 2, description: "Occhiali da sole, crema SPF, antizanzare" },
    { id: 3, description: "Scarpe da montagna e stivali impermiabili" },
    { id: 4, description: "Giacca impermiabile" },
    { id: 5, description: "Capello, guanti, un paio di calzini di cotone" },
    { id: 6, description: "Cassetta di pronto soccorso" },
    { id: 7, description: "Power Bank, USB" },
    { id: 8, description: "Torcia frontale" },
    { id: 9, description: "borraccia" },
    { id: 10, description: "Sacco pello (-20°.C)" },
    { id: 11, description: "Regali per bambini, famiglie nomadi" },
];

const ourAdvantages = [
    { id: 1, description: "Rispettiamo abitudine e cultura della popolazione locale" },
    { id: 2, description: "acquistiamo e supportiamo i prodotti di provenienza locale" },
    { id: 3, description: "Sosteniamo le industrie lattiero-casearie" },
    { id: 4, description: "Supportiamo le partner locale" },
    { id: 5, description: "Diciamo NO plastic" },
    { id: 6, description: "Ci prendiamo cura dei luoghi del patrimonio" },
    { id: 7, description: "VERDI" },
    { id: 8, description: "Sosteniamo il principio LEAVE NO TRACE" },
    { id: 9, description: "Diffondiamo la consapevolezza del turismo sostenibile" },
    { id: 10, description: "Sosteniamo i bar e  i ristoranti locali" },
    { id: 11, description: "Compriamo souvenir dai negozi  e dalla gente locali" },
    { id: 12, description: "Sosteniamo la lotta al commercio illegale" },
    { id: 13, description: "Camminiamo dove possibile" },
    { id: 14, description: "Promuoviamo il turismo sostenibile con i nostri circoli interni ed esterni" },
    { id: 15, description: "Viaggiamo più alla natura" },
    { id: 16, description: "Condividiamo le nostre esperienze di turismo sostenibile" },
    { id: 17, description: "Facciamo turismo sostenibile nella “New normal”" },
]


export default function TrekkingTourPage() {
    return (
        <div className="bg-white h-screen">
            <Header />

            <section className="w-full min-h-screen text-black px-[150px] pt-25 space-y-6 bg-white pb-6">
                <h1 className="text-center font-bold text-3xl">Trekking Tour in Mongolia
                </h1>

                <p className="font-semibold">Durazione: 16 giorni</p>
                <p>Dal 4 agosto al 19 agosto 2025</p>

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
                    <img key={image.id} src={image.image} alt="Trekking tour in Mongolia" className="rounded-xl" />
                ))}


                {/* Itinerario dettagliato */}
                <h1 className="text-center text-3xl font-bold">Itinerario dettagliato</h1>

                {itineraryData.map((item) => (
                    <div key={item.day}>
                        <p className="mb-4">• {item.agosto}</p>
                        <h2 className="font-semibold">GIORNO {item.day}. {item.title}</h2>
                        <p>{item.description}</p>
                        <p className="mt-2">{item.subDescription}</p>
                    </div>
                ))}

                <h2 className="font-semibold">Quota individuale a partire da:</h2>
                <p>10-15pax 2780 <br />
                    Tour leader 1450
                </p>

                {/* laQuotaComprende */}
                <h1 className="text-center text-3xl font-bold">La quota comprende</h1>
                {laQuotaComprende.map((des) => (
                    <div key={des.id} className="flex gap-4">
                        <p>✓</p>
                        <p>{des.description}</p>
                    </div>
                ))}

                {/* laQuotaNonComprende */}
                <h1 className="text-center text-3xl font-bold">La quota non comprende</h1>
                {laQuotaNonComprende.map((des) => (
                    <div key={des.id} className="flex gap-4">
                        <p>✓</p>
                        <p>{des.description}</p>
                    </div>
                ))}

                {/* travelSuggestions */}
                <h1 className="text-center text-3xl font-bold">Suggerimenti per il viaggio</h1>
                {travelSuggestions.map((des) => (
                    <div key={des.id} className="flex gap-4">
                        <p>✓</p>
                        <p>{des.description}</p>
                    </div>
                ))}

                {/* ourAdvantages */}
                <h1 className="text-center text-3xl font-bold">I nostri vantaggi</h1>
                {ourAdvantages.map((des) => (
                    <div key={des.id} className="flex gap-4">
                        <p>✓</p>
                        <p>{des.description}</p>
                    </div>
                ))}

            </section>

            <Footer />
        </div>
    );
}
