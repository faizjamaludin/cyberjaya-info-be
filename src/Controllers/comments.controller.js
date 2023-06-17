const commentService = require('../Services/comments.service');


// create comment
const createComment = async (req, res, next) => {
    try {
        const comment = await commentService.createComment(req.body);
        // res.status(201).send({ message: 'register successful' });
        res.status(201).json(comment);
    } catch (err) {
        next(err);
    }
};


// get user based on id
const getListingCommentId = async (req, res, next) => {
    try {
        const comment = await commentService.getListingCommentId(req.params.id);
        res.status(200).json(comment);
    } catch (error) {
        console.log(error);
    }
};

const deleteComment = async (req, res, next) => {
    try {
        const comment = await commentService.deleteComment(req.params.id);
        res.status(200).json(comment);
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    createComment,
    getListingCommentId,
    deleteComment
}