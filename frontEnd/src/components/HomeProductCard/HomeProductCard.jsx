
"use client";

import Link from "next/link";

const HomeProductCard = ({ img, data }) => {
  const borderColor =
    data === "bg-black"
      ? "border-2 border-[#FF9E20]"
      : "";
  return (
    <div
      className={`flex h-[340px] flex-col mb-10 items-center overflow-hidden sm:h-[420px] lg:h-[480px]`}
    >
      {/* Image only is clickable */}
      <div className="flex min-h-0 flex-1 items-center justify-center">
        <Link
          href={`/shop/${img.extension}`}
          aria-label={img.title}
          className="inline-block max-h-full max-w-full"
        >
          <img
            src={`/${img.image}`}
            alt={img.title}
            className="block max-h-[280px] w-auto max-w-full object-contain sm:max-h-[350px] lg:max-h-[400px]"
          />
        </Link>
      </div>

      {/* Title outside the link */}
        <Link href={`/shop/${img.extension}`}>
      <p className={`${borderColor} mt-7 inline-flex min-h-12 w-full items-center justify-center bg-black px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#FF9E20] sm:mt-8 sm:w-80 sm:text-sm sm:tracking-widest"`}>
        {img.title}
      </p>
        </Link>
    </div>
  );
};

export default HomeProductCard;
