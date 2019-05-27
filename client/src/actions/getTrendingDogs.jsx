import axios from 'axios';
import updateTrendingDogs from './updateTrendingDogs.jsx';
 
// initiate this action to get the list of trending dog urls from the server
// once response is received, initiate secondary action to update state based on the result
// const getTrendingDogs = () => {
//   // get the list of trending dogs
//   axios.get(`/api/trending`)
//     .then((res) => {
//       console.log('we hit the get api request for getTrendingDogs');
//       let dogeUrls = res.data.map(doge => doge = doge.url);
//       // dispatch updateTrendingDogs
//       dispatch(updateTrendingDogs(doges))
//     })
//     .catch(err =>
//       console.log(err));
// }
// export default getTrendingDogs;