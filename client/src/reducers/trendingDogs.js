import Redux from 'redux';

const trendingDogsReducer = (state = null, action) => {
  if (action.type === 'UPDATE_TRENDING_DOGS') {
    return action.trendingDoges || null;
  } else {
    return state;
  }
}
export default trendingDogsReducer;