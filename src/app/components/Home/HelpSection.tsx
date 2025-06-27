"use client";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import fglawkit from "../../../assets/fg.png";
import sortmylaw from "../../../assets/sortmyschool.png";
import pwp from "../../../assets/pwp.jpg";
import free from "../../../assets/free.jpg";
const HelpSection: React.FC = () => {
  return (
    <div className="bg-white px-6 py-16 lg:mt-20 lg:px-6 2xl:px-40">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6 lg:space-y-10">
          <div className="mb-12 flex items-center justify-center">
            <h1 className="text-4xl font-bold leading-tight text-gray-800 lg:text-7xl">
              How Can <br />
              <span className="text-5xl text-blue-600 underline lg:text-7xl">
                I Help You?
              </span>
            </h1>
          </div>

          <a
            href="https://www.youtube.com/@fglawkit"
            className="flex flex-col justify-between rounded-3xl bg-stone-100 p-6 shadow-md hover:scale-105 hover:transform hover:bg-[#FD976D] hover:transition hover:ease-in-out lg:p-10"
          >
            <div className="mb-4 flex w-fit items-center justify-start rounded-lg bg-stone-100 p-1 text-5xl">
              <Image
                width={100}
                height={100}
                src={fglawkit}
                alt="fg"
                className="rounded-full"
              />
            </div>
            <h2 className="mb-4 font-serif text-2xl font-semibold text-black lg:text-4xl">
              FG Lawkit
            </h2>
            <p className="mb-6 text-black">
              Provides opportunities and free resources in accessible formats to
              lawyers & students in northern India.
            </p>
            <p className="flex items-center font-semibold text-blue-600">
              Click Here <span className="ml-1">&rarr;</span>
            </p>
          </a>
          <a
            href="https://sortmylawschool.com/subject"
            className="flex flex-col justify-between rounded-3xl bg-stone-100 p-6 shadow-md hover:scale-105 hover:transform hover:bg-[#C9B1FB] hover:transition hover:ease-in-out lg:p-10"
          >
            <div className="mb-4 flex w-fit items-center justify-center rounded-lg bg-stone-100 p-1 text-5xl text-purple-500">
              <Image width={100} height={100} src={sortmylaw} alt="sortmylaw" />
            </div>
            <h2 className="mb-4 font-serif text-2xl font-semibold text-black lg:text-4xl">
              sortmylawschool.com
            </h2>
            <p className="mb-6 text-black">
              Offers free notes to help students across India excel in their
              semester and competitive exams.{" "}
            </p>
            <p className="flex items-center font-semibold text-blue-600">
              Click Here <span className="ml-1">&rarr;</span>
            </p>
          </a>
        </div>
        <div className="space-y-6 lg:space-y-10">
          <a
            href="https://www.youtube.com/@Placement_Without_Politics/featured"
            className="flex flex-col justify-between rounded-3xl bg-stone-100 p-6 shadow-md hover:scale-105 hover:transform hover:bg-[#FDD46B] hover:transition hover:ease-in-out lg:p-10"
          >
            <div className="mb-4 flex w-fit items-center justify-start rounded-lg bg-stone-100 p-1 text-5xl text-yellow-600">
              <Image
                width={100}
                height={100}
                src={pwp}
                alt="pwp"
                className="rounded-full"
              />
            </div>
            <h2 className="mb-4 font-serif text-2xl font-semibold text-black lg:text-4xl">
              Placement Without Politics (PWP)
            </h2>
            <p className="mb-6 text-black">
              Creates awareness about internships and job opportunities,
              especially for students from smaller towns and cities in the
              finance, tech, and sustainability domains.
            </p>
            <p className="flex items-center font-semibold text-blue-600">
              Click Here <span className="ml-1">&rarr;</span>
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/parthjain98/"
            className="flex flex-col justify-between rounded-3xl bg-stone-100 p-6 shadow-md hover:scale-105 hover:transform hover:bg-[#5DCDF1] hover:transition hover:ease-in-out lg:p-10"
          >
            <div className="mb-4 flex w-fit items-center justify-start rounded-lg bg-stone-100 p-1 text-5xl text-blue-500">
              <Image width={100} height={100} src={free} alt="free" />
            </div>
            <h2 className="mb-4 font-serif text-2xl font-semibold text-black lg:text-4xl">
              Resources for All !
            </h2>
            <p className="mb-6 text-black">
              All resources are free for those from marginalized backgrounds or
              first-generation learners. For more info, connect with me on
              LinkedIn!
            </p>
            <p className="flex items-center font-semibold text-blue-600">
              Click Here <span className="ml-1">&rarr;</span>
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/parthjain98/"
            className="flex flex-col justify-between rounded-3xl bg-stone-100 p-6 shadow-md hover:scale-105 hover:transform hover:bg-[#FDD46B] hover:transition hover:ease-in-out lg:p-10"
          >
            {/* <div className="flex items-center justify-start text-gray-500 text-5xl mb-4">
                            <i className="fas fa-ellipsis-h"></i>
                        </div> */}
            <h2 className="mb-4 font-serif text-2xl font-semibold text-black lg:text-4xl">
              ... let's talk :)
            </h2>
            <p className="mb-6 text-black">Connect with me on LinkedIn</p>
            <p className="flex items-center font-semibold text-blue-600">
              Click Here <span className="ml-1">&rarr;</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
