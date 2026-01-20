import ContactForm from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <section className="w-full min-h-screen space-y-4 pt-22.5 sm:px-37.5 px-[5%]">
        <div className="text-black">
          Building 49/2-16 ,
          <br /> ikh toiruu gudamj,
          <br /> 5 khoroo, Chingeltei distrect, Ulaanbaatar, Mongolia <br />
          {/* In italiano <br /> */}
          What’s up +976 99020908 <br />
          {/* viaggi@.nomadicmongolia.com <br /> */}
          {/* In inglese <br /> */}
          <br />
          {/* +976 <br /> */}
          {/* tour@nomadicmongolia.com */}
        </div>

        <div>
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
  );
}
