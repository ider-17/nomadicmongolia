import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <img className="w-full h-screen relative opacity-80" src="./_ZAK4316.jpg" />
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
          <li>ABOUT US</li>
          {/* </Link> */}
          <li>TERMS N CONDITIONS</li>
          <li>TOURS</li>
          <li>GALLERY</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  )
}