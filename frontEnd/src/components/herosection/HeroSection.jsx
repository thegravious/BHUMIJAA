
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="herobanner flex min-h-[85vh] items-center  justify-center bg-cover bg-center bg-no-repeat px-5 sm:px-8 lg:min-h-screen"
      style={{ backgroundImage: "url('/hero1.3.jpg')" }}
    >
      <div className="flex w-full max-w-6xl flex-col items-center text-gray-300">

        <div className="border-l border-black pl-3 text-black">
  <p className="text-sm tracking-wider sm:text-base">
    AMAZING
    <br />
    FROM <span className="text-white">BHUMIJAA</span>
  </p>
</div>

<div className="mt-10 text-black font-serif sm:mt-14">
  <h1 className="max-w-5xl text-left text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
    We Craft
    <br />
    <span className="text-white">Better Sleep</span>
  </h1>
</div>

        {/* <div className="mt-10 flex justify-start sm:mt-14">
          <Link
            className="inline-block bg-button-color px-8 py-3 text-base font-black text-gray-300 transition-colors duration-300 hover:bg-hover-button sm:px-12 sm:py-4 sm:text-xl"
            href="/shop"
          >
            Adopt A Leaf
          </Link>
        </div> */}

      </div>
    </section>
  );
};

export default HeroSection;
