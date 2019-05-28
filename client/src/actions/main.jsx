import axios from 'axios';
import { STATES } from 'mongoose';

const socket = io();

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
// COMMENT GROUP
const changeReplyVisibility = () => ({
  type: 'CHANGE_REPLY_VISIBILITY',
  replyVisibility: false,
})

const postComment = (comment, chatId) => {
  return (dispatch) => {
    let post = {
      chatId: chatId,
      text: comment,
    }
    console.log(post, ' to send on client')
    socket.emit("message", post);
    return {};
    // axios.post('/api/postcomment', post)
    //   .then(res => {
    //     console.log(res)
    //     return {}
    //   })
  }
  
  // update state with commentd
  // return {
  //   type: 'SUBMIT_COMMENT',
  //   commentText: comment,

  // }
  // once we get the response we rerender the screen with the users comment
}

// to be completed for the complete chains
// const retrieveComments = (comment, chatId) => {
// }

export {
  getCurrentDog,
  changeView,
  updateCurrentDog,
  getTrendingDogs,
  updateTrendingDogs,
  changeReplyVisibility,
  postComment
}
