import React from "react";
import data from "../data";
import Link from "next/link";

import { FaTruckFast } from "react-icons/fa6";
import { RiReplay15Fill } from "react-icons/ri";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";

const Page = async ({ params }) => {
  const { productdetail } = await params;

  const products = Array.isArray(data) ? data : data.default;

  const product = products?.find(
    (item) => item.extension === productdetail
  );

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-5 pt-24 text-black">
        <div className="text-center">
          <h1 className="font-serif text-2xl font-semibold sm:text-3xl">
            Product Not Found
          </h1>
          <p className="mt-3 text-sm text-gray-500 sm:text-base">
            Please check the product URL.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-flex bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-gray-800"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full overflow-hidden bg-white pt-20 text-black">
      {/* Main product image */}
      <section className="flex h-[55svh] min-h-[300px] max-h-[720px] w-full items-center justify-center overflow-hidden bg-gray-50 sm:h-[65svh] sm:min-h-[420px] lg:h-[75svh]">
        <img
          src={`/${product.image}`}
          alt={product.title}
          fetchPriority="high"
          className="h-full w-full object-contain"
        />
      </section>

      {/* Product image gallery */}
      <section className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-8 sm:py-8 lg:px-12">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          <div className="flex h-40 items-center justify-center overflow-hidden bg-gray-50 sm:h-64 md:h-80 lg:h-[400px]">
            <img
              src={`/${product.image}`}
              alt={`${product.title} second view`}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex h-40 items-center justify-center overflow-hidden bg-gray-50 sm:h-64 md:h-80 lg:h-[400px]">
            <img
              src={`/${product.image}`}
              alt={`${product.title} third view`}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Product details */}
      <section className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:text-xs sm:tracking-[0.25em]">
          BHUMIJAA / Mattress Collection
        </p>

        <h1 className="mt-3 break-words font-serif text-2xl font-medium uppercase leading-tight sm:mt-4 sm:text-4xl lg:text-5xl">
          {product.title}
        </h1>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-7 sm:mt-8">
          <p className="text-sm text-gray-500">Price</p>
          <p className="mt-1 text-2xl font-semibold sm:text-3xl">
            {product.price}
          </p>
        </div>

        {/* Place order */}
        <Link
          href={`/placeorder/${product.extension}`}
          className="mt-7 inline-flex min-h-12 w-full items-center justify-center bg-black px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-gray-800 sm:mt-8 sm:w-80 sm:text-sm sm:tracking-widest"
        >
          Place Order
        </Link>

        {/* Delivery and return information */}
        <div className="mt-10 grid grid-cols-1 gap-6 border-y border-gray-200 py-7 sm:mt-12 sm:grid-cols-2 sm:gap-8 sm:py-8 lg:grid-cols-3">
          <div className="flex items-center gap-4">
            <HiOutlineCurrencyRupee className="shrink-0 text-2xl sm:text-3xl" />
            <div>
              <h3 className="text-sm font-semibold">Cash on Delivery</h3>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Pay when your order arrives
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <RiReplay15Fill className="shrink-0 text-2xl sm:text-3xl" />
            <div>
              <h3 className="text-sm font-semibold">15-Day Return Policy</h3>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Refer to the applicable return terms
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:col-span-2 lg:col-span-1">
            <FaTruckFast className="shrink-0 text-2xl sm:text-3xl" />
            <div>
              <h3 className="text-sm font-semibold">Free Delivery</h3>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                On orders above ₹8,000
              </p>
            </div>
          </div>
        </div>

        {/* Full product description */}
        <div className="mt-8 pt-4 sm:mt-10 sm:pt-6">
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl">
            Product Description
          </h2>

          <h3 className="mt-5 text-base font-medium sm:mt-6 sm:text-lg">
            {product.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
            {product.description}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;