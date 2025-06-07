import HowItWorks from "@/components/HowItWorks";
import WhereOurTalentsAre from "@/components/WhereOurTalentsAre";
import Techstacks from "@/components/Techstacks";
import EliteDevelopers from "@/components/EliteDevelopers";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="md:pt-28 pt-40 lg:mx-[4em] mx-4">
      {/* Hero */}
      <Hero />

      {/* How it Works */}
      <HowItWorks />

      {/* Where Our Talents Are Section */}
      <WhereOurTalentsAre />

      {/* Experts in Various Techstacks Section */}
      <Techstacks />

      <EliteDevelopers />

      {/* Call to Action Section */}
      <section className="w-full flex md:justify-center md:items-center md:py-5 ">
        <div
          className="w-full max-w-7xl md:rounded-3xl rounded-xl overflow-hidden bg-cover bg-center flex flex-col items-center justify-center text-center px-4 md:px-16 md:py-12 py-6"
          style={{ backgroundImage: "url(/images/africa-art-bg.png)" }}
        >
          <p className="uppercase tracking-widest text-white text-base font-medium md:mb-4 opacity-90 text-start">
            Ready to supercharge your development team?
          </p>
          <h2 className="text-white text-2xl md:text-4xl font-semibold mb-6 text-start">
            Don&apos;t miss out on top talent – let&apos;s get started today.
          </h2>
          <button className="mt-2 px-10 py-3 rounded-full text-orange-600 text-lg bg-white shadow-lg hover:bg-orange-100 transition-all duration-200 font-normal md:w-auto w-full">
            Book a call
          </button>
        </div>
      </section>
    </main>
  );
}
