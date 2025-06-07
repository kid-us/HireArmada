import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Career", href: "/careers" },
  { name: "Blog", href: "/blogs" },
];

export default function NavLinksBar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-center w-full">
      <ul
        className="flex items-center space-x-2 border border-white backdrop-blur-md rounded-full px-[6px] py-[5px] mt-2"
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
                }`}
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
    </div>
  );
}
