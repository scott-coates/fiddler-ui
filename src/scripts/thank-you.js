import React, { Component } from 'react';

class ThankYou extends Component {

  render() {
    return (
      <div className="thank-you hello">
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <h1 className="blurb">Thank You for Using Punk Rock Playlist!</h1>
              <h2 className="blurb">Now check your inbox, we'll be sending an email shortly!</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYou;
