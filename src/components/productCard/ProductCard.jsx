import React from 'react'
import Link from 'next/link'

const ProductCard = ({ img }) => {
  return (
    <div>
      <div className="flex justify-center my-20">
        <div className="lg:mx-8 lg:flex lg:max-w-5xl">
          <div className="lg:w-1/2">
          <Link href={`/shop/${img}`}>
            <img src={`${img}.png`} alt="" />
          </Link>
          </div>
          <div className="flex flex-col justify-center px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2">
            <Link href={`/shop/${img}`}>
              <h1 className="text-xl text-gray-800 uppercase font-bold">
                product title
              </h1>
            </Link>
            <p className='text-lg font-bold text-secondary-text'>price : xxxxx</p>
            <p className="mt-2 text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsum aut voluptatibus quos omnis explicabo quibusdam tempore eveniet quia quasi culpa, dignissimos sunt possimus velit minima vel repudiandae sit temporibus?
            </p>
            <div className="mt-3">
                <button className="bg-button-color text-white hover:bg-hover-button hover:text-white inline-block px-10 py-2">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard