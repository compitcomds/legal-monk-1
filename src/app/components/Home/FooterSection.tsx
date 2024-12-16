'use client'
import React from "react";

const FooterSection: React.FC = () => {
    return (
        <footer className="bg-[#f9f6f3] py-10 px-6 md:px-20 2xl:px-40">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                    <div className="space-y-8 w-full">
                        <div className="flex items-center justify-center md:justify-start">
                            <img
                                src="https://via.placeholder.com/100x40" // Replace with actual logo image URL
                                alt="Ali Abdaal Logo"
                                className="w-20 h-auto"
                            />
                            <h1 className="ml-3 text-2xl font-bold text-black">Legal Monk</h1>
                        </div>
                        <p className="text-gray-600 mt-4 text-center lg:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, ab.</p>
                        <div className="flex justify-center md:justify-start gap-4 mb-8 md:mb-0">
                            {[
                                { href: "#", icon: "fab fa-youtube" },
                                { href: "#", icon: "fab fa-instagram" },
                                { href: "#", icon: "fab fa-linkedin" },
                                { href: "#", icon: "fab fa-tiktok" },
                                { href: "#", icon: "fab fa-x-twitter" },
                                { href: "#", icon: "fab fa-facebook" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-black hover:scale-110 transition bg-stone-400 px-2 py-1 rounded-full text-2xl"
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:flex flex-col lg:items-center">
                        <h2 className="font-bold text-black mb-4 lg:mb-10 lg:-ml-[20px]">More</h2>
                        <ul className="space-y-5 font-semibold">
                            <li><a href="#" className="text-gray-600 underline hover:text-black hover:no-underline">About Us</a></li>
                            <li><a href="#" className="text-gray-600 underline hover:text-black hover:no-underline">Jobs</a></li>
                            <li><a href="#" className="text-gray-600 underline hover:text-black hover:no-underline">Contact</a></li>
                        </ul>
                    </div>

                    <div className="w-full lg:flex flex-col lg:items-center">
                        <h2 className="font-bold text-black mb-4 lg:mb-10 lg:-ml-[30px]">Free Content</h2>
                        <ul className="space-y-5 font-semibold">
                            <li><a href="#" className="text-gray-600 underline hover:text-black hover:no-underline">Newsletter</a></li>
                            <li><a href="#" className="text-gray-600 underline hover:text-black hover:no-underline">Articles & Guides</a></li>
                            <li><a href="#" className="text-gray-600 underline hover:text-black hover:no-underline">Podcast</a></li>
                            <li><a href="#" className="text-gray-600 underline hover:text-black hover:no-underline">Videos</a></li>
                            <li><a href="#" className="text-gray-600 underline hover:text-black hover:no-underline">Book Notes</a></li>
                        </ul>
                    </div>

                    <div className="w-full lg:flex flex-col lg:items-center">
                        <h2 className="font-bold text-black mb-4 lg:mb-10 lg:-ml-[70px]">Products</h2>
                        <ul className="space-y-5 font-semibold">
                            <li><a href="#" className="text-gray-600 underline hover:text-black hover:no-underline">My Book</a></li>
                            <li><a href="#" className="text-gray-600 underline hover:text-black hover:no-underline">Productivity Lab</a></li>
                            <li><a href="#" className="text-gray-600 underline hover:text-black hover:no-underline">YouTuber Academy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center border-t font-semibold border-gray-200 mt-8 pt-6">
                <p className="text-black text-sm">© Legal Monk 2024. All rights reserved.</p>
                <div className="text-sm text-gray-600 space-x-4 flex">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <span>/</span>
                    <a href="#" className="hover:underline">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
