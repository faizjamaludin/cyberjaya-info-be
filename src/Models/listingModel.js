const mongoose = require("mongoose");

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
    },
    list_overview: String,
    list_phone: String,
    list_web: String,
    list_email: String,
    list_fb: String,
    list_insta: String,
    list_twitter: String,
    list_openingHour: {
      monday: {
        from: String,
        to: String,
      },
      tuesday: {
        from: String,
        to: String,
      },
      wednesday: {
        from: String,
        to: String,
      },
      thursday: {
        from: String,
        to: String,
      },
      friday: {
        from: String,
        to: String,
      },
      saturday: {
        from: String,
        to: String,
      },
      sunday: {
        from: String,
        to: String,
      },
    },
    list_date: { type: Date, default: Date.now },
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
