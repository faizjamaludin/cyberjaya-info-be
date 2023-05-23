const User = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const saltRounds = 10;

// get user from database using id
const getUser = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

// make first letter uppsercase
const capitalizeWords = (str) => {
  if (!str) {
    return '';
  }

  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


// register user 
const createUser = async (userData, next) => {

  bcrypt.hash(userData.password, saltRounds, (err, hash) => {
    if (err) {
      return next(err)
    } else {

      const user = new User({
        full_name: capitalizeWords(userData.fullName),
        username: userData.username,
        email: userData.email,
        password: hash,
      })

      user.save((err) => {
        if (err) {
          console.log(err)
          return next(err);
        } else {
          return user;
        }
      });

    }
  })

};

const loginUser = async (userData, next) => {
  const user = await User.findOne({ email: userData.email })

  if (!user) {
    const err = new Error('Invalid email or password');
    // err.status = 401;
    return next(err);
  }

  const isMatch = await bcrypt.compare(userData.password, user.password);

  if (!isMatch) {
    const err = new Error('Invalid email or password')
    // err.status = 401;
    return next(err);
  }

  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

  return { user, token };

}

module.exports = {
  getUser,
  createUser,
  loginUser
}