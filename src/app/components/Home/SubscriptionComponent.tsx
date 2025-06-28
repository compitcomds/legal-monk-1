import React from "react";
import Image from "next/image";
import hero from "../../../assets/parth bhaiya.png";
import parth from "../../../assets/parth bhaiya with students@3x.png";
import { recoleta } from "@/app/fonts";
import { poppins } from "@/app/fonts";
const SubscriptionComponent: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center rounded-b-xl bg-[#f9f6f3] bg-contain bg-bottom bg-no-repeat px-5 font-title md:px-20 lg:rounded-b-3xl lg:px-24 lg:py-10"
      style={{ backgroundImage: "url('./icons/stroke.png')" }}
    >
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="relative w-full lg:w-1/3">
          <div className="absolute inset-0 -z-10 h-40 w-40 rounded-full bg-yellow-300 md:h-52 md:w-52"></div>
          <Image
            src={hero}
            alt="Legal startup wala"
            className="h-full w-full"
          />
        </div>
        <div className="flex w-full flex-col text-center md:text-start lg:w-1/2">
          <div className="gap-5 lg:flex">
            <h1
              className={`${recoleta.className} relative mt-6 text-4xl font-bold text-black md:text-7xl`}
            >
              NAMASTE!
              <img
                src="./icons/one.png"
                className="absolute left-16 top-2 w-56 lg:left-0 lg:top-5 lg:w-auto"
                alt=""
              />
            </h1>
            <img
              src="./icons/1.png"
              className="hidden h-24 w-24 lg:block"
              alt=""
            />
          </div>
          <p
            className={`${poppins.className} mt-10 font-sans text-lg leading-5 text-black md:text-2xl lg:mt-8`}
          >
            I am Parth, a master's student on a 100% scholarship at Penn State
            University, USA. I have also secured admission to LSE and various
            other prestigious universities across the globe.
            <br />
            <span className={`${recoleta.className}`}>
              My job : Helping you secure scholarships to study abroad
            </span>
          </p>
        </div>
      </div>

      <div className="relative mb-10 mt-10 flex w-full max-w-7xl flex-col rounded-3xl bg-white p-8 shadow lg:flex-row lg:p-14">
        <img
          src="./icons/8.png"
          className="absolute -right-16 -top-16 hidden h-36 lg:block"
          alt=""
        />
        <div className="flex w-full flex-col lg:px-14">
          <h2
            className={`${recoleta.className} text-3xl text-black lg:text-5xl`}
          >
            Better than Any Consultancy...
          </h2>
          <p className="my-5 font-sans text-xl lg:text-2xl">
            I come from a humble background and was the first in my family to
            study abroad, so I understand the challenges. Here we share
            straight-forward, practical tips that worked for us with you.
          </p>
          <img src="./icons/ZERO.png" alt="" />
        </div>
        <div className="mt-5 flex w-full flex-col lg:mt-0">
          <Image
            className="h-full rounded-lg object-cover"
            src={parth}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default SubscriptionComponent;
