const express = require("express");
const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path')

// const upload = multer({ dest: 'Assets/' })

require("dotenv").config();

const cors = require('cors')

// set express
const app = express();
app.use(express.json())
app.use(cors());

// Set variable
var usersRouter = require("./src/Routes/users.routes");
var listingRouter = require("./src/Routes/listing.routes");
var commentRouter = require("./src/Routes/comment.routes");
var PORT = process.env.PORT;
var PASS_MONGODB = process.env.PASSWORD_MONGODB;

// set multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Assets/')
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

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
app.post('/photos/upload', upload.array('gallery.pictures'), function (req, res, next) {
  console.log(req.files)
})
app.use(express.json())

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
