import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = `translateX(-16rem)`;
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = `translateX(16rem)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-[80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="bg image navbar"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between z-50 transition duration-500 ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <Image
            src={assets.logo_alafajar}
            className="w-32 cursor-pointer mr-14"
            alt="icon logo"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition duration-500 ${
            isScroll
              ? ""
              : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon icon"
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="icon contact"
              className="w-3"
            />
          </a>
          <button className="block md:hidden ml-3">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="black icon"
              className="w-6"
              onClick={openMenu}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkTheme dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="icon close"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" className="font-ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
