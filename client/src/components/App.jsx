import React from 'react';

// components
import Submit from './Submit.jsx';
import NavHeader from './Navbar.jsx';

// pending removal of rate view 
// import RateContainer from '../containers/RateContainer.jsx';

import TrendingContainer from '../containers/TrendingContainer.jsx';

// add a section for loading content
class App extends React.Component {
  render () {
    const { view, changeCurrentView } = this.props;
    let currentView = 'Trending';
    if (view === 'Submit') {
      currentView = <Submit ></Submit>
    } else if (view === 'Rate') {
      currentView = <RateContainer></RateContainer>
    } else if (view === 'Trending') {
      currentView = <TrendingContainer></TrendingContainer>
    }
    return (
      <div >
        <div>
          <NavHeader changeCurrentView={changeCurrentView}></NavHeader>
          <div>
            {currentView}
          </div>
        </div>
      </div>
    )
  }
}
export default App;
