import React from "react";

const ProductShowcase: React.FC = () => {
  return (
    <div className="bg-white lg: py-16 px-5 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-14">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white rounded-lg w-full">
          <img
            src="https://via.placeholder.com/300" // Replace with the actual image URL
            alt="Feel Good Productivity"
            className="mb-4 border-2 w-full rounded-2xl"
          />
          <h2 className="text-lg lg:text-3xl underline hover:no-underline text-gray-800 mb-2 lg:mb-5">Feel Good Productivity</h2>
          <p className="text-sm lg:text-base text-black text-center mb-4">
            My New York Times Bestselling book about how to do more of what matters to you, while enjoying the journey along the way.
          </p>
          
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white rounded-lg w-full">
          <img
            src="https://via.placeholder.com/300" // Replace with the actual image URL
            alt="Feel Good Productivity"
            className="mb-4 border-2 w-full rounded-2xl"
          />
          <h2 className="text-lg lg:text-3xl underline hover:no-underline text-gray-800 mb-2 lg:mb-5">Feel Good Productivity</h2>
          <p className="text-sm lg:text-base text-black text-center mb-4">
            My New York Times Bestselling book about how to do more of what matters to you, while enjoying the journey along the way.
          </p>
          
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white rounded-lg w-full">
          <img
            src="https://via.placeholder.com/300" // Replace with the actual image URL
            alt="Feel Good Productivity"
            className="mb-4 border-2 w-full rounded-2xl"
          />
          <h2 className="text-lg lg:text-3xl underline hover:no-underline text-gray-800 mb-2 lg:mb-5">Feel Good Productivity</h2>
          <p className="text-sm lg:text-base text-black text-center mb-4">
            My New York Times Bestselling book about how to do more of what matters to you, while enjoying the journey along the way.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
