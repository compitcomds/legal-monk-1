"use client";
import React, { useState } from "react";

const books = [
  {
    category: "Life",
    title: "Die With Zero – Summary With Notes and Highlights",
    image: "https://placehold.co/600x800",
    link: "/",
  },
  {
    category: "Productivity",
    title: "Atomic Habits (James Clear) – Book Summary, Notes & Highlights",
    image: "https://placehold.co/600x800",
    link: "/",
  },
  {
    category: "Life",
    title:
      "Your Money or Your Life (Vicki Robin) – Book Summary, Notes & Highlights",
    image: "https://placehold.co/600x800",
    link: "/",
  },
  {
    category: "Life",
    title: "How will you measure your life? – Book Summary, Notes & Highlights",
    image: "https://placehold.co/600x800",
    link: "/",
  },
  {
    category: "Creativity",
    title: "Show Your Work! (Austin Kleon) – Book Summary, Notes & Highlights",
    image: "https://placehold.co/600x800",
    link: "/",
  },
  {
    category: "Business",
    title:
      "The Making of a Manager (Julie Zhuo) – Book Summary, Notes & Highlights",
    image: "https://placehold.co/600x800",
    link: "/",
  },
];

const categories = [
  "All",
  "Biography",
  "Business",
  "Creativity",
  "Life",
  "Productivity",
];

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="mb-16 p-4 lg:mb-28">
      <h1 className="mb-4 text-3xl font-bold lg:my-10 lg:text-5xl">
        Recent Books
      </h1>
      <div className="mb-4 flex flex-wrap gap-3">
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
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filteredBooks.map((book, index) => (
          <div key={index} className="rounded-3xl border p-4">
            <a href={book.link}>
              <img
                src={book.image}
                alt={book.title}
                className="mb-4 h-56 w-full rounded-3xl object-cover"
              />
            </a>
            <h2 className="mb-2 px-3 text-xl font-semibold lg:text-2xl">
              {book.title}
            </h2>
            <a
              href={book.link}
              className="px-3 text-lg font-bold text-black hover:text-blue-500"
            >
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
