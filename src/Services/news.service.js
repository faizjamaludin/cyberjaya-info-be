const News = require("../Models/newsModel");

// create comment user
const addNews = async (newsData, next) => {
  const news = new News({
    newsTitle: newsData.newsTitle,
    newsInfo: newsData.newsInfo,
  });

  news.save();
};

const getAllNews = async () => {
  const news = await News.find().sort({ _id: -1 });

  return news;
};

const getNews = async (id) => {
  const news = await News.findById(id);

  return news;
};

module.exports = {
  addNews,
  getAllNews,
  getNews,
};
