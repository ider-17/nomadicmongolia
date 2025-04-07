import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full bg-white h-screen">

      <Header />

      <div className="relative">
        <img className="w-full h-screen object-center object-cover" src="/Gobi-Desert-Mongolia-scaled.jpg" />
        <div className="absolute top-1/2 -translate-y-1/2 w-[80%]">
          <h1 className="text-white font-bold text-5xl">Your world of joy</h1>
        </div>
      </div>

      {/* <div className="relative">
        <img className="h-[90vh] w-full" src="./Gobi-Desert-Mongolia-scaled.jpg" />
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">Life Is Adventure Make The Best Of It</h1>
          <div className="flex gap-8 bg-white rounded-full text-black px-6 py-4 items-center w-fit">
            <div className="flex gap-2 items-center">
              <div className="bg-gray-100 rounded-full w-10 h-10"></div>
              <div>
                <p>Where</p>
                <p className="text-gray-500">Search destinations</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <div className="bg-gray-100 rounded-full w-10 h-10"></div>
                <div>
                  <p>When</p>
                  <p className="text-gray-500">Ferbruery 05 ~ March 14</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <div className="bg-gray-100 rounded-full w-10 h-10"></div>
                <div>
                  <p>Tour type</p>
                  <p className="text-gray-500">All tour</p>
                </div>
              </div>
            </div>
            <div className="w-14 h-14 rounded-full bg-orange-500"></div>
          </div>
        </div>
      </div> */}

      {/* <div className="w-full py-10 px-20 bg-[#3f393b]">
        <h1 className="font-bold text-3xl mb-8">Popular things to do</h1>
        <div className="flex gap-8">
          <div className="w-[400px] h-[500px] bg-gray-200 rounded-lg"></div>
          <div>
            <div className="bg-gray-200 w-[250px] h-[234px] mb-8 rounded-lg"></div>
            <div className="bg-gray-200 w-[250px] h-[234px] rounded-lg"></div>
          </div>
          <div>
            <div className="bg-gray-200 w-[500px] h-[234px] rounded-lg mb-8"></div>
            <div className="flex gap-8">
              <div className="bg-gray-200 rounded-lg w-[60%] h-[234px]"></div>
              <div className="bg-gray-200 rounded-lg w-full h-[234px]"></div>
            </div>
          </div>
        </div>
      </div> */}

       {/* <div className="w-full py-10 px-20 bg-[#3f393b]">
        <h1 className="font-bold text-3xl mb-8">Popular things to do</h1>
        <div className="flex gap-8">
          <div className="w-[400px] h-[500px] bg-gray-200 rounded-lg"></div>
          <div>
            <div className="bg-gray-200 w-[250px] h-[234px] mb-8 rounded-lg"></div>
            <div className="bg-gray-200 w-[250px] h-[234px] rounded-lg"></div>
          </div>
          <div>
            <div className="bg-gray-200 w-[500px] h-[234px] rounded-lg mb-8"></div>
            <div className="flex gap-8">
              <div className="bg-gray-200 rounded-lg w-[60%] h-[234px]"></div>
              <div className="bg-gray-200 rounded-lg w-full h-[234px]"></div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
} 
