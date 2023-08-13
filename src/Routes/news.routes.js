const express = require("express");
const router = express.Router();
const newsController = require("../Controllers/news.controller");

router.post("/", newsController.addNews);
router.get("/all", newsController.getAllNews);
router.get("/:id", newsController.getNews);

module.exports = router;
