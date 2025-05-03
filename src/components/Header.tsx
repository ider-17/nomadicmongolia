"use client";

import Link from "next/link"
import { useEffect, useRef, useState } from "react";

export const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

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
        <header className={`w-full fixed top-0 flex justify-between items-center py-2 px-[150px] bg-white z-50 trnasition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
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
                <li>GALLERIA</li> {/* GALLERY */}
                <Link href="/tours">
                    <li>VIAGGI</li>
                </Link> {/* TOURS */}
                <li>PRENOTA</li> {/* BOOKING */}
                <li>CONTATTI</li> {/* CONTACT US */}
            </ul>
        </header>
    )
}