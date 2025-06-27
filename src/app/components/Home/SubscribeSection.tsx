import React from "react";

const SubscribeSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center rounded-lg bg-[#f9f6f3] px-6 py-16 shadow-lg md:px-20 lg:px-24">
      <div className="mt-10 flex w-full max-w-6xl flex-col rounded-lg bg-white p-8 shadow-lg lg:flex-row lg:p-16">
        <div className="flex w-full flex-col lg:px-14">
          <h2 className="text-3xl text-black lg:text-5xl">
            Subscribe to <span className="font-bold text-black">LifeNotes</span>
          </h2>
          <p className="my-5 font-sans text-xl lg:text-2xl">
            Join a growing community of more than{" "}
            <span className="font-bold">230,000 friendly readers.</span>
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center -space-x-2">
              <img
                src="https://placehold.co/48"
                alt="User 1"
                className="h-12 w-12 rounded-full border-2 border-white"
              />
              <img
                src="https://placehold.co/48"
                alt="User 2"
                className="h-12 w-12 rounded-full border-2 border-white"
              />
              <img
                src="https://placehold.co/48"
                alt="User 3"
                className="h-12 w-12 rounded-full border-2 border-white"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <input
                  type="radio"
                  id="5-stars"
                  name="rating"
                  value="5"
                  className="hidden"
                />
                <label className="cursor-pointer font-bold text-yellow-500 hover:scale-110 lg:text-2xl">
                  ★
                </label>
                <input
                  type="radio"
                  id="4-stars"
                  name="rating"
                  value="4"
                  className="hidden"
                />
                <label className="cursor-pointer font-bold text-yellow-500 hover:scale-110 lg:text-2xl">
                  ★
                </label>
                <input
                  type="radio"
                  id="3-stars"
                  name="rating"
                  value="3"
                  className="hidden"
                />
                <label className="cursor-pointer font-bold text-yellow-500 hover:scale-110 lg:text-2xl">
                  ★
                </label>
                <input
                  type="radio"
                  id="2-stars"
                  name="rating"
                  value="2"
                  className="hidden"
                />
                <label className="cursor-pointer font-bold text-yellow-500 hover:scale-110 lg:text-2xl">
                  ★
                </label>
                <input
                  type="radio"
                  id="1-star"
                  name="rating"
                  value="1"
                  className="hidden"
                />
                <label className="cursor-pointer font-bold text-yellow-500 hover:scale-110 lg:text-2xl">
                  ★
                </label>
              </div>
              <span className="ml-2 flex items-center text-center font-sans text-sm text-gray-600">
                200+ reviews
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <p className="mt-4 text-lg text-black">
            I share actionable productivity tips, practical life advice, and
            high-quality insights from across the web, directly to your inbox.
          </p>
          <form className="mt-5 flex max-w-2xl rounded-full border bg-gray-50 px-6 py-4 focus-within:border-gray-300 lg:mt-10">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full border-0 bg-transparent px-0 py-0 pr-4 font-sans font-semibold focus:outline-none focus:ring-0"
              name="topic"
            />
            <button className="-mr-3 flex h-[38px] min-w-20 flex-row items-center justify-center rounded-full border border-transparent bg-[#5DCDF1] py-1 text-xs font-medium tracking-wide transition duration-150 ease-in-out hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-50 lg:min-w-[130px] lg:px-4 lg:py-1.5 lg:text-base">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 lg:mt-8">
            By submitting this form, you’ll be signed up to my free newsletter.
            I may also send you other emails about my courses. You can opt-out
            at any time. For more information, see our
            <a href="#" className="text-blue-500 underline">
              {" "}
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
