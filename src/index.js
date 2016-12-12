import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'

import firebase from 'firebase';

require('smoothscroll-polyfill').polyfill();

import App from './scripts/app';
import ThankYou from './scripts/thank-you';

import './styles/index.css';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBFfilyiSGX53dec-ZQejEQbCn0sg6ODRw",
  authDomain: "fiddler-production.firebaseapp.com",
  databaseURL: "https://fiddler-production.firebaseio.com",
  storageBucket: "fiddler-production.appspot.com",
  messagingSenderId: "815704709076"
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

