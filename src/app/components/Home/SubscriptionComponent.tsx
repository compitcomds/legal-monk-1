import React from "react";
import Image from "next/image";
import hero from "../../../assets/parth bhaiya.png";
import parth from '../../../assets/parth bhaiya with students@3x.png'
const SubscriptionComponent: React.FC = () => {
    return (
        <div className="flex flex-col items-center bg-[#f9f6f3] lg:py-10 px-5 md:px-20 lg:px-24 font-title  rounded-b-xl lg:rounded-b-3xl">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="relative w-full lg:w-1/3">
                    <div className="absolute inset-0 bg-yellow-300 rounded-full w-40 h-40 md:w-52 md:h-52 -z-10"></div>
                    <Image
                        src={hero} // Replace with actual image URL
                        alt="Legal startup wala"
                        className="w-full h-full"
                    />
                </div>
                <div className="flex flex-col text-center md:text-start w-full lg:w-1/2">
                    <h1 className="mt-6 text-4xl md:text-7xl font-bold text-black ">
                        NAMASTE!
                    </h1>
                    <p className="mt-2 lg:mt-8 font-sans text-lg md:text-2xl 2xl:text-4xl leading-5  text-black">
                        I’m Parth, a lawyer-turned-socialpreneur passionate about creating impact at the <span className="font-semibold underline">grassroots</span>. Lifelong student of Yoga & Philosophy, sharing practical tips for <span className="font-semibold underline">productivity</span>, career, & life from my experiences.

                    </p>
                </div>
            </div>

            <div className="mt-10 bg-white shadow-lg rounded-lg flex flex-col lg:flex-row p-8 lg:p-16 w-full max-w-5xl">
                <div className="flex flex-col w-full lg:px-14">
                    <h2 className="text-3xl lg:text-5xl text-black">
                        Lorem ipsum  <span className="text-black font-bold">dolor sit.</span>
                    </h2>
                    <p className="my-5 text-xl lg:text-2xl font-sans">Join a growing community of more than <span className="font-bold">230,000 friendly readers.</span></p>
                    <div className="mt-4 flex items-center gap-4">
                        <div className="flex items-center -space-x-2">
                            <img src="https://placehold.co/48" alt="User 1" className="w-12 h-12 rounded-full border-2 border-white" />
                            <img src="https://placehold.co/48" alt="User 2" className="w-12 h-12 rounded-full border-2 border-white" />
                            <img src="https://placehold.co/48" alt="User 3" className="w-12 h-12 rounded-full border-2 border-white" />

                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center space-x-1">
                                <input type="radio" id="5-stars" name="rating" value="5" className="hidden" />
                                <label className="text-yellow-500 font-bold lg:text-2xl cursor-pointer hover:scale-110">★</label>
                                <input type="radio" id="4-stars" name="rating" value="4" className="hidden" />
                                <label className="text-yellow-500 font-bold lg:text-2xl cursor-pointer hover:scale-110">★</label>
                                <input type="radio" id="3-stars" name="rating" value="3" className="hidden" />
                                <label className="text-yellow-500 font-bold lg:text-2xl cursor-pointer hover:scale-110">★</label>
                                <input type="radio" id="2-stars" name="rating" value="2" className="hidden" />
                                <label className="text-yellow-500 font-bold lg:text-2xl cursor-pointer hover:scale-110">★</label>
                                <input type="radio" id="1-star" name="rating" value="1" className="hidden" />
                                <label className="text-yellow-500 font-bold lg:text-2xl cursor-pointer hover:scale-110">★</label>
                            </div>
                            <span className="text-gray-600 font-sans text-sm ml-2 text-center flex items-center">200+ reviews</span></div>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-5 lg:mt-0">
                    
                    <Image className="rounded-lg" src={parth} alt="" />
                </div>
            </div>

            
        </div>
    );
};

export default SubscriptionComponent;
