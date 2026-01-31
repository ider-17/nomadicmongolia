import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import BuyTravel from "@/components/BuyTravel";
import { getTaigaTour } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function TaigaTourPage() {
  const tour = await getTaigaTour();

  if (!tour) return <p>Loading...</p>;

  return (
    <div className="bg-white">
      <Header />

      <section className="w-full min-h-screen text-black px-[5%] pt-25 space-y-6 pb-6">
        <h1 className="text-center font-bold text-3xl">{tour.title}</h1>

        {/* <div>
          <p className="font-semibold">Regione: {tour.region}</p>
          <p>Durata: {tour.duration}</p>
        </div> */}

        {/* Breve itinerario */}
        <div>
          <h2 className="font-semibold text-xl mb-2">Breve itinerario</h2>
          {tour.shortItinerary.map((item: any) => (
            <div key={item.day} className="flex gap-1">
              <h3 className="font-semibold">Giorno {item.day}.</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Images */}
        {tour.images.map((img: any, index: number) => (
          <img
            key={index}
            src={urlFor(img).url()}
            alt={tour.title}
            className="rounded-xl"
            loading="lazy"
          />
        ))}

        {/* Itinerario dettagliato */}
        <h1 className="text-center text-3xl font-bold">
          Itinerario dettagliato
        </h1>
        {tour.itineraryData.map((item: any) => (
          <div key={item.day}>
            <h2 className="font-semibold">
              GIORNO {item.day}. {item.title}
            </h2>
            <p>{item.description}</p>
          </div>
        ))}

        <BuyTravel />
      </section>

      <Footer />
    </div>
  );
}

// const shortItinerary = [
//   { day: 1, title: "ULAANBAATAR" },
//   { day: 2, title: "KHOVSGOL/MURUN" },
//   { day: 3, title: "TSAGAAN NUUR VILAGGIO" },
//   { day: 4, title: "TAIGA E GLI UOMINI RENNA" },
//   { day: 5, title: "GLI UOMINI RENNA" },
//   { day: 6, title: "TSAGAAN NUUR" },
//   { day: 7, title: "MURUN" },
//   { day: 8, title: "UB/PARCO NAZIONALE DI TERELJ" },
//   { day: 9, title: "ULAANBAATAR" },
//   { day: 10, title: "PARTENZA" },
// ];

// const images = [
//   {
//     id: 1,
//     image: "/assets/_ZAK4316.webp",
//   },
// ];

// const itineraryData = [
//   {
//     day: 1,
//     title: "ULAANBAATAR",
//     description:
//       "Arrivo a Ulaanbaatar e incontro con la guida e trasferimento in hotel. La guida propone city tour che dipende dall’orario dell’arrivo. Pranzo in ristorante. Nel pomeriggio visitiamo al centro sciamanico della città. Cena in ristorante e pernottamento in hotel. (LD)",
//   },
//   {
//     day: 2,
//     title: "KHOVSGOL/MURUN. 30 km.",
//     description:
//       "Prima colazione in hotel e volo per Murun, il capoluogo della provincia di Khuvsgul... Pernottamento in una gher.",
//   },
//   {
//     day: 3,
//     title: "TSAGAAN NUUR. 300km",
//     description:
//       "Dopo colazione partiamo verso Tsagaan Nuur, villaggio del Lago Tsagaan... Prenottamento in tenda.",
//   },
//   {
//     day: 4,
//     title: "TAIGA E GLI UOMINI RENNA",
//     description:
//       "Dopo colazione partiamo verso al campeggio estivo degli uonimi renna... Prenottamento in tenda.",
//   },
//   {
//     day: 5,
//     title: "GLI UOMINI RENNA",
//     description:
//       "Dopo colazione abbiamo tempo libero per avere energia della natura... rituale sciamanico.",
//   },
//   {
//     day: 6,
//     title: "TSAGAAN NUUR.",
//     description:
//       "Dopo colazione prepariamo le nostre valigie e ci salutiamo le famiglie degli uomini renna... Dormiamo nella tenda.",
//   },
//   {
//     day: 7,
//     title: "MURUN. 300km",
//     description:
//       "Dopo colazione partiamo in dietro e arriviamo al nostro campo. Riposiamo un po’. Pernottamento in campo turistico.",
//   },
//   {
//     day: 8,
//     title: "ULAANBAATAR E PARCO NAZIONALE DI TERELJ. 65km",
//     description:
//       "Dopo colazione, prendiamo un volo per Ulaanbaatar... bellissimo parco Terelj. Escursioni, meditazione.",
//   },
//   {
//     day: 9,
//     title: "ULAANBAATAR. 65 km",
//     description:
//       "Prima colazione e rientro a Ulaanbaatar. Spettacolo folkloristico Tumen Enkh... Pernottamento.",
//   },
//   {
//     day: 10,
//     title: "PARTENZA",
//     description:
//       "Prima colazione e trasferimento in aeroporto per il volo di rientro in Italia.",
//   },
// ];
