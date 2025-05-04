"use client";

import Image from "next/image";
import Link from "next/link"
import { useEffect, useRef, useState } from "react";

export const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

            if (currentScrollY > lastScrollY.current) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className={`w-full fixed top-0 flex justify-between items-center py-2 px-[150px] bg-white z-50 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
            <div>
                <Link href="/">
                    <Image
                        src="/Nomadic khusug 7-2.jpg"
                        alt="Nomadic Logo"
                        width={200}
                        height={60}
                        className="object-cover object-center cursor-pointer"
                    />
                </Link>
            </div>
            <ul className="flex gap-4 [&>*]:text-black [&>*]:hover:underline [&>*]:hover:underline-offset-8 [&>*]:font-semibold [&>*]:cursor-pointer">
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/whoweare">CHI SIAMO</Link> {/* WHO WE ARE */}
                </li>
                <li>
                    <Link href="/gallery">GALLERIA</Link> {/* GALLERY */}
                </li>
                <li>
                    <Link href="/tours">VIAGGI</Link> {/* TOURS */}
                </li>
                <li>
                    <Link href="/booking">PRENOTA</Link> {/* BOOKING */}
                </li>
                <li>
                    <Link href="/contacts">CONTATTI</Link> {/* CONTACT US */}
                </li>
            </ul>
        </header>
    )
}