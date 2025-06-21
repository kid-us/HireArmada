import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { raleway, theBoldFont } from "@/app/fonts";

interface TestimonialsType {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
  company: string;
}

const EliteDevelopers = () => {
  const testimonials: TestimonialsType[] = [
    {
      id: 1,
      quote:
        "«The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.»",
      name: "Martin Goutry",
      role: "Back-end developer",
      image: "/images/elite-developers/01.png",
      company: "MyDodow",
    },
    {
      id: 2,
      quote: "«Working with this team has been fantastic. Highly recommend!»",
      name: "Juma Hassan",
      role: "Front-end Developer",
      image: "/images/elite-developers/02.png",
      company: "Tech Solutions",
    },
    {
      id: 3,
      quote:
        "«The platform made finding the right talent incredibly easy. It's ease!»",
      name: "Louisa Martin",
      role: "Full-stack Developer",
      image: "/images/elite-developers/03.png",
      company: "Innovate Inc.",
    },
  ];

  return (
    <div className="mt-16">
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
          className={`${raleway.className} font-raleway text-base md:text-lg text-black max-w-3xl md:mx-auto`}
        >
          Join the ranks of companies who have boosted their teams with HIRE
          Armada developers. Here are a few examples of successful placements
          (and the impact they&apos;ve made)
        </p>
      </div>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default EliteDevelopers;
