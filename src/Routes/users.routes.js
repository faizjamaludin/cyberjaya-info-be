const express = require('express');
const router = express.Router();
const userController = require('../Controllers/users.controller');

router.get('/id/:id', userController.getUser);
router.post('/', userController.createUser);
router.get('/login', userController.loginUser);

module.exports = router;