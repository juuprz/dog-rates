import React from 'react';
import { Rating } from 'semantic-ui-react'
import CommentSection from './Comment.jsx';

const fiveStarRating = () => (
  <Rating maxRating={5} defaultRating={3} icon='star' size='massive'/>
)

class Rate extends React.Component {
  componentDidMount() {
    this.props.GetRatedDogsList();
  }
  render() {
    const { currentDog } = this.props;
    let dogView = null;
    if (currentDog) {
      dogView = <img src={currentDog[0]} style={{ maxWidth: 550, maxHeight: 550 }} className='rating-photo'/>
    }
    return (
      <div>
        <div >
          <div>
            <div>Hello you've reached the ratings page. We need <i>your</i> help in determining which boi is best</div>
            <div>How you feeling about this one?</div>
          </div>
        </div>
        <div>
          {dogView}
        </div>
        <div>
          {fiveStarRating()}
        </div>
        <div>
          <CommentSection></CommentSection>
        </div>
      </div>
    )
  }
}

export default Rate;