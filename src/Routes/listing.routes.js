const express = require("express");
const router = express.Router();
const listingController = require("../Controllers/listings.controller");

router.post("/", listingController.createListing);
router.get("/alllist", listingController.getListing);
router.get("/list/:id", listingController.getListingId);
router.get("/list/user/:id", listingController.getListingUserId);
router.delete("/list/delete/:id", listingController.deleteListing);

module.exports = router;
