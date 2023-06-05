const Listing = require("../Models/listingModel");

// make first letter uppsercase
const capitalizeWords = (str) => {
  if (!str) {
    return "";
  }

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// create listing service
const createListing = (listingData, next) => {
  const listing = new Listing({
    user_id: "",
    listing: {
      list_type: listingData.listType,
      list_cat: listingData.listCategory,
      list_name: listingData.listName,
      list_address: {
        address1: listingData.address.address1,
        address2: listingData.address.address2,
        postal: listingData.address.postal,
      },
      list_overview: listingData.overview,
      list_phone: listingData.phone,
      list_web: listingData.web,
      list_email: listingData.email,
      list_fb: listingData.fb,
      list_insta: listingData.insta,
      list_twitter: listingData.twitter,
      list_openingHour: {
        monday: {
          from: listingData.openingHour.monday.from,
          to: listingData.openingHour.monday.to,
        },
      },
    },
  });

  listing.save();
  console.log(listingData.address.address1);
};

// get all listing
const getListing = async () => {
  const listing = await Listing.find();

  return listing;
};

// get listing based on id
const getListingId = async (id) => {
  const listing = await Listing.findById(id);
  return listing;
};

module.exports = {
  createListing,
  getListing,
  getListingId,
};
