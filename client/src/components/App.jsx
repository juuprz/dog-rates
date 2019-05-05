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
    }
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
  render() {
    if (this.state.currentView === 'Submit') {
      const view = <Submit></Submit>
    } else if (this.state.currentView === 'Rate') {
      const view = <Rate></Rate>
    } else if (this.state.currentView === 'Top') {
      const view = <Top></Top>
    }
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="jumbo">Dog Rates</h1>
            <div id='Submit' onClick={(e) => this.onPresentationChange(e)}>Upload</div>
            <div id='Rate' onClick={(e) => this.onPresentationChange(e)}>Rate</div>
            <div id='Top' onClick={(e) => this.onPresentationChange(e)}>Top Trending</div>
          </Container>
        </Jumbotron>
        {/* {view} */}
        <Submit></Submit>
        <Rate></Rate>
        <Top></Top>
      </div>
    )
  }
}

export default App;
