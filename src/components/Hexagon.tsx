import { Check, Clock3, Handshake, MapPinned, ShieldCheck, Star } from "lucide-react";

const Hexagon = () => {
    return (
        <div className="relative w-full h-[500px]">
            <div className="absolute top-[30px] left-[250px] w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto flex flex-col justify-center items-center">
                <ShieldCheck size={50} color="#2c2b2b" />
                <p className="text-[#2c2b2b]">Siamo responsabili</p>
            </div>
            <div className="absolute top-[30px] right-[250px] w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto flex flex-col justify-center items-center">
                <Star size={50} />
                <p>Siamo esperti</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-1/2 w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto flex flex-col justify-center items-center">
                <MapPinned size={50} />
                <p>Siamo locali</p>
            </div>
            <div className="absolute bottom-[30px] left-[250px] w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto flex flex-col justify-center items-center">
                <Handshake size={50} />
                <p>Siamo ospitali</p>
            </div>
            <div className="absolute bottom-[30px] right-[250px] w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto flex flex-col justify-center items-center">
                <Clock3 size={50} />
                <p className="text-center">Siamo sempre a <br /> disposizione</p>
            </div>
        </div>
    );
};

export default Hexagon;
