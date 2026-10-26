import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black font-sans tracking-wide lg:flex-row">
      {/* Video section */}
      <div className="h-[25vh] min-h-[160px] w-full overflow-hidden p-3 sm:h-[30vh] sm:min-h-[200px] sm:p-4 lg:h-[360px] lg:min-h-0 lg:w-[30%] lg:shrink-0 lg:p-4 xl:h-[400px]">
        <video
          src="/TrialVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full rounded-sm object-cover"
        />
      </div>

      {/* Footer content */}
      <div className="flex min-w-0 flex-1 flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="mb-4 text-base font-semibold text-white sm:mb-6">
              About Us
            </h4>
            <p className="max-w-md text-sm leading-7 text-gray-400">
              BHUMIJAA brings comfort and quality together, helping you enjoy
              better rest with mattresses designed for everyday living.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white sm:mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                >
                  Shop Mattresses
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white sm:mb-6">
              Contact Us
            </h4>

            <ul className="space-y-3">
              <li className="text-sm text-gray-400">India</li>
              <li>
                <a
                  href="mailto:contact@bhumijaa.com"
                  className="break-all text-sm text-gray-400 transition-colors hover:text-orange-400"
                >
                  contact@bhumijaa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mx-auto mt-10 w-full max-w-screen-xl border-t border-white/15 pt-5 sm:mt-12 sm:pt-6">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} BHUMIJAA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;