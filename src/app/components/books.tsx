'use client'
import React, { useState } from 'react';

const books = [
  {
    category: 'Life',
    title: 'Die With Zero – Summary With Notes and Highlights',
    image: 'https://placehold.co/600x800',
    link: '/',
  },
  {
    category: 'Productivity',
    title: 'Atomic Habits (James Clear) – Book Summary, Notes & Highlights',
    image: 'https://placehold.co/600x800',
    link: '/',
  },
  {
    category: 'Life',
    title: 'Your Money or Your Life (Vicki Robin) – Book Summary, Notes & Highlights',
    image: 'https://placehold.co/600x800',
    link: '/',
  },
  {
    category: 'Life',
    title: 'How will you measure your life? – Book Summary, Notes & Highlights',
    image: 'https://placehold.co/600x800',
    link: '/',
  },
  {
    category: 'Creativity',
    title: 'Show Your Work! (Austin Kleon) – Book Summary, Notes & Highlights',
    image: 'https://placehold.co/600x800',
    link: '/',
  },
  {
    category: 'Business',
    title: 'The Making of a Manager (Julie Zhuo) – Book Summary, Notes & Highlights',
    image: 'https://placehold.co/600x800',
    link: '/',
  },
];

const categories = ['All', 'Biography', 'Business', 'Creativity', 'Life', 'Productivity'];

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBooks = selectedCategory === 'All'
    ? books
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="p-4">
      <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:my-10">Recent Books</h1>
      <div className="flex flex-wrap gap-3 mb-4">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-10">
        {filteredBooks.map((book, index) => (
          <div key={index} className="p-4 border rounded-3xl">
            <a href={book.link}>
            <img src={book.image} alt={book.title} className="mb-4 w-full h-56 object-cover rounded-3xl" /></a>
            <h2 className="text-xl lg:text-2xl font-semibold mb-2 px-3">{book.title}</h2>
            <a href={book.link} className="text-black hover:text-blue-500 text-lg font-bold px-3">Read More &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
