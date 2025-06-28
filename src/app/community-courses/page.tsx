import React from "react";
import Videos2 from "../components/videos2";

const SubscriptionComponent: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="mb-16 flex flex-col items-center rounded-b-xl bg-[#f9f6f3] px-5 py-16 font-title md:px-20 lg:mb-28 lg:rounded-b-3xl lg:px-24 lg:py-28">
          <div className="flex flex-col items-center justify-between lg:flex-row-reverse lg:gap-10">
            <div className="relative w-full lg:w-1/2">
              <img
                src="https://placehold.co/400x200"
                className="w-full"
                alt=""
              />
            </div>
            <div className="flex w-full flex-col text-center md:text-start lg:w-1/2">
              <h1 className="mt-6 text-2xl font-bold uppercase text-black md:text-4xl lg:text-7xl">
                Community Courses
              </h1>
              <p className="mt-2 font-sans leading-5 text-black lg:mt-8 2xl:text-xl">
                Here, we collaborate with experts from different fields to
                create resources that empower learners. Every course sold not
                only supports the creators but also helps us provide tech and
                other resources to creators who lack them, while enabling us to
                develop free resources for the community.
              </p>
            </div>
          </div>
        </div>
        <Videos2 />
      </div>
    </>
  );
};

export default SubscriptionComponent;
