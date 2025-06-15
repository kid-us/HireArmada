"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
  company: string;
}

interface Props {
  testimonials: Testimonial[];
  autoplay?: boolean;
  duration?: number;
}

export default function TestimonialSlider({
  testimonials = [],
  autoplay = false,
  duration = 5000,
}: Props) {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const activeTestimonialQuote = testimonials[active]?.quote?.split(" ") || [];

  const isActive = (index: number) => active === index;

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(handleNext, duration);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay, duration]);

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-0">
      <div className="relative grid grid-cols-1 gap-16 md:grid-cols-2">
        <div className="relative md:h-96 h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.image}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`absolute inset-0 origin-bottom cursor-pointer`}
                onClick={() => setActive(index)}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={500}
                  height={800}
                  draggable={false}
                  className="size-full rounded-3xl object-cover object-top"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col md:h-96 justify-center md:items-start items-center">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-white py-4 px-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-black">
              {testimonials[active]?.name}
            </h3>
            <p className="text-sm text-gray-400 font-semibold my-2">
              {testimonials[active]?.role} at {testimonials[active].company}
            </p>
            <motion.p className="text-sm">
              {activeTestimonialQuote.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-6">
            <button
              onClick={handlePrev}
              className="group/button border-2 border-[#EC1699] text-[#EC1699] hover:text-white transition-colors duration-200 flex size-8 items-center justify-center rounded-full"
            >
              <ArrowLeft className="size-6 text-[#FF416C] transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button border-2 border-[#EC1699] text-[#EC1699] hover:text-white transition-colors duration-200 flex size-8 items-center justify-center rounded-full"
            >
              <ArrowRight className="size-6 text-[#FF416C] transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
