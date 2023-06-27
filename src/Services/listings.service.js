const Listing = require("../Models/listingModel");
const path = require("path");

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
  const obj = JSON.parse(listingData.body.data);

  const item = obj.pricing.pricingCat;
  const catItem = item.map((data, key) => {
    const catData = data.catItem.map((item) => {
      return {
        item_title: item.itemTitle,
        item_desc: item.itemDesc,
        item_price: item.itemPrice,
      };
    });

    const category = {
      list_category: {
        cat_title: data.catTitle,
        cat_item: catData,
      },
    };


    return category;
  });

  // console.log(obj)

  const fileItem = listingData.files.map((data, key) => {
    console.log(data)
    return {
      path: data.path,
      originalName: data.originalname,
      mimeType: data.mimetype
    }
  });



  const listing = new Listing({
    user_id: obj.userId,
    listing: {
      list_type: obj.basicInfo.selectedType,
      list_cat: obj.basicInfo.selectedCategory,
      list_name: obj.basicInfo.listingName,
      list_address: {
        address1: obj.address.address1,
        address2: obj.address.address2,
        postal: obj.address.zip,
        state: obj.address.selectedState,
      },
      list_overview: obj.detailsOverview.overview,
      list_phone: obj.detailsOverview.phone,
      list_web: obj.detailsOverview.web,
      list_email: obj.detailsOverview.email,
      list_fb: obj.detailsOverview.fb,
      list_insta: obj.detailsOverview.insta,
      list_twitter: obj.detailsOverview.twitter,
      gallery: fileItem,
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
      list_pricing: catItem,
    },
  });

  //   const listing = new Listing({
  //     user_id: "",
  //     listing: {
  //       list_type: "",
  //       list_cat: "",
  //       list_name: "",
  //       list_address: {
  //         address1: "",
  //         address2: "",
  //         postal: "",
  //         state: "",
  //       },
  //       gallery: {
  //         path: "",
  //         originalName: "",
  //         mimeType: "",
  //       },
  //       list_overview: "",
  //       list_phone: "",
  //       list_web: "",
  //       list_email: "",
  //       list_fb: "",
  //       list_insta: "",
  //       list_twitter: "",
  //       list_openingHour: {
  //         monday: {
  //           from: "",
  //           to: "",
  //         },
  //         tuesday: {
  //           from: "",
  //           to: "",
  //         },
  //         wednesday: {
  //           from: "",
  //           to: "",
  //         },
  //         thursday: {
  //           from: "",
  //           to: "",
  //         },
  //         friday: {
  //           from: "",
  //           to: "",
  //         },
  //       },
  //       list_pricing: "",
  //     },
  //   });

  listing.save();
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
  // console.log(JSON.parse(listingData.body.data));
  // listingData.body.data.map((item, key) => {
  //   console.log(item);
  // });
};

module.exports = {
  createListing,
  getListing,
  getListingId,
  getListingUserId,
  deleteListing,
  testListing,
};
