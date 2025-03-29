import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-white h-screen">

      <Header />

      <img src="./Gobi-Desert-Mongolia-scaled.jpg" />

      <h1 className="mx-auto font-bold">Life Is Adventure Make The Best Of It</h1>
    </div>
  );
}
