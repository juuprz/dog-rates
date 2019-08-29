import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import AppContainer from './containers/AppContainer.jsx';
import './components/styles.css';
// import './bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app'));