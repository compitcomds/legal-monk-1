"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import two from "../../../assets/pwp.png";
import Image from "next/image";
import { recoleta } from "@/app/fonts";
import { poppins } from "@/app/fonts";
// import "./PopularVideosCarousel.css"; // Optional for custom styling

const PopularVideosCarousel: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: "CV FOR LAW INTERNSHIP || LAW INTERNSHIP CV FOR BEGINNERS",
      date: "June 18, 2024",
      image: two, // Replace with actual image
      link: "https://youtu.be/ufOEAI-Tuok", // Dynamic video link
    },
    {
      id: 2,
      title:
        "Work with Tech-Sustainable Startup I Apply for Off-campus Internships for college students I PWP",
      date: "March 1, 2024",
      image: two,
      link: "/", // Dynamic video link
    },
    {
      id: 3,
      title:
        "How to become Data Privacy & Technology Lawyer | Data Protection and Privacy Laws",
      date: "April 23, 2024",
      image: two,
      link: "/", // Dynamic video link
    },

    {
      id: 4,
      title: "CV FOR LAW INTERNSHIP || LAW INTERNSHIP CV FOR BEGINNERS",
      date: "June 18, 2024",
      image: two, // Replace with actual image
      link: "https://youtu.be/ufOEAI-Tuok", // Dynamic video link
    },
    {
      id: 5,
      title:
        "Work with Tech-Sustainable Startup I Apply for Off-campus Internships for college students I PWP",
      date: "March 1, 2024",
      image: two,
      link: "/", // Dynamic video link
    },
    {
      id: 6,
      title:
        "How to become Data Privacy & Technology Lawyer | Data Protection and Privacy Laws",
      date: "April 23, 2024",
      image: two,
      link: "/", // Dynamic video link
    },
  ];

  return (
    <div className="mb-16 lg:mb-28 2xl:px-60">
      {/* Heading and Buttons */}
      <div className="mb-6 flex items-center justify-between px-5">
        <h2
          className={`${recoleta.className} text-[34px] font-bold lg:text-7xl 2xl:text-7xl`}
        >
          Dive Into These <br className="hidden md:block" />
          <span className="text-blue-600">Resourceful</span>{" "}
          <span className="relative">
            Videos{" "}
            <img
              src="./icons/yellow.png"
              className="absolute left-2 right-0 top-5 w-60 lg:top-10"
              alt=""
            />
          </span>
        </h2>
        <div className="flex space-x-4">
          <button
            className="button-prev flex items-center justify-center rounded-full bg-yellow-400 px-3 py-3 text-2xl transition duration-300 hover:bg-blue-400 lg:px-6 lg:py-6"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-left"
            >
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
          <button
            className="button-next flex items-center justify-center rounded-full bg-yellow-400 px-3 py-3 text-2xl transition duration-300 hover:bg-blue-400 lg:px-6 lg:py-6"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Enable infinite loop
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 3 },
        }}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="mt-5 overflow-hidden rounded-2xl bg-[#f9f6f3] p-2 transition-shadow duration-300 hover:bg-[#fd976d] hover:shadow-lg lg:my-10">
              <div className="flex flex-col transition duration-300">
                {/* Make the card image a link */}
                <a href={video.link}>
                  <Image
                    src={video.image}
                    alt={video.title}
                    className="mb-4 rounded-2xl object-cover"
                  />
                </a>
                <div className="flex flex-col p-4 lg:p-6">
                  <h3
                    className={`${poppins.className} font-poppins mb-2 text-lg font-semibold lg:text-2xl 2xl:text-3xl`}
                  >
                    {video.title}
                  </h3>
                  <p className="mb-4 text-gray-500">{video.date}</p>
                  {/* Make the "View" button a link */}
                  <a
                    href={video.link}
                    className="inline-block text-blue-500 hover:underline"
                  >
                    View →
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularVideosCarousel;
