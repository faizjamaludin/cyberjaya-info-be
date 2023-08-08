const express = require("express");
const router = express.Router();
const userController = require("../Controllers/users.controller");
const newsController = require("../Controllers/news.controller");

router.post("/", newsController.addNews);
router.get("/id/:id", userController.getUser);
router.get("/login", userController.loginUser);

module.exports = router;
