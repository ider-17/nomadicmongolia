"use client";

import { Header } from "@/components/Header";
import { useState } from "react";

export default function Home() {

  const [currentBackground, setCurrentBackground] = useState(0);

  const backgrounds = ["/_ZAK4316.webp", "/_BAY5051.webp", "/_BAY1429.webp", "/_BAY0058.webp"];

  const changeBackground = () => {
    setCurrentBackground(currentBackground + 1);
    if (currentBackground === 3) {
      setCurrentBackground(0)
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000 ease-in-out" style={{ backgroundImage: `url('${backgrounds[currentBackground]}')` }}>

        <Header />

        <button className="absolute bottom-5 right-5 cursor-pointer" onClick={changeBackground}>Change BG</button>

      </div>
    </div>
  )
};