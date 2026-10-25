import React from 'react'
import Link from 'next/link'

const ProductCard = ({ data }) => {

  return (
    <div>
      <div className="flex justify-center my-20">
        <div className="lg:mx-8 lg:flex lg:max-w-5xl">
          <div className="lg:w-1/2">
            <Link href={`/shop/${data.extension}`}>
              <img src={`${data.id}.png`} alt={data.title} />
            </Link>
          </div>

          <div className="flex flex-col justify-center px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2">
            <Link href={`/shop/${data.extension}`}>
              <h1 className="text-xl text-gray-800 uppercase font-bold">
                {data.title}
              </h1>
            </Link>

            <p className="text-lg font-bold text-secondary-text">
              Price: {data.price}
            </p>

            <p className="mt-2 text-xs text-gray-600">
              {data.description}
            </p>

            <div className="mt-3">
              <button className="bg-button-color text-white hover:bg-hover-button hover:text-white inline-block px-10 py-2">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard