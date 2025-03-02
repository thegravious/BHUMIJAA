import React from 'react'
import Link from 'next/link'


const Banner = () => {
    return (
        <div className='mt-10 relative'>
            <div className='absolute hidden lg:block top-24 left-20'>
                <p className='text-md font-bold uppercase'>Amazing from Bhumijaa</p>
                <h1 className='text-7xl font-serif mt-5'>Plants The <br /> Perfect Choice!</h1>
                <p className='text-2xl mt-5'>20% Discount for members</p>
                <Link className="bg-button-color text-xl text-white hover:bg-hover-button hover:text-white px-10 py-2 flex justify-center items-center w-full max-w-[250px] mt-5" href="/shop">Discoer Now</Link>
            </div>
            <img src="13.jpg" alt="" />
        </div>
    )
}

export default Banner