import React from "react";

const AboutSection: React.FC = () => {
    return (
        <div className="bg-[#f9f6f3] lg:py-16 py-5 mb-10 px-6 md:px-20 lg:px-40 flex flex-col items-center lg:items-start rounded-2xl">
            {/* Left Section */}
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-6">
                <div className="w-full mb-10 lg:mb-0">
                    <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-bold text-black mb-6">
                        Hi, I’m <span className="text-blue-600">Parth Jain</span>
                    </h1>
                    <p className="text-black mb-4 text-lg">
                        I’m an ex-doctor turned YouTuber, Podcaster, entrepreneur and author. I’ve been creating YouTube videos for over 7 years and have a following of over 4 million on my main channel.
                    </p>
                    <p className="text-black mb-4 text-lg">
                        My YouTube journey started over 7 years ago when I was studying medicine at Cambridge University. I was creating videos to help people pass the entrance exams (This is when I started my first business too). Since then, the channel has grown to over 4 million subscribers.
                    </p>
                    <a
                        href="#"
                        className="text-black flex items-center gap-2 text-xl"
                    >
                        <p className="hover:no-underline underline">Read my full story</p> <span className="no-underline">&rarr;</span>
                    </a>
                </div>
                <div className="w-full flex lg:hidden items-center justify-between gap-4">
                    <div className="flex flex-col items-center justify-between gap-10">
                        <div className="">
                            <img
                                src="https://via.placeholder.com/250" // Replace with the actual image URL
                                alt="Ali Abdaal at a desk"
                                className="rounded-lg shadow-md"
                            />
                            {/* <div className="absolute bg-orange-200 w-12 h-12 rounded-full top-0 left-1/3"></div> */}
                        </div>
                        <div className="">
                            <img
                                src="https://via.placeholder.com/250" // Replace with the actual image URL
                                alt="Ali Abdaal"
                                className="rounded-lg shadow-md h-auto object-cover"
                            />
                            {/* <div className="absolute bg-orange-200 w-16 h-16 rounded-full top-0 right-1/4"></div> */}
                        </div></div>
                    <div className="">
                        <img
                            src="https://via.placeholder.com/300x500" // Replace with the actual image URL
                            alt="Ali Abdaal book"
                            className="rounded-lg shadow-md"
                        />
                        {/* <div className="absolute bg-orange-200 w-12 h-12 rounded-full bottom-0 right-1/3"></div> */}
                    </div>
                </div>
                {/* Right Section */}
                <div className="w-full hidden  lg:flex items-center justify-between gap-4">
                    <div className="flex flex-col items-center justify-between gap-10">
                        <div className="">
                            <img
                                src="https://via.placeholder.com/250" // Replace with the actual image URL
                                alt="Ali Abdaal at a desk"
                                className="rounded-lg shadow-md"
                            />
                            {/* <div className="absolute bg-orange-200 w-12 h-12 rounded-full top-0 left-1/3"></div> */}
                        </div>
                        <div className="">
                            <img
                                src="https://via.placeholder.com/250" // Replace with the actual image URL
                                alt="Ali Abdaal"
                                className="rounded-lg shadow-md h-auto object-cover"
                            />
                            {/* <div className="absolute bg-orange-200 w-16 h-16 rounded-full top-0 right-1/4"></div> */}
                        </div></div>
                    <div className="">
                        <img
                            src="https://via.placeholder.com/300x500" // Replace with the actual image URL
                            alt="Ali Abdaal book"
                            className="rounded-lg shadow-md"
                        />
                        {/* <div className="absolute bg-orange-200 w-12 h-12 rounded-full bottom-0 right-1/3"></div> */}
                    </div>
                </div>
            </div>

            {/* Bottom Buttons */}
            <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start w-full">
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
            </div>
        </div>
    );
};

export default AboutSection;
