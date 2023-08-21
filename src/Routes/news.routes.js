const express = require("express");
const router = express.Router();
const newsController = require("../Controllers/news.controller");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const newsId = new mongoose.Types.ObjectId();

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join("assets/news", newsId.toString());
    console.log(uploadPath);
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    // console.log(req.body)
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.array("file"), newsController.addNews);
router.get("/all", newsController.getAllNews);
router.get("/:id", newsController.getNews);

module.exports = router;
