import React from 'react';
import { Container } from '@mui/material';
import NewsCard from './NewsCard';

const NewsContent = ({ news}) => {


  return (
    <Container maxWidth="lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {news.map((article, index) => (
          <NewsCard key={index} news={article} />
        ))}
      </div>

    
    </Container>
  );
};

export default NewsContent;
