const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  full_name: String,
  username: String,
  email: String,
  phone: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;