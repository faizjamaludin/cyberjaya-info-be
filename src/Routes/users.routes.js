const express = require("express");
const userControllers = require("../Controllers/users.controller");
const router = express.Router();

router.post("/register", userControllers.userRegister);
router.get("/login", userControllers.userLogin);
router.get("/getuser", userControllers.getUser);

module.exports = router;
