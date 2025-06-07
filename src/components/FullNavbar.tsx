import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Career", href: "/careers" },
  { name: "Blog", href: "/blogs" },
];

export default function FullNavbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between w-full max-w-6xl px-6 py-2 mx-auto">
      {/* Logo */}
      <Link href={"/"}>
        <div className="flex items-center mr-4">
          <Image
            src="/logo.svg"
            alt="Hire Armada Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <span className="font-bold text-lg text-gray-800">Hire Armada</span>
        </div>
      </Link>
      {/* Nav Links */}
      <ul
        className="flex items-center space-x-2 border border-[#edcaca] rounded-full px-[6px] py-[5px]"
        style={{ minWidth: 320 }}
      >
        {navLinks.map((link) => {
          const isActive =
            (link.href === "/" && pathname === "/") ||
            (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <li key={link.name} className="flex items-center h-[43px]">
              <Link
                href={link.href}
                className={`px-5 py-2 rounded-full font-semibold text-base transition-all duration-200 tracking-tight ${
                  isActive
                    ? "bg-linear-120 from-[#EC1699] to-[#FF4B2B] shadow-md hover:from-[#FF4B2B] hover:to-[#EC1699] transition-all duration-200 text-white"
                    : "text-gray-800 hover:text-[#ff5c5c] bg-transparent"
                } text-sm !font-normal`}
                style={{
                  boxShadow: isActive
                    ? "0 2px 8px 0 rgba(255, 92, 92, 0.18)"
                    : undefined,
                }}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Right Side: Dark mode + CTA */}
      <div className="h-[43px] flex items-center space-x-3 ml-4">
        {/* Dark mode toggle placeholder */}
        {/* <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
          <Moon01 className="text-gray-500" />
        </button> */}
        <Link
          href="#"
          className="px-5 py-2 rounded-full flex items-center justify-center text-white bg-linear-120 from-[#EC1699] to-[#FF4B2B] shadow-md hover:from-[#FF4B2B] hover:to-[#EC1699] transition-all duration-200 "
        >
          Start Now
        </Link>
      </div>
    </nav>
  );
}
