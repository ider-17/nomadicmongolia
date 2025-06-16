import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const shortItinerary = [
    { day: 1, title: "ULAANBAATAR" },
    { day: 2, title: "AMARBAYASGALANT" },
    { day: 3, title: "KHUTAG UNDUR E IL FIUME DI SELENGE" },
    { day: 4, title: "KHATGAL E LAGO KHUVSGUL" },
    { day: 5, title: "LAGO DI KHUVSGUL" },
    { day: 6, title: "UUSHGIIN UVUR (PIETRA CERVI)" },
    { day: 7, title: "JARGALANT HOT SPRING" },
    { day: 8, title: "TERKHIIN TSAGAAN NUUR E KHORGHIIN TOGOO" },
    { day: 9, title: "TERKHIIN TSAGAAN NUUR E KHORGHIIN TOGOO" },
    { day: 10, title: "TSENKHER HOT SPRING" },
    { day: 11, title: "TSENKHER HOT SPRING" },
    { day: 12, title: "KHARKHORIN/KARAKORUM" },
    { day: 13, title: "ONGII KHIID" },
    { day: 14, title: "BAYANZAG" },
    { day: 15, title: "KHONGORIIN ELS" },
    { day: 16, title: "YOLIIN AM" },
    { day: 17, title: "TSAGAAN SUVRAGA" },
    { day: 18, title: "BAGA GAZRIIN CHULUU" },
    { day: 19, title: "ULAANBAATAR" },
    { day: 20, title: "PARTENZA" },
];

const images = [
    {
        id: 1,
        image: "/assets/_BAY5051.webp",
    }
]

const itineraryData = [
    {
        day: 1,
        title: "ULAANBAATAR: LA CAPITALE DELLA MONGOLIA MODERNA. 25km",
        description:
            "Arrivo a Ulaanbaatar e operazioni di frontiera, incontro con la guida e trasferimento in hotel. Visita al Monastero Buddista di Gandantegchenling con la cerimonia delle preghiere del mattino. Pranzo in ristorante. Nel pomeriggio visita panoramica della citta, con la Piazza Sukhbaatar e il Monumento Zaisan ai caduti in guerra. Proseguimento con la visita al museo nazionale storico. Cena e pernottamento. LD",
    },
    {
        day: 2,
        title: "MONASTERO DI AMARBAYASGALANT. 360 km.",
        description:
            "Dopo colazione partenza per il monestero di Amarbayasgalant e` piu` bello della Mongolia, eretto per ordine dell’imperatore Manchu` in memoria di grande lama buddista mongolo Zanabazar. Passeggiata nella Valle. Firmata il pranzo a Darkhan seconda citta` della Mongolia. Cena e pernottamento in campo turistico. BLD",
    },
    {
        day: 3,
        title: "KHUTAG UNDUR E IL FIUME DI SELENGE. 280 km",
        description:
            "Dopo colazione visita il monestero per incontrare i monaci. Dopo il monestero partenza verso il nord in direzione del lago Khuvsgul con una sosta a Khutag Undur al fiume di Selenge murun, uno dei fiumi lunghi della Mongolia. Passeggiata seguende il fiume nella bella natura. BLD",
    },
    {
        day: 4,
        title: "KHATGAL E LAGO KHUVSGUL. 360 km",
        description:
            "Dopo colazione e arrivo al lago Khuvsgul. Il lago Khovsgol è il più profondo dell’Asia centrale (260 metri), la cui acqua purissima e cristallina si può persino bere. E’ sicuramente il lago più bello della Mongolia e la meta privilegiata dal turista occidentale. Sistemazione al campo situato sulle rive del lago. Cena e pernottamento in campo turistico. BLD",
    },
    {
        day: 5,
        title: "LAGO DI KHUVSGUL",
        description:
            "Prima colazione e partenza per la visita al popolo delle renne. Pranzo al campo e nel pomeriggio tempo libero. Cena e pernottamento presso il campo turistico. Possibilita` di andare in canyon, motonave o darsare il cavallo. Anche abbiamo possibilita` di fare trekking (si sale e si sciende) per 5 e 6 ore nella zona montagna Uran dush, 2500m di altezza e pranzo al sacco. BLDPrima colazione e partenza per la visita al popolo delle renne. Pranzo al campo e nel pomeriggio tempo libero. Cena e pernottamento presso il campo turistico. Possibilita` di andare in canyon, motonave o darsare il cavallo. Anche abbiamo possibilita` di fare trekking (si sale e si sciende) per 5 e 6 ore nella zona montagna Uran dush, 2500m di altezza e pranzo al sacco. BLD",
    },
    {
        day: 6,
        title: "BUGANCHULUU (PIETRA CERVI). 115 km",
        description:
            "Dopo colazione, partenza verso il centro della Mongolia con una sosta al riva della fiume Delgermurun. Dopo pranzo visita i pietra cervi antica al regione di Altai, Russia. Pietre Deer (noto anche come le pietre di renna) sono antichi megaliti scolpiti con simboli che possono essere trovati in Siberia e in Mongolia. Si chiamano anche le stele di cervo. Queste stele sono state probabilmente erette in origine dai popoli nomadi dell&#39; età del bronzo  intorno al 1.000 a.C. anche se ulteriori ricerche sembrano supportare l&#39;ipotesi dell&#39;origine cimmerica. Pranzo, cena e pernottamento in campo. BLD",
    },
    {
        day: 7,
        title: "JARGALANT HOT SPRING. 230 km",
        description:
            "Oggi ci dirigiamo verso Sud, attraversando Moren e continuando verso le montagne Khangai. Queste montagne variano molto nell’aspetto passando da versanti di roccia nuda e grigia a pendii coperti di vegetazione che sovrastano vallate fluviali popolate da accampamenti gher. Dalle montagne del Khangai nasce il fiume Selenge che si getta nel Lago Baikal. In questo ambiente, che ricorda le nostre alpi, si alternano paesaggi di pascoli montani a vette altissime che raggiungono quasi 4000 mt coperte da nevi perenni e ghiacciai. Vedremo le sorgenti calde di Jargalant ed attraverseremo il Passo Tsagaan Burgas. Sistemazione in campo turistico e cena. BLD",
    },
    {
        day: 8,
        title: "TERKHIIN TSAGAAN NUUR E KHORGHIIN TOGOO. 130 km",
        description:
            "Prima colazione e partenza per Parco Nazionale Khorgo-Terkhiin Tsagaan.. Visita al Vulcano spento Khorgo all’interno del Parco Nazionale Khorgo-Terkhiin Tsagaan. Pranzo al sacco. Visita al Lago Terkhiin Tsagaan, il Grande Lago Bianco, circondato dalle montagne della catena Tarvagatain Nuruu. Cena e pernottamento presso il campo. Dopo colazione si fa il trekking per 5 e 6 ore (Avanti e dietro) verso il volcano di Khorgo dal lago e pranzo al sacco. BLD",
    },
    {
        day: 9,
        title: "TERKHIIN TSAGAAN NUUR E KHORGHIIN TOGOO. 130 km",
        description:
            "Prima colazione e partenza per Parco Nazionale Khorgo-Terkhiin Tsagaan.. Visita al Vulcano spento Khorgo all’interno del Parco Nazionale Khorgo-Terkhiin Tsagaan. Pranzo al sacco. Visita al Lago Terkhiin Tsagaan, il Grande Lago Bianco, circondato dalle montagne della catena Tarvagatain Nuruu. Cena e pernottamento presso il campo. Dopo colazione si fa il trekking per 5 e 6 ore (Avanti e dietro) verso il volcano di Khorgo dal lago e pranzo al sacco. BLD",
    },
    {
        day: 10,
        title: "TSENKHER HOT SPRING. 210 km",
        description:
            "Dopo colazione partenza verso in direzione Sud-Est, costeggiando il canyon del Fiume Chuluut. Nel corso del viaggio escursione alla Roccia Taikhar Chuluu Ci fermeremo nel paese di Tsetserleg, una località caratteristica della Provincia di Arkhangai. La prossima fermata è presso le sorgenti calde a Tsenkher, dove un bagno di vapore può rilassare alla fine della giornata. Secondo giorno possiamo a cavalcare o fare trekking. Cena e pernottamento in Campo turistico. BLD",
    },
    {
        day: 11,
        title: "TSENKHER HOT SPRING. 210 km",
        description: "Dopo colazione partenza verso in direzione Sud-Est, costeggiando il canyon del Fiume Chuluut. Nel corso del viaggio escursione alla Roccia Taikhar Chuluu Ci fermeremo nel paese di Tsetserleg, una località caratteristica della Provincia di Arkhangai. La prossima fermata è presso le sorgenti calde a Tsenkher, dove un bagno di vapore può rilassare alla fine della giornata. Secondo giorno possiamo a cavalcare o fare trekking. Cena e pernottamento in Campo turistico. BLD",
    },
    {
        day: 12,
        title: "KHARKHORIN/KARAKORUM. 110km",
        description: "Partenza verso Karakorum che l’antica capitale imperiale fondata da Genghis Khan, poi distrutta dagli invasori Manciù. Alla periferia dell&#39;odierno villaggio di Kharkhorin, visita al singolare scultura della boovon khad &quot;pietra fallica&quot;. visita al grande monastero buddista di Erdene-Zuu, circondato da un centinaio di stupa. Il monastero fu costruito alla fine del XVI° secolo sui ruderi di Karakorum. Passeggiata fuori le mura fino alla grande tartaruga di pietra, una delle quattro che delimitavano un tempo il perimetro della capitale gengiskhanide. Visita al nuovissimo Museo degli scavi, dove si possono ammirare i reperti archeologici portati alla luce dalla missione tedesca. Pranzo, cena e pernottamento in campo turistico. BLD",
    },
    {
        day: 13,
        title: "ONGII KHIID. 250 km",
        description: "Partenza verso nord, fino al monastero distrutto di Ongiin Khiid e la catena montuosa del Gobi- Altai. Arrivo e visita delle rovine del Monastero. Dall&#39;alto del pendio dove è stato ricostruito un nuovo monastero, si osserva la vastità dell&#39;insediamento monastico dato alle fiamme in epoca comunista. Pranzo in lungo strada e visita una famiglia nomade. Cena e pernottamento in campo turistico. BLD",
    },
    {
        day: 14,
        title: "BAYANZAG. 160 km",
        description: "Attraverso immense distese, proseguimento verso l’antica valle di Bayanzag. L’area è famosa per gli importanti ritrovamenti paleontologici. Escursione alle “rupi fiammeggianti” (così dette per il loro colore al tramonto), dove nel secolo scorso l’avventuriero americano Roy Chapman Andrews ritrovò i primi scheletri e uova fossili di dinosauro. Pranzo, cena e pernottamento in campo turistico. BLD",
    },
    {
        day: 15,
        title: "KHONGORIIN ELS. 150 km",
        description: "Dopo colazione, partenza verso le Khongoriin Els. In un territorio misto di deserto e steppa si raggiungono le grandi dune di sabbia di Khongoriin Els, note come “duut mankhan”, le dune che cantano. Salendo con molta fatica sulla cresta delle dune si può godere una magnifica vista del deserto e... divertirsi a scivolare giù. Le dune raggiungono i 300 metri di altezza e si resistono per 180 km. oltre l’orizzonte. Incontro con una famiglia nomade e possibilità di fare una escursione a dorso di cammello. Pranzo, cena e pernottamento in campo turistico. BLD",
    },
    {
        day: 16,
        title: "VALLE DEL YOL. 210 km",
        description: "Dopo colazione, partenza verso il Valle del Yol e sistemazione in campo turistico. Dopo pranzo ingresso nell’area del parco nazionale dei monti Gurvan Saikhan (Tre bellezze). Escursione nella valle di Yoliin Am, la “valle delle aquile”, habitat di numerose specie selvatiche. Fino a stagione avanzata si può passeggiare nel canyon al fresco di un&#39;incredibile nevaio. Possibilità di fare l&#39;escursione a cavallo. Pranzo e cena e pernottamento in campo turistico. BLD",
    },
    {
        day: 17,
        title: "TSAGAAN SUVRAGA. 280 km",
        description: "Partenza verso Tsagaan Suvraga. Lungo il percorso il paesaggio è caratterizzato da una profonda fenditura del terreno da est verso ovest. Quivi si ritrovano molti fossili di origine marina, in quanto la zona era un tempo sommersa dal mare. I colori delle rocce calcaree sono determinati da minerali di rame e di molibdeno. Nella zona vi sono numerosi dipinti rupestri, petroglifi e antiche iscrizioni.Pranzo, cena e pernottamento in campo turistico. BLD",
    },
    {
        day: 18,
        title: "BAGA GAZRIIN CHULUU. 240 km",
        description: "Partenza verso il deserto del Gobi (Dundgobi). Arrivo a Baga Gazriin Chuluu, suggestiva formazione rocciosa dove hanno vissuto in passato due monaci molto venerati, perciò meta di pellegrinaggi da parte della gente del posto. Lungo la strada si possono avvistare branchi di gazzelle, gruppi di cammelli e rari accampamenti di nomadi. Firmata per il pranzo a Mandalgobi il capoluogo di Dundgobi. Cena e pernottamento in campo turistico. BLD",
    },
    {
        day: 19,
        title: "ULAANBAATAR. 100 km",
        description: "Dopo colazione, partenza per Ulaanbaatar, arrivo e sistemazione in un hotel del centro. Pranzo in ristorante. Proseguimento con la visita al Palazzo Invernale dell’ultimo re mongolo, l’VIII Bodg Khaan Javzandamba Agvaanluvsan e shopping. Nel tardo pomeriggio, spettacolo folkloristico (ore 18-19), con musiche, danze e canti melodici, canto di gola Hoomii, contorsionismo e danza Tsam, simbolizzante le diverse divinità protettrici del buddismo lamaista. Alla sera cena dell&#39;arrivederci in un tipico ristorante cittadino. BLD",
    },
    {
        day: 20,
        title: "PARTENZA",
        description: "Al mattino presto, trasferimento all’aereoporto e partenza l’Italia.",
    },
];

const laQuotaComprende = [
    {
        id: 1,
        description: "Sistemazione: 2 notti in Hotel*** a Ulaanbaatar e 17 notti in Campi turistici nelle Gher durante il viaggio, sistemazione in camera doppia (singola a richiesta con supplemento) con bagni privati in hotel e con bagni condivisi nelle gher",
    },
    {
        id: 2,
        description: "19 prime colazioni, 19 pranzi, 19 cene",
    },
    {
        id: 3,
        description: "Guida locale parlante italiano per 19 giorni",
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
        description: "Supplemento sistemazione in singola Euro 300*",
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

export default function OverlandDellaMongoliaPage() {
    return (
        <div className="bg-white h-screen">
            <Header />

            <section className="w-full min-h-screen text-black px-[150px] pt-25 space-y-6 bg-white pb-6">
                <h1 className="text-center font-bold text-3xl">Taiga tour - avventura e sciamano</h1>

                <p>Regione: centrale, meridionale, settentrionale <br />
                    Durazione: 20 giorni</p>

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
                {itineraryData.map((item) => (
                    <div key={item.day}>
                        <h2 className="font-semibold">GIORNO {item.day}. {item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}

                {/* nemelt heseg */}
                <h1 className="text-center text-3xl font-bold">La quota comprende</h1>
                {laQuotaComprende.map((des) => (
                    <div key={des.id} className="flex gap-4">
                        <p>✓</p>
                        <p>{des.description}</p>
                    </div>
                ))}

                {/* nemelt heseg */}
                <h1 className="text-center text-3xl font-bold">La quota non comprende</h1>
                {laQuotaNonComprende.map((des) => (
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
