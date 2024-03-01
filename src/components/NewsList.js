// src/components/NewsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsTile from './NewsTile';
// import {Swipeable} from 'react-swipeable';
import dummyArticles from './dummyArticles'; 

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch data from the API using Axios
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   'https://newsapi.org/v2/top-headlines',
        //   {
        //     params: {
        //       country: 'your-country-code', // Replace with your country code
        //       apiKey: 'your-api-key', // Replace with your News API key
        //       q: searchTerm,
        //       page,
        //     },
        //   }
        // );
        setArticles(dummyArticles);
        // setArticles((prevArticles) => [...prevArticles, ...response.data.articles]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm, page]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSwipe = (event, delta) => {
    if (delta > 50) {
      // Swipe right, implement your navigation logic here
      console.log('Swiped right!');
    }
    // You can add more logic for other swipe directions if needed
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Add a search bar */}
      <input
        type="text"
        placeholder="Search for news..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {articles.map((article) => (
        <div key={article.title} onSwiped={(event, delta) => handleSwipe(event, delta)}>
          <NewsTile article={article} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;
