import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ContactPage() {
    return (
        <div className="bg-white h-screen">

            <Header />

            <section className="w-full h-screen flex pt-[90px] px-[150px]">
                <div className="w-2/5 text-black">
                    Building 49/2-16 , ikh toiruu gudamj, 5 khoroo, Chingeltei distrect, Ulaanbaatar, Mongolia

                    In italiano
                    What’s up +976 99020908
                    viaggi@.nomadicmongolia.com

                    In inglese
                    +976
                    tour@nomadicmongolia.com
                </div>

                <div className="w-2/5"></div>
            </section>

            <Footer />

        </div>
    )
};
