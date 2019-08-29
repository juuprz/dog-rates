
const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  commentId: String,
  chatId: String,
  author: String,
  text: String,
});
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;