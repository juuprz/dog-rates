import Redux from 'redux';
import { CHANGE_REPLY_VISIBILITY, SUBMIT_COMMENT } from '../util/refs.js';

const commentReducer = (state = null, action) => {
  if (action.type === CHANGE_REPLY_VISIBILITY) {
    if (action.replyVisibility) {
      return false;
    } else {
      return true;
    }
  } else if (action.type === SUBMIT_COMMENT) {
    return action.commentText;
  } else {
    return state;
  }
}
export default commentReducer;