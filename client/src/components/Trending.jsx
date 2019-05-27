import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Trending extends React.Component {
  componentDidMount() {
    this.props.getTrendingDogsList();
  }
  render() { 
    const { trendingDoges } = this.props;
    const trending = trendingDoges || [];
    const list = trending.map(doge =>
      <ListGroupItem>
        <img src={doge} style={{ maxWidth: 400, maxHeight: 400 }} />
      </ListGroupItem>)
    return (
      <div>
        <ListGroup>
          {list}
        </ListGroup>
      </div>
    )
  }
}
export default Trending;