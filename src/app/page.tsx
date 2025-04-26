"use client";

import { Header } from "@/components/Header";
import { useState } from "react";

export default function Home() {

  const [currentBackground, setCurrentBackground] = useState(0);

  const backgrounds = ["/_ZAK4316.jpg", "/_BAY5051.jpg", "/_BAY1429.jpg", "/_BAY0058.jpg"];

  const changeBackground = () => {
    setCurrentBackground(currentBackground + 1);
    if (currentBackground === 3) {
      setCurrentBackground(0)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000 ease-in-out" style={{ backgroundImage: `url('${backgrounds[currentBackground]}')` }}>

      <Header />

      <button className="absolute bottom-5 right-5 cursor-pointer" onClick={changeBackground}>Change BG</button>

    </div>
  )
}