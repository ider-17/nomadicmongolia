import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="flex py-[80px] px-[150px] bg-black text-white">
            <div className="w-1/3">
                <img className="w-[100px]" src="./nomadic-logo.webp" />
            </div>
            <div className="w-1/3 flex flex-col">
                <p>Home</p>
                <p>About Us</p>
                <p>Tours</p>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
                <h6 className="font-semibold pl-2 mb-4">Contact us</h6>

                <div className="flex gap-2">
                    <p>Mobile:</p>
                    <span>+976 99020908, +976 89810908</span>
                </div>

                <div className="flex gap-2">
                    <p>Email1:</p>
                    <span>info@tournomadic.com</span>
                </div>

                <div className="flex gap-2">
                    <p>Email2:</p>
                    <span>nomadickhusug@gmail.com</span>
                </div>

                <div className="flex gap-4">
                    <Link href="https://www.facebook.com/nomadickhusug/">
                        <Facebook />
                    </Link>

                    <Link href="https://www.instagram.com/nomadic_khusug/?locale=zh_CN">
                        <Instagram />
                    </Link>
                </div>
            </div>
        </div>
    )
}