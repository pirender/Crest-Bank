/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Change 100 to the scroll position you want
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-300 fixed top-0 z-50 w-full ${
        isScrolled ? "bg-[#0c2243]" : "bg-transparent"
      }`}
    >
      <div className="mycontainer">
        <div
          className={`navbar ${
            isScrolled ? "" : "border-b-white border-b-[1px]"
          }`}
        >
          <div className="navbar-start">
            <div className="lg:h-[50px] lg:w-[65px] h-[45px] w-[55px]">
              <a href="/">
                <img
                  src="/crest.png"
                  alt="logo"
                  className="h-full w-full object-cover"
                />
              </a>
            </div>
          </div>

          <div className="hidden lg:navbar-center lg:flex text-white">
            <ul className=" flex items-center gap-7">
              <li>
                <a
                  href="/"
                  className="hover:text-accent font-bold transition-all ease-in-out duration-[0.2s]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-accent font-bold transition-all ease-in-out duration-[0.2s]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/loan"
                  className="hover:text-accent font-bold transition-all ease-in-out duration-[0.2s]"
                >
                  Loan
                </a>
              </li>
              <li>
                <a
                  href="faq"
                  className="hover:text-accent font-bold transition-all ease-in-out duration-[0.2s]"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  className="hover:text-accent font-bold transition-all ease-in-out duration-[0.2s]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden lg:navbar-end lg:flex text-white">
            <a href="/login">
              <button className="border-white border-[1px] h-[2.5rem] text-center rounded-[30px] w-[120px] text-white">
               Login
              </button>
            </a>
          </div>

          <div className="navbar-end lg:hidden">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content flex flex-col gap-2 top-14 right-0 text-white font-bold bg-[#0c2243] rounded-box z-[10] mt-3 w-52 p-3 shadow"
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/loan">Loans</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;