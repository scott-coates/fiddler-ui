import React, { Component } from 'react';
import logo from './../assets/logo.svg';
import './../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="above-the-fold">
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <h1 className="blurb">Discover New Punk Rock Releases</h1>
                <h2 className="blurb">Punk Rock Playlist delivers the latest music on demand. 100% free forever.</h2>
              </div>
            </div>
          </div>
          <div className="sign-up-wrapper">
            <div className="container">
              <button className="btn btn-lg btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
