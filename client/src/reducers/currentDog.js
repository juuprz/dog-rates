import Redux from 'redux';

const currentDogReducer = (state = null, action) => {
  // reducers are pure function that take the current state and action and returns new state
  if (action.type === 'GET_CURRENT_DOG') {
    // takes the state, modified it and return it to the root reducer
    return action.doge || null;
  } else {
    return state;
  }
}
export default currentDogReducer;