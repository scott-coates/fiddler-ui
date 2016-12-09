import React from 'react';
import ReactDOM from 'react-dom';

require('smoothscroll-polyfill').polyfill();


import App from './scripts/app';
import './styles/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
