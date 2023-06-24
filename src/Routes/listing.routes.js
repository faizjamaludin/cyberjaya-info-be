const express = require("express");
const router = express.Router();
const listingController = require("../Controllers/listings.controller");
const multer = require('multer');
const path = require('path');
const fs = require('fs');


// Define storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const userId = req.body.userId
        const uploadPath = `./Assets/${userId}`

        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        // console.log(req.body)
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });



router.post("/", listingController.createListing);
router.post("/test/listing", upload.array('gallery.pictures'), listingController.testListing);
router.get("/alllist", listingController.getListing);
router.get("/list/:id", listingController.getListingId);
router.get("/list/user/:id", listingController.getListingUserId);
router.delete("/list/delete/:id", listingController.deleteListing);

module.exports = router;
