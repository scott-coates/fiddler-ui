import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'

import firebase from 'firebase';

import mixpanel from 'mixpanel-browser';

require('smoothscroll-polyfill').polyfill();

import App from './scripts/app';
import ThankYou from './scripts/thank-you';

import './styles/index.css';

mixpanel.init('725b1cc3cf70595fe86ac3f8a3c2f008');
mixpanel.track('page:viewed', {
  'url': window.location.toString()
});

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD7SDyiUGMjHQ6XvRyHjwSnZPujthGlnl8",
  authDomain: "fiddler-website.firebaseapp.com",
  databaseURL: "https://fiddler-website.firebaseio.com",
  storageBucket: "fiddler-website.appspot.com",
  messagingSenderId: "526982849109"
};
firebase.initializeApp(config);

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

