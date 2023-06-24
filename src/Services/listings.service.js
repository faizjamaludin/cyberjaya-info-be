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

  console.log(listingData);


  // const item = listingData.pricing.pricingCat;
  // const catItem = item.map((data, key) => {

  //   const catData = data.catItem.map((item) => {

  //     return {
  //       item_title: item.itemTitle,
  //       item_desc: item.itemDesc,
  //       item_price: item.itemPrice,
  //     };
  //   });

  //   const category = {
  //     list_category: {
  //       cat_title: data.catTitle,
  //       cat_item: catData,
  //     },
  //   };

  //   console.log(category);

  //   return category;
  // });



  // const listing = new Listing({
  //   user_id: listingData.userId,
  //   listing: {
  //     list_type: listingData.basicInfo.selectedType,
  //     list_cat: listingData.basicInfo.selectedCategory,
  //     list_name: listingData.basicInfo.listingName,
  //     list_address: {
  //       address1: listingData.address.address1,
  //       address2: listingData.address.address2,
  //       postal: listingData.address.zip,
  //       state: listingData.address.selectedState,
  //     },
  //     list_overview: listingData.detailsOverview.overview,
  //     list_phone: listingData.detailsOverview.phone,
  //     list_web: listingData.detailsOverview.web,
  //     list_email: listingData.detailsOverview.email,
  //     list_fb: listingData.detailsOverview.fb,
  //     list_insta: listingData.detailsOverview.insta,
  //     list_twitter: listingData.detailsOverview.twitter,
  //     list_openingHour: {
  //       monday: {
  //         from: "",
  //         to: "",
  //       },
  //       tuesday: {
  //         from: "",
  //         to: "",
  //       },
  //       wednesday: {
  //         from: "",
  //         to: "",
  //       },
  //       thursday: {
  //         from: "",
  //         to: "",
  //       },
  //       friday: {
  //         from: "",
  //         to: "",
  //       },
  //     },
  //     list_pricing: catItem,
  //   },
  // });

  const listing = new Listing({
    user_id: "",
    listing: {
      list_type: "",
      list_cat: "",
      list_name: "",
      list_address: {
        address1: "",
        address2: "",
        postal: "",
        state: "",
      },
      gallery: {
        path: "",
        originalName: '',
        mimeType: '',
      },
      list_overview: "",
      list_phone: "",
      list_web: "",
      list_email: "",
      list_fb: "",
      list_insta: "",
      list_twitter: "",
      list_openingHour: {
        monday: {
          from: "",
          to: "",
        },
        tuesday: {
          from: "",
          to: "",
        },
        wednesday: {
          from: "",
          to: "",
        },
        thursday: {
          from: "",
          to: "",
        },
        friday: {
          from: "",
          to: "",
        },
      },
      list_pricing: "",
    },
  });

  // listing.save();
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

const deleteListing = async (id) => {
  const listing = await Listing.findByIdAndDelete(id);
  return listing;
};


const testListing = async (listingData, next) => {
  console.log(listingData.files);
  console.log(listingData.body);
}

module.exports = {
  createListing,
  getListing,
  getListingId,
  getListingUserId,
  deleteListing,
  testListing
};
