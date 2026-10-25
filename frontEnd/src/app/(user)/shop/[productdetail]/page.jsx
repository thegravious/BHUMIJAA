
import React from "react";
import data from "../data";

import { FiPlus } from "react-icons/fi";
import { HiMinus } from "react-icons/hi";
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
      <div className="min-h-screen mt-20 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="mt-3">Please check the product URL.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="font-[sans-serif] p-4 mt-20">
        <div className="lg:max-w-6xl max-w-xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
            <div className="w-full lg:sticky top-0">
              <div className="bg-white p-2">
                <img
                  src={`/${product.id}.png`}
                  alt={product.title}
                  className="w-full aspect-[11/8] object-cover object-top"
                />
              </div>
            </div>

            <div className="w-full mt-10">
              <h1 className="text-3xl lg:text-5xl uppercase font-serif font-bold text-gray-800">
                {product.title}
              </h1>

              <p className="text-gray-500 mt-3 text-sm">
                {product.description}
              </p>

              <div className="flex items-center mt-4">
                <h4 className="text-secondary-text text-2xl sm:text-3xl font-bold">
                  {product.price}
                </h4>
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="px-4 py-3 w-[45%] border border-primary-bg bg-white hover:bg-gray-50 text-gray-800 text-sm font-semibold"
                >
                  Add to cart
                </button>
              </div>

              <div className="flex justify-between gap-4 mt-6">
                <div className="flex flex-col items-center text-center">
                  <HiOutlineCurrencyRupee className="text-3xl text-secondary-text" />
                  <p className="text-gray-500 text-xs sm:text-sm mt-3">
                    COD available
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <RiReplay15Fill className="text-3xl text-secondary-text" />
                  <p className="text-gray-500 text-xs sm:text-sm mt-3">
                    15-Day Return Policy
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <FaTruckFast className="text-3xl text-secondary-text" />
                  <p className="text-gray-500 text-xs sm:text-sm mt-3">
                    Free Delivery On Orders Above ₹8,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 p-4 lg:p-10">
        <p className="lg:text-3xl font-semibold font-serif text-2xl lg:text-center">
          Product Description
        </p>

        <h2 className="text-2xl lg:mb-5 mt-5">
          {product.title}
        </h2>

        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Page;
