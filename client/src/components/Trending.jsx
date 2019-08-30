import React from 'react';
import { Rating } from 'semantic-ui-react';

// ** Comment section in-progress **
import CommentSectionContainer from '../containers/CommentSectionContainer.jsx';

class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.loadItems = this.loadItems.bind(this);
  }
  componentDidMount() {
    this.loadItems();
  }
  loadItems() {
    this.props.getTrendingDogsList();
    let dogList = this.props.trendingDoges;
    dogList.map(url => { return { url: url } });
  }
  render() {
    const { trendingDoges } = this.props;

    const list = trendingDoges.map(doge =>
      <div className='rating-doge-cards'>
        <div className='rating-doge-card'>
          <div className='rating-photo-container'>
            <img className='rating-photo' src={doge} style={{ maxWidth: 300, maxHeight: 300 }}  />
          </div>
          <div className='rating-bar'>
            <Rating className='rating' maxRating={5} defaultRating={3} icon='star' size='massive' />
            <button>rate it</button>
          </div>
          {/* <CommentSectionContainer /> */}
        </div>
      </div>
    );

    return (
      <div className='rating-doge-container'>
        {list}
      </div>
    )
  }
}
export default Trending;

