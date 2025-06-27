"use client";
import React, { useState } from "react";

const episodes = [
  {
    category: "All",
    title: "Sample 1",
    image: "https://placehold.co/600x400",
    price: "350",
    link: "/",
  },
  {
    category: "All",
    title: "Sample 1",
    image: "https://placehold.co/600x400",
    price: "350",
    link: "/",
  },
  {
    category: "All",
    title: "Sample 1",
    image: "https://placehold.co/600x400",
    price: "350",
    link: "/",
  },
  {
    category: "All",
    title: "Sample 1",
    image: "https://placehold.co/600x400",
    price: "350",
    link: "/",
  },
  {
    category: "All",
    title: "Sample 1",
    image: "https://placehold.co/600x400",
    price: "350",
    link: "/",
  },
  {
    category: "All",
    title: "Sample 1",
    image: "https://placehold.co/600x400",
    price: "350",
    link: "/",
  },
  {
    category: "All",
    title: "Sample 1",
    image: "https://placehold.co/600x400",
    price: "350",
    link: "/",
  },
  {
    category: "All",
    title: "Sample 1",
    image: "https://placehold.co/600x400",
    price: "350",
    link: "/",
  },
  {
    category: "All",
    title: "Sample 1",
    image: "https://placehold.co/600x400",
    price: "350",
    link: "/",
  },

  // Add more episodes as needed
];

const categories = [
  "All",
  "Season 1",
  "Season 2",
  "Season 3",
  "Season 4",
  "Season 5",
  "Season 6",
  "Season 7",
  "Season 8",
];

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleEpisodes, setVisibleEpisodes] = useState(6);

  const loadMore = () => {
    setVisibleEpisodes((prev) => prev + 3);
  };

  const filteredEpisodes =
    selectedCategory === "All"
      ? episodes
      : episodes.filter((episode) => episode.category === selectedCategory);

  return (
    <div className="mb-16 space-y-8 p-4 lg:mb-28">
      <h1 className="text-3xl font-bold lg:text-5xl 2xl:text-6xl">
        Explore All Courses
      </h1>
      <div className="mb-4 flex flex-wrap gap-4 lg:my-8 lg:gap-5">
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full px-4 py-2 ${selectedCategory === category ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {filteredEpisodes.slice(0, visibleEpisodes).map((episode, index) => (
          <div
            key={index}
            className="relative rounded-lg border bg-[#f9f6f3] p-4 hover:bg-[#fd976d]"
          >
            <a href={episode.link}>
              <img
                src={episode.image}
                alt={episode.title}
                className="mb-4 h-48 w-full rounded-lg object-cover"
              />
            </a>
            {/* <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">{episode.price}</div> */}
            <h2 className="mb-2 text-xl font-semibold lg:px-4 lg:text-2xl 2xl:text-3xl">
              {episode.title}
            </h2>
            <p className="mb-2 text-lg font-semibold lg:px-4 lg:text-xl">
              Starts At - ₹ {episode.price}
            </p>
            <a
              href={episode.link}
              className="font-bold text-blue-600 hover:text-blue-500 lg:px-4 lg:text-xl"
            >
              Explore Now &rarr;
            </a>
          </div>
        ))}
      </div>
      {visibleEpisodes < filteredEpisodes.length && (
        <div className="mt-4 text-center lg:mt-8">
          <button
            onClick={loadMore}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 lg:text-2xl 2xl:text-3xl"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
