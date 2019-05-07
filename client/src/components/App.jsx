import React from 'react';
import axios from 'axios';
import { Jumbotron, Container, Button } from 'reactstrap';
import Submit from './Submit.jsx';
import Rate from './Rate.jsx';
import Top from './Top.jsx';
import NavHeader from './Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
      uploadedFileCloudinaryUrl: '',
      rating: null,
    }
    // this.syncState = this.syncState.bind(this);
    this.onPresentationChange = this.onPresentationChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      currentView: 'Submit'
    })
    this.getTrendingDoges();
  }
  onPresentationChange(e) {
    let view = e.target.id;
    console.log(view);
    this.setState({ currentView: view });
  }
  // syncState(imageUrl) {
  //   this.setState({
  //     uploadedFileCloudinaryUrl: imageUrl
  //   })
  // }
  getTrendingDoges() {
    axios.get(`/api/trending`)
      .then((res) => {
        console.log(res);
        let dogeUrls = res.data.map(doge => doge = doge.url);
        this.setState({
          trending: dogeUrls
        })
      })
      .catch(err =>
        console.log(err));
  }
  render() {
    let view = '';
    if (this.state.currentView === 'Submit') {
      view = <Submit syncState={this.syncState}></Submit>
    } else if (this.state.currentView === 'Rate') {
      view = <Rate></Rate>
    } else if (this.state.currentView === 'Top') {
      view = <Top trending={this.state.trending}></Top>
    }
    return (
      <div>
        <NavHeader onPresentationChange={this.onPresentationChange}></NavHeader>
        <div>
          {view}
        </div>
      </div>
    )
  }
}

export default App;
