import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
const Rating = require('react-rating');

function Rate(props) {
  return (
    <div>
      {/* <Rating
        stop={5}
        emptySymbol={['fas fa-paw fa-2x low', 'fas fa-paw fa-2x low',
          'fas fa-paw fa-2x medium', 'fas fa-paw fa-2x medium',
          'fas fa-paw fa-2x high']}
        fullSymbol={['fas fa-paw fa-2x low', 'fas fa-paw fa-2x low',
          'fas fa-paw fa-2x medium', 'fas fa-paw fa-2x medium',
          'fas fa-paw fa-2x high']}
      /> */}
      {/* <Rating
        emptySymbol="glyphicon glyphicon-heart-empty"
        fullSymbol="glyphicon glyphicon-heart"
      /> */}
      hello
      {/* <Rating></Rating> */}
    </div>
  )
}
export default Rate;