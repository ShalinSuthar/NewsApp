import React from 'react';
import NewsTile from './NewsTile';

const NewsList = ({ articles }) => {
  return (
    <div className="row">
      {articles.map((article) => (
        <div key={article.title} className="col-12 col-md-3 mb-3">
          <NewsTile article={article} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;
