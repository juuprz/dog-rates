import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import popular from '../util/CalculatePostPopularity.js';

export default class Top extends React.Component { 
  render() {
    return (
      <div>
        test for top
      {/* { popular.getPostPop() } */}
      </div>
    )
  }
}