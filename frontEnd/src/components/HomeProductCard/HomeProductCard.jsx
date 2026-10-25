
import React from "react";
import Link from "next/link";

const HomeProductCard = ({ img , data }) => {
  return (
    <div className="w-full max-w-xs h-[350px] flex flex-col justify-between overflow-hidden bg-white shadow-lg">
      <Link href={`/shop/${img.extension}`}>
        <img
          className="object-cover w-full h-48"
          src={`${img.id}.png`}
          alt={img.title}
        />

        <div className="px-4 py-2">
          <h1 className="text-xl font-bold uppercase">
            {img.title}
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            {img.description}
          </p>
        </div>
      </Link>

      <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
        <h1 className="text-lg font-bold">{img.price}</h1>

        <button
          type="button"
          className="bg-button-color text-white rounded-md hover:bg-hover-button text-xs inline-block px-4 py-1"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default HomeProductCard;
