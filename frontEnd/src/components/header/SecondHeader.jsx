"use client";

import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import Link from 'next/link';

const SecondHeader = () => {
    const [bgColor, setBgColor] = useState("bg-transparent");
    const [textColor, setTextColor] = useState("text-gray-400");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 90) {
                setBgColor("bg-white bg-opacity-95");
                setTextColor("text-gray-500");
            } else {
                setBgColor("bg-transparent");
                setTextColor("text-gray-400");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <nav className={`${bgColor} relative w-full flex items-center justify-between transition-all duration-500`}>

                {/* Logo — Left */}
                <div className="p-4">
                    <Link href="/">
                        <p className="text-4xl text-secondary-text font-black">
                            BHUMIJAA
                        </p>
                    </Link>
                </div>

                {/* Navigation Menu — Exact Center */}
                <div className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-14 ${textColor} capitalize`}>

                    <Link
                        href="/"
                        className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        href="/shop"
                        className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300"
                    >
                        Shop
                    </Link>

                    <Link
                        href="/blogs"
                        className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300"
                    >
                        Blog
                    </Link>

                    <Link
                        href="/contact"
                        className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Search, Login, Wishlist and Shopping Bag — Disabled */}
                {/*
                <div className={`flex items-center justify-evenly ${textColor} w-[650px] p-4`}>
                    <input
                        className="bg-transparent text-gray-400 focus:outline-none"
                        placeholder="Search Product"
                        type="text"
                    />

                    <Link href="/">
                        <FiSearch className="text-2xl hover:text-hover-text" />
                    </Link>

                    <Link href="/">
                        <LuUsers className="text-2xl hover:text-hover-text" />
                    </Link>

                    <Link href="/">
                        <FaRegHeart className="text-2xl hover:text-hover-text" />
                    </Link>

                    <Link href="/">
                        <LuShoppingBag className="text-2xl hover:text-hover-text" />
                    </Link>
                </div>
                */}

            </nav>
        </header>
    );
};

export default SecondHeader;