import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Rating from 'react-rating';
import axios from 'axios';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new: [],
      i: 0,
    }

  }
  componentDidMount() {
    this.getRatingDoges();
  }
  handleRateClick(rating) {
    console.log(rating)
    let index = this.state.i;
    this.setState({i: index++})

    // to be completed
    // need the id of the dog presented to the user

    // axios.post(`/api/rate`, {
    //   rating: rating,

    // })
    // .then((res) => {
    //   console.log(res);
    //   let dogeUrls = res.data.map(doge => doge = doge.url);
    //   this.setState({
    //     trending: dogeUrls
    //   })
    // })
    // .catch(err =>
    //   console.log(err))
  }
  getRatingDoges() {
    axios.get(`/api/new`)
      .then((res) => {
        console.log(res);
        let doge = res.data.map(doge => doge = doge.url);
        console.log(doge)
        // let dogeIds = res.data.map(doge => doge = doge._id);
        this.setState({
          doge: doge,
          // dogeIds: dogeIds
        })
      })
      .catch(err =>
        console.log(err));
  }
  render() {
    let dogView = null;
    if (this.state.doge) {
      let i = 0;
      const dog = this.state.doge;
      // const tes = dog[i];
      dogView = <img src={dog[i]} style={{ maxWidth: 400, maxHeight: 400 }} />
    }

    return (
    <div>
      <div >
        <Rating onClick={(rating) => this.handleRateClick(rating)} className='rating-border'
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