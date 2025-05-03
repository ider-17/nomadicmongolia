import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-white">

      <section className="bg-white w-full h-screen flex justify-center px-[150px]">

        <Header />

        <div className="w-full h-2/3 bg-cover bg-center transition-all duration-1000 ease-in-out rounded-2xl mt-[100px]" style={{ backgroundImage: `url("./_ZAK4316 copy.webp")` }}>

        </div>

      </section >

      <section className="w-full h-fit text-black px-[150px] mb-6">
        <h1 className="text-2xl font-bold text-center mb-6">Grazie per aver visitato il nostro sito!</h1>

        <p className="text-center">Siamo un tour operatore locale con staff nazionali, fondata dai staff mongoli con più di 10 anni
          di esperienza nel settore turistico. Proponiamo viaggi di tutti tipi dal costa meno al viaggio di
          lusso, dal viaggio privato a quello di gruppo in Mongolia. Offriamo consulenza gratuita
          sull’organizzazione del viaggio e personalizzazione degli itinerari, il nostro esperto e qualificato
          team è in grado di supportare tutte le vostre necessità prima e dopo la partenza.
          <Link href="/about">
            <button className="ml-3 border border-black py-1 px-2 rounded-2xl hover:bg-black hover:text-white cursor-pointer">See more</button>
          </Link>
        </p>

      </section>

      <Footer />

    </div >
  )
};