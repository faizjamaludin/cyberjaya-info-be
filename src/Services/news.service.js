const News = require("../Models/newsModel");

// create comment user
const addNews = async (newsData, next) => {
  const news = new News({
    newsTitle: newsData.newsTitle,
    newsItem: newsData.newsItem,
  });

  news.save();
};

module.exports = {
  addNews,
};
