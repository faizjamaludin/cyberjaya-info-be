const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    eventTitle: String,
    eventDesc: String,
    from: Date,
    to: Date,
    eventLocation: String,
    dateCreated: { type: Date, default: Date.now },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
