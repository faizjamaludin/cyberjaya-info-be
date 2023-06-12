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
        tuesday: {
          from: listingData.openingHour.tuesday.from,
          to: listingData.openingHour.tuesday.to,
        },
        wednesday: {
          from: listingData.openingHour.wednesday.from,
          to: listingData.openingHour.wednesday.to,
        },
        thursday: {
          from: listingData.openingHour.thursday.from,
          to: listingData.openingHour.thursday.to,
        },
        friday: {
          from: listingData.openingHour.friday.from,
          to: listingData.openingHour.friday.to,
        },
      },
      list_pricing: {
        list_category: {
          cat_title: listingData.pricing.category.catTitle,
          cat_item: {
            item_title: listingData.pricing.category.catItem.itemTitle,
            item_desc: listingData.pricing.category.catItem.itemDesc,
            item_price: listingData.pricing.category.catItem.itemPrice
          }
        }
      }
    },
  });

  listing.save();
  // console.log(listingData.address.address1);
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
