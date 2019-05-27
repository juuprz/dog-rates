import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/main';

export default createStore(
  rootReducer, {
    view: 'Trending',
    currentDog: [],
    trendingDoges: [],
  },
  composeWithDevTools(applyMiddleware(thunk)));