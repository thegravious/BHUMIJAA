import React from "react";
import Link from "next/link";

const HomeProductCard = ({ img }) => {
  return (
    <div className="flex h-[340px] flex-col items-center overflow-hidden sm:h-[420px] lg:h-[480px]">
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
      <p className="w-full pb-4 text-center  text-black text-xl font-light">
        {img.title}
      </p>
    </div>
  );
};

export default HomeProductCard;