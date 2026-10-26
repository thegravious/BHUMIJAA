import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full">
      <div className="relative min-h-[750px] w-full overflow-hidden bg-black sm:min-h-[800px] lg:min-h-[calc(100svh-72px)]">

        {/* Background Image */}
        <img
          src="/hero1.9.jpg"
          alt="BHUMIJAA mattress comfort"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Main Content */}
        <div className="relative z-10 mx-auto flex min-h-[750px] w-full max-w-7xl flex-col justify-center gap-8 px-5 py-10 sm:min-h-[800px] sm:px-8 lg:min-h-[calc(100svh-72px)] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12 xl:px-14">

          {/* Text Content */}
          <div className="w-full max-w-xl shrink-0 text-white lg:w-[48%]">
            <h1 className="ml-1 font-serif text-4xl font-bold leading-tight drop-shadow-lg sm:ml-4 sm:text-5xl md:text-6xl lg:ml-0 lg:text-6xl xl:text-7xl">
              Sleep Better.
              <br />
              <span className="text-black drop-shadow-none">
                Live Better.
              </span>
            </h1>

            <Link
              href="/shop"
              className="ml-1 mt-6 inline-flex items-center gap-3 border border-white bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black sm:ml-4 sm:text-base lg:ml-0"
            >
              Explore Mattresses
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Video */}
          <div className="flex w-full items-center justify-center lg:w-[48%] lg:justify-end">
            <video
              className="h-auto max-h-[38vh] w-auto max-w-full rounded-xl object-contain sm:max-h-[42vh] md:max-h-[46vh] lg:max-h-[min(65vh,650px)]"
              src="/trialVideo2.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;