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
            content: "When you book a tour or other travel arrangements our contract with you takes effect..."
        },
        {
            title: "PLEASE NOTE",
            content: "It is important to check carefully the Booking Confirmation and the Itinerary of your tour..."
        },
        {
            title: "PRICES",
            content: "Once the booking is confirmed, the price of your tour is guaranteed..."
        },
        {
            title: "PAYMENTS",
            content: "30% deposit payment is payable at the time of the booking..."
        },
        {
            title: "SPECIAL REQUESTS",
            content: "If you have any special request that does not form part of the tour..."
        },
        {
            title: "CHANGES",
            content: "If you wish to change any of the details of your booking..."
        },
        {
            title: "CANCELLATIONS",
            content: "If you wish to cancel the trip after the booking has been confirmed..."
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
                            className={`border py-1 px-2 rounded-2xl cursor-pointer ${selectedTab === "about" ? "bg-black text-white" : ""}`}
                        >
                            Chi siamo
                        </li>
                        <li
                            onClick={() => setSelectedTab("terms")}
                            className={`border py-1 px-2 rounded-2xl cursor-pointer ${selectedTab === "terms" ? "bg-black text-white" : ""}`}
                        >
                            Terms and Conditions
                        </li>
                    </ul>
                </div>

                <div className="w-full flex flex-col gap-5 p-6">
                    {selectedTab === "about" && (
                        <section>
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