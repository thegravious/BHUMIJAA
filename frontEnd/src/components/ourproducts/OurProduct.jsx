
"use client";

import React from "react";
import HomeProductCard from "../HomeProductCard/HomeProductCard";
import Link from "next/link";
import data from "../DATA/ProductData";

const OurProduct = () => {
  return (
    <div className="min-h-screen mt-10 flex flex-col items-center">
      <div className="w-full max-w-6xl px-4">
        <h1 className="text-6xl text-center font-serif">
          Our Product
        </h1>

        <hr className="w-[200px] mx-auto mt-3 border-2" />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 place-items-center">
          {data.slice(0, 6).map((product) => (
            <HomeProductCard
              key={product.id}
              img={product}
            />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="w-full flex justify-center mt-12">
          <Link
            className="bg-button-color text-xl text-white hover:bg-hover-button hover:text-white px-10 py-2 flex justify-center items-center w-full max-w-[250px]"
            href="/shop"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
