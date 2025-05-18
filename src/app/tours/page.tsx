import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ToursPage() {

    const TOURS = [
        {
            id: 1,
            title: "Taiga tour - avventura e sciamano",
            photo: "/_ZAK4316.webp",
            duration: 10,
            locations: "Ulaanbaatar",
            describtion: "",
            btnText: "Scopri di più"
        }
    ]
    return (
        <div className="bg-white h-screen">

            <Header />

            <section className="w-full min-h-screen pt-[90px] px-[150px]">
                {TOURS.map((tour) => {
                    return (
                        <div key={tour.id} className="w-full flex gap-5 text-black">
                            <img className="w-1/2 h-[500px] object-center object-cover rounded-2xl" src={tour.photo} />
                            <div className="w-1/2 pt-4">
                                <div className="flex gap-4">
                                    <div className="border-r border-gray-300 pr-2">
                                        <p className="text-center text-2xl font-bold">{tour.duration}</p>
                                        <p className="text-sm">GIORNI</p>
                                    </div>
                                    <h2 className="text-center text-2xl font-bold">{tour.title}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

            <Footer />

        </div>
    )
};