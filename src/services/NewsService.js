import axios from 'axios';
import dummyArticles from './dummyArticles';

class NewsService {
  
  constructor() {
    this.baseUrl = 'https://newsapi.org/v2/';
    this.apiKey = 'c07633ed8a3f4d0e970f732e73132778';
  }

  async getNews(category, query = '') {
    let useDummyResponse = true;

    if (useDummyResponse) {
      return dummyArticles; // Return the dummy response
    }
    try {
      const url = `${this.baseUrl}top-headlines`;
      const params = {
        country: 'us', // Update with your desired country code
        category,
        q: query,
        apiKey: this.apiKey,
      };

      const response = await axios.get(url, { params });
      const filteredArticles = response.data.articles.filter(
        (article) =>
          article.title && article.description && article.urlToImage != null
      );
      return filteredArticles;
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  }
}

export default NewsService;
