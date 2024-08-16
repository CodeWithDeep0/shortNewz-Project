import React from 'react';
import { Container } from '@mui/material';
import NewsCard from './Newscard';

const Newscontent = ({ news, page, setPage }) => {
  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <Container maxWidth="md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {news.map((article, index) => (
          <NewsCard key={index} news={article} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          className="px-4 py-2 bg-gray-300 rounded-md"
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default Newscontent;
