"use client";

import React from "react";
import Image from "next/image";
import { useHireNowModal } from "@/context/HireNowModalContext";
import { theBoldFont } from "@/app/fonts";

const developers = [
  {
    name: "Juma Hassan",
    position: "Front-end Developer",
    techStacks: ["React", "Python", "+2"],
    img: "/images/elite-developers/01.png",
    color: "bg-[#b2e0e6]",
    style: "rotate-10 -top-8 left-16",
  },
  {
    name: "Juma Hassan",
    position: "Front-end Developer",
    techStacks: ["React", "Python", "+2"],
    img: "/images/elite-developers/01.png",
    color: "bg-[#b2e0e6]",
    style: "rotate-35 -top-28 -left-56",
  },
  {
    name: "Adekunle Adebayo",
    position: "Front-end Developer",
    techStacks: ["React", "Python", "+2"],
    img: "/images/elite-developers/02.png",
    color: "bg-[#f7c873]",
    style: "rotate-16 top-[14rem] left-16",
  },
  {
    name: "Adekunle Adebayo",
    position: "Front-end Developer",
    techStacks: ["React", "Python", "+2"],
    img: "/images/elite-developers/02.png",
    color: "bg-[#f7c873]",
    style: "rotate-10 top-[11rem] -left-56",
  },
  {
    name: "Louisa Martin",
    position: "Full-stack Developer",
    techStacks: ["Vue", "Django", "AWS"],
    img: "/images/elite-developers/03.png",
    color: "bg-[#e2c3e6]",
    style: "-rotate-16 top-[30rem] left-8",
  },
  {
    name: "Louisa Martin",
    position: "Full-stack Developer",
    techStacks: ["Vue", "Django", "AWS"],
    img: "/images/elite-developers/03.png",
    color: "bg-[#e2c3e6]",
    style: "rotate-30 top-[30rem] -left-60",
  },
  {
    name: "Thando Mthembu",
    position: "Back-end Developer",
    techStacks: ["Node.js", "Go", "MongoDB"],
    img: "/images/elite-developers/02.png",
    color: "bg-[#f7c873]",
    style: "-rotate-10 -top-8 right-16",
  },
  {
    name: "Thando Mthembu",
    position: "Back-end Developer",
    techStacks: ["Node.js", "Go", "MongoDB"],
    img: "/images/elite-developers/02.png",
    color: "bg-[#f7c873]",
    style: "-rotate-30 -top-28 -right-52",
  },
  {
    name: "Adekunle Adebayo",
    position: "Front-end Developer",
    techStacks: ["React", "Python", "+2"],
    img: "/images/elite-developers/05.png",
    color: "bg-[#b7d7c8]",
    style: "-rotate-16 top-[14rem] right-16",
  },
  {
    name: "Adekunle Adebayo",
    position: "Front-end Developer",
    techStacks: ["React", "Python", "+2"],
    img: "/images/elite-developers/05.png",
    color: "bg-[#b7d7c8]",
    style: "-rotate-16 top-[11rem] -right-56",
  },
  {
    name: "Adekunle Adebayo",
    position: "Front-end Developer",
    techStacks: ["React", "Python", "+2"],
    img: "/images/elite-developers/09.png",
    color: "bg-[#b2e0e6]",
    style: "rotate-16 top-[30rem] right-8",
  },
  {
    name: "Adekunle Adebayo",
    position: "Front-end Developer",
    techStacks: ["React", "Python", "+2"],
    img: "/images/elite-developers/09.png",
    color: "bg-[#b2e0e6]",
    style: "rotate-0 top-[30rem] -right-52",
  },
];

const logos = [
  { src: "/partner-1.png", alt: "Logoipsum 1" },
  { src: "/partner-2.png", alt: "Logoipsum 2" },
  { src: "/partner-3.png", alt: "Logoipsum 3" },
  { src: "/partner-4.png", alt: "Logoipsum 4" },
];

export default function Hero() {
  const { openModal } = useHireNowModal();

  return (
    <section className="relative">
      {/* Floating Developer Cards - Hidden on Mobile */}
      <div className="absolute inset-0 pointer-events-none z-10 mt-10 hidden lg:flex overflow-visible">
        <div className="relative w-full h-full">
          {developers.map((dev, i) => (
            <div
              key={i}
              className={`absolute ${dev.style} w-[180px] h-[200px] shadow-xl rounded-lg overflow-hidden ${dev.color} flex flex-col justify-end items-stretch opacity-95`}
              style={{ zIndex: 1 + i }}
            >
              <div className="relative w-full h-full flex-1">
                <Image
                  src={dev.img}
                  alt={dev.name}
                  fill
                  className="object-cover w-full h-full"
                  sizes="256px"
                  priority={i === 0}
                />
                <div className="absolute bottom-0 left-0 w-full ps-4 py-2 bg-black/20 backdrop-blur-[1px] flex flex-col rounded-b-lg">
                  <span className="font-semibold text-gray-100 text-xs mb-0.5 drop-shadow-sm">
                    {dev.name}
                  </span>
                  <span className="text-gray-100 text-[8px] mb-2 drop-shadow-sm !font-normal">
                    {dev.position}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {dev.techStacks.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-white/10 border border-white text-gray-300 text-[8px] font-medium px-2 py-[1px] rounded-full backdrop-blur-sm shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="md:h-[100dvh] h-auto">
        <div className="flex justify-center items-center w-full h-full">
          <div className="md:w-[877px] w-full">
            <div className="w-full md:text-center">
              <h1
                className={`${theBoldFont.className} text-left md:text-center text-3xl md:text-5xl mb-4 leading-tight`}
              >
                <span className="block text-gray-800">
                  THE{" "}
                  <span className="text-[#FF1493] md:bg-gradient-to-r md:from-gradient-pink md:to-gradient-orange md:bg-clip-text md:text-transparent">
                    1ST DEVELOPER MATCHING
                  </span>
                </span>
                <span className="block text-gray-700">PLATFORM IN AFRICA</span>
              </h1>

              <p
                className={`md:mx-auto text-left md:text-center text-sm max-w-lg mb-6`}
              >
                Scale your tech team with pre-vetted, elite developers—faster,
                smarter, and more affordably. At HIRE Armada, we deliver
                world-class talent in days, not months.
              </p>

              <div className="flex justify-start md:justify-center">
                <button
                  onClick={openModal}
                  className="mt-2 px-8 py-3 rounded-full font-bold text-white text-lg bg-[#FF1493] md:bg-gradient-to-r md:from-gradient-pink md:to-gradient-orange shadow-lg hover:opacity-90 transition-all duration-200"
                >
                  Find your Developer
                </button>
              </div>
            </div>

            {/* Trusted Logos */}
            <div className="flex justify-center">
              <div className="w-full md:w-[70%] mt-12 flex flex-col items-start md:items-center">
                <p className="mb-4 font-bold text-xl">
                  Trusted by leading companies worldwide
                </p>

                {/* Infinite scroll logos */}
                <div className="w-full relative overflow-hidden whitespace-nowrap py-4 group [mask-image:_linear-gradient(to_right,_transparent_0,_white_40px,white_calc(100%-40px),_transparent_100%)]">
                  <div className="animate-slide-left group-hover:animation-pause inline-flex w-max items-center">
                    {logos.map((logo, i) => (
                      <div
                        key={i}
                        className="mx-5 flex items-center justify-center h-full"
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={100}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                    ))}

                    {/* Duplicate logos for seamless looping */}
                    {logos.map((logo, i) => (
                      <div
                        key={`dup-${i}`}
                        className="mx-5 flex items-center justify-center h-full"
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={100}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
