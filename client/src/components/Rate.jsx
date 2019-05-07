import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Rating from 'react-rating';
import axios from 'axios';
// import FA from "react-fontawesome";
// import { faPaw } from '@fortawesome/free-solid-svg-icons';
// import { paw } from '@fortawesome/fontawesome-svg-core';



class Rate extends React.Component {
  handleRateClick(rating) {
    console.log(rating)
    // to be completed
    // need the id of the dog presented to the user

    // axios.post(`/api/rate`, {
    //   rating: rating,

    // })
    // .then((res) => {
    //   console.log(res);
    //   let dogeUrls = res.data.map(doge => doge = doge.url);
    //   this.setState({
    //     trending: dogeUrls
    //   })
    // })
    // .catch(err =>
    //   console.log(err))
  }
  render() {
    return (
    <div >
      <Rating onClick={(rating) => this.handleRateClick(rating)} className='rating-border'
        stop={5}
        placeholderSymbol={['fas fa-paw fa-rotate-180', 'fas fa-paw fa-rotate-180',
          'fas fa-paw fa-rotate-180', 'fas fa-paw fa-rotate-180',
          'fas fa-paw fa-rotate-180']}
        fullSymbol={['fas fa-paw fa-2x', 'fas fa-paw fa-2x',
          'fas fa-paw fa-2x', 'fas fa-paw fa-2x',
          'fas fa-paw fa-2x']}
      />
      hello
    </div>
    )
    
  } 
}
export default Rate;