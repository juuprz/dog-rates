import React from 'react';
import { Card, Container, Rating, List } from 'semantic-ui-react';

// ** Comment section in-progress **
import CommentSectionContainer from '../containers/CommentSectionContainer.jsx';

class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
    this.renderItem = this.renderItem.bind(this);
    this.loadItems = this.loadItems.bind(this);
  }
  componentDidMount() {
    this.loadItems();
  }
  renderItem({ data }) {
    return (
      <div>
        <img
          src={data}
          style={{ display: 'block', position: 'absolute', width: '100%' }}
        />
      </div>
    );
  }

  loadItems() {
    this.props.getTrendingDogsList();
    const { trendingDoges } = this.props;
    let temp = this.props.trendingDoges;
    temp.map(url => { return { url: url } });
    
    this.setState({
      items: temp,
    });
  }

  render() {
    const { trendingDoges } = this.props;
    const trending = trendingDoges || [];

    const list = trending.map(doge =>
      <Container>
        <Card>
          <img src={doge} style={{ maxWidth: 700, maxHeight: 700 }} className='rating-photo' />
        </Card>
        <div>
          <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
        </div>
        {/* <CommentSectionContainer /> */}
      </Container>
    )
    return (
      <div>
        {list}
        
      </div>
    )
  }
}
export default Trending;

