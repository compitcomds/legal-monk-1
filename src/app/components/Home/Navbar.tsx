'use client'
import React, { useState } from "react";
// import { FaBook, FaPodcast, FaRegNewspaper, FaVideo, FaWrench } from "react-icons/fa";
// import { FiBookOpen, FiMonitor, FiTool } from "react-icons/fi";
import { NavigationMenuDemo } from "./NavigationMenuDemo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
  // const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); // Mega menu toggle for all screens

  return (
    <nav className="bg-[#f9f6f3] rounded-t-xl lg:rounded-t-3xl p-4 xl:px-20 2xl:px-24">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center font-bold">
          <span className="text-blue-500 text-3xl font-bold mr-2">Legal</span>
          <span className=" text-3xl text-black">Startup Wala</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center space-x-6 font-semibold">
          <a href="#" className="text-black hover:underline">
            My Book
          </a>

          <NavigationMenuDemo />
          {/* <div
            className="relative group"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button
              className="text-black hover:underline flex items-center"
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              Free Resources
              <span className="ml-1 text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
            </button>

            
            {(isMegaMenuOpen || isMenuOpen) && (
              <div className="absolute -left-20 mt-6 w-[600px] p-10 bg-white shadow-lg rounded-lg z-50 group-hover:block">
                <div className="grid grid-cols-2 gap-10">
                  
                  <div>
                    <h3 className="font-bold text-black mb-6 text-xl">Browse by type:</h3>
                    <ul className="space-y-10 text-lg">
                      <li className="flex items-center">
                        <FaRegNewspaper className="text-orange-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Articles
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FiBookOpen className="text-green-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Book Notes
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FaVideo className="text-purple-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Videos
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FaPodcast className="text-blue-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Podcast
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FaBook className="text-yellow-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Newsletter
                        </a>
                      </li>
                    </ul>
                  </div>

                  
                  <div>
                    <h3 className="font-bold text-black mb-6 text-xl">Browse by topic:</h3>
                    <ul className="space-y-10 text-lg">
                      <li className="flex items-center">
                        <FaWrench className="text-yellow-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Productivity
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FiMonitor className="text-orange-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          YouTube
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FiTool className="text-purple-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Studying
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FaWrench className="text-blue-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Online Business
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FiTool className="text-green-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Tools & Tech
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div> */}

          <a href="#" className="text-black hover:underline">
            YouTube Academy
          </a>
          <a href="#" className="text-black hover:underline">
            Productivity Lab
          </a>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-full shadow-md">
            Join 230k+ Subscribers
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
          <a href="#" className="block text-black hover:underline">
            My Book
          </a>
          <NavigationMenuDemo />
          {/* <div>
            <button
              className="block text-black hover:underline w-full text-left"
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              Free Resources
              <span className="ml-1 text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
            </button>

            {isMegaMenuOpen && (
              <div className="mt-2 p-4 bg-white shadow-lg rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  
                  <div>
                    <h3 className="font-bold text-black mb-2">Browse by type:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <FaRegNewspaper className="text-orange-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Articles
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FiBookOpen className="text-green-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Book Notes
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FaVideo className="text-purple-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Videos
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FaPodcast className="text-blue-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Podcast
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FaBook className="text-yellow-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Newsletter
                        </a>
                      </li>
                    </ul>
                  </div>

                  
                  <div>
                    <h3 className="font-bold text-black mb-2">Browse by topic:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <FaWrench className="text-yellow-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Productivity
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FiMonitor className="text-orange-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          YouTube
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FiTool className="text-purple-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Studying
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FaWrench className="text-blue-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Online Business
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FiTool className="text-green-500 mr-2" />
                        <a href="#" className="text-black hover:underline">
                          Tools & Tech
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div> */}
          <a href="#" className="block text-black hover:underline">
            YouTube Academy
          </a>
          <a href="#" className="block text-black hover:underline">
            Productivity Lab
          </a>
          <button className="block xl:hidden bg-orange-400 text-white w-fit px-3 py-2 rounded-full shadow-md">
            Join 230k+ Subscribers
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
