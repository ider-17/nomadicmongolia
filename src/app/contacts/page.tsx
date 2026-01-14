import ContactForm from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ContactPage() {
    return (
        <div className="bg-white h-screen">

            <Header />

            <section className="w-full h-screen space-y-4 pt-[90px] px-[150px]">
                <div className="text-black">
                    Building 49/2-16 ,
                    <br /> ikh toiruu gudamj, 5 khoroo, Chingeltei distrect, Ulaanbaatar, Mongolia <br />

                    {/* In italiano <br /> */}
                    What’s up +976 99020908 <br />
                    {/* viaggi@.nomadicmongolia.com <br /> */}
                    {/* In inglese <br /> */}
                    <br />
                    {/* +976 <br /> */}
                    {/* tour@nomadicmongolia.com */}
                </div>

                <div className="">
                    {/* husnegst 
                LastName
                Name
                Email
                Phone
                Message
                Submit */}

                    <ContactForm />
                </div>
            </section>

            <Footer />

        </div>
    )
};
