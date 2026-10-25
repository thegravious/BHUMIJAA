"use client"
import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import Link from 'next/link';

const SecondHeader = () => {
    const [bgColor, setBgColor] = useState("bg-transparent");
    const [textColor , setTextColor] = React.useState("text-gray-400")

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setBgColor("bg-white bg-opacity-95");
                 setTextColor("text-gray-500")
            } else {
                setBgColor("bg-transparent");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 z-50">
            <nav className={`${bgColor} w-full flex items-center justify-evenly transition-all duration-450`}>
                <div className="p-4">
                    <Link href="/">
                        <p className="text-4xl text-secondary-text font-black">
                            BHUMIJAA
                        </p>
                    </Link>
                </div>
                <div className={`container flex items-center justify-center p-6 mx-auto ${textColor} capitalize`}>
                    <Link href="/" className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300 ml-14">Home</Link>
                    <Link href="/shop" className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300 ml-14">Shop</Link>
                    <Link href="/blogs" className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300 ml-14">Blog</Link>
                    <Link href="#" className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300 ml-14">Pages</Link>
                    <Link href="#" className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300 ml-14">Contact Us</Link>
                </div>
                <div className={`flex items-center justify-evenly ${textColor} w-[650px] p-4`}>
                    <input className='bg-transparent text-gray-400 focus:outline-none' placeholder='Search Product' type="text" name="" id="" />
                    <Link href="/"><FiSearch className="text-2xl hover:text-hover-text" /></Link>
                    <Link href="/"><LuUsers className="text-2xl hover:text-hover-text" /></Link>
                    <Link href="/"><FaRegHeart className="text-2xl hover:text-hover-text" /></Link>
                    <Link href="/"><LuShoppingBag className="text-2xl hover:text-hover-text" /></Link>
                </div>
            </nav>
        </div>
    );
}

export default SecondHeader;
