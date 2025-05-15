import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AboutPage() {

    const termsData = [
        {
            title: "YOUR HOLIDAY CONTRACT",
            content: "When you book a tour or other travel arrangements our contract with you takes effect when we send you a written Booking Confirmation / Invoice by email.Once the contract is made we are responsible for providing you with the tour you have booked and you are responsible to pay us for it, in each case subject to terms and conditions."
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
            content: "If you wish to cancel the trip after the booking has been confirmed, you must do so in writing by email and the following charges will apply. 1. Cancellation within 30-60 days before the tour starts: 30 % of the total tour price. 2. Cancellation within 29-10 days before the tour starts: 50 % of the total tour price. 3. Cancellation within 9 days or no show before the tour starts: 100 % of the total tour price."
        },
    ];

    return (
        <div className="bg-white h-screen text-black">

            <Header />

            <section className="bg-white w-full flex px-[150px] pt-[90px] mb-2">
                <div className="w-full lg:w-[20%] bg-gray-100 rounded-2xl p-6">
                    <ul className="space-y-2 text-gray-800 font-medium">
                        <li>📌 Introduction</li>
                        <li>📜 Terms and Conditions</li>
                        <li>💳 Payments</li>
                        <li>📅 Cancellations</li>
                    </ul>
                </div>

                <div className="w-full flex flex-col gap-5 p-6">

                    {termsData.map((item, index) => (
                        <div key={index}>
                            <h2 className="text-2xl font-semibold">{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                    ))}

                </div>
            </section >

            <Footer />

        </div >
    )
};