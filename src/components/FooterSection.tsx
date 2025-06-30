import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
const FooterSection: React.FC = () => {
  return (
    <footer className="relative bg-[#111111] pb-6 pt-10 rounded-t-2xl mx-6 ">
      <div className="container mx-auto  px-2 md:px-10 lg:px-32">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="flex items-center gap-4 text-3xl font-semibold text-white">
              <Link
                href="/"
                className="flex items-center gap-3 font-bold text-blue-500 lg:text-xl"
              >
                <img className="rounded-full w-[60px]" src="/logo.png" alt="" />
                Legal Startup <br /> Wala Academy
              </Link>
            </h4>
            <h5 className="mb-2 mt-4 text-lg text-gray-400">
              At Legalstartupwala, you can gain practical knowledge and learn
              real-world skills that will help transform your life at home,
              work, and college. If you’d like to collaborate, DM your proposal
              to us through our socials
            </h5>

            {/* Social Icons */}
            <div className="my-6 flex space-x-6">
              <a
                href="https://www.instagram.com/legalstartupwala?igsh=Z3R4aXN3eGUwNnpl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl border text-white hover:text-black hover:bg-white rounded-full p-2"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@legalstartupwala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl border text-white hover:text-black hover:bg-white rounded-full p-2"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/in/parthjain98/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl border  text-white hover:text-black hover:bg-white rounded-full p-2"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:legalstartupwala.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl border  text-white hover:text-black hover:bg-white rounded-full p-2"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-6/12">
            <div className="items-top mb-6 flex flex-wrap gap-5 lg:gap-0">
              <div className="ml-auto w-full px-4 lg:w-3/6">
                <span className="mb-5 block text-xl font-semibold uppercase text-white">
                  Quick Links
                </span>
                <ul className="list-unstyled space-y-3 text-lg">
                  <li>
                    <a
                      className="block text-gray-200 hover:text-gray-500"
                      href="/courses"
                    >
                      Our Courses
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-200 hover:text-gray-500"
                      href="/support"
                    >
                      Support System
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-200 hover:text-gray-500"
                      href="mailto:support@legalstartupwala.com"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 lg:w-3/6">
                <span className="mb-5 block text-xl font-semibold uppercase text-white">
                  Policies
                </span>
                <ul className="list-unstyled space-y-3 text-lg">
                  <li>
                    <a
                      className="block text-gray-200 hover:text-gray-500"
                      href="/privacyPolicy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-200 hover:text-gray-500"
                      href="/termsAndConditions"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-600" />
        <p className="mt-5 w-full text-center text-white">
          Copyright © 2025 Legal Startup Wala
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
