"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import { FiPlus } from "react-icons/fi";
import { HiMinus } from "react-icons/hi";
import { FaTruckFast } from "react-icons/fa6";
import { RiReplay15Fill } from "react-icons/ri";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";

const page = () => {
    const { productdetail } = useParams()
    return (
        <div>
            <div className="font-[sans-serif] p-4 mt-20">
                <div className="lg:max-w-6xl max-w-xl mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
                        <div className="w-full lg:sticky top-0">
                            <div className="flex flex-col gap-4">
                                <div className="bg-white p-2">
                                    <img src={`/${productdetail}.png`} alt="Product"
                                        className="w-full  aspect-[11/8] object-cover object-top" />
                                </div>
                                <div className="bg-white p-2 w-full max-w-full overflow-auto">
                                    <div className="flex justify-between flex-row gap-4 shrink-0">
                                        <img src={`/${productdetail}.png`} alt="Product1"
                                            className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-black" />
                                        <img src={`/${productdetail}.png`} alt="Product2"
                                            className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent" />
                                        <img src={`/${productdetail}.png`} alt="Product3"
                                            className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent" />
                                        <img src={`/${productdetail}.png`} alt="Product4"
                                            className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent" />
                                        <img src={`/${productdetail}.png`} alt="Product5"
                                            className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent" />
                                        <img src={`/${productdetail}.png`} alt="Product6"
                                            className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-10">
                            <div>
                                <h1 className="text-3xl lg:text-5xl uppercase font-serif font-bold text-gray-800">Product Title</h1>
                                <div className="mt-2">
                                    <p className="text-gray-500 mt-1 text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero voluptas, sed excepturi ut ab necessitatibus rem provident accusantium temporibus reiciendis ipsam exercitationem nam dolor officiis perferendis repudiandae delectus soluta.
                                    </p>
                                </div>

                                <div className="flex items-center mb-2 flex-wrap gap-2 mt-4">
                                    <h4 className="text-secondary-text text-2xl sm:text-3xl font-bold">$12</h4>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2 items-center border border-primary-bg bg-white px-3 py-2.5 w-max">
                                    <button type="button" className="border-none outline-none">
                                        <HiMinus />
                                    </button>
                                    <span className="text-gray-800 text-sm font-semibold px-3">1</span>
                                    <button type="button" className="border-none outline-none">
                                        <FiPlus />
                                    </button>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-4">
                                    <button type="button"
                                        className="px-4 py-3 w-[45%] border border-primary-bg bg-white hover:bg-gray-50 text-gray-800 text-sm font-semibold">Add to cart</button>
                                </div>
                            </div>



                            <div className='flex justify-between gap-4 mt-6'>
                                <div className="flex flex-col items-center">
                                    <HiOutlineCurrencyRupee className='text-3xl text-secondary-text' />
                                    <p className='text-gray-500 text-xs sm:text-sm mt-3'>COD available</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <RiReplay15Fill className='text-3xl text-secondary-text' />
                                    <p className='text-gray-500 text-xs sm:text-sm mt-3'>15-Day Return Policy</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaTruckFast className='text-3xl text-secondary-text' />
                                    <p className='text-gray-500 text-xs sm:text-sm mt-3'>Free Delivery On Orders Above $100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className='my-10  p-10'>
                    <p className='text-3xl font-semibold font-serif text-center'>Product Description</p>
                    <h2 className='text-2xl mb-5'>Product title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam modi minus officiis quis eligendi quae magnam eius repellendus? Quia asperiores assumenda inventore eius nulla dolore aliquam animi commodi mollitia vel!
                        Totam iste, odio tenetur voluptates veniam accusamus dolores. Delectus, itaque. Perferendis cum ipsum libero ipsa voluptatibus omnis et vero accusantium deserunt laudantium? Quidem dolores ex explicabo beatae possimus? Quibusdam, aut!
                        Nemo voluptatum consequatur, magni culpa delectus a dignissimos eligendi harum vitae, eos commodi omnis doloremque quaerat nisi recusandae modi excepturi! Illum, consequatur aliquam necessitatibus optio dolorum impedit deleniti tempora quas?
                        Consequuntur eum quis sapiente? Facere similique aliquam deserunt perspiciatis minima ducimus repudiandae iste soluta beatae, nisi totam neque tempora mollitia ipsum dolorum eaque error sint sunt quas quis vero excepturi.
                        Ipsa delectus, praesentium molestias in assumenda omnis eius, consectetur rem atque dolores doloribus inventore. Molestias ipsum, animi perspiciatis expedita at necessitatibus? Dolorum libero placeat, ea in est officia laboriosam vitae.
                        Aliquam tempora, sunt magni maxime laboriosam error recusandae deleniti non. Temporibus, suscipit numquam! Possimus, labore. Molestiae soluta non eveniet molestias nemo recusandae alias repellat odio beatae maxime, et saepe corrupti?
                        Tenetur autem omnis saepe rerum, laudantium dolorum nihil voluptate. Illo quo consectetur ipsam nostrum possimus nemo sapiente numquam, dolor, sed quaerat voluptatum perspiciatis iusto, facere cum odit placeat eos dignissimos.
                        Quis reprehenderit quos necessitatibus eum aspernatur, in architecto repellat voluptate mollitia quasi possimus temporibus tempore a harum dignissimos! Deserunt beatae molestiae dolorum totam sunt, quo odit architecto sapiente? Est, aliquid.
                        Tenetur ducimus, sunt eius libero ipsum cupiditate exercitationem. Necessitatibus nemo qui officiis aperiam explicabo exercitationem dolorum, consequatur iure excepturi, quibusdam optio. Praesentium laudantium tenetur aspernatur vel in error eaque cum.
                        Dolor aspernatur ad excepturi adipisci, maxime odit consectetur ipsa deleniti iste quis esse exercitationem voluptate aut doloribus unde nesciunt magni harum repellendus voluptas deserunt rem est. Sint nobis obcaecati sapiente!
                    </p>
                    <h3 className='text-xl mt-5'>Positive Effect</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aperiam quidem minima dolor, modi voluptatum quos laudantium aliquid, tempora exercitationem quisquam excepturi ducimus. Sequi dolorem quibusdam at magni, blanditiis dolor!
                        Minus, velit, incidunt fugit, omnis nisi nulla explicabo repudiandae autem reiciendis quibusdam voluptates? Praesentium ratione consectetur, ipsam tempora, nobis natus maxime odio pariatur aut architecto voluptate voluptatem laudantium a soluta.
                    </p>
                </div>

        </div>
    )
}

export default page