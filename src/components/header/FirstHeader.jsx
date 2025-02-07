import React from 'react'
import { FiSearch } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import Link from 'next/link';

const FirstHeader = () => {
    return (
        <div>
            <div className='flex items-center justify-between p-5'>
                <div className='flex items-center'>
                    <input className='focus:outline-none mr-2 p-1 text-gray-500' placeholder='Search Product' type="text" name="" id="" />
                    <FiSearch className='text-2xl' />
                </div>
                <div>
                    {/* <img src="favicon.ico" className='w-10' alt="" /> */}
                    <Link href="/">
                        <p className='text-4xl font-black'>
                            BHUMIJAA
                        </p>
                    </Link>
                </div>
                <div className='flex items-center justify-evenly w-[150px]'>
                    <Link href="/"><LuUsers className='text-2xl hover:text-hover-text' /></Link>
                    <Link href="/"><FaRegHeart className='text-2xl hover:text-hover-text' /></Link>
                    <Link href="/"><LuShoppingBag className='text-2xl hover:text-hover-text' /></Link>
                </div>
            </div>
        </div>
    )
}

export default FirstHeader