const User = require("../Models/userModel");

// get user by id
const getUser = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// create user
const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  console.log(userData);
  return user;
};

module.exports = {
  getUser,
  createUser,
};
