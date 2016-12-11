import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'

import mixpanel from 'mixpanel-browser';

require('smoothscroll-polyfill').polyfill();

import App from './scripts/app';
import ThankYou from './scripts/thank-you';

import './styles/index.css';

mixpanel.init('725b1cc3cf70595fe86ac3f8a3c2f008');
mixpanel.track('page:viewed', {
  'url': window.location.toString()
});

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/thank-you" component={ThankYou}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

