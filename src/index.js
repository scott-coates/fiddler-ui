import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'

require('smoothscroll-polyfill').polyfill();


import App from './scripts/app';
import './styles/index.css';

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

