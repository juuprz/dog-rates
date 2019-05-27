import { combineReducers } from 'redux';
import currentDogReducer from './currentDog.js';
import viewChangeReducer from './viewChange.js';
import trendingDogsReducer from './trendingDogs.js';

const rootReducer = combineReducers({
  view: viewChangeReducer,
  currentDog: currentDogReducer,
  trendingDoges: trendingDogsReducer
})

export default rootReducer;