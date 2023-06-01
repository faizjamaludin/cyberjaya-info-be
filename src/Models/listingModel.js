const mongoose = require('mongoose');

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
    }
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;