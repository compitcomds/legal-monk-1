import React from "react";
// import Image from "next/image";
import Videos2 from "../components/videos2";
import Navbar from "../components/Home/Navbar";
import FooterSection from "../components/Home/FooterSection";
const SubscriptionComponent: React.FC = () => {
    return (
        <>
            <div className="bg-white px-5 2xl:px-60 pt-3 md:pt-5 min-h-screen">
                <Navbar />
                <div className="flex flex-col items-center bg-[#f9f6f3] py-10 px-5 md:px-20 lg:px-24 font-title  rounded-b-xl lg:rounded-b-3xl">
                    <div className="flex flex-col lg:flex-row-reverse lg:gap-10 items-center justify-between">
                        <div className="relative w-full lg:w-1/2">
                            <img src="https://placehold.co/400x200" className="w-full" alt="" />
                        </div>
                        <div className="flex flex-col text-center md:text-start w-full lg:w-1/2">
                            <h1 className="mt-6 uppercase text-2xl md:text-4xl lg:text-7xl font-bold text-black ">
                                Community Courses
                            </h1>
                            <p className="mt-2 lg:mt-8 font-sans  2xl:text-xl leading-5  text-black">
                            Here, we collaborate with experts from different fields to create resources that empower learners. Every course sold not only supports the creators but also helps us provide tech and other resources to creators who lack them, while enabling us to develop free resources for the community.
                            </p>
                        </div>
                    </div>
                </div>
                <Videos2 />
                
            </div>
            <FooterSection />
        </>
    );
};

export default SubscriptionComponent;
