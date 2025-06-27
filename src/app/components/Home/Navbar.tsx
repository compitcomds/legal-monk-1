"use client";
import React, { useState } from "react";
import { NavigationMenuDemo } from "./NavigationMenuDemo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle

  return (
    <nav className="rounded-t-xl bg-[#f9f6f3] p-4 lg:rounded-t-3xl xl:px-20 2xl:px-24">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center font-bold">
          {/* <img src="https://placehold.co/50x50" className="rounded-full" alt="" /> */}
          <span className="ml-2 text-2xl font-bold text-blue-500 2xl:text-4xl">
            Legal
          </span>
          <span className="text-2xl text-blue-500 2xl:text-4xl">
            Startup Wala
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-6 font-semibold xl:flex 2xl:text-lg">
          <a href="/" className="text-black hover:underline">
            Home
          </a>

          {/* <NavigationMenuDemo /> */}

          <a href="/notes" className="text-black hover:underline 2xl:text-lg">
            Free Resources
          </a>
          <a
            href="/#community"
            className="text-black hover:underline 2xl:text-lg"
          >
            Community Courses
          </a>
          <a
            href="/support"
            className="rounded-full bg-orange-400 px-4 py-2 text-white shadow-md"
          >
            My Support System
          </a>
        </div>

        <button
          className="rounded bg-yellow-400 p-2 shadow-md xl:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="mb-1 block h-0.5 w-6 bg-gray-900"></span>
          <span className="mb-1 block h-0.5 w-6 bg-gray-900"></span>
          <span className="block h-0.5 w-6 bg-gray-900"></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-4 flex flex-col space-y-6 xl:hidden">
          <a href="/" className="text-black hover:underline">
            Home
          </a>

          {/* <NavigationMenuDemo /> */}

          <a href="/notes" className="text-black hover:underline 2xl:text-lg">
            Free Resources
          </a>
          <a
            href="/#community"
            className="text-black hover:underline 2xl:text-lg"
          >
            Community Courses
          </a>
          <a
            href="/support"
            className="w-fit rounded-full bg-orange-400 px-4 py-2 text-white shadow-md"
          >
            My Support System
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
