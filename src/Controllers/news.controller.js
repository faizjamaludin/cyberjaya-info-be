const newsService = require("../Services/news.service");

// create user
const addNews = async (req, res, next) => {
  try {
    const news = await newsService.addNews(req.body);
    // res.status(201).send({ message: 'register successful' });
    res.status(201).json(news);
  } catch (err) {
    next(err);
  }
};

const getAllNews = async (req, res, next) => {
  try {
    const news = await newsService.getAllNews();
    res.status(201).json(news);
  } catch (err) {
    next(err);
  }
};

const getNews = async (req, res, next) => {
  try {
    const news = await newsService.getNews(req.params.id);
    res.status(201).json(news);
  } catch (error) {}
};

module.exports = {
  addNews,
  getAllNews,
  getNews,
};
