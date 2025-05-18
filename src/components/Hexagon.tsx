const Hexagon = () => {
    return (
        <div className="relative w-full h-[500px]">
            <div className="absolute top-[30px] left-[250px] w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto flex justify-center items-center">
                <p>Siamo responsabili</p>
            </div>
            <div className="absolute top-[30px] right-[250px] w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto flex justify-center items-center">
                <p>Siamo esperti</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-1/2 w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto flex justify-center items-center">
                <p>Siamo locali</p>
            </div>
            <div className="absolute bottom-[30px] left-[250px] w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto flex justify-center items-center">
                <p>Siamo ospitali</p>
            </div>
            <div className="absolute bottom-[30px] right-[250px] w-[250px] h-[220px] hexagon bg-[#e4e8f0] mx-auto flex justify-center items-center">
                <p>Siamo sempre a disposizione</p>
            </div>
        </div>
    );
};

export default Hexagon;
