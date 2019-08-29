// in progress

import { connect } from 'react-redux';
import Comment from '../components/Comment.jsx';
import { changeReplyVisibility, postComment } from '../actions/main.jsx';

const mapStateToProps = (state) => {
  return {
    replyVisibility: state.replyVisibility,
    CommentList: state.commentList
  }
}
// to be removed once confirmed
const mapDispatchToProps = (dispatch) => ({
  HandleReplyClick: () =>
    dispatch(changeReplyVisibility()),
  HandleCommentSubmit: (comment, chatId, author) => 
    dispatch(postComment(comment, chatId, author))
});

const CommentSectionContainer = connect(mapStateToProps, mapDispatchToProps)(Comment);
export default CommentSectionContainer;
