import Image from "next/image";
import { raleway, theBoldFont } from "@/app/fonts";
const steps = [
  {
    title: "TELL US YOUR NEEDS",
    desc: "Share your requirements – the skills you need, experience level, and time zone. In minutes, we'll understand your ideal developer profile.",
    img: "/images/how1.png",
    imgAlt: "Thinking woman",
  },
  {
    title: "MEET YOUR MATCH",
    desc: "Our platform (and experts) instantly search our vetted talent pool to find the best fits. Within 48 hours, you receive a curated shortlist of candidates ready to interview.",
    img: "/images/how2.png",
    imgAlt: "Handshake",
  },
  {
    title: "HIRE & ONBOARD",
    desc: "Choose your perfect developer and start with a risk-free trial period. We'll help with easy onboarding and remote setup. If you're satisfied, continue the engagement and start building with your new team member right away.",
    img: "/images/how3.png",
    imgAlt: "Man with laptop",
  },
];

export default function HowItWorks() {
  return (
    <section
      className={`${raleway.className} font-raleway relative z-20 py-20 flex flex-col items-center bg-transparent`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center">
        <span
          className={`${theBoldFont.className} font-theboldfont bg-gradient-to-r from-[#ff5c5c] to-[#ff6cab] bg-clip-text text-transparent`}
        >
          HOW IT WORKS
        </span>
      </h2>
      <div
        className={`${raleway.className} font-raleway flex flex-col md:flex-row gap-6 w-full max-w-5xl justify-center items-stretch px-2`}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            className="group flex-1 rounded-3xl pb-0 shadow-2xl relative flex flex-col items-stretch min-h-[300px] md:min-h-[424px] max-w-sm mx-auto overflow-hidden bg-cover bg-center"
            style={{
              boxShadow:
                "0 8px 40px 0 rgba(255, 92, 92, 0.18), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
              backgroundImage: "url(/images/how-bg.png)",
            }}
          >
            <div className="mb-4 relative z-10 p-6">
              <h3
                className={`${theBoldFont.className} font-theboldfont text-white text-3xl font-extrabold mb-2 drop-shadow-lg`}
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
              >
                {step.title}
              </h3>
              <p className="text-white text-base font-medium opacity-90 leading-relaxed">
                {step.desc}
              </p>
            </div>
            <div className="hidden md:flex flex-1 w-full h-[380px]  items-end justify-center relative z-10">
              <Image
                src={step.img}
                alt={step.imgAlt}
                width={424}
                height={380}
                className="object-contain grayscale mb-0 transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 mt-8 text-base max-w-2xl">
        It&apos;s this simple – from first call to coding with your new hire:
        days.
      </p>
    </section>
  );
}
