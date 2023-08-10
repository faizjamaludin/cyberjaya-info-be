const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  newsTitle: String,
  newsInfo: String,
  date: { type: Date, default: Date.now },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
