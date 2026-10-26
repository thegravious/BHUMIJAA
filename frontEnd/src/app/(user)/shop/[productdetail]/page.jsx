import React from "react";
import data from "../data";

import { FaTruckFast } from "react-icons/fa6";
import { RiReplay15Fill } from "react-icons/ri";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import Link from "next/link";

const Page = async ({ params }) => {
  const { productdetail } = await params;

  const products = Array.isArray(data) ? data : data.default;
  const product = products?.find(
    (item) => item.extension === productdetail
  );

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <p className="mt-3 text-gray-500">
            Please check the product URL.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-white pt-20 text-black">

      {/* 1. Main image — full width and full screen height */}
      <section className="h-screen w-full overflow-hidden bg-gray-50">
        <img
          src={`/${product.image}`}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </section>

      {/* 2. Two smaller images below the main image */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-8">

          <div className="flex h-48 items-center justify-center overflow-hidden bg-gray-50 sm:h-80 lg:h-[420px]">
            <img
              src={`/${product.image}`}
              alt={`${product.title} second view`}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex h-48 items-center justify-center overflow-hidden bg-gray-50 sm:h-80 lg:h-[420px]">
            <img
              src={`/${product.image}`}
              alt={`${product.title} third view`}
              className="h-full w-full object-contain"
            />
          </div>

        </div>
      </section>

      {/* 3. Product details underneath all images */}
      <section className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10 lg:py-20">

        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
          BHUMIJAA / Mattress Collection
        </p>

        <h1 className="mt-4 font-serif text-3xl font-medium uppercase sm:text-5xl">
          {product.title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
          {product.description}
        </p>

        <div className="mt-8">
          <p className="text-sm text-gray-500">Price</p>
          <p className="mt-1 text-3xl font-semibold">
            {product.price}
          </p>
        </div>

<Link href={`/placeorder/${product.extension}`}>
  <button
    type="button"
    className="mt-8 w-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-gray-800 sm:w-80"
  >
    Place Order
  </button>
</Link>

        {/* Delivery and return information */}
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-gray-200 py-8 sm:grid-cols-3">

          <div className="flex items-center gap-4">
            <HiOutlineCurrencyRupee className="shrink-0 text-3xl" />
            <div>
              <h3 className="text-sm font-semibold">Cash on Delivery</h3>
              <p className="mt-1 text-xs text-gray-500">
                Pay when your order arrives
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <RiReplay15Fill className="shrink-0 text-3xl" />
            <div>
              <h3 className="text-sm font-semibold">15-Day Return Policy</h3>
              <p className="mt-1 text-xs text-gray-500">
                Refer to the applicable return terms
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaTruckFast className="shrink-0 text-3xl" />
            <div>
              <h3 className="text-sm font-semibold">Free Delivery</h3>
              <p className="mt-1 text-xs text-gray-500">
                On orders above ₹8,000
              </p>
            </div>
          </div>

        </div>

        {/* Full product description */}
        <div className="mt-8 border-t border-gray-200 pt-10">
          <h2 className="font-serif text-2xl sm:text-3xl">
            Product Description
          </h2>

          <h3 className="mt-6 text-lg font-medium">
            {product.title}
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            {product.description}
          </p>
        </div>

      </section>
    </main>
  );
};

export default Page;