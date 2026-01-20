import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className="sm:flex py-12.5 sm:px-37.5 px-[5%] bg-[#2fa147] text-white hidden">
        <div className="sm:w-1/3 w-1/2">
          <Link href="/">
            <img
              className="w-37.5"
              src="/assets/logo-footer.webp"
              alt="Footer Logo"
            />
          </Link>
        </div>

        <div className="w-1/3 flex flex-col *:hover:underline *:hover:underline-offset-4 *:text-white">
          <Link href="/" className="w-fit">
            Home
          </Link>
          <Link href="/about" className="w-fit">
            About us
          </Link>
          <Link href="/tours" className="w-fit">
            Tours
          </Link>
        </div>

        <div className="w-1/3 flex flex-col gap-2">
          <h6 className="font-semibold pl-2">Contact us</h6>

          <div className="flex gap-2">
            <p>Mobile:</p>
            <span>
              +976 99020908, <br />
              +976 89810908
            </span>
          </div>

          <div className="flex gap-2">
            <p>Email:</p>
            <span>info@nomadicmongolia.com</span>
          </div>

          {/* <div className="flex gap-2">
          <p>Email2:</p>
          <span>nomadickhusug@gmail.com</span>
        </div> */}

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/nomadickhusug/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>

            <a
              href="https://www.instagram.com/nomadic_khusug/?locale=zh_CN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </footer>

      <footer className="py-12.5 px-[5%] bg-[#2fa147] text-white sm:hidden">
        <div className="flex justify-between mb-5">
          <div className="w-1/2">
            <Link href="/">
              <img
                className="w-37.5"
                src="/assets/logo-footer.webp"
                alt="Footer Logo"
              />
            </Link>
          </div>

          <div className="w-1/2 flex flex-col *:hover:underline *:hover:underline-offset-4 *:text-white *:text-end">
            <Link href="/" className="w-full">
              Home
            </Link>
            <Link href="/about" className="w-full">
              About us
            </Link>
            <Link href="/tours" className="w-full">
              Tours
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 items-center">
          <h6 className="font-semibold pl-2">Contact us</h6>

          <div className="flex gap-2">
            <p>Mobile:</p>
            <span>
              +976 99020908, <br />
              +976 89810908
            </span>
          </div>

          <div className="flex gap-2">
            <p>Email:</p>
            <span>info@nomadicmongolia.com</span>
          </div>

          {/* <div className="flex gap-2">
          <p>Email2:</p>
          <span>nomadickhusug@gmail.com</span>
        </div> */}

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/nomadickhusug/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>

            <a
              href="https://www.instagram.com/nomadic_khusug/?locale=zh_CN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
