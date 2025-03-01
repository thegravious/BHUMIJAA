"use client"
import React, { useState } from 'react'
import HomeProductCard from '../HomeProductCard/HomeProductCard';
import Link from 'next/link';

const OurProduct = () => {
  const arr = [2, 3, 4, 5, 6, 7];

  const [visible, setVisible] = useState(6);

  return (
    <div className='min-h-screen mt-10 flex flex-col items-center'>
      <div className='w-full max-w-6xl px-4'>
        <h1 className='text-6xl text-center font-serif'>Our Product</h1>
        <hr className='w-[200px] mx-auto mt-3 border-2' />
        
        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 place-items-center'>
          {arr.slice(0, visible).map((data, index) => (
            <HomeProductCard key={index} img={data} />
          ))}
        </div>

        {/* Explore More Button */}
        <div className='w-full flex justify-center mt-6'>
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
