"use client";

import React from "react";
import HomeProductCard from "../HomeProductCard/HomeProductCard";
import Link from "next/link";
import data from "../DATA/ProductData";

const OurProduct = () => {
  return (
    <div
      className="font-black flex min-h-screen flex-col bg-blac items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/her2.1.jpg')" }}
    >
      <div className="w-full max-w-6xl px-4">
        <h1 className="text-center text-black font-serif text-6xl">
          Our Product
        </h1>

        <hr className="mx-auto mt-3 w-[200px] border-2" />

        {/* Product Grid */}
        <div className="mt-10 grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2 lg:grid-cols-2">
          {data.slice(0, 6).map((product) => (
            <HomeProductCard
              key={product.id}
              img={product}
            />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-12 flex w-full justify-center">
          {/* <Link
            className="flex w-full max-w-[250px] items-center justify-center bg-button-color px-10 py-2 text-xl text-white hover:bg-hover-button"
            href="/shop"
          >
            Explore More
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default OurProduct;