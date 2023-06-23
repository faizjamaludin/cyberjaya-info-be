const listingService = require("../Services/listings.service");
const multer = require("multer");


// create list
const createListing = async (req, res, next) => {
  try {
    const listing = await listingService.createListing(req.body);
    // console.log(req.body);
    res.status(201).json(listing);
  } catch (err) {
    next(err);
  }
};

// get all list and display details
const getListing = async (req, res, next) => {
  try {
    const listing = await listingService.getListing();
    res.status(201).json(listing);
  } catch (error) {
    console.log(error);
  }
};

// get listing with id
const getListingId = async (req, res, next) => {
  try {
    const listing = await listingService.getListingId(req.params.id);
    res.status(200).json(listing);
  } catch (error) {
    console.log(error);
  }
};

const getListingUserId = async (req, res, next) => {
  try {
    const userListing = await listingService.getListingUserId(req.params.id);
    res.status(200).json(userListing);
    // console.log(userListing);
  } catch (error) {
    console.log(error);
  }
};

const deleteListing = async (req, res, next) => {
  try {
    const listing = await listingService.deleteListing(req.params.id);
    res.status(200).json(listing);
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  createListing,
  getListing,
  getListingId,
  getListingUserId,
  deleteListing
};
