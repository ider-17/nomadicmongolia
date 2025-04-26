import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <img className="w-full h-screen object-cover object-center relative opacity-80" src="./_ZAK4316.jpg" />
      <div className="w-full fixed top-0 flex justify-between items-center p-10">
        <div>
          <Link href="/">
            <img className="w-[200px] cursor-pointer" src="./nomadic_khusug_white_text.png" />
          </Link>
        </div>
        <ul className="flex gap-10 [&>*]:text-white [&>*]:hover:underline [&>*]:hover:underline-offset-8 [&>*]:hover:decoration-gray-200 [&>*]:font-semibold [&>*]:cursor-pointer">
          <Link href="/">
            <li>HOME</li>
          </Link>
          {/* <Link href="/about"> */}
          <li>CHI SIAMO</li> {/* WHO WE ARE */}
          {/* </Link> */}
          <li>TERMINE E CONDIZIONE</li> {/* TERMS N CONDITIONS */}
          <li>VIAGGI</li> {/* TOURS */}
          <li>CONTATTI</li> {/* CONTACT US */}
          <li>PRENOTA</li> {/* BOOKING */}
        </ul>
      </div>
    </div>
  )
}