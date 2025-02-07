import React from 'react'

const SecondHeader = () => {
    return (
        <div>
            <nav className="bg-white">
                <div className="container sticky w-full top-0 flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
                    <a href="#" className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300 ml-14 transform">Home</a>
                    <a href="#" className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300 ml-14 transform">Shop</a>
                    <a href="#" className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300 ml-14 transform">Blog</a>
                    <a href="#" className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300 ml-14 transform">Pages</a>
                    <a href="#" className="hover:text-hover-text font-bold uppercase text-[14.5px] transition-colors duration-300 ml-14 transform">Contact Us</a>
                </div>
            </nav>
        </div>
    )
}

export default SecondHeader