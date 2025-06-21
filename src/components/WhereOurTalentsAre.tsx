import { raleway, theBoldFont } from "@/app/fonts";
import Globe from "./globe";
export default function WhereOurTalentsAre() {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-7xl lg:grid grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-sm font-bold tracking-widest text-[#ff7a4d] uppercase">
            developers
          </p>
          <h2
            className={`${theBoldFont.className} font-theboldfont text-3xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r text-[#FF1493] md:bg-gradient-to-r md:from-gradient-pink md:to-gradient-orange md:bg-clip-text md:text-transparent`}
          >
            WHERE OUR TALENTS ARE
          </h2>
          <p
            className={`${raleway.className} font-raleway text-black leading-relaxed`}
          >
            Tap into a truly global talent pool. HIRE Armada&apos;s developers
            are located across North America, Latin America, Europe, Africa, and
            Asia-Pacific. Wherever your business is based, we have talent in
            your time zone or ready to align with your working hours
          </p>
        </div>
        {/* Globe */}
        <div className="relative">
          <Globe className="w-[420px] md:w-[540px] h-auto" />
        </div>
      </div>
    </section>
  );
}
