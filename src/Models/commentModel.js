const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    userId: String,
    listingId: String,
    comment: String,
    date: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
