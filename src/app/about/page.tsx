"use client";

import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Hexagon from "@/components/Hexagon";

export default function AboutPage() {
    const [selectedTab, setSelectedTab] = useState("about");

    const termsData = [
        {
            title: "YOUR HOLIDAY CONTRACT",
            content: "When you book a tour or other travel arrangements our contract with you takes effect when we send you a written Booking Confirmation / Invoice by email.Once the contract is made we are responsible for providing you with the tour you have booked and you are responsible to pay us for it, in each case subject to terms and conditions."
        },
        {
            title: "PLEASE NOTE",
            content: "It is important to check carefully the Booking Confirmation and the Itinerary of your tour when you receive it that all the details are exactly as you requested. Our responsibility is to provide you with the services you have booked as described in the itinerary and as confirmed to you. If your group consists of two or more people traveling together, the person who makes the tour booking by signing our booking form or otherwise contracting with us accepts the responsibility for making all payments to us for all members of the party. We will send all the documents and other relevant information to the lead guest, and the lead guest is responsible for ensuring that the other members of the party are kept fully informed. If you are aged under 18 /on the departure date/ and your parents or guardians are not traveling with you, we must have their written consent to proceed with the booking."
        },
        {
            title: "PRICES",
            content: "Once the booking is confirmed, the price of your tour is guaranteed and will not be subject to any changes or surcharges unless you request to add extra services at a later date."
        },
        {
            title: "PAYMENTS",
            content: "30% deposit payment is payable at the time of the booking, and the balance is payable 30 days prior to departure. The balance of 70% is payable 30 days prior to tour start date. If you book last minute, i.e. within 30 days from the tour start date, full payment is required at the time of the booking. Payments can be made by credit card in USD online using our website, or by bank wire transfer in USD or EUR. Bank details will be send to you with the invoice."
        },
        {
            title: "SPECIAL REQUESTS",
            content: "If you have any special request that does not form part of the tour as described in the itinerary /for example, dietary requirements or room location/ please let us know.We will always aim to meet any special requests, but cannot guarantee to do so.In no circumstances will such requests be accepted by us to form part of our contractual obligations and we will not have any liability if they are not met."
        },
        {
            title: "CHANGES",
            content: "If you wish to change any of the details of your booking after we have sent you the Booking Confirmation, you must let us know the required changes by email.Changes such as travel dates or adding extra services may incur charges and we will inform you if it’s the case and of the charge amount.All changes are subject to availability and cannot be guaranteed, for example, upgrading your accommodation or staying alone in a ger in a tourist camp would normally cost extra and may not be available in the high season."
        },
        {
            title: "CANCELLATIONS",
            content: "If you wish to cancel the trip after the booking has been confirmed, you must do so in writing by email and the following charges will apply.",
            content2: " 1. Cancellation within 30-60 days before the tour starts: 30 % of the total tour price.",
            content3: "2. Cancellation within 29-10 days before the tour starts: 50 % of the total tour price.",
            content4: "3. Cancellation within 9 days or no show before the tour starts: 100 % of the total tour price."
        },
    ];

    return (
        <div className="bg-white text-black min-h-screen">

            <Header />

            <section className="bg-white w-full px-[150px] pt-[90px] mb-2">
                <div className="w-full rounded-2xl p-6">
                    <ul className="text-gray-800 font-medium flex gap-5 items-center">
                        <li
                            onClick={() => setSelectedTab("about")}
                            className={`font-semibold cursor-pointer text-black ${selectedTab === "about" ? "border-b-2 pb-1" : ""}`}
                        >
                            CHI SIAMO
                        </li>
                        <li
                            onClick={() => setSelectedTab("terms")}
                            className={`font-semibold cursor-pointer text-black ${selectedTab === "terms" ? "border-b-2 pb-1" : ""}`}
                        >
                            TERMS AND CONDITIONS
                        </li>
                    </ul>
                </div>

                <div className="w-full flex flex-col gap-5 p-6">
                    {selectedTab === "about" && (
                        <section className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-center text-2xl font-bold mb-3">I nostri vantaggi</h2>
                                    <div className="flex justify-center px-10">
                                        <p className="w-1/2">
                                            • Rispettiamo abitudine e cultura della popolazione locale <br />
                                            • acquistiamo e supportiamo i prodotti di provenienza locale <br />
                                            • Sosteniamo le industrie lattiero-casearie <br />
                                            • Supportiamo le partner locale <br />
                                            • Diciamo NO plastic <br />
                                            • Ci prendiamo cura dei luoghi del patrimonio <br />
                                            • VERDI <br />
                                            • Diffondiamo la consapevolezza del turismo sostenibile
                                        </p>
                                        <p className="w-1/2">• Sosteniamo i bar e i ristoranti locali <br />
                                            • Compriamo souvenir dai negozi e dalla gente locali <br />
                                            • Sosteniamo la lotta al commercio illegale <br />
                                            • Camminiamo dove possibile <br />
                                            • Promuoviamo il turismo sostenibile con i nostri circoli interni ed esterni <br />
                                            • Viaggiamo più alla natura <br />
                                            • Sosteniamo il principio LEAVE NO TRACE <br />
                                            • Condividiamo le nostre esperienze di turismo sostenibile
                                        </p>
                                    </div>
                                    <p className="text-center mt-4">Facciamo turismo sostenibile nella “New Normal”</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <h2 className="text-center text-2xl font-bold">Our benefits</h2>
                                    <p>
                                        We respect the practices of local people <br />
                                        We employ local people and buy locally-sourced products <br />
                                        We support dairy industries <br />
                                        We advance fair employment practices <br />
                                        We avoid the plane <br />
                                        We say NO to the plastic <br />
                                        We take care of heritage places <br />
                                        We go GREEN <br />
                                        We support LEAVE NO TRACE principle <br />
                                        We spread awareness of sustainable tourism <br />
                                        We support local restaurants and dining places <br />
                                        We buy souvenirs from local stores <br />
                                        We support the fight against illegal trade <br />
                                        We walk wherever possible <br />
                                        We promote sustainable tourism with our inner and outer circles <br />
                                        We travel more locally <br />
                                        We share our sustainable tourism experiences <br />
                                        <br />
                                        We make sustainable tourism in the “new normal”
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-3xl font-semibold text-center">Grazie per aver visitato il nostro sito!</h2>
                                <p className="text-center">
                                    Siamo un tour operatore locale con staff nazionali, fondata dai staff mongoli con più di 10 anni
                                    di esperienza nel settore turistico.Proponiamo viaggi di tutti tipi dal costa meno al viaggio di
                                    lusso, dal viaggio privato a quello di gruppo in Mongolia.Offriamo consulenza gratuita
                                    sull’organizzazione del viaggio e personalizzazione degli itinerari, il nostro esperto e qualificato
                                    team è in grado di supportare tutte le vostre necessità prima e dopo la partenza.
                                </p>
                                <div className="w-full flex gap-6">
                                    <div className="w-1/2 space-y-1">
                                        {/* <img className="mx-auto rounded-2xl w-[300px] h-[350px]" src="" /> */}
                                        <div className="w-[300px] h-[350px] bg-blue-200 mx-auto rounded-2xl"></div>
                                        <p className="font-semibold text-center text-lg">Burenchimeg Sergelen</p>
                                        <p className="text-center w-[400px] mx-auto">cofondatrice, con la esperienza più di 10 anni nel campo del settore del
                                            turistico e parla in italiano e <br /> inglese.</p>
                                    </div>
                                    <div className="w-1/2 space-y-1">
                                        {/* <img className="mx-auto rounded-2xl w-[300px] h-[350px]" src="" /> */}
                                        <div className="w-[300px] h-[350px] bg-blue-200 mx-auto rounded-2xl"></div>
                                        <p className="font-semibold text-center text-lg">Yesulen Bolbaatar</p>
                                        <p className="text-center w-[400px] mx-auto">sales manager, con la esperienza più di 10 anni nel campo del settore del
                                            turistico e parla in italiano e inglese.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <div className="flex gap-2 justify-center [&>*]:text-3xl [&>*]:font-bold">
                                    <h2>Perchè Scegliere </h2>
                                    <p className="text-[#327236]">Noi ?</p>
                                </div>

                                <Hexagon />

                            </div>
                        </section>
                    )}

                    {selectedTab === "terms" && termsData.map((item, index) => (
                        <div key={index}>
                            <h2 className="text-2xl font-semibold">{item.title}</h2>
                            <p>{item.content}</p>
                            {item.content2 && <p>{item.content2}</p>}
                            {item.content3 && <p>{item.content3}</p>}
                            {item.content4 && <p>{item.content4}</p>}
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}


// Chi siamo-giin text

// Grazie per aver visitato il nostro sito!
// Siamo un tour operatore locale con staff nazionali, fondata dai staff mongoli con più di 10 anni
// di esperienza nel settore turistico.Proponiamo viaggi di tutti tipi dal costa meno al viaggio di
// lusso, dal viaggio privato a quello di gruppo in Mongolia.Offriamo consulenza gratuita
// sull’organizzazione del viaggio e personalizzazione degli itinerari, il nostro esperto e qualificato
// team è in grado di supportare tutte le vostre necessità prima e dopo la partenza.

// Burenchimeg Sergelen, cofondatrice, con la esperienza più di 10 anni nel campo del settore del
// turistico e parla in italiano e inglese.Зураг оруулах
// Yesulen Bolbaatar, sales manager, con la esperienza più di 10 anni nel campo del settore del
// turistico e parla in italiano e inglese.Зураг оруулах

// Perchè scegliere noi ?
//     Siamo responsabili
// Siamo esperti
// Siamo locali
// Siamo ospitali
// Siamo sempre a disposizione

// Se cerchi la vera Mongolia, la vita dei nomadi, la bellezza di natura, il selenzio di rilasso, la vita
// alla natura te lo proponiamo, se sogni un viaggio nella nostra terra meravigliosa, ti aspettiamo!

//  Viaggi private e viaggi di gruppo con la guida in italiano o inglese tutto il viaggio
// Lavoriamo nel campo del turismo da più di 10 anni con turisti italiani.
// Proponiamo viaggi private e di Gruppo in Mongolia.
// Offriamo consulenza gratuita sull’organizzazione del viaggio e personalizzazione degli itinerari


// I nostri vantaggi:
//                                      Rispettiamo abitudine e cultura della popolazione locale
//                                      acquistiamo e supportiamo i prodotti di provenienza locale
//                                      Sosteniamo le industrie lattiero-casearie
//                                      Supportiamo le partner locale
//                                      Diciamo NO plastic
//                                      Ci prendiamo cura dei luoghi del patrimonio
//                                      VERDI
//                                      Sosteniamo il principio LEAVE NO TRACE
//                                      Diffondiamo la consapevolezza del turismo sostenibile
//                                      Sosteniamo i bar e i ristoranti locali
//                                      Compriamo souvenir dai negozi e dalla gente locali
//                                      Sosteniamo la lotta al commercio illegale
//                                      Camminiamo dove possibile
//                                      Promuoviamo il turismo sostenibile con i nostri circoli interni ed esterni
//                                      Viaggiamo più alla natura
//                                      Condividiamo le nostre esperienze di turismo sostenibile
//                                     Facciamo turismo sostenibile nella “New Normal”
//                                     Our benefits:
//                                     We respect the practices of local people
//                                     We employ local people and buy locally-sourced products
//                                     We support dairy industries
//                                     We advance fair employment practices
//                                     We avoid the plane
//                                     We say NO to the plastic
//                                     We take care of heritage places
//                                     We go GREEN
//                                     We support LEAVE NO TRACE principle
//                                     We spread awareness of sustainable tourism
//                                     We support local restaurants and dining places
//                                     We buy souvenirs from local stores
//                                     We support the fight against illegal trade
//                                     We walk wherever possible
//                                     We promote sustainable tourism with our inner and outer circles
//                                     We travel more locally
//                                     We share our sustainable tourism experiences

//                                     We make sustainable tourism in the “new normal”