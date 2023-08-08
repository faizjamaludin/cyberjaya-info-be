const Comment = require("../Models/commentModel");

// create comment user
const createComment = async (commentData, next) => {
  const comment = new Comment({
    userId: commentData.userId,
    listingId: commentData.listingId,
    comment: commentData.comment,
  });

  comment.save();
};

// get user from database using id
const getListingCommentId = async (id) => {
  const user = await Comment.find({ listingId: id });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const deleteComment = async (id) => {
  const comment = await Comment.deleteMany({ listingId: id });
  return comment;
};

module.exports = {
  createComment,
  getListingCommentId,
  deleteComment,
};
