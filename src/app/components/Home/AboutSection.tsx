import React from "react";
import Image from "next/image";
import parth from '../../../assets/Artboard 2.jpg'
import { recoleta } from "@/app/fonts";
import { poppins } from "@/app/fonts";
const AboutSection: React.FC = () => {
    return (
        <div className="bg-[#f9f6f3] shadow lg:py-16 py-5 mb-10 px-6 md:px-20 lg:px-40 flex flex-col items-center lg:items-start rounded-2xl">
            {/* Left Section */}
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-10 2xl:gap-32">
                <div className="w-full mb-10 lg:mb-0">
                    <h1 className={`${recoleta.className} text-4xl lg:text-4xl 2xl:text-7xl  font-semibold text-black mb-6`}>
                        Hi, I’m <span className="text-blue-600 relative">Parth Jain <img src="./icons/yellow.png" className="w-40 absolute right-0 top-5" alt="" /></span>
                    </h1>
                    <p className={`${poppins.className} text-black mb-4 text-lg font-poppins lg:text-xl`}>
                        Namaste, I’m Parth Jain.
                        I’m a lawyer-turned-Youtuber, podcaster, and socialpreneur. I have been creating content and resources since the early years of my law school.
                    </p>
                    <p className={`${poppins.className} text-black mb-4 text-lg lg:text-xl`}>
                        <span className={`${recoleta.className} font-bold text-blue-500`}>Want to know what my superpower is?</span><span className=""> I bring the smartest people into the room and convert their experiences and knowledge into accessible resources for the larger community. </span>
                         Since my law school days, I have been on an educational content creation journey in Hindi, focused on supporting the underprivileged student community in northern India.
                    </p>
                    <a
                        href="#"
                        className="text-black flex items-center gap-2 text-xl"
                    >
                        <p className="hover:no-underline underline">For my professional bio</p> <span className="no-underline">&rarr;</span>
                    </a>
                </div>
                {/* <div className="w-full flex lg:hidden items-center justify-between gap-4">
                    
                    <div className="">
                        <Image width={300} height={500}
                            src={parth} // Replace with the actual image URL
                            alt="Parth jain"
                            className="rounded-lg shadow-md h-full w-full"
                        />
                        
                    </div>
                </div> */}
                {/* Right Section */}
                <div className="w-full ">
                    <Image width={500} height={500}
                        src={parth} // Replace with the actual image URL
                        alt="Parth jain"
                        className="rounded-lg "
                    />
                </div>
            </div>

            {/* Bottom Buttons */}
            {/* <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start w-full">
                <a
                    href="#"
                    className="bg-[#5DCDF1] text-black text-center hover:text-white px-6 w-full py-3 rounded-lg font-semibold hover:bg-black"
                >
                    Watch My Videos
                </a>
                <a
                    href="#"
                    className="bg-[#5DCDF1] text-black text-center hover:text-white px-6 w-full py-3 rounded-lg font-semibold hover:bg-black"
                >
                    Read My Articles
                </a>
                <a
                    href="#"
                    className="bg-[#5DCDF1] text-black text-center hover:text-white px-6 w-full py-3 rounded-lg font-semibold hover:bg-black"
                >
                    Read My Book
                </a>
            </div> */}
        </div>
    );
};

export default AboutSection;
