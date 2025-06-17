import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const shortItinerary = [
    { day: 1, title: "ULAANBAATAR" },
    { day: 2, title: "BAGA GAZRIIN CHULUU" },
    { day: 3, title: "TSAGAAN SUVRAGA" },
    { day: 4, title: "VALLE YOL" },
    { day: 5, title: "KHONGORIIN ELS" },
    { day: 6, title: "BAYANZAG" },
    { day: 7, title: "ONGII KHIID" },
    { day: 8, title: "KHARKHORIN/KARAKORUM" },
    { day: 9, title: "PARCO NAZIONALE KHUSTAI" },
    { day: 10, title: "PARCO NAZIONALE TERELJ" },
    { day: 11, title: "ULAANBAATAR" },
    { day: 12, title: "PARTENZA" },
];

const images = [
    {
        id: 1,
        image: "/assets/_BAY1429.webp",
    }
];

const itineraryData = [
    { day: 1, title: "ULAANBAATAR: LA CAPITALE DELLA MONGOLIA MODERNA", description: "Arrivo a Ulaanbaatar e operazioni di frontiera, incontro con la guida e trasferimento in hotel. Visitiamo al Monastero Buddista di Gandantegchenling con la cerimonia delle preghiere del mattino. Pranzo in ristorante. Nel pomeriggio visitiamo panoramica della citta, con la Piazza Sukhbaatar e il Monumento Zaisan ai caduti in guerra. Cena e pernottamento. (LD)" },
    { day: 2, title: "BAGA GAZRIIN CHULUU. 240 km", description: "Partenza verso sud e il deserto del Gobi (Dundgobi). Arrivo a Baga Gazriin Chuluu, suggestiva formazione rocciosa dove hanno vissuto in passato due monaci molto venerati, perciò meta di pellegrinaggi da parte della gente del posto. Lungo la strada si possono avvistare branchi di gazzelle, gruppi di cammelli e rari accampamenti di nomadi. Pranzo in &quot;guanz&quot; lungo il percorso, presso una delle tipiche trattorie mongole. Cena e pernottamento in campo turistico. (BLD)" },
    { day: 3, title: "TSAGAAN SUVRAGA. 210 km", description: "Partenza verso Tsagaan Suvraga. Lungo il percorso il paesaggio è caratterizzato da una profonda fenditura del terreno da est verso ovest. Qui vi si ritrovano molti fossili di origine marina, in quanto la zona era un tempo sommersa dal mare. I colori delle rocce calcaree sono determinati da minerali di rame e di molibdeno.Pranzo in &quot;guanz&quot; lungo il percorso, presso una delle tipiche trattorie mongole. Cena e pernottamento in campo turistico. (BLD)" },
    { day: 4, title: "VALLE YOL. 200 km", description: "Proseguimento verso l’Omnogovi aimag. Arrivo e ingresso nell’area del parco nazionale dei monti Gurvan Saikhan (Tre bellezze). Escursione nella valle di Yoliin Am, la “valle delle aquile”, habitat di numerose specie selvatiche. Fino a stagione avanzata si può passeggiare nel canyon al fresco di un&#39;incredibile nevaio. Possibilità di fare l&#39;escursione a cavallo. Cena e pernottamento in campo turistico. (BLD)" },
    { day: 5, title: "KHONGORIIN ELS. 210 km.", description: "Dopo colazione, partenza verso le Khongoriin Els. Pranzo al sacco (lunch box). In un territorio misto di deserto e steppa si raggiungono le grandi dune di sabbia di Khongoriin Els, note come “duut mankhan”, le dune che cantano. Salendo con molta fatica sulla cresta delle dune si può godere una magnifica vista del deserto e... divertirsi a scivolare giù ! Le dune raggiungono i 300 metri di altezza e si perdono per 180 km. oltre l’orizzonte. Incontro con una famiglia nomade e possibilità di fare una escursione a dorso di cammello. Cena e pernottamento in campo turistico. (BLD)" },
    { day: 6, title: "BAYANZAG. 150 km", description: "Attraverso immense distese, proseguimento verso l’antica valle di Bayanzag. L’area è famosa per gli importanti ritrovamenti paleontologici. Escursione alle “rupi fiammeggianti” (così dette per il loro colore al tramonto), dove nel secolo scorso l’avventuriero americano Roy Chapman Andrews ritrovò i primi scheletri e uova fossili di dinosauro. Pranzo in &quot;guanz&quot; lungo il percorso, presso una delle tipiche trattorie mongole. Cena e pernottamento in campo turistico. (BLD)" },
    { day: 7, title: "ONGII KHIID. 130 km", description: "Partenza verso nord, fino al monastero distrutto di Ongiin Khiid e la catena montuosa del Gobi- Altai. Arrivo e visita delle rovine del Monastero. Dall&#39;alto del pendio dove è stato ricostruito un nuovo monastero, si osserva la vastità dell&#39;insediamento monastico dato alle fiamme in epoca comunista. Cena e pernottamento in campo turistico. (BLD)" },
    { day: 8, title: "KHARKHORIN/KARAKORUM. 240 km", description: "Partenza verso Karakorum, l’antica capitale imperiale fondata da Gengis Khan, poi distrutta dagli invasori Ming. visita al grande monastero buddista di Erdene-Zuu, circondato da un centinaio di stupa. Il monastero fu costruito alla fine del XVI° secolo sui ruderi di Karakorum e un nuovissimo Museo degli scavi, dove si possono ammirare i reperti archeologici portati alla luce dalla missione tedesca. Cena e pernottamento in campo turistico. (BLD)" },
    { day: 9, title: "PARCO NAZIONALE KHUSTAI. 260 km", description: "Dopo colazione partenza verso il Parco nazionale del Khustai nuruu, riserva protetta dell’unico cavallo selvaggio ancora esistente al mondo: il Takhi della Mongolia, più noto come cavallo di Przewalski. Takhi in mongolo significa “spirito” e la straordinaria antichità di questa razza originaria è testimoniata dagli affreschi paleolitici delle grotte di Lascaux, in Francia. Arrivo al Parco ed escursione guidata, per osservare i cavalli selvaggi all&#39;ora dell&#39;abbeverata. Cena e pernottamento in campo turistico. (BLD)" },
    { day: 10, title: "PARCO NAZIONALE TERELJ. 165 km", description: "Prima colazione e partenza per partenza per il Parco Nazionale di Terelj. È un bellissimo parco, dove vediamo incredibili formazioni rocciose e paesaggi. Puoi fare escursioni o cavalcare. Sistemazione in campo. Nel pomeriggio visita al monestero di Ariyabal e roccia di Melkhii khad. Rientro e cena al campo. (BLD)" },
    { day: 11, title: "ULAANBAATAR. 65 km", description: "Prima colazione e rientro Ulaanbaatar. Prima di riemtrare nella città visita una statua gigante di Gengis Khaan. Sistemazione in hotel. Pranzo in ristorante. Nel tardo pomeriggio, spettacolo folkloristico Tumen Enkh (ore 18-19), con musiche, danze e canti melodici, canto di gola Hoomii, contorsionismo e danza Tsam, simbolizzante le diverse divinità protettrici del buddismo lamaista. Cena in ristorante e pernottamento. (BLD)" },
    { day: 12, title: "PARTENZA", description: "Al mattino presto, trasferimento all’aereoporto e partenza per l’Italia." },
];

export default function OverlandDellaMongoliaPage() {
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
