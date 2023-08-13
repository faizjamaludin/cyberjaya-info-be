const express = require("express");
const router = express.Router();
const eventController = require('../Controllers/event.controller')

router.post("/", eventController.addEvent);
router.get("/all", eventController.getAllEvent);
router.get("/:id", eventController.getEvent);

module.exports = router;