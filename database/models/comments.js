
const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  commentId: String,
  postId: String,
  text: String,
});
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;