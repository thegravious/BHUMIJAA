
import React from "react";
import HomeProductCard from "../HomeProductCard/HomeProductCard";
import data from '../DATA/ProductData'

const BestSeller = () => {

  return (
    <div className="min-h-[80vh] mt-10 flex flex-col items-center">
      <h1 className="text-6xl text-center font-serif mt-10">
        Best Sellers
      </h1>

      <hr className="w-[200px] mx-auto mt-3 border-2" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 place-items-center">
        {data.slice(0,3).map((data) => (
          <HomeProductCard key={data.id} img={data} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
