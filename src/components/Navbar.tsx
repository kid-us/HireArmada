"use client";

import { useEffect, useState } from "react";
import FullNavbar from "./FullNavbar";
import NavLinksBar from "./NavLinksBar";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu04, XClose } from "@untitled-ui/icons-react";

const HERO_HEIGHT = 1; // px, adjust to match your hero section height

export default function Navbar() {
  const [show] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY < HERO_HEIGHT);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } shadow-none`}
      style={{ willChange: "transform" }}
    >
      <div className="w-full flex justify-center">
        {/* Desktop Navigation */}
        <div className="hidden md:block w-full">
          {atTop ? <FullNavbar /> : <NavLinksBar />}
        </div>

        {/* Mobile Navigation */}
        <div className="w-full md:hidden px-2 mt-2">
          <div className="flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-[#f3e6d8] to-[#E9D9C7]  backdrop-blur-lg rounded-full">
            <div className="flex items-center justify-center flex-1">
              <div className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Hire Armada Logo"
                  width={28}
                  height={28}
                  className="mr-2"
                />
                <span className="font-bold text-lg text-gray-800">
                  Hire Armada
                </span>
              </div>
            </div>
            <div className="flex justify-end flex-1">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full transition"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <XClose className="h-6 w-6 text-gray-800" />
                ) : (
                  <Menu04 className="h-6 w-6 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#f3e6d8] z-40 md:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed mt-2 top-0 right-0 h-screen w-full z-100 md:hidden transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col`}
        >
          <div className="flex px-2">
            <div className="flex items-center justify-between w-full px-4 py-3 bg-[#ecd5bb] rounded-full">
              <div className="flex items-center justify-center flex-1">
                <div className="flex items-center">
                  <Image
                    src="/logo.svg"
                    alt="Hire Armada Logo"
                    width={28}
                    height={28}
                    className="mr-2"
                  />
                  <span className="font-bold text-lg text-gray-800">
                    Hire Armada
                  </span>
                </div>
              </div>
              <div className="flex justify-end flex-1">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full transition"
                  aria-label="Close menu"
                >
                  <XClose className="h-6 w-6 text-gray-800" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-grow flex flex-col justify-start p-10 bg-[#f3e6d8]">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/careers"
                  className="block text-base font-medium text-gray-800"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="block text-base font-medium text-gray-800"
                >
                  Blogs
                </Link>
              </li>
              <li className="pt-4">
                <Link
                  href="#"
                  className="block w-full px-4 py-3 rounded-md bg-[#FF4B2B] text-white font-medium text-center"
                >
                  Hire Talent
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
