const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

// const upload = multer({ dest: 'Assets/' })

require("dotenv").config();

const cors = require("cors");

// set express
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "assets")));

// Set variable
var usersRouter = require("./src/Routes/users.routes");
var listingRouter = require("./src/Routes/listing.routes");
var commentRouter = require("./src/Routes/comment.routes");
var newsRouter = require("./src/Routes/news.routes");
var eventRouter = require("./src/Routes/event.routes");
var PORT = process.env.PORT;
var PASS_MONGODB = process.env.PASSWORD_MONGODB;

// Connect to database
mongoose
  .connect(
    `mongodb+srv://admin:${PASS_MONGODB}@cyberjayainfoapi.naqoiop.mongodb.net/CyberjayaInfoAPI?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

//   Mount Routes
app.use("/users", usersRouter);
app.use("/listing", listingRouter);
app.use("/comment", commentRouter);
app.use("/news", newsRouter);
app.use("/event", eventRouter);
app.use(express.json());

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
