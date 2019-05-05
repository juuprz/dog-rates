import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import popular from '../util/CalculatePostPopularity.js';

function Top(props) {
  return (
    <div>
      test for top
      { popular.getPostPop() }
    </div>
  )
}
export default Top;