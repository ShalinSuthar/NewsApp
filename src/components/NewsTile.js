// src/components/NewsTile.js
import React from 'react';
// import Swipeable from 'react-swipeable';

const NewsTile = ({ article }) => {
  const handleSwipe = (event, delta) => {
    if (delta > 50) {
      // Swipe right, implement your navigation logic here
      console.log('Swiped right!');
    }
    // You can add more logic for other swipe directions if needed
  };

  
    return (
        <div>
          <img src={article.urlToImage} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      );
  
};

export default NewsTile;
