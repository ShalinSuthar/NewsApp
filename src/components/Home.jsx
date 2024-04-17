import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';
import NewsList from './NewsList';
import NewsService from '../services/NewsService';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      const newsService = new NewsService();
      const fetchedArticles = await newsService.getNews(selectedCategory, searchQuery);
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Reset search query
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="home">
      <Navbar
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
      />
      <div className="container">
        <h2 className="mt-4 mb-3">Latest News</h2>
        <NewsList articles={articles} />
      </div>
    </div>
  );
};

export default Home;
