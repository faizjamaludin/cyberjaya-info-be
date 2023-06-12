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
    user_id: listingData[1].userId,
    listing: {
      list_type: listingData[0].listType,
      list_cat: listingData[0].listCategory,
      list_name: listingData[0].listName,
      list_address: {
        address1: listingData[0].address.address1,
        address2: listingData[0].address.address2,
        postal: listingData[0].address.postal,
      },
      list_overview: listingData[0].overview,
      list_phone: listingData[0].phone,
      list_web: listingData[0].web,
      list_email: listingData[0].email,
      list_fb: listingData[0].fb,
      list_insta: listingData[0].insta,
      list_twitter: listingData[0].twitter,
      list_openingHour: {
        monday: {
          from: listingData[0].openingHour.monday.from,
          to: listingData[0].openingHour.monday.to,
        },
        tuesday: {
          from: listingData[0].openingHour.tuesday.from,
          to: listingData[0].openingHour.tuesday.to,
        },
        wednesday: {
          from: listingData[0].openingHour.wednesday.from,
          to: listingData[0].openingHour.wednesday.to,
        },
        thursday: {
          from: listingData[0].openingHour.thursday.from,
          to: listingData[0].openingHour.thursday.to,
        },
        friday: {
          from: listingData[0].openingHour.friday.from,
          to: listingData[0].openingHour.friday.to,
        },
      },
      list_pricing: {
        list_category: {
          cat_title: listingData[0].pricing.category.catTitle,
          cat_item: {
            item_title: listingData[0].pricing.category.catItem.itemTitle,
            item_desc: listingData[0].pricing.category.catItem.itemDesc,
            item_price: listingData[0].pricing.category.catItem.itemPrice,
          },
        },
      },
    },
  });

  listing.save();
  // console.log(listingData[1].userId);
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

const getListingUserId = async (id) => {
  const userListing = await Listing.find({ user_id: id });
  return userListing;
};

module.exports = {
  createListing,
  getListing,
  getListingId,
  getListingUserId,
};
