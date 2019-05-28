import { connect } from 'react-redux';
import Comment from '../components/Comment.jsx';
import { changeReplyVisibility, postComment } from '../actions/main.jsx';

const mapStateToProps = (state) => {
  return { replyVisibility: state.replyVisibility }
}
// to be removed once confirmed
const mapDispatchToProps = (dispatch) => ({
  HandleReplyClick: () =>
    dispatch(changeReplyVisibility()),
  HandleCommentSubmit: (comment, chatId) => 
    dispatch(postComment(comment, chatId))
});

const CommentSectionContainer = connect(mapStateToProps, mapDispatchToProps)(Comment);
export default CommentSectionContainer;
