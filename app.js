const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require('cors')

// set express
const app = express();
app.use(express.json())
app.use(cors());

// Set variable
var usersRouter = require("./src/Routes/users.routes");
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
app.use(express.json())

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
