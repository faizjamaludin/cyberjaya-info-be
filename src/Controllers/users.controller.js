const userService = require('../Services/users.service');

const getUser = async (req, res, next) => {
  try {
    const user = await userService.getUser(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).send({ message: 'register successful' });
    // res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUser,
  createUser
}