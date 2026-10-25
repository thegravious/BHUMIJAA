"use client"
import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const Testimonials = () => {
    const testimonials = [
        {
            name: "Aarav Sharma",
            review: "Absolutely love the quality of the plants! Fresh, healthy, and delivered on time.",
            rating: 5,
            img: "2.png"
        },
        {
            name: "Meera Kapoor",
            review: "Great service and an amazing collection. My home garden looks better than ever!",
            rating: 4.5,
            img: "3.png"
        },
        {
            name: "Rohan Das",
            review: "Fast delivery and well-packaged plants. Highly recommend for plant lovers!",
            rating: 5,
            img: "4.png"
        },
        {
            name: "Simran Khanna",
            review: "The discounts for members make it totally worth it. Will shop again soon!",
            rating: 4,
            img: "5.png"
        },
        {
            name: "Vikram Patel",
            review: "Customer service was super helpful in guiding me to the right plants for my space.",
            rating: 5,
            img: "6.png"
        },
        {
            name: "Priya Verma",
            review: "The website is easy to navigate, and the plants are exactly as described.",
            rating: 4.5,
            img: "7.png"
        },
        {
            name: "Aditya Malhotra",
            review: "I love how fresh and vibrant my plants look. Packaging was eco-friendly too!",
            rating: 5,
            img: "8.png"
        },
        {
            name: "Neha Singh",
            review: "Good pricing and variety, but I wish there were more indoor plant options.",
            rating: 4,
            img: "9.png"
        },
        {
            name: "Kabir Joshi",
            review: "Excellent quality and quick support. My plants arrived in perfect condition!",
            rating: 5,
            img: "10.png"
        },
        {
            name: "Ananya Rao",
            review: "Very satisfied with my purchase. The plants have made my workspace much livelier!",
            rating: 4.5,
            img: "11.png"
        }
    ];
    
    
    const [currentIndex, setIndex] = React.useState(0)


    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <section className="bg-gray-100">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-6xl text-center font-serif">
                        What clients saying
                    </h1>

                    <div className="flex items-center justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-primary-bg rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-primary-bg rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-primary-bg rounded-full"></span>
                    </div>

                    <div className="flex items-start justify-center max-w-6xl mx-auto mt-16">
                        <button onClick={() => {
                            setIndex(currentIndex + 1)
                            if (currentIndex == 9) {
                                setIndex(0)
                            }
                        }} title="left arrow" className="hidden p-2 text-gray-800 transition-colors hover:text-white duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-300 lg:block hover:bg-button-color">
                            <FaChevronLeft className='text-black text-xl' />
                        </button>
                        <div className='w-full transition-all duration-500'> 
                            <p className="flex items-center justify-center text-center text-gray-500 lg:mx-8">
                                {
                                    testimonials[currentIndex].review
                                }
                            </p>

                            <div className="flex flex-col items-center justify-center mt-8">
                                <img className="object-cover rounded-full w-14 h-14" src={`/${testimonials[currentIndex].img}`} alt="" />

                                <div className="mt-4 text-center">
                                    <h1 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h1>
                                    <span className="text-sm text-gray-500">{testimonials[currentIndex].rating}</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={()=>{
                            setIndex(currentIndex - 1)
                            if(currentIndex == 0){
                                setIndex(9)
                            }
                        }} title="right arrow" className="hidden p-2 text-gray-800 transition-colors hover:text-white duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-300 lg:block hover:bg-button-color">
                            <FaChevronRight className='text-xl text-black' />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials