import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-12 lg:mx-[4em] mx-3">
      {/* Main white card */}
      <div className="rounded-2xl bg-white shadow lg:px-8 px-5 py-10">
        <div className="lg:flex justify-between gap-8 relative">
          {/* Logo and address/socials */}
          <div className="flex items-start">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Hiremada Logo"
                width={48}
                height={48}
                className="mr-3"
              />
              <p className="font-bold text-2xl text-gray-900">Hiremada</p>
            </div>
          </div>

          {/* Info links */}
          <div className="mb-8 md:mb-0 mt-5">
            <div className="uppercase text-xs text-gray-500 font-semibold mb-5">
              Information
            </div>
            <ul className="space-y-1 text-base text-gray-800">
              <li>
                <Link href="#">Privacy</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Partners</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Contacts</Link>
              </li>
            </ul>
          </div>

          <div className="lg:block hidden"></div>

          {/* Hire a developer + contact */}
          <div className="flex flex-col items-end gap-4">
            <button className="bg-gradient-to-br from-[#EC1699] to-[#FF4B2B] text-white px-6 py-2 rounded-full font-normal">
              Hire a developer
            </button>
            <div className="text-right text-gray-900 lg:text-base text-sm font-semibold leading-5">
              +1 (999) 999-99-99
              <br />
              Hire@aramada.com
            </div>
          </div>
        </div>
        <div className="lg:flex items-center gap-x-12">
          <div className="flex items-center gap-4 mt-8">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#EC1699] to-[#FF4B2B]"
            >
              <Image
                src="/twitter-icon.png"
                alt="Twitter"
                width={48}
                height={48}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#EC1699] to-[#FF4B2B]"
            >
              <Image
                src="/telegram-icon.png"
                alt="Telegram"
                width={48}
                height={48}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#EC1699] to-[#FF4B2B]"
            >
              <Image
                src="/whatsapp-icon.png"
                alt="WhatsApp"
                width={48}
                height={48}
              />
            </a>
          </div>
          <div className="lg:mt-8 mt-2 text-sm text-gray-900 font-semibold">
            1901 Thornridge Cir. Shiloh,
            <br />
            Hawaii 81063
          </div>
        </div>
      </div>

      {/* Light section below card */}
      <div className="lg:flex flex-col md:flex-row justify-between items-center py-10 gap-x-10">
        {/* Left: Large heading */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-4xl lg:text-5xl lg:leading-12 font-extrabold bg-gradient-to-r from-[#EC1699] to-[#FF4B2B] bg-clip-text text-transparent uppercase">
            Subscribe to Armada&apos;S new Tech NewsLetter
          </h2>
        </div>
        {/* Right: Email form */}
        <div className="lg:w-[480px]">
          <p className="text-zinc-500 text-sm mb-3 font-medium">
            Get ready to see the best curated list of new ai tools
          </p>
          <form className="w-full">
            <div className="flex-1 relative">
              <label
                htmlFor="footer-email"
                className="absolute text-[10px] left-4 top-1 text-zinc-500 uppercase"
              >
                Your Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="jhondoe@gmail.com"
                className="w-full bg-transparent border border-[#EC1699] rounded-xl px-4 h-14 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EC1699] placeholder:pt-3"
              />
              <button className="absolute right-5 top-4">
                <MoveRight className="text-zinc-500" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright and privacy */}
      <div className="flex justify-between items-center text-xs text-black md:px-0 pb-10">
        <span>© 2025 — Copyright</span>
        <Link href="#" className="text-black hover:text-[#EC1699]">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
