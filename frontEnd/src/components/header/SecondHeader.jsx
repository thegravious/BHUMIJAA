"use client";

import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import Link from 'next/link';

const SecondHeader = () => {
    const [bgColor, setBgColor] = useState("bg-transparent");
    const [textColor, setTextColor] = useState("text-black");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setBgColor("bg-black bg-opacity-95");
                setTextColor("text-white");
            } else {
                setBgColor("bg-transparent");
                setTextColor("text-black");
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
                    <Link className={`flex justify-around ${textColor} transition-colors duration-300 item-center w-[250px]`} href="/">
                        <p className="text-4xl font-black ">
                            BHUMIJAA
                        </p>
                        {/* <img className='w-10' src="./bhumija-cursor-removebg-preview.png" alt="" /> */}
                    </Link>
                </div>

                {/* Navigation Menu — Exact Center */}
                <div className={`absolute left-1/2 ${textColor} flex x-translate-x-1/2 items-center gap-14 capitalize`}>
                    <Link
                        href="/"
                        className="text-xl uppercase transition-colors duration-300 hover:text-hover-text"
                    >
                        Home
                    </Link>

                    <Link
                        href="/shop"
                        className="text-xl uppercase transition-colors duration-300 hover:text-hover-text"
                    >
                        Shop
                    </Link>

                    <Link
                        href="/blogs"
                        className="text-xl uppercase transition-colors duration-300 hover:text-hover-text"
                    >
                        Blog
                    </Link>

                    <Link
                        href="/contact"
                        className="text-xl uppercase transition-colors duration-300 hover:text-hover-text"
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





// "use client";

// import React, { useEffect, useState } from 'react';
// import { FiSearch } from "react-icons/fi";
// import { LuUsers } from "react-icons/lu";
// import { FaRegHeart } from "react-icons/fa";
// import { LuShoppingBag } from "react-icons/lu";
// import Link from 'next/link';

// const SecondHeader = () => {
//     const [bgColor, setBgColor] = useState("bg-transparent");
//     const [textColor, setTextColor] = useState("text-black");

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 40) {
//                 setBgColor("bg-white bg-opacity-95");
//                 setTextColor("text-black");
//             } else {
//                 setBgColor("bg-transparent");
//                 setTextColor("text-white");
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         handleScroll();

//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <header className="fixed top-0 left-0 z-50 w-full">
//             <nav className={`${bgColor} relative w-full flex items-center justify-between transition-all duration-500`}>

//                 {/* Logo — Left */}
//                 <div className="p-4">
//                     <Link className={`flex justify-around ${textColor} transition-colors duration-300 item-center w-[250px]`} href="/">
//                         <p className="text-4xl font-black ">
//                             BHUMIJAA
//                         </p>
//                         <img className='w-10' src="./bhumija-cursor-removebg-preview.png" alt="" />
//                     </Link>
//                 </div>

//                 {/* Navigation Menu — Exact Center */}
//                 <div className={`absolute left-1/2 flex x-translate-x-1/2 items-center gap-14 capitalize`}>
//                     <Link
//                         href="/"
//                         className="text-xl uppercase transition-colors duration-300 hover:text-hover-text"
//                     >
//                         Home
//                     </Link>

//                     <Link
//                         href="/shop"
//                         className="text-xl uppercase transition-colors duration-300 hover:text-hover-text"
//                     >
//                         Shop
//                     </Link>

//                     <Link
//                         href="/blogs"
//                         className="text-xl uppercase transition-colors duration-300 hover:text-hover-text"
//                     >
//                         Blog
//                     </Link>

//                     <Link
//                         href="/contact"
//                         className="text-xl uppercase transition-colors duration-300 hover:text-hover-text"
//                     >
//                         Contact Us
//                     </Link>
//                 </div>

//                 {/* Search, Login, Wishlist and Shopping Bag — Disabled */}
//                 {/*
//                 <div className={`flex items-center justify-evenly ${textColor} w-[650px] p-4`}>
//                     <input
//                         className="bg-transparent text-gray-400 focus:outline-none"
//                         placeholder="Search Product"
//                         type="text"
//                     />

//                     <Link href="/">
//                         <FiSearch className="text-2xl hover:text-hover-text" />
//                     </Link>

//                     <Link href="/">
//                         <LuUsers className="text-2xl hover:text-hover-text" />
//                     </Link>

//                     <Link href="/">
//                         <FaRegHeart className="text-2xl hover:text-hover-text" />
//                     </Link>

//                     <Link href="/">
//                         <LuShoppingBag className="text-2xl hover:text-hover-text" />
//                     </Link>
//                 </div>
//                 */}

//             </nav>
//         </header>
//     );
// };

// export default SecondHeader;