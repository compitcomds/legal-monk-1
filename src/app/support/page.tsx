import React from "react";
import Books from "../components/marquee";

const SubscriptionComponent: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="mb-16 flex flex-col items-center rounded-b-xl bg-[#f9f6f3] px-5 py-16 font-title md:px-20 lg:mb-28 lg:rounded-b-3xl lg:px-24 lg:py-28">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row-reverse">
            <div className="relative w-full lg:w-1/2">
              <img
                src="/support.jpg"
                className="w-full"
                alt=""
              />
            </div>
            <div className="flex w-full flex-col text-center md:text-start lg:w-1/2">
            <h1 className="mt-6 text-2xl font-bold uppercase text-black md:text-6xl">
              Our Team
            </h1>
            <p className="mt-2 font-sans text-sm leading-5 text-black md:text-lg lg:mt-8">
              <span className="italic">"None of us is as smart as all of us."</span>  These are the behind-the-scenes people, without whom you wouldn't be seeing me here today. It's not just about me or my team — it's about everyone, including you, who made this possible.
            </p>
          </div>
          </div>
        </div>
        <Books />
      </div>
    </>
  );
};

export default SubscriptionComponent;
