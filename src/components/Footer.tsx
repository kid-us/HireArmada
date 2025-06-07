import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-12">
      {/* Main white card */}
      <div className="max-w-7xl mx-auto rounded-2xl bg-white shadow-lg px-8 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative">
        {/* Logo and address/socials */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center mb-8 md:mb-0">
            <Image
              src="/logo.svg"
              alt="Hiremada Logo"
              width={48}
              height={48}
              className="mr-3"
            />
            <span className="font-bold text-2xl text-gray-900">Hiremada</span>
          </div>
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
          <div className="mt-4 text-sm text-gray-900 font-semibold">
            1901 Thornridge Cir. Shiloh,
            <br />
            Hawaii 81063
          </div>
        </div>
        {/* Info links */}
        <div className="flex-1 flex flex-col md:flex-row justify-center items-start gap-16">
          <div className="mb-8 md:mb-0">
            <div className="uppercase text-xs text-gray-500 font-semibold mb-4">
              Information
            </div>
            <ul className="space-y-2 text-base text-gray-800">
              <li>
                <Link href="/about">About Us</Link>
              </li>
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
        </div>
        {/* Hire a developer + contact */}
        <div className="flex flex-col items-end gap-4 min-w-[200px]">
          <button className="bg-gradient-to-br from-[#EC1699] to-[#FF4B2B] text-white px-6 py-2 rounded-full font-semibold text-base mb-2">
            Hire a developer
          </button>
          <div className="text-right text-gray-900 text-base font-medium">
            +1 (999) 999-99-99
            <br />
            Hire@aramada.com
          </div>
        </div>
      </div>
      {/* Light section below card */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-12 px-4 md:px-0">
        {/* Left: Large heading */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-[#EC1699] to-[#FF4B2B] bg-clip-text text-transparent uppercase">
            IF YOU DIDN&apos;T FIND THE TALENTS
            <br />
            YOU ARE INTERESTED IN OR HAVE
            <br />
            QUESTIONS?
          </h2>
        </div>
        {/* Right: Email form */}
        <div className="flex-1 flex flex-col items-end">
          <span className="text-gray-700 mb-2 text-sm">
            Just send us your contact email and we will contact you.
          </span>
          <form className="w-full max-w-md flex">
            <div className="flex-1 relative">
              <label htmlFor="footer-email" className="sr-only">
                Your Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-transparent border border-[#EC1699] rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EC1699]"
                defaultValue="Jhondoe@gmail.com"
              />
            </div>
            <button
              type="submit"
              className="ml-2 px-4 rounded-xl border border-[#EC1699] text-[#EC1699] flex items-center justify-center hover:bg-[#EC1699] hover:text-white transition-colors"
            >
              <span className="text-2xl">→</span>
            </button>
          </form>
        </div>
      </div>
      {/* Copyright and privacy */}
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-gray-500 pb-4 px-4 md:px-0">
        <span>© 2023 — Copyright</span>
        <Link href="#" className="hover:text-[#EC1699]">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
