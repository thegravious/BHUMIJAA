import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className=" w-full">
      <div className="relative h-[calc(100svh-100px)] min-h-[550px] w-full overflow-hidden bg-black">

        {/* Full-Width Background Image */}
        <img
          src="/hero1.9.jpg"
          alt="BHUMIJAA mattress comfort"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-14">

          {/* Text Content */}
          <div className="max-w-xl shrink-0 text-white">
            <h1 className="ml-4 font-serif text-4xl font-bold leading-tight drop-shadow-lg sm:ml-10 sm:text-5xl lg:text-6xl">
              Sleep Better.
              <br />
              <span className="text-black drop-shadow-none">
                Live Better.
              </span>
            </h1>

            {/* <p className="ml-4 mt-3 text-sm font-medium text-white drop-shadow-md sm:ml-10 sm:text-base">
              Enjoy 20% off for members.
            </p> */}

            <Link
              href="/shop"
              className="ml-4 mt-6 inline-flex items-center gap-3 border border-white bg-transparent px-7 py-3  text-black transition duration-300 hover:bg-white hover:text-black sm:ml-10 sm:text-base"
            >
              Explore Mattresses
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Video */}
          <div className="flex min-h-0 w-full justify-c:w-auto lg:flex-1 lg:justify-end">
            <video
              className="h-[440px] w-auto max-w-full rounded-xl object-contain sm:h-[300px] lg:h-[min(68vh,9000px)]"
              src="/trialVideo2.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;