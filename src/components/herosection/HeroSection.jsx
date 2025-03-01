import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <div
            className='herobanner flex items-center justify-center h-[100vh] bg-cover bg-center' style={{ backgroundImage: "url('/9.png')" }}>
            <div className='text-gray-300 bg-blue-40 w-2/4 h-2/4'>
                <div className='border-l border-white relative left-20 w-1/4'>
                    <p className=' text-md ml-2'>AMAZING <br /> FROM BHUMIJAA</p>
                </div>
                <div className='mt-14'>
                    <h1 className='text-7xl font-black text-center w-full uppercase'>Where Green Meets Grace.</h1>
                </div>
                <div className='relative left-20 w-2/4 mt-16 lg:block hidden'>
                    <Link className='bg-button-color font-black text-gray-300 hover:bg-hover-button py-4 text-xl  px-20' href="">Adopt A Leaf</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection