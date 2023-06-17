const express = require('express');
const router = express.Router();
const commentController = require('../Controllers/comments.controller');

router.post('/', commentController.createComment);
router.get('/list/:id', commentController.getListingCommentId);
router.delete('/delete/:id', commentController.deleteComment);

module.exports = router;