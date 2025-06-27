"use client";
import React from "react";

const articles = [
  {
    title: "Lorem ipsum dolor sit amet.",
    date: "January 21, 2025",
    description: "This is a brief description of the first article.",
    bgColor: "bg-yellow-200",
    imgSrc: "https://placehold.co/400x250",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    date: "January 22, 2025",
    description: "This is a brief description of the second article.",
    bgColor: "bg-orange-200",
    imgSrc: "https://placehold.co/400x250",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    date: "January 23, 2025",
    description: "This is a brief description of the third article.",
    bgColor: "bg-blue-200",
    imgSrc: "https://placehold.co/400x250",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    date: "January 24, 2025",
    description: "This is a brief description of the fourth article.",
    bgColor: "bg-green-200",
    imgSrc: "https://placehold.co/400x250",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    date: "January 22, 2025",
    description: "This is a brief description of the second article.",
    bgColor: "bg-orange-200",
    imgSrc: "https://placehold.co/400x250",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    date: "January 23, 2025",
    description: "This is a brief description of the third article.",
    bgColor: "bg-yellow-200",
    imgSrc: "https://placehold.co/400x250",
  },
];

const ArticleCard: React.FC<{ article: (typeof articles)[0] }> = ({
  article,
}) => (
  <div className="transform rounded-3xl p-4 transition duration-300 ease-in-out hover:scale-105">
    <div className={`rounded-3xl p-8 ${article.bgColor}`}>
      <img
        src={article.imgSrc}
        alt={article.title}
        className="mb-4 w-full rounded-3xl object-cover"
      />
      <h2 className="mb-2 text-xl font-bold lg:text-3xl 2xl:text-4xl">
        {article.title}
      </h2>
      <p className="mb-4 text-sm text-gray-600">{article.date}</p>
      <p className="mb-4 text-gray-800 lg:text-lg 2xl:text-xl">
        {article.description}
      </p>
      <a href="#" className="text-blue-500 hover:underline">
        Continue Reading
      </a>
    </div>
  </div>
);

const Articles: React.FC = () => (
  <div className="max-w-8xl mx-auto mb-16 mt-5 p-4 lg:mb-28">
    <h1 className="mb-8 text-3xl font-bold lg:text-5xl 2xl:text-6xl">
      All Recent Articles
    </h1>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:gap-10">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  </div>
);

export default Articles;
