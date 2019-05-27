import axios from 'axios';

// APP 
const changeView = (selectedView) => ({
  type: 'CHANGE_CURRENT_VIEW',
  view: selectedView,
})
// RATE
const getCurrentDog = () => {
  // get the current dog to rate from the api
  return (dispatch) => { 
    axios.get(`/api/new`)
      .then((res) => {
        console.log('we hit the get api request');
        let doge = res.data.map(doge => doge = doge.url);
        dispatch(updateCurrentDog(doge))
      })
  }
}
const updateCurrentDog = (doge) => ({
  type: 'GET_CURRENT_DOG',
  doge: doge,
})

// TRENDING
const updateTrendingDogs = (doges) => ({
  type: 'UPDATE_TRENDING_DOGS',
  trendingDoges: doges,
})

const getTrendingDogs = () => {
  return (dispatch) => {
    const request = axios({
      method: 'GET',
      url: '/api/trending',
      headers: []
    });
    return request.then(res => {
      console.log('we hit the get api request for getTrendingDogs');
      let dogeUrls = res.data.map(doge => doge = doge.url);
      dispatch(updateTrendingDogs(dogeUrls))
    })
  }
}

export {
  getCurrentDog,
  changeView,
  updateCurrentDog,
  getTrendingDogs,
  updateTrendingDogs
}
