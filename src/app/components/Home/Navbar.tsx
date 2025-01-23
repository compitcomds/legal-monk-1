'use client'
import React, { useState } from "react";
import { NavigationMenuDemo } from "./NavigationMenuDemo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle

  return (
    <nav className="bg-[#f9f6f3] rounded-t-xl lg:rounded-t-3xl p-4 xl:px-20 2xl:px-24">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center font-bold">
          <span className="text-blue-500 text-3xl font-bold mr-2">Legal</span>
          <span className=" text-3xl text-blue-500">Startup Wala</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center space-x-6 font-semibold">
          <a href="/" className="text-black hover:underline">
            Home
          </a>

          <NavigationMenuDemo />          

          <a href="#" className="text-black hover:underline">
            Zero-Cost Programs
          </a>
          <a href="#" className="text-black hover:underline">
            Community Courses
          </a>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-full shadow-md">
            My Support System
          </button>
        </div>

        <button
          className="xl:hidden bg-yellow-400 p-2 rounded shadow-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-900 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-900 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-900"></span>
        </button>
      </div>


      {isMenuOpen && (
        <div className="xl:hidden mt-4 space-y-2">
          <a href="/" className="text-black hover:underline">
            Home
          </a>
          <NavigationMenuDemo />
          
          <a href="#" className="block text-black hover:underline">
            Zero-Cost Programs
          </a>
          <a href="#" className="block text-black hover:underline">
            Community Courses
          </a>
          <button className="block xl:hidden bg-orange-400 text-white w-fit px-3 py-2 rounded-full shadow-md">
            My Support System
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
