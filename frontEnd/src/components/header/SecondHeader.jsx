"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const SecondHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  const textColor = scrolled ? "text-white" : "text-black";
  const headerBg = scrolled ? "bg-black/95 shadow-md" : "bg-transparent";

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav
        className={`relative flex min-h-[72px] w-full items-center justify-between px-4 py-3 transition-all duration-300 sm:px-6 lg:px-10 ${headerBg}`}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className={`relative z-50 text-2xl font-black tracking-wide transition-colors duration-300 sm:text-3xl lg:text-4xl ${textColor}`}
        >
          BHUMIJAA
        </Link>

        {/* Desktop and tablet navigation */}
        <div
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 whitespace-nowrap md:flex lg:gap-10 xl:gap-14 ${textColor}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase transition-colors duration-300 hover:text-orange-400 lg:text-base xl:text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className={`relative z-50 rounded-md p-2 transition-colors duration-300 hover:text-orange-400 md:hidden ${textColor}`}
        >
          {menuOpen ? <FiX size={27} /> : <FiMenu size={27} />}
        </button>
      </nav>

      {/* Mobile navigation panel */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
            Explore Bhumijaa
          </p>

          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="text-2xl font-semibold uppercase tracking-wide text-black transition-colors duration-200 hover:text-orange-500 sm:text-3xl"
              style={{ transitionDelay: menuOpen ? `${index * 50}ms` : "0ms" }}
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-6 h-1 w-12 rounded-full bg-orange-400" />
        </div>
      </div>
    </header>
  );
};

export default SecondHeader;