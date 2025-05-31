'use client'
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
                <h2 className={`${recoleta.className} text-[34px] lg:text-7xl text-blue-600 2xl:text-7xl font-semibold font-serif`}>
                  No Agency! No Commission!  
                </h2>
                <p className={`${poppins.className} text-lg lg:text-xl 2xl:text-2xl ml-2 mt-4`}><span className="font-semibold">Community Courses –</span> I’m building a community of Indians studying abroad to support other Indian students on their journey. If you’d like to contribute or be part of this initiative, please get in touch.</p>
            </div>

            {/* Video Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 lg:px-5 ">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="hover:shadow-lg p-4 rounded-2xl bg-[#f9f6f3] hover:bg-[#fd976d] transition-shadow duration-300  overflow-hidden"
                    >
                        <div className="flex flex-col transition duration-300">
                            {/* Make the card image a link */}
                            <a href={video.link}>
                                <img
                                    src={video.image}
                                    alt={video.title}
                                    className="object-cover rounded-2xl mb-4"
                                />
                            </a>
                            <div className="flex flex-col text-center">
                                <h3 className={`${recoleta.className} text-3xl lg:text-3xl 2xl:text-3xl font-semibold mb-2`}>{video.title}</h3>
                                <p className={`${poppins.className} text-black text-lg mb-4 font-semibold`}>Starts at {video.price}</p>
                                {/* Make the "View" button a link */}
                                <a
                                    href={video.link}
                                    className="text-blue-500 hover:underline inline-block"
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
