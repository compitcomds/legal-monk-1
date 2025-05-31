'use client'
import React from 'react';

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

const ArticleCard: React.FC<{ article: typeof articles[0] }> = ({ article }) => (
  <div className="p-4 rounded-3xl transition transform hover:scale-105 duration-300 ease-in-out">
    <div className={`p-8 rounded-3xl ${article.bgColor}`}>
      <img src={article.imgSrc} alt={article.title} className="w-full object-cover mb-4 rounded-3xl" />
      <h2 className="text-xl lg:text-3xl 2xl:text-4xl font-bold mb-2">{article.title}</h2>
      <p className="text-sm text-gray-600 mb-4">{article.date}</p>
      <p className="text-gray-800 mb-4 lg:text-lg 2xl:text-xl">{article.description}</p>
      <a href="#" className="text-blue-500 hover:underline">Continue Reading</a>
    </div>
  </div>
);

const Articles: React.FC = () => (
  <div className="max-w-8xl mx-auto p-4 mt-5 mb-16 lg:mb-28">
    <h1 className="text-3xl lg:text-5xl 2xl:text-6xl font-bold mb-8">All Recent Articles</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  </div>
);

export default Articles;
