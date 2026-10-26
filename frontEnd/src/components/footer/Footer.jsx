import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black flex font-sans tracking-wide">
      {/* Video section — 30% of screen height */}
      <div className="h-[70vh] w-[40%] p-10 overflow-hidden">
        <video
          src="/TrialVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      {/* Footer content — remaining section */}
      <div className="flex min-h-[70vh] flex-col justify-between px-8 py-12">
        <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm sm:col-span-2">
            <h4 className="mb-6 text-base font-semibold text-white">
              About Us
            </h4>
            <p className="text-sm leading-7 text-gray-400">
              BHUMIJAA brings comfort and quality together, helping you enjoy
              better rest with mattresses designed for everyday living.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-base font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/shop" className="text-sm text-gray-400 transition hover:text-white">
                  Shop Mattresses
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-gray-400 transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-gray-400 transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-400 transition hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="mb-6 text-base font-semibold text-white">
              Contact Us
            </h4>
            <p className="text-sm text-gray-400">India</p>
            <p className="text-sm text-gray-400">contact@bhumijaa.com</p>
          </div>
        </div>

        <div className="mx-auto mt-12 w-full max-w-screen-xl border-t border-white/15 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BHUMIJAA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;