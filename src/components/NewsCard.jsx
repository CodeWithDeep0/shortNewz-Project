import React from 'react';

const NewsCard = ({ news }) => {
  const title = news.title || 'No Title Available';
  const description = news.description || 'No Description Available';
  const url = news.url;
  const image = news.image || 'https://via.placeholder.com/150';
  const author = news.author || 'Unknown Author';

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition duration-500 ease-in-out transform hover:scale-105 m-4">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="w-full h-auto object-cover" src={image} alt={title} />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
          {title.length > 100 ? `${title.substring(0, 97)}...` : title}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {description.length > 150 ? `${description.substring(0, 147)}...` : description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-gray-300">
          Author: {author}
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
