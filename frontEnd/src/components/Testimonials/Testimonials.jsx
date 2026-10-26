"use client";

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      review: "Absolutely love the quality of the plants! Fresh, healthy, and delivered on time.",
      rating: 5,
      img: "2.png",
    },
    {
      name: "Meera Kapoor",
      review: "Great service and an amazing collection. My home garden looks better than ever!",
      rating: 4.5,
      img: "3.png",
    },
    {
      name: "Rohan Das",
      review: "Fast delivery and well-packaged plants. Highly recommend for plant lovers!",
      rating: 5,
      img: "4.png",
    },
    {
      name: "Simran Khanna",
      review: "The discounts for members make it totally worth it. Will shop again soon!",
      rating: 4,
      img: "5.png",
    },
    {
      name: "Vikram Patel",
      review: "Customer service was super helpful in guiding me to the right plants for my space.",
      rating: 5,
      img: "6.png",
    },
    {
      name: "Priya Verma",
      review: "The website is easy to navigate, and the plants are exactly as described.",
      rating: 4.5,
      img: "7.png",
    },
    {
      name: "Aditya Malhotra",
      review: "I love how fresh and vibrant my plants look. Packaging was eco-friendly too!",
      rating: 5,
      img: "8.png",
    },
    {
      name: "Neha Singh",
      review: "Good pricing and variety, but I wish there were more indoor plant options.",
      rating: 4,
      img: "9.png",
    },
    {
      name: "Kabir Joshi",
      review: "Excellent quality and quick support. My plants arrived in perfect condition!",
      rating: 5,
      img: "10.png",
    },
    {
      name: "Ananya Rao",
      review: "Very satisfied with my purchase. The plants have made my workspace much livelier!",
      rating: 4.5,
      img: "11.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const previousTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="flex min-h-[90vh] items-center justify-center bg-black font-sans">
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        {/* Heading */}
        <h1 className="text-center font-serif text-4xl text-white sm:text-5xl lg:text-6xl">
          What Clients Are Saying
        </h1>

        <div className="mx-auto mt-6 flex items-center justify-center">
          <span className="inline-block h-1 w-40 rounded-full bg-primary-bg" />
          <span className="mx-1 inline-block h-1 w-3 rounded-full bg-primary-bg" />
          <span className="inline-block h-1 w-1 rounded-full bg-primary-bg" />
        </div>

        {/* Centered testimonial */}
        <div className="mx-auto mt-12 flex max-w-5xl items-center justify-center gap-3 sm:mt-16 sm:gap-8">
          <button
            onClick={previousTestimonial}
            title="Previous testimonial"
            aria-label="Previous testimonial"
            className="shrink-0 rounded-full border border-white/40 p-3 text-white transition duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <FaChevronLeft className="text-lg" />
          </button>

          <div
            className="w-full max-w-3xl text-center"
            aria-live="polite"
          >
            <p className="min-h-20 text-base leading-8 text-white sm:text-lg">
              “{currentTestimonial.review}”
            </p>

            <div className="mt-8 flex flex-col items-center justify-center">
              <img
                className="h-16 w-16 rounded-full border border-white/30 object-cover"
                src={`/${currentTestimonial.img}`}
                alt={currentTestimonial.name}
              />

              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold text-white">
                  {currentTestimonial.name}
                </h2>

                <div
                  className="mt-2 flex items-center justify-center gap-1"
                  aria-label={`Rating: ${currentTestimonial.rating} out of 5`}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        star <= currentTestimonial.rating
                          ? "text-white"
                          : "text-white/30"
                      }
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-sm text-white">
                    {currentTestimonial.rating}/5
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            title="Next testimonial"
            aria-label="Next testimonial"
            className="shrink-0 rounded-full border border-white/40 p-3 text-white transition duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <FaChevronRight className="text-lg" />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;