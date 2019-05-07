import React from 'react';
import popular from '../util/CalculatePostPopularity.js';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';

export default class Top extends React.Component { 
  constructor(props) {
    super(props);
    // this.state = {
    //   trending: [],
    // }
  }
  // componentDidMount() {
  //   this.getTrendingDoges();
  // }
  // getTrendingDoges() {
  //   axios.get(`/api/trending`)
  //     .then((res) => {
  //       console.log(res);
  //       let dogeUrls = res.data.map(doge => doge = doge.url);
  //       this.setState({
  //         trending: dogeUrls
  //       })
  //     })
  //     .catch(err =>
  //       console.log(err));
  // }

  render() {
    const trending = this.props.trending;
    const list = trending.map(doge =>
      <ListGroupItem>
        <img src={doge} style={{ maxWidth: 400, maxHeight: 400 }}/>
      </ListGroupItem>
    )
      return (
      <div>
        {/* { popular.getPostPop() } */}
        <ListGroup>
          {list}
        </ListGroup>
      </div>
    )
  }
}