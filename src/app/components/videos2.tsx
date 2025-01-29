'use client'
import React, { useState } from 'react';

const episodes = [
  {
    category: 'All',
    title: 'Sample 1',
    image: 'https://placehold.co/600x400',
    price: '350',
    link: '/',
  },
  {
    category: 'All',
    title: 'Sample 1',
    image: 'https://placehold.co/600x400',
    price: '350',
    link: '/',
  },
  {
    category: 'All',
    title: 'Sample 1',
    image: 'https://placehold.co/600x400',
    price: '350',
    link: '/',
  },
  {
    category: 'All',
    title: 'Sample 1',
    image: 'https://placehold.co/600x400',
    price: '350',
    link: '/',
  },
  {
    category: 'All',
    title: 'Sample 1',
    image: 'https://placehold.co/600x400',
    price: '350',
    link: '/',
  },
  {
    category: 'All',
    title: 'Sample 1',
    image: 'https://placehold.co/600x400',
    price: '350',
    link: '/',
  },
  {
    category: 'All',
    title: 'Sample 1',
    image: 'https://placehold.co/600x400',
    price: '350',
    link: '/',
  },
  {
    category: 'All',
    title: 'Sample 1',
    image: 'https://placehold.co/600x400',
    price: '350',
    link: '/',
  },
  {
    category: 'All',
    title: 'Sample 1',
    image: 'https://placehold.co/600x400',
    price: '350',
    link: '/',
  },
  
  // Add more episodes as needed
];

const categories = ['All', 'Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6', 'Season 7', 'Season 8'];

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleEpisodes, setVisibleEpisodes] = useState(6);

  const loadMore = () => {
    setVisibleEpisodes((prev) => prev + 3);
  };

  const filteredEpisodes = selectedCategory === 'All'
    ? episodes
    : episodes.filter(episode => episode.category === selectedCategory);

  return (
    <div className="p-4">
      <h1 className="text-3xl lg:text-5xl 2xl:text-6xl font-bold mb-4 lg:my-10">Explore All Courses</h1>
      <div className="flex flex-wrap gap-4 lg:gap-5 mb-4 lg:my-8">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
        {filteredEpisodes.slice(0, visibleEpisodes).map((episode, index) => (
          <div key={index} className="p-4 border rounded-lg relative bg-[#f9f6f3] hover:bg-[#fd976d]">
            <a href={episode.link}>
            <img src={episode.image} alt={episode.title} className="mb-4 w-full h-48 object-cover rounded-lg" /></a>
            {/* <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">{episode.price}</div> */}
            <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-2 lg:px-4">{episode.title}</h2>
            <p className='text-lg lg:text-xl font-semibold mb-2 lg:px-4'>Starts At - ₹ {episode.price}</p>
            <a href={episode.link} className="text-blue-600 hover:text-blue-500 font-bold lg:text-xl lg:px-4">Explore Now &rarr;</a>
          </div>
        ))}
      </div>
      {visibleEpisodes < filteredEpisodes.length && (
        <div className="text-center mt-4 lg:mt-8">
          <button onClick={loadMore} className="px-4 py-2 lg:text-2xl 2xl:text-3xl bg-blue-500 hover:bg-blue-600 text-white rounded">Load More</button>
        </div>
      )}
    </div>
  );
};

export default App;
