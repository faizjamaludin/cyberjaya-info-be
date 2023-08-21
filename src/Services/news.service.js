const News = require("../Models/newsModel");

// create comment user
const addNews = async (data, next) => {
  const newsData = data.body;
  const newsFile = data.files;

  const newsFileFormatted = newsFile.map((file) => ({
    ...file,
    destination: file.destination.replace(/\\/g, "/"),
    path: file.path.replace(/\\/g, "/"),
  }));

  const fileItem = newsFileFormatted.map((data, key) => {
    return {
      path: data.path,
      originalName: data.originalname,
      mimeType: data.mimetype,
    };
  });

  const news = new News({
    newsTitle: newsData.newsTitle,
    newsInfo: newsData.newsInfo,
    newsFile: fileItem,
  });

  news.save();

  return news;
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
