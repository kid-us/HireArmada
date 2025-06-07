"use client";

import { raleway, theBoldFont } from "@/app/fonts";
import Image from "next/image";
import { useState, useEffect } from "react";

// Placeholder data - replace with actual data
const developers = [
  {
    name: "Martin Goutry",
    role: "Back-end developer",
    company: "MyDodow",
    testimonial:
      "Dico is finally addressing a long time problem we had when building UIs.",
    image: "/images/elite-developers/01.png", // Replace with actual image path
    bgColor: "bg-yellow-400", // Example background color for the card
    rotation: "-rotate-6",
  },
  {
    name: "Juma Hassan", // Example data
    role: "Front-end Developer",
    company: "Tech Solutions",
    testimonial: "Working with this team has been fantastic. Highly recommend!",
    image: "/images/elite-developers/02.png", // Replace with actual image path
    bgColor: "bg-blue-300",
    rotation: "rotate-3",
  },
  {
    name: "Louisa Martin", // Example data
    role: "Full-stack Developer",
    company: "Innovate Inc.",
    testimonial:
      "The platform made finding the right talent incredibly easy. It's ease! ",
    image: "/images/elite-developers/03.png", // Replace with actual image path
    bgColor: "bg-purple-300",
    rotation: "rotate-6",
  },
];

export default function EliteDevelopers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextDeveloper = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % developers.length);
  };

  const prevDeveloper = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? developers.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextDeveloper();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Title Section */}
        <div className="text-left md:text-center mb-8 md:mb-12">
          <span className=" text-sm font-bold tracking-widest text-[#ff7a4d] uppercase mb-2 block">
            TALENTS
          </span>
          <h2
            className={`${theBoldFont.className} font-theboldfont text-3xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-[#EC1699] to-[#FF4B2B] bg-clip-text text-transparent`}
          >
            ELITE DEVELOPERS
          </h2>
          <p
            className={`${raleway.className} font-raleway text-base md:text-lg text-gray-700 max-w-3xl md:mx-auto`}
          >
            Join the ranks of companies who have boosted their teams with HIRE
            Armada developers. Here are a few examples of successful placements
            (and the impact they&apos;ve made)
          </p>
        </div>

        {/* Carousel Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-16 w-full">
          {/* Left: Stacked Images */}
          <div className="relative w-64 h-72 md:w-80 md:h-96 flex items-center justify-center flex-shrink-0 mb-8 md:mb-0">
            {developers.map((dev, index) => {
              // Calculate position and z-index for stacking effect
              const isCurrent = index === currentIndex;
              const isPrev =
                index ===
                (currentIndex - 1 + developers.length) % developers.length;
              const isNext = index === (currentIndex + 1) % developers.length;

              // Only show current, previous, and next cards
              const shouldShow = isCurrent || isPrev || isNext;

              // Calculate offset considering the loop
              const getOffset = () => {
                if (isCurrent) return 0;
                if (isPrev) return -1;
                if (isNext) return 1;
                return 2; // For other cards, place them far away
              };

              const offset = getOffset();
              const scale = Math.max(1 - Math.abs(offset) * 0.1, 0.7);
              const zIndex = 10 - Math.abs(offset);
              const translateX = offset * 20; // Reduce spacing for mobile
              const translateY = Math.abs(offset) * (isMobile ? 5 : 10);

              // Add skew for dynamic look
              const skew = isCurrent
                ? "-6deg"
                : offset < 0
                ? "-10deg"
                : "10deg";

              if (!shouldShow && developers.length > 3) return null;

              return (
                <div
                  key={index}
                  className={`absolute w-full h-full rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out ${dev.bgColor}`}
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${
                      isCurrent ? dev.rotation : "0deg"
                    }) skewY(${skew})`,
                    zIndex: zIndex,
                    opacity: shouldShow ? 1 : 0,
                  }}
                >
                  <Image
                    src={dev.image}
                    alt={dev.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={isCurrent}
                  />
                </div>
              );
            })}
          </div>

          {/* Right: Testimonial Card */}
          <div className="flex flex-col items-start w-full max-w-md md:py-8">
            <div className="bg-[#F7F6FA] rounded-2xl p-6 md:p-8 shadow-lg w-full mb-4">
              <h3
                className={`${raleway.className} font-raleway text-xl md:text-2xl font-bold text-gray-900 mb-1`}
              >
                {developers[currentIndex].name}
              </h3>
              <p
                className={`${raleway.className} font-raleway text-sm md:text-base font-semibold text-gray-400 mb-3`}
              >
                {developers[currentIndex].role}{" "}
                <span className="font-normal">
                  at {developers[currentIndex].company}
                </span>
              </p>
              <p
                className={`${raleway.className} font-raleway text-gray-800 text-sm md:text-base`}
              >
                &laquo; {developers[currentIndex].testimonial} &raquo;
              </p>
            </div>
            {/* Navigation Arrows below the card */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={prevDeveloper}
                className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-[#EC1699] text-[#EC1699] hover:bg-[#EC1699] hover:text-white transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <span className="text-lg">&#8592;</span>
              </button>
              <div className="flex items-center gap-1">
                {developers.map((_, idx) => (
                  <span
                    key={idx}
                    className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-[#EC1699] scale-125"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextDeveloper}
                className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-[#EC1699] text-[#EC1699] hover:bg-[#EC1699] hover:text-white transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <span className="text-lg">&#8594;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
