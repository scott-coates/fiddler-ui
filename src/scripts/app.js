import React, { Component } from 'react';
import glasses from './../assets/images/glasses.png';
import helm from './../assets/images/helm.png';
import clock from './../assets/images/clock.png';
import chest from './../assets/images/chest.png';
import './../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="above-the-fold">
          <div className="logo-wrapper">
            <img src={glasses}/>
            <span className="logo-text">Punk Rock Playlist</span>
          </div>
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
        <div className="content-section discovery features">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3>Discovery</h3>
                <p>Listen to the latest punk rock releases tailored for your tastes. Never miss anything new from your
                  favorite bands or artists you have yet to be exposed to.
                </p>
              </div>
              <div className="col-sm-11 col-sm-offset-1">
                <img src={helm}/>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section alt-content-section save-time features">
          <div className="container">
            <div className="row">
              <div className="col-sm-10">
                <img src={clock}/>
              </div>
              <div className="col-sm-12">
                <h3>Save Time</h3>
                <p>Listen to the latest punk rock releases tailored for your tastes. Never miss anything new from your
                  favorite bands or artists you have yet to be exposed to.
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className="content-section trust features">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3>100% Free Forever</h3>
                <p>Seriously. Sign up. It’s that simple. Our mission is all about <strong>artist discovery.</strong>
                </p>
              </div>
              <div className="col-sm-11 col-sm-offset-1">
                <img src={chest}/>
              </div>
            </div>
          </div>
        </div>

        <div className="signup">
          <div className="container">
            <div className="row">
              <div className="signup-container">

                <h3>Let's do This</h3>
                <p>
                  All we need to get started is your email address and a message of what you’re looking for in a
                  playlist.
                  Please mention some bands that you like and why (song structure, harmonies, tempo, etc).
                  Lastly, jot down some music you don’t like too (screamo, pop punk).
                </p>

                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Your Name*"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="email"
                           placeholder="Your E-mail Address*"/>
                  </div>
                  <div className="form-group">
                    <textarea rows="8" className="form-control" id="request-content"
                              placeholder="Your Message*"/>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-sm btn-primary btn-sign-up">Sign Up!</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <ul>
            <li className="social">
              <a href="https://twitter.com/prplaylist" target="_blank">
                <i className="fa fa-twitter"/>
              </a>
            </li>
            <li id="footer-copyright">
              <span>© {new Date().getFullYear()} Punk Rock Playlist</span>
            </li>
          </ul>
        </footer>

      </div>
    );
  }
}

export default App;
