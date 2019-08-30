const uuidv1 = require('uuid/v1');
const Comment = require('../models/comments');

const postComment = (message) => {
  const commentId = uuidv1();
  const post = new Comment({
    commentId: commentId,
    chatId: message.chatId,
    author: message.author,
    text: message.text,
  });
  post.save((err) => {
    if (err) {
      console.log(err);
    } 
  })
}
// to handle retrieval of comments for a particular chat
const retrieveComments = (chatId) => {

}
// To be done at some later point
// const getCommentsForPhoto = (req, res) => {
//   console.log('hit post for comment')
//   const text = req.body.text;
//   const post = new Comment({
//     id: uuidv1(),
//     text: text,
//   });
//   post.save((err, post) => {
//     if (err) {
//       res.sendStatus(404);
//       console.log(err);
//     } else {
//       res.send('successfully saved this comment ', post)
//     }
//   })
// }

module.exports = {
  postComment
}
