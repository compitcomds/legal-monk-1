import React from "react";
import Image from "next/image";
import hero from "../../../assets/parth bhaiya.png";
import parth from '../../../assets/parth bhaiya with students@3x.png'
import { recoleta } from "@/app/fonts";
import { poppins } from "@/app/fonts";
const SubscriptionComponent: React.FC = () => {
    return (
        <div
  className="flex flex-col items-center bg-[#f9f6f3] lg:py-10 px-5 md:px-20 lg:px-24 font-title rounded-b-xl lg:rounded-b-3xl bg-no-repeat bg-bottom bg-contain"
  style={{ backgroundImage: "url('./icons/stroke.png')" }}
>

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
                    <div className="lg:flex gap-5">
                        <h1 className={`${recoleta.className} mt-6 relative text-4xl md:text-7xl font-bold text-black `}>
                            NAMASTE!
                            <img src="./icons/one.png" className="absolute w-56 left-16 lg:left-0 lg:w-auto top-2 lg:top-5" alt="" />
                        </h1><img src="./icons/1.png" className="w-24 h-24 hidden lg:block" alt="" /></div>
                    <p className={`${poppins.className} mt-10 lg:mt-8 font-sans text-lg md:text-2xl 2xl:text-4xl leading-5  text-black`}>
                        I am Parth, a master's student on a 100% scholarship at Penn State University, USA. I have also secured admission to LSE and various other prestigious universities across the globe.
                        <br /><span className={`${recoleta.className}`}>My job : Helping you secure scholarships to study abroad</span>

                    </p>
                </div>
            </div>

            <div className="mt-10 bg-white shadow rounded-3xl relative flex flex-col lg:flex-row mb-10 p-8 lg:p-14 w-full max-w-7xl">
                <img src="./icons/8.png" className="absolute hidden lg:block h-36 -right-16 -top-16" alt="" />
                <div className="flex flex-col w-full lg:px-14">
                    <h2 className={`${recoleta.className} text-3xl lg:text-5xl text-black`}>
                        Better than Any Consultancy...
                    </h2>
                    <p className="my-5 text-xl lg:text-2xl font-sans">I come from a humble background and was the first in my family to study abroad, so I understand the challenges. Here we share straight-forward, practical tips that worked for us with you.</p>
                    <img src="./icons/ZERO.png" alt="" />
                </div>
                <div className="flex flex-col w-full mt-5 lg:mt-0">
                    <Image className="rounded-lg h-full object-cover" src={parth} alt="" />
                </div>
            </div>


        </div>
    );
};
export default SubscriptionComponent;
