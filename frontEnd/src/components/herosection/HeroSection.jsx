
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="herobanner flex min-h-[85vh] lg:min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-5 sm:px-8"
      style={{ backgroundImage: "url('/9.png')" }}
    >
      <div className="w-full max-w-6xl text-gray-300">
        <div className="border-l border-white pl-3 sm:ml-8 lg:ml-20">
          <p className="text-sm sm:text-base tracking-wider">
            AMAZING
            <br />
            FROM BHUMIJAA
          </p>
        </div>

        <div className="mt-10 sm:mt-14">
          <h1 className="mx-auto max-w-5xl text-center text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Where Green Meets Grace.
          </h1>
        </div>

        <div className="mt-10 flex justify-center sm:mt-14 lg:justify-start lg:ml-20">
          <Link
            className="inline-block bg-button-color px-8 py-3 text-base font-black text-gray-300 transition-colors duration-300 hover:bg-hover-button sm:px-12 sm:py-4 sm:text-xl"
            href="/shop"
          >
            Adopt A Leaf
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
