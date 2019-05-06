import React from 'react';
import axios from 'axios';
import { Jumbotron, Container, Button } from 'reactstrap';
import Submit from './Submit.jsx';
import Rate from './Rate.jsx';
import Top from './Top.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
      uploadedFileCloudinaryUrl: '',
    }
    this.syncState = this.syncState.bind(this);
  }
  componentDidMount() {
    this.setState({
      currentView: 'Submit'
    })
  }
  onPresentationChange(e) {
    let view = e.target.id;
    this.setState({ currentView: view });
  }
  syncState(imageUrl) {
    this.setState({
      uploadedFileCloudinaryUrl: imageUrl
    })
  }
  
  render() {
    let view = '';
    if (this.state.currentView === 'Submit') {
      view = <Submit syncState={this.syncState}></Submit>
    } else if (this.state.currentView === 'Rate') {
      view = <Rate></Rate>
    } else if (this.state.currentView === 'Top') {
      view = <Top></Top>
    }
    return (
      <div>
        <div>
          <Jumbotron className='navbar' fluid>
            <Container className="jumbo" fluid>
              <h1 >Dog Rates</h1>
              <div id='Submit' onClick={(e) => this.onPresentationChange(e)}>Upload</div>
              <div id='Rate' onClick={(e) => this.onPresentationChange(e)}>Rate</div>
              <div id='Top' onClick={(e) => this.onPresentationChange(e)}>Top Trending</div>
            </Container>
          </Jumbotron>
        </div>
        <div>
          {view}
        </div>
      </div>
    )
  }
}

export default App;
