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
        <div className="hidden md:block w-full md:max-w-4xl">
          {atTop ? <FullNavbar /> : <NavLinksBar />}
        </div>

        {/* Mobile Navigation */}
        <div className="relative w-full md:hidden px-4 mt-5">
          <div className="bg-black/30 shadow backdrop-blur-lg rounded-2xl">
            <div className="flex items-center justify-between w-full px-4 py-2">
              <div className="flex items-center justify-center flex-1">
                <div className="flex items-center">
                  <Image
                    src="/logo.svg"
                    alt="Hire Armada Logo"
                    width={28}
                    height={28}
                    className="mr-2"
                  />
                  <span className="font-semibold text-lg text-white">
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
                    <XClose className="h-6 w-6 text-white" />
                  ) : (
                    <Menu04 className="h-6 w-6 text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Animated Menu */}
            <div
              className={`
        transition-all duration-400 ease-in-out overflow-hidden
        ${
          mobileMenuOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-5"
        }
      `}
            >
              <div className="px-6 py-5">
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/careers"
                      className="block text-base font-medium text-white"
                    >
                      Careers
                    </Link>
                  </li>
                  <hr className="border-zinc-300" />
                  <li>
                    <Link
                      href="/blogs"
                      className="block text-base font-medium text-white"
                    >
                      Blogs
                    </Link>
                  </li>
                  <hr className="border-zinc-300" />
                  <li className="pt-4">
                    <Link
                      href="#"
                      className="block w-full px-4 py-3 rounded-full bg-[#FF4B2B] text-white font-medium text-center"
                    >
                      Hire Talent
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
