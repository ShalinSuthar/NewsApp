import React from 'react';
import { useSwipeable } from 'react-swipeable';
import '../styles/NewsTile.css'; // Import custom styles for NewsTile

const NewsTile = ({ article }) => {
  const isMobile = window.innerWidth <= 768;
  const handleSwipeRight = () => {
    // Open the article in a new tab when swiped right
    console.log("handled swipe right")
    openArticleInNewTab(article.url);
  };
  const swipeHandlers = useSwipeable({
    onSwipedRight: handleSwipeRight,
    onSwipedLeft: handleSwipeRight
  });

  const openArticleInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="news-tile"  {...swipeHandlers}>
      <div>
        <div>
        {article.urlToImage && (
        <img src={article.urlToImage} alt="News" className="news-image" />
      )}
        </div>
        <div>
        <div className="news-details">
        <h3 className="news-headline">{article.title}</h3>
        <p className="news-description">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
        {isMobile ? 'Swipe to Read More >>>' : 'Read More'}
        </a>
      </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default NewsTile;
