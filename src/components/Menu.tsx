"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MenuBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setOpen(true)} className="">
        <Menu color="white" />
      </div>

      {open && (
        <div className="flex flex-col border rounded-md absolute right-0 top-0 bg-[#2fa147] text-center **:text-white **:py-1 **:px-2 **:active:text-[#2fa147] **:active:bg-white **:rounded-md **:hover:bg-white **:hover:text-[#2fa147]">
          <Link href="/">
            <button onClick={() => setOpen(false)}>Home</button>
          </Link>
          <Link href="/about">
            <button onClick={() => setOpen(false)}>About</button>
          </Link>
          <Link href="/tours">
            <button onClick={() => setOpen(false)}>Tours</button>
          </Link>
          <Link href="/gallery">
            <button onClick={() => setOpen(false)}>Gallery</button>
          </Link>
          <Link href="/contacts">
            <button onClick={() => setOpen(false)}>Contacts</button>
          </Link>
        </div>
      )}
    </div>
  );
}
