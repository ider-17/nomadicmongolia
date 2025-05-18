const Hexagon = () => {
    return (
        <div className="relative w-full h-[700px]">
            <div className="absolute top-[130px] left-[250px] w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto"></div>
            <div className="absolute top-[130px] right-[250px] w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto"></div>
            <div className="absolute top-1/2 left-1/2 -translate-1/2 w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto"></div>
            <div className="absolute bottom-[130px] left-[250px] w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto"></div>
            <div className="absolute bottom-[130px] right-[250px] w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto"></div>
        </div>
    );
};

export default Hexagon;
