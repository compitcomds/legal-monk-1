import React from "react";
import Notes from "../components/notes";

const SubscriptionComponent: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="mb-16 flex flex-col items-center rounded-b-xl bg-[#f9f6f3] px-5 py-16 font-title md:px-20 lg:mb-28 lg:rounded-b-3xl lg:px-24 lg:py-28">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row-reverse">
            <div className="relative w-full lg:w-1/2">
              <img
                src="https://placehold.co/400x200"
                className="w-full"
                alt=""
              />
            </div>
            <div className="flex w-full flex-col text-center md:text-start lg:w-1/2">
              <h1 className="mt-6 text-4xl font-bold uppercase text-black md:text-7xl">
                Articles
              </h1>
              <p className="mt-2 font-sans text-lg leading-5 text-black md:text-2xl lg:mt-8 2xl:text-4xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
                laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ad, eius!
              </p>
            </div>
          </div>
        </div>
        <Notes />
      </div>
    </>
  );
};

export default SubscriptionComponent;
