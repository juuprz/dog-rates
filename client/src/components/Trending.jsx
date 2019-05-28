import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import CommentSectionContainer from '../containers/CommentSectionContainer.jsx';

class Trending extends React.Component {
  componentDidMount() {
    this.props.getTrendingDogsList();
  }
  render() { 
    const { trendingDoges } = this.props;
    const trending = trendingDoges || [];
    const list = trending.map(doge =>
      <ListGroupItem>
        <img src={doge} style={{ maxWidth: 700, maxHeight: 700 }} className='rating-photo' />
      </ListGroupItem>)
    return (
      <div>
        <div>
          <CommentSectionContainer></CommentSectionContainer>
        </div>
        <ListGroup>
          {list}
        </ListGroup>
      </div>
    )
  }
}
export default Trending;