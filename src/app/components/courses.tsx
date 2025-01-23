'use client'
import React, { useState } from 'react';

const episodes = [
  {
    category: 'All',
    title: 'How to Make $10k/Month as a Writer – Nicolas Cole',
    image: 'https://placehold.co/600x400',
    overlay: 'you don\'t need followers',
    link: '/',
  },
  {
    category: 'All',
    title: 'How to Land your Dream Job – Chats with my Team – Kaelyn Grace Apple',
    image: 'https://placehold.co/600x400',
    overlay: 'strategic networking',
    link: '/',
  },
  {
    category: 'All',
    title: 'How to Scale your Startup with Growth Levers: Matt Lerner',
    image: 'https://placehold.co/600x400',
    overlay: 'the 90/10 rule',
    link: '/',
  },
  {
    category: 'All',
    title: 'Cal Newport: The Secrets of Slow Productivity',
    image: 'https://placehold.co/600x400',
    overlay: 'you\'re doing too much',
    link: '/',
  },
  {
    category: 'All',
    title: 'Eric Siu: Building a $10M+ Marketing Agency',
    image: 'https://placehold.co/600x400',
    overlay: 'go the extra mile',
    link: '/',
  },
  {
    category: 'All',
    title: 'How to Build a Business that Lets you Quit your Job – Dickie Bush',
    image: 'https://placehold.co/600x400',
    overlay: 'your first $10k per month',
    link: '/',
  },
  {
    category: 'All',
    title: 'Cal Newport: The Secrets of Slow Productivity',
    image: 'https://placehold.co/600x400',
    overlay: 'you\'re doing too much',
    link: '/',
  },
  {
    category: 'All',
    title: 'Eric Siu: Building a $10M+ Marketing Agency',
    image: 'https://placehold.co/600x400',
    overlay: 'go the extra mile',
    link: '/',
  },
  {
    category: 'All',
    title: 'How to Build a Business that Lets you Quit your Job – Dickie Bush',
    image: 'https://placehold.co/600x400',
    overlay: 'your first $10k per month',
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
      <h1 className="text-3xl lg:text-5xl 2xl:text-6xl font-bold mb-4 lg:my-10">Listen to Recent Episodes</h1>
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
          <div key={index} className="p-4 border rounded-lg relative">
            <a href={episode.link}>
            <img src={episode.image} alt={episode.title} className="mb-4 w-full h-48 object-cover rounded-lg" /></a>
            {/* <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">{episode.overlay}</div> */}
            <h2 className="text-xl lg:text-2xl font-semibold mb-2 lg:px-4">{episode.title}</h2>
            <a href={episode.link} className="text-blue-600 hover:text-blue-500 font-bold lg:text-xl lg:px-4">Listen Now &rarr;</a>
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
