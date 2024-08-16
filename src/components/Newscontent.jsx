import React from 'react';
import { Container } from '@mui/material';
import NewsCard from './Newscard';

const Newscontent = ({ news}) => {


  return (
    <Container maxWidth="md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {news.map((article, index) => (
          <NewsCard key={index} news={article} />
        ))}
      </div>
    
    </Container>
  );
};

export default Newscontent;
