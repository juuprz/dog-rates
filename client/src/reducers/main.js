import { combineReducers } from 'redux';
import currentDogReducer from './currentDog.js';
import viewChangeReducer from './viewChange.js';
import trendingDogsReducer from './trendingDogs.js';
import commentReducer from './comments.js';


const rootReducer = combineReducers({
  view: viewChangeReducer,
  currentDog: currentDogReducer,
  trendingDoges: trendingDogsReducer,
  replyVisibility: commentReducer,
  commentText: commentReducer,
})

export default rootReducer;