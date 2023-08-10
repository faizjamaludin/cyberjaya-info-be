const express = require("express");
const router = express.Router();
const userController = require("../Controllers/users.controller");
const newsController = require("../Controllers/news.controller");

router.post("/", newsController.addNews);
router.get("/all", newsController.getAllNews);
router.get("/:id", newsController.getNews);
router.get("/login", userController.loginUser);

module.exports = router;
