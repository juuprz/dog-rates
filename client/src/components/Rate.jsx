import React from 'react';
import Rating from 'react-rating';

class Rate extends React.Component {
  componentDidMount() {
    this.props.GetRatedDogsList();
  }
  render() {
    const { currentDog } = this.props;
    let dogView = null;
    console.log(currentDog);
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
          {/* TO REIMPLEMENT ONCE WEVE SORTED THE API CALL */}
          <Rating onClick={(e) => GetRatedDogsList(e)} className='rating-border'
          stop={5}
          placeholderSymbol={['fas fa-paw fa-rotate-180', 'fas fa-paw fa-rotate-180',
            'fas fa-paw fa-rotate-180', 'fas fa-paw fa-rotate-180',
            'fas fa-paw fa-rotate-180']}
          fullSymbol={['fas fa-paw fa-2x', 'fas fa-paw fa-2x',
            'fas fa-paw fa-2x', 'fas fa-paw fa-2x',
            'fas fa-paw fa-2x']}
        />
        </div>
        {dogView}
      </div>
    )
  }
}

export default Rate;