import { Clock3, Handshake, MapPinned, ShieldCheck, Star } from "lucide-react";

const Hexagon = () => {
  return (
    <div className="relative sm:w-75 w-full mx-auto sm:h-125 h-80 *:bg-[#2fa147]">
      <div className="absolute sm:top-7.5 top-[15%] sm:left-62.5 left-[65%] sm:w-62.5 sm:h-55 w-[40%] h-[35%] hexagon mx-auto flex flex-col justify-center items-center *:text-white">
        <ShieldCheck size={50} className="sm:w-12.5 sm:h-12.5 w-8 h-8" />
        <p className="text-[#2c2b2b] text-center">Siamo responsabili</p>
      </div>
      <div className="absolute sm:top-7.5 top-[15%] sm:right-62.5 right-[65%] sm:w-62.5 sm:h-55 w-[40%] h-[35%] hexagon mx-auto flex flex-col justify-center items-center *:text-white">
        <Star size={50} className="sm:w-12.5 sm:h-12.5 w-8 h-8" />
        <p>Siamo esperti</p>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 sm:w-62.5 sm:h-55 w-[40%] h-[35%] hexagon mx-auto flex flex-col justify-center items-center *:text-white">
        <MapPinned size={50} className="sm:w-12.5 sm:h-12.5 w-8 h-8" />
        <p>Siamo locali</p>
      </div>
      <div className="absolute sm:bottom-7.5 bottom-[15%] sm:left-62.5 left-[65%] sm:w-62.5 sm:h-55 w-[40%] h-[35%] hexagon mx-auto flex flex-col justify-center items-center *:text-white">
        <Handshake size={50} className="sm:w-12.5 sm:h-12.5 w-8 h-8" />
        <p>Siamo ospitali</p>
      </div>
      <div className="absolute sm:bottom-7.5 bottom-[15%] sm:right-62.5 right-[65%] sm:w-62.5 sm:h-55 w-[40%] h-[35%] hexagon mx-auto flex flex-col justify-center items-center *:text-white">
        <Clock3 size={50} className="sm:w-12.5 sm:h-12.5 w-8 h-8" />
        <p className="text-center">
          Siamo sempre a <br /> disposizione
        </p>
      </div>
    </div>
  );
};

export default Hexagon;
