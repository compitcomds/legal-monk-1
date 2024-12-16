'use client'
import React from "react";
import Image from "next/image";
import spotify from '../../../assets/spotify.png'
import deep from '../../../assets/deep_dive.webp'
import apple from '../../../assets/apple_podcasts.png'
import youtube from '../../../assets/youtube.png'
const PodcastSection: React.FC = () => {
    return (
        <div className="bg-[#f9f6f3] py-16 px-6 xl:px-24 mb-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                {/* Left Section */}
                <div className="lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <Image
                        src={deep} // Replace with actual image URL 450x500
                        alt="Deep Dive Podcast"
                        className="mb-6 md:mb-0"
                    />
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 space-y-10">
                    <h2 className="text-4xl lg:text-7xl font-serif font-bold text-gray-800 mb-4">Deep Dive</h2>
                    <p className="text-xl lg:text-2xl">with <span className="font-bold">Parth Jain</span></p>
                    <p className="text-black mb-6 text-xl lg:text-2xl">
                        The podcast that delves into the minds of entrepreneurs, creators, and other inspiring people to uncover the philosophies, strategies, and tools that help us live happier, healthier, and more productive lives.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mb-6">
                        <a href="#" className="bg-white text-purple-600 flex items-center justify-center gap-4 hover:bg-black hover:text-white px-4 py-4 rounded-full text-base lg:text-xl w-full font-semibold"><Image src={apple} width="24" height="24" alt="icon" /> Apple Podcasts</a>
                        <a href="#" className="bg-white text-green-600 flex items-center justify-center gap-4 hover:bg-black hover:text-white px-4 py-4 rounded-full text-base lg:text-xl w-full font-semibold"><Image src={spotify} width="24" height="24" alt="icon" /> Spotify</a>
                        <a href="#" className="bg-white text-red-600 flex items-center justify-center gap-4 hover:bg-black hover:text-white px-4 py-4 rounded-full text-base lg:text-xl w-full font-semibold"><Image src={youtube} width="24" height="24" alt="icon" /> YouTube</a>
                    </div>
                </div>
            </div>

            {/* Featured Episodes */}
            <div className="mt-12 bg-white rounded-2xl p-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-5">
                    <h3 className="text-2xl lg:text-4xl 2xl:text-5xl font-serif font-bold text-gray-800">Featured Episodes</h3>
                    <div className="text-center w-full lg:w-auto">
                        <a
                            href="#"
                            className="bg-gray-800 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-900"
                        >
                            Listen to All Episodes
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Episode 1 */}
                    <div className="bg-white">
                        <img
                            src="https://via.placeholder.com/400x250" // Replace with episode thumbnail
                            alt="Episode 1"
                            className="rounded-lg mb-4"
                        />
                        <p className="text-base 2xl:text-xl text-gray-800 font-semibold mb-2">June 27, 2024</p>
                        <h4 className="text-xl lg:text-2xl 2xl:text-4xl font-serif font-semibold text-black mb-2">
                            How to Make $10k/Month as a Writer - Nicolas Cole
                        </h4>
                    </div>

                    {/* Episode 2 */}
                    <div className="bg-white">
                        <img
                            src="https://via.placeholder.com/400x250" // Replace with episode thumbnail
                            alt="Episode 2"
                            className="rounded-lg mb-4"
                        />
                        <p className="text-base 2xl:text-xl text-gray-800 font-semibold mb-2">June 27, 2024</p>
                        <h4 className="text-xl lg:text-2xl 2xl:text-4xl font-serif font-semibold text-black mb-2">
                            How to Make $10k/Month as a Writer - Nicolas Cole
                        </h4>
                    </div>

                    {/* Episode 3 */}
                    <div className="bg-white">
                        <img
                            src="https://via.placeholder.com/400x250" // Replace with episode thumbnail
                            alt="Episode 3"
                            className="rounded-lg mb-4"
                        />
                        <p className="text-base 2xl:text-xl text-gray-800 font-semibold mb-2">June 27, 2024</p>
                        <h4 className="text-xl lg:text-2xl 2xl:text-4xl font-serif font-semibold text-black mb-2">
                            How to Make $10k/Month as a Writer - Nicolas Cole
                        </h4>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PodcastSection;
