import { Clock3, Handshake, MapPinned, ShieldCheck, Star } from "lucide-react";

const Hexagon = () => {
  return (
    <div className="relative w-[300px] mx-auto h-[500px] [&>*]:bg-[#2fa147]">
      <div className="absolute top-[30px] left-[250px] w-[250px] h-[220px] hexagon mx-auto flex flex-col justify-center items-center [&>*]:text-white">
        <ShieldCheck size={50} />
        <p className="text-[#2c2b2b]">Siamo responsabili</p>
      </div>
      <div className="absolute top-[30px] right-[250px] w-[250px] h-[220px] hexagon mx-auto flex flex-col justify-center items-center ">
        <Star size={50} />
        <p>Siamo esperti</p>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 w-[250px] h-[220px] hexagon mx-auto flex flex-col justify-center items-center">
        <MapPinned size={50} />
        <p>Siamo locali</p>
      </div>
      <div className="absolute bottom-[30px] left-[250px] w-[250px] h-[220px] hexagon mx-auto flex flex-col justify-center items-center">
        <Handshake size={50} />
        <p>Siamo ospitali</p>
      </div>
      <div className="absolute bottom-[30px] right-[250px] w-[250px] h-[220px] hexagon mx-auto flex flex-col justify-center items-center">
        <Clock3 size={50} />
        <p className="text-center">
          Siamo sempre a <br /> disposizione
        </p>
      </div>
    </div>
  );
};

export default Hexagon;
