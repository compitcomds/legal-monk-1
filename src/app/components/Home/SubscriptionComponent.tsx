import React from "react";
import Image from "next/image";
import hero from "../../../assets/hero.png";
const SubscriptionComponent: React.FC = () => {
    return (
        <div className="flex flex-col items-center bg-[#f9f6f3] py-10 px-5 md:px-20 lg:px-24 font-title  rounded-b-xl lg:rounded-b-3xl">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="relative w-full lg:w-1/3">
                    <div className="absolute inset-0 bg-yellow-300 rounded-full w-40 h-40 md:w-52 md:h-52 -z-10"></div>
                    <Image
                        src={hero} // Replace with actual image URL
                        alt="Legal startup wala"
                        className="rounded-full "
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
                <div className="flex flex-col w-full">
                    {/* <p className="mt-4 text-black text-lg ">
                        I share actionable productivity tips, practical life advice, and high-quality insights from across the web, directly to your inbox.
                    </p>
                    <form className="mt-5 lg:mt-10 max-w-2xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
                        <input type="text" placeholder="Your Email" className="bg-transparent font-sans w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0" name="topic" />
                        <button className="flex flex-row items-center justify-center min-w-20 lg:min-w-[130px] lg:px-4 rounded-full  border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-xs lg:text-base bg-[#5DCDF1] hover:bg-black hover:text-white font-medium tracking-wide border-transparent py-1 lg:py-1.5 h-[38px] -mr-3" >
                            Subscribe
                        </button>
                    </form>
                    <p className="mt-4 lg:mt-8 text-sm text-gray-600">
                        By submitting this form, you’ll be signed up to my free newsletter. I may also send you other emails about my courses. You can opt-out at any time. For more information, see our
                        <a href="#" className="text-blue-500 underline"> privacy policy</a>.
                    </p> */}
                    <img src="https://placehold.co/150x100" alt="" />
                </div>
            </div>

            {/* <div className="mt-10 flex flex-col justify-center items-center gap-4 font-semibold text-gray-600">
                <span className="text-sm">As featured in:</span>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
                    <img src="https://placehold.co/150x50" alt="Business Insider" className="" />
                    <img src="https://placehold.co/150x50" alt="New York Times" className="" />
                    <img src="https://placehold.co/150x50" alt="Oxford Union" className="" />
                    <img src="https://placehold.co/150x50" alt="Cambridge Union" className="" />
                    <img src="https://placehold.co/150x50" alt="Radio 4" className="" />
                    <img src="https://placehold.co/150x50" alt="Men's Health" className="" />
                </div>
            </div> */}
        </div>
    );
};

export default SubscriptionComponent;
