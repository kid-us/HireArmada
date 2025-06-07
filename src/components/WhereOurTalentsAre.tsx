import { raleway, theBoldFont } from "@/app/fonts";
import Globe from "./globe";
export default function WhereOurTalentsAre() {
  return (
    <section className="w-full max-w-7xl mb-24 mx-auto flex flex-col md:flex-row justify-between items-start py-24 px-4 md:px-8 gap-12">
      {/* Left: Text */}
      <div className="md:w-[50%] w-full flex-1 max-w-xl">
        <div className="mb-2 text-sm font-bold tracking-widest text-[#ff7a4d] uppercase">
          developers
        </div>
        <h2
          className={`${theBoldFont.className} font-theboldfont text-3xl sm:text-4xl font-extrabold mb-6 leading-tight`}
        >
          <span
            className={`${theBoldFont.className} font-theboldfont bg-gradient-to-r text-[#FF1493] md:bg-gradient-to-r md:from-gradient-pink md:to-gradient-orange md:bg-clip-text md:text-transparent`}
          >
            WHERE OUR TALENTS ARE
          </span>
        </h2>
        <p
          className={`${raleway.className} font-raleway text-gray-800 text-lg font-medium leading-relaxed`}
        >
          Tap into a truly global talent pool. HIRE Armada&apos;s developers are
          located across North America, Latin America, Europe, Africa, and
          Asia-Pacific. Wherever your business is based, we have talent in your
          time zone or ready to align with your working hours
        </p>
      </div>
      {/* Right: Globe Image */}
      <div className="relative md:w-[50%] w-full flex-1 flex items-center justify-center h-full min-h-[360px] md:min-h-[440px] mt-[-32px] md:mt-[-48px]">
        <Globe className="w-[320px] md:w-[440px] h-auto" />
      </div>
    </section>
  );
}
