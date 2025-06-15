import type { Metadata } from "next";
import { theBoldFont, raleway } from "./fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hire Armada",
  description: "Hire Armada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${theBoldFont.variable}${raleway.variable} font-theboldfont font-raleway antialiased !overflow-x-hidden`}
        style={{
          backgroundImage: "url(/images/main-bg-texture.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        {/* <SmoothScroll> */}
        <Navbar />
        {children}
        <Footer />
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
