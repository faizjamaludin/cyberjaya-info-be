const userService = require("../Services/users.service");

// register user
const userRegister = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    console.log(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// login user
const userLogin = (req, res, next) => {
  res.send("user login");
};

// get user by id
const getUser = async (req, res, next) => {
  try {
    const user = await userService.getUser(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  userRegister,
  userLogin,
  getUser,
};
