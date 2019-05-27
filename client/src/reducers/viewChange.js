import Redux from 'redux';

const viewChangeReducer = (state = null, action) => {
  if (action.type === 'CHANGE_CURRENT_VIEW') {
    return action.view || null;
  } else {
    return state;
  }
}
export default viewChangeReducer;