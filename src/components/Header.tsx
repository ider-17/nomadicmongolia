import Link from "next/link"

export const Header = () => {
    return (
        <div className="w-full fixed top-0 flex justify-between items-center p-10">
            <div>
                <Link href="/">
                    <img className="w-[200px] cursor-pointer" src="./nomadic_khusug_white_text.webp" />
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
    )
}