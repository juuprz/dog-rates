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
    }
  }
  onInputChange(e) {

  }
  handleSubmit(e) {
    e.preventDefault();
    // axios.post('/rsvps', {
    // })
    //   .then(function () {
    //     console.log('form data successfully posted');
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // const form = document.getElementById('form');
    // form.reset();
  }
  render() {
    return (
      <div>
        <Button>test</Button>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="jumbo">Dog Rates</h1>
          </Container>
        </Jumbotron>
        <Submit></Submit>
        <Rate></Rate>
        <Top></Top>
      </div>
    )
  }
}

export default App;
