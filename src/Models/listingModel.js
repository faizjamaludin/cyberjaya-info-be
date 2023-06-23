const mongoose = require("mongoose");

const categoryItemSchema = new mongoose.Schema({
  item_title: String,
  item_desc: String,
  item_price: String,
})

const pricingCategorySchema = new mongoose.Schema({
  cat_title: String,
  cat_item: [categoryItemSchema]
})

const listCategorySchema = new mongoose.Schema({
  list_category: [pricingCategorySchema]
})

const listFromToSchema = new mongoose.Schema({
  from: String,
  to: String
})

const listOpeningHour = new mongoose.Schema({
  monday: [listFromToSchema],
  tuesday: [listFromToSchema],
  wednesday: [listFromToSchema],
  thursday: [listFromToSchema],
  friday: [listFromToSchema],
  saturday: [listFromToSchema],
  sunday: [listFromToSchema],
})

const listingSchema = new mongoose.Schema({
  user_id: String,
  listing: {
    list_type: String,
    list_cat: String,
    list_name: String,
    list_address: {
      address1: String,
      address2: String,
      postal: {
        type: Number,
        min: 5,
      },
      state: String,
    },
    gallery: [{
      path: String,
      originalName: String,
      mimeType: String
    }],
    list_overview: String,
    list_phone: String,
    list_web: String,
    list_email: String,
    list_fb: String,
    list_insta: String,
    list_twitter: String,
    list_openingHour: [listOpeningHour],
    list_pricing: [listCategorySchema],
    list_date: { type: Date, default: Date.now },
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
