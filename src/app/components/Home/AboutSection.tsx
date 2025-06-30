import React from "react";
import Image from "next/image";
import parth from "../../../assets/Artboard 2.jpg";
import { recoleta } from "@/app/fonts";
import { poppins } from "@/app/fonts";
import yellowUnderline from "@/assets/underlines/yellow.png";

const AboutSection: React.FC = () => {
  return (
    <div
      className="w-full rounded-2xl bg-[#f9f6f3] bg-cover bg-no-repeat shadow"
      style={{ backgroundImage: "url('./icons/stroke2.png')" }}
    >
      <div className="mb-10 flex flex-col items-center px-6 py-5 md:px-20 lg:items-start lg:px-40 lg:py-16">
        {/* Left Section */}
        <div className="flex flex-col-reverse justify-between gap-6 lg:flex-row lg:gap-10 2xl:gap-10">
          <div className="mb-10 w-full lg:mb-0">
            <h1
              className={`${recoleta.className} mb-6 text-4xl font-semibold text-black lg:text-4xl 2xl:text-7xl`}
            >
              Hi, I'm{" "}
              <span className="relative text-blue-600">
                Parth Jain{" "}
                <Image
                  src={yellowUnderline}
                  className="absolute right-0 top-5 2xl:top-12 w-40"
                  alt="Underline | Hi, I'm Parth Jain | Startup Legal Wala"
                />
              </span>
            </h1>
            <p
              className={`${poppins.className} font-poppins mb-4 text-lg text-black lg:text-lg`}
            >
              Namaste, I'm Parth Jain. I'm a lawyer-turned-Youtuber, podcaster,
              and socialpreneur. I have been creating content and resources
              since the early years of my law school.
            </p>
            <p
              className={`${poppins.className} mb-4 text-lg text-black lg:text-lg`}
            >
              <span className={`${recoleta.className} font-bold text-blue-500`}>
                Want to know what my superpower is? 
              </span>
              <span>
                &nbsp;I bring the smartest people into the room and convert their
                experiences and knowledge into accessible resources for the
                larger community.
              </span>
              Since my law school days, I have been on an educational content
              creation journey in Hindi, focused on supporting the
              underprivileged student community in northern India.
            </p>
            <a
              href="https://www.linkedin.com/in/parthjain98/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xl text-black"
            >
              <p className="underline hover:no-underline">
                For my professional bio
              </p>
              <span className="no-underline">&rarr;</span>
            </a>

          </div>

          <div className="w-full">
            <Image
              width={500}
              height={500}
              src={parth}
              alt="Parth jain"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
