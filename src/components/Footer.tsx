import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="flex py-[80px] px-[150px] bg-black text-white">
            <div className="w-1/3">
                <Link href="/">
                    <img className="w-[150px]" src="/logo-footer.webp" alt="Logo" />
                </Link>
            </div>

            <div className="w-1/3 flex flex-col [&>*]:hover:underline [&>*]:hover:underline-offset-4">
                <Link href="/" className="w-fit">Home</Link>
                <Link href="/about" className="w-fit">About us</Link>
                <Link href="/tours" className="w-fit">Tours</Link>
            </div>

            <div className="w-1/3 flex flex-col gap-2">
                <h6 className="font-semibold pl-2">Contact us</h6>

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
                    <a href="https://www.facebook.com/nomadickhusug/" target="_blank" rel="noopener noreferrer">
                        <Facebook />
                    </a>

                    <a href="https://www.instagram.com/nomadic_khusug/?locale=zh_CN" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                </div>
            </div>
        </footer>
    )
}