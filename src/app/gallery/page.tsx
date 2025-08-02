import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const imageGroups = [
    [
        ["/assets/bird-4.webp", "/assets/bird-2.JPG"],
        "/assets/_ZAK4316.webp",
        "/assets/_BAY1429.webp",
        "/assets/birds-3.webp",
        "/assets/_BAY5051.webp",
        ["/assets/bird-1.webp", "/assets/mongolianlove.webp"],
    ],
    [
        ["/assets/pexels-buyanjargal-buyannemekh-331484882-27566683.jpg", "/assets/SED_8320.webp"],
        "/assets/mountain.webp",
        "/assets/pexels-arthousestudio-4326007.jpg",
        "/assets/pexels-julia-volk-5110939.jpg",
        "/assets/pexels-julia-volk-5110958.webp",
        ["/assets/talbai.webp", "/assets/DSC_0124.webp"],
    ],
];

export default function GalleryPage() {
    return (
        <div className="bg-white min-h-screen">
            <Header />

            <section className="w-full min-h-screen text-black px-[150px] pt-25 space-y-6 bg-white pb-6">
                {imageGroups.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className="w-full h-180 grid grid-cols-2 grid-rows-3 gap-2 [&>*]:bg-cover [&>*]:bg-center [&>*]:rounded mb-2"
                    >
                        {group.map((item, index) => {
                            if (Array.isArray(item)) {
                                return (
                                    <div
                                        key={index}
                                        className="w-full flex gap-2 [&>*]:bg-black [&>*]:w-1/2 [&>*]:bg-cover [&>*]:bg-center [&>*]:rounded"
                                    >
                                        {item.map((img, i) => (
                                            <div
                                                key={i}
                                                className="h-59"
                                                style={{ backgroundImage: `url(${img})` }}
                                            ></div>
                                        ))}
                                    </div>
                                );
                            } else {
                                return (
                                    <div
                                        key={index}
                                        className="bg-black h-59"
                                        style={{ backgroundImage: `url(${item})` }}
                                    ></div>
                                );
                            }
                        })}
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
}
