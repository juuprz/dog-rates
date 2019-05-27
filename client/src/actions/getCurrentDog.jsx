import axios from 'axios';
import updateCurrentDog from './updateCurrentDog.jsx';

// const getCurrentDog = () => {
//   // get the current dog to rate from the api
//   axios.get(`/api/new`)
//     .then((res) => {
//       console.log('we hit the get api request');
//       let doge = res.data.map(doge => doge = doge.url);
//       // A SEPERATE ACTION IS DISPATCHED IN RESPONSE TO THE DOG LIST TO UPDATE STATE
//       dispatch(updateCurrentDog(doge))
//     })
//     .catch(err =>
//       console.log(err));
// }
// export default getCurrentDog;