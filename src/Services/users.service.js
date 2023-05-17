const User = require('../Models/userModel');
const bcrypt = require('bcrypt');


const saltRounds = 10;

const getUser = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

const createUser = async (userData) => {

  bcrypt.hash(userData.password, saltRounds, (err, hash) => {
    if (err) {
      return resizeBy.status(500).json(err);
    } else {
      const user = new User({
        name: userData.name,
        email: userData.email,
        password: hash,
      })

      user.save();
      return user;
    }
  })

  // const user = new User(userData);
  // await user.save();
  // return user;
};

module.exports = {
  getUser,
  createUser
}