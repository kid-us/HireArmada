"use client";

import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opacity, setOpacity] = useState(0.1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = docHeight - windowHeight;

      const scrollPercent = scrollTop / maxScroll;

      if (scrollPercent >= 0.95) {
        setOpacity(0.1);
      } else if (scrollTop > windowHeight) {
        setOpacity(0.35);
      } else {
        setOpacity(0.1);
      }
    };

    handleScroll(); // Call on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 transition-opacity duration-500"
        style={{
          background: "linear-gradient(to bottom, #FF4B2B, #FF416C)",
          opacity,
        }}
      />
      {children}
    </main>
  );
}
