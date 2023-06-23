const express = require("express");
const router = express.Router();
const listingController = require("../Controllers/listings.controller");
const multer = require('multer');
const path = require('path');

// set multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Assets/')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post("/", upload.array('gallery.pictures'), listingController.createListing);
router.get("/alllist", listingController.getListing);
router.get("/list/:id", listingController.getListingId);
router.get("/list/user/:id", listingController.getListingUserId);
router.delete("/list/delete/:id", listingController.deleteListing);

module.exports = router;
