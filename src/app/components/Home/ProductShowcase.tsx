import React from "react";

const ProductShowcase: React.FC = () => {
  return (
    <div className="lg: bg-white px-5 py-16 lg:px-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 2xl:gap-14">
        {/* Card 1 */}
        <div className="flex w-full flex-col items-center rounded-lg bg-white">
          <img
            src="https://via.placeholder.com/300" // Replace with the actual image URL
            alt="Feel Good Productivity"
            className="mb-4 w-full rounded-2xl border-2"
          />
          <h2 className="mb-2 text-lg text-gray-800 underline hover:no-underline lg:mb-5 lg:text-3xl">
            Feel Good Productivity
          </h2>
          <p className="mb-4 text-center text-sm text-black lg:text-base">
            My New York Times Bestselling book about how to do more of what
            matters to you, while enjoying the journey along the way.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex w-full flex-col items-center rounded-lg bg-white">
          <img
            src="https://via.placeholder.com/300" // Replace with the actual image URL
            alt="Feel Good Productivity"
            className="mb-4 w-full rounded-2xl border-2"
          />
          <h2 className="mb-2 text-lg text-gray-800 underline hover:no-underline lg:mb-5 lg:text-3xl">
            Feel Good Productivity
          </h2>
          <p className="mb-4 text-center text-sm text-black lg:text-base">
            My New York Times Bestselling book about how to do more of what
            matters to you, while enjoying the journey along the way.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex w-full flex-col items-center rounded-lg bg-white">
          <img
            src="https://via.placeholder.com/300" // Replace with the actual image URL
            alt="Feel Good Productivity"
            className="mb-4 w-full rounded-2xl border-2"
          />
          <h2 className="mb-2 text-lg text-gray-800 underline hover:no-underline lg:mb-5 lg:text-3xl">
            Feel Good Productivity
          </h2>
          <p className="mb-4 text-center text-sm text-black lg:text-base">
            My New York Times Bestselling book about how to do more of what
            matters to you, while enjoying the journey along the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
