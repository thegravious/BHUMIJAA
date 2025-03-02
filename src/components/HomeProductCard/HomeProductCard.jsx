import React from 'react'
import Link from 'next/link'

const HomeProductCard = ({ img }) => {
    return (
        <div>
            <div className="max-w-xs overflow-hidden bg-white shadow-lg">
                <Link href={`/shop/${img}`}>
                    <img className="object-cover w-full h-48" src={`${img}.png`} alt="NIKE AIR" />
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold uppercase">Product Title</h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                    </div>
                </Link>
                <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
                    <h1 className="text-lg font-bold">$129</h1>
                    <button className="bg-button-color text-white rounded-md hover:bg-hover-button hover:text-white text-xs inline-block px-4 py-1">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default HomeProductCard