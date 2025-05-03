import Link from "next/link"

export const Header = () => {
    return (
        <div className="w-full fixed top-0 flex justify-between items-center py-2 px-[150px] bg-white">
            <div>
                <Link href="/">
                    <img className="w-[200px] h-[60px] object-cover object-center cursor-pointer" src="./Nomadic khusug 7-2.jpg" />
                </Link>
            </div>
            <ul className="flex gap-4 [&>*]:text-black [&>*]:hover:underline [&>*]:hover:underline-offset-8 [&>*]:font-semibold [&>*]:cursor-pointer">
                <Link href="/">
                    <li>HOME</li>
                </Link>
                {/* <Link href="/about"> */}
                <li>CHI SIAMO</li> {/* WHO WE ARE */}
                {/* </Link> */}
                <li>TERMINE E CONDIZIONE</li> {/* TERMS N CONDITIONS */}
                <Link href="/tours">
                    <li>VIAGGI</li>
                </Link> {/* TOURS */}
                <li>CONTATTI</li> {/* CONTACT US */}
                <li>PRENOTA</li> {/* BOOKING */}
            </ul>
        </div>
    )
}