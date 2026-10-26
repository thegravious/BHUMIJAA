"use client";

import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      review:
        "Absolutely love the quality of the plants! Fresh, healthy, and delivered on time.",
      rating: 5,
      img: "2.png",
    },
    {
      name: "Meera Kapoor",
      review:
        "Great service and an amazing collection. My home garden looks better than ever!",
      rating: 4.5,
      img: "3.png",
    },
    {
      name: "Rohan Das",
      review:
        "Fast delivery and well-packaged plants. Highly recommend for plant lovers!",
      rating: 5,
      img: "4.png",
    },
    {
      name: "Simran Khanna",
      review:
        "The discounts for members make it totally worth it. Will shop again soon!",
      rating: 4,
      img: "5.png",
    },
    {
      name: "Vikram Patel",
      review:
        "Customer service was super helpful in guiding me to the right plants for my space.",
      rating: 5,
      img: "6.png",
    },
    {
      name: "Priya Verma",
      review:
        "The website is easy to navigate, and the plants are exactly as described.",
      rating: 4.5,
      img: "7.png",
    },
    {
      name: "Aditya Malhotra",
      review:
        "I love how fresh and vibrant my plants look. Packaging was eco-friendly too!",
      rating: 5,
      img: "8.png",
    },
    {
      name: "Neha Singh",
      review:
        "Good pricing and variety, but I wish there were more indoor plant options.",
      rating: 4,
      img: "9.png",
    },
    {
      name: "Kabir Joshi",
      review:
        "Excellent quality and quick support. My plants arrived in perfect condition!",
      rating: 5,
      img: "10.png",
    },
    {
      name: "Ananya Rao",
      review:
        "Very satisfied with my purchase. The plants have made my workspace much livelier!",
      rating: 4.5,
      img: "11.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused, testimonials.length]);

  const previousTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="flex w-full items-center justify-center bg-black font-sans text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Heading */}
        <h2 className="text-center font-serif text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          What Clients Are Saying
        </h2>

        {/* Decorative underline */}
        <div className="mx-auto mt-5 flex items-center justify-center">
          <span className="h-1 w-20 rounded-full bg-primary-bg sm:w-32" />
          <span className="mx-1 h-1 w-3 rounded-full bg-primary-bg" />
          <span className="h-1 w-1 rounded-full bg-primary-bg" />
        </div>

        {/* Testimonial carousel */}
        <div
          className="mx-auto mt-10 flex w-full max-w-5xl items-center gap-2 sm:mt-14 sm:gap-6 md:gap-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
        >
          {/* Previous */}
          <button
            type="button"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 transition hover:border-white hover:bg-white hover:text-black sm:h-11 sm:w-11 md:h-12 md:w-12"
          >
            <FaChevronLeft className="text-sm sm:text-base" />
          </button>

          {/* Testimonial content */}
          <div
            key={currentIndex}
            className="min-w-0 flex-1 text-center"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="mx-auto min-h-[120px] max-w-2xl text-sm leading-7 text-gray-200 sm:min-h-[100px] sm:text-base sm:leading-8 md:text-lg">
              “{currentTestimonial.review}”
            </p>

            {/* Customer image */}
            <div className="mt-5 flex flex-col items-center sm:mt-7">
              <img
                className="h-14 w-14 rounded-full border border-white/30 object-cover sm:h-16 sm:w-16"
                src={`/${currentTestimonial.img}`}
                alt={currentTestimonial.name}
                loading="lazy"
              />

              <h3 className="mt-3 text-base font-semibold sm:mt-4 sm:text-lg">
                {currentTestimonial.name}
              </h3>

              {/* Rating */}
              <div
                className="mt-2 flex flex-wrap items-center justify-center gap-1"
                aria-label={`Rating: ${currentTestimonial.rating} out of 5`}
              >
                {[1, 2, 3, 4, 5].map((star) => {
                  const filled = currentTestimonial.rating >= star;
                  const half = currentTestimonial.rating === star - 0.5;

                  return (
                    <span
                      key={star}
                      className={`text-lg ${
                        filled || half
                          ? "text-white"
                          : "text-white/30"
                      }`}
                      aria-hidden="true"
                    >
                      {half ? "◐" : "★"}
                    </span>
                  );
                })}

                <span className="ml-1 text-xs text-gray-400 sm:text-sm">
                  {currentTestimonial.rating}/5
                </span>
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 transition hover:border-white hover:bg-white hover:text-black sm:h-11 sm:w-11 md:h-12 md:w-12"
          >
            <FaChevronRight className="text-sm sm:text-base" />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-7 bg-white sm:w-8"
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