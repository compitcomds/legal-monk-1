"use client";
import React from "react";
import { recoleta } from "@/app/fonts";
import { poppins } from "@/app/fonts";
const PopularVideosCarousel: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: "Sample 1",
      price: "250",
      image: "https://placehold.co/500x300", // Replace with actual image
      link: "/", // Dynamic video link
    },
    {
      id: 2,
      title: "Sample 2",
      price: "250",
      image: "https://placehold.co/500x300",
      link: "/", // Dynamic video link
    },
    {
      id: 3,
      title: "Sample 3",
      price: "250",
      image: "https://placehold.co/500x300",
      link: "/", // Dynamic video link
    },
    {
      id: 4,
      title: "Sample 4",
      price: "250",
      image: "https://placehold.co/500x300", // Replace with actual image
      link: "/", // Dynamic video link
    },
    {
      id: 5,
      title: "Sample 5",
      price: "250",
      image: "https://placehold.co/500x300",
      link: "/", // Dynamic video link
    },
    {
      id: 6,
      title: "Sample 6",
      price: "250",
      image: "https://placehold.co/500x300",
      link: "/", // Dynamic video link
    },
  ];

  return (
    <div className="" id="community">
      {/* Heading */}
      <div className="mb-6">
        <h2
          className={`${recoleta.className} font-serif text-[34px] font-semibold text-blue-600 lg:text-7xl 2xl:text-7xl`}
        >
          No Agency! No Commission!
        </h2>
        <p
          className={`${poppins.className} ml-2 mt-4 text-lg lg:text-xl 2xl:text-2xl`}
        >
          <span className="font-semibold">Community Courses –</span> I’m
          building a community of Indians studying abroad to support other
          Indian students on their journey. If you’d like to contribute or be
          part of this initiative, please get in touch.
        </p>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-5">
        {videos.map((video) => (
          <div
            key={video.id}
            className="overflow-hidden rounded-2xl bg-[#f9f6f3] p-4 transition-shadow duration-300 hover:bg-[#fd976d] hover:shadow-lg"
          >
            <div className="flex flex-col transition duration-300">
              {/* Make the card image a link */}
              <a href={video.link}>
                <img
                  src={video.image}
                  alt={video.title}
                  className="mb-4 rounded-2xl object-cover"
                />
              </a>
              <div className="flex flex-col text-center">
                <h3
                  className={`${recoleta.className} mb-2 text-3xl font-semibold lg:text-3xl 2xl:text-3xl`}
                >
                  {video.title}
                </h3>
                <p
                  className={`${poppins.className} mb-4 text-lg font-semibold text-black`}
                >
                  Starts at {video.price}
                </p>
                {/* Make the "View" button a link */}
                <a
                  href={video.link}
                  className="inline-block text-blue-500 hover:underline"
                >
                  Enroll Now →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularVideosCarousel;
