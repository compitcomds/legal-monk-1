"use client";
import React from "react";
import Image from "next/image";
import spotify from "../../../assets/spotify.png";
import deep from "../../../assets/deep_dive.webp";
import apple from "../../../assets/apple_podcasts.png";
import youtube from "../../../assets/youtube.png";
const PodcastSection: React.FC = () => {
  return (
    <div className="mb-10 bg-[#f9f6f3] px-6 py-16 xl:px-24">
      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left lg:w-1/2">
          <Image
            src={deep} // Replace with actual image URL 450x500
            alt="Deep Dive Podcast"
            className="mb-6 md:mb-0"
          />
        </div>

        {/* Right Section */}
        <div className="space-y-10 lg:w-1/2">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-800 lg:text-7xl">
            Deep Dive
          </h2>
          <p className="text-xl lg:text-2xl">
            with <span className="font-bold">Parth Jain</span>
          </p>
          <p className="mb-6 text-xl text-black lg:text-2xl">
            The podcast that delves into the minds of entrepreneurs, creators,
            and other inspiring people to uncover the philosophies, strategies,
            and tools that help us live happier, healthier, and more productive
            lives.
          </p>
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
            <a
              href="#"
              className="flex w-full items-center justify-center gap-4 rounded-full bg-white px-4 py-4 text-base font-semibold text-purple-600 hover:bg-black hover:text-white lg:text-xl"
            >
              <Image src={apple} width="24" height="24" alt="icon" /> Apple
              Podcasts
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-center gap-4 rounded-full bg-white px-4 py-4 text-base font-semibold text-green-600 hover:bg-black hover:text-white lg:text-xl"
            >
              <Image src={spotify} width="24" height="24" alt="icon" /> Spotify
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-center gap-4 rounded-full bg-white px-4 py-4 text-base font-semibold text-red-600 hover:bg-black hover:text-white lg:text-xl"
            >
              <Image src={youtube} width="24" height="24" alt="icon" /> YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Featured Episodes */}
      <div className="mt-12 rounded-2xl bg-white p-10">
        <div className="mb-6 flex flex-col items-center justify-between gap-5 md:flex-row">
          <h3 className="font-serif text-2xl font-bold text-gray-800 lg:text-4xl 2xl:text-5xl">
            Featured Episodes
          </h3>
          <div className="w-full text-center lg:w-auto">
            <a
              href="#"
              className="rounded-lg bg-gray-800 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900"
            >
              Listen to All Episodes
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Episode 1 */}
          <div className="bg-white">
            <img
              src="https://via.placeholder.com/400x250" // Replace with episode thumbnail
              alt="Episode 1"
              className="mb-4 rounded-lg"
            />
            <p className="mb-2 text-base font-semibold text-gray-800 2xl:text-xl">
              June 27, 2024
            </p>
            <h4 className="mb-2 font-serif text-xl font-semibold text-black lg:text-2xl 2xl:text-4xl">
              How to Make $10k/Month as a Writer - Nicolas Cole
            </h4>
          </div>

          {/* Episode 2 */}
          <div className="bg-white">
            <img
              src="https://via.placeholder.com/400x250" // Replace with episode thumbnail
              alt="Episode 2"
              className="mb-4 rounded-lg"
            />
            <p className="mb-2 text-base font-semibold text-gray-800 2xl:text-xl">
              June 27, 2024
            </p>
            <h4 className="mb-2 font-serif text-xl font-semibold text-black lg:text-2xl 2xl:text-4xl">
              How to Make $10k/Month as a Writer - Nicolas Cole
            </h4>
          </div>

          {/* Episode 3 */}
          <div className="bg-white">
            <img
              src="https://via.placeholder.com/400x250" // Replace with episode thumbnail
              alt="Episode 3"
              className="mb-4 rounded-lg"
            />
            <p className="mb-2 text-base font-semibold text-gray-800 2xl:text-xl">
              June 27, 2024
            </p>
            <h4 className="mb-2 font-serif text-xl font-semibold text-black lg:text-2xl 2xl:text-4xl">
              How to Make $10k/Month as a Writer - Nicolas Cole
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastSection;
