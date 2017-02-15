import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form'

import analytics from './analytics';

import firebase from 'firebase';

import glasses from './../assets/images/glasses.png';
import helm from './../assets/images/helm.png';
import clock from './../assets/images/clock.png';
import chest from './../assets/images/chest.png';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.requestContent) {
    errors.requestContent = 'Required';
  }

  return errors;
};

const warn = values => {
  const warnings = {};

  if (values.requestContent && values.requestContent.length < 10) {
    warnings.requestContent = 'We\'ll need a little more detail than that.';
  }

  return warnings;
};

const renderField = ({ input, ElementType, placeholder, type,className, id, meta: { touched, error, warning } }) => (

  <div className={"form-group" + (touched && error ? " has-error" : "")}>
    <ElementType {...input} id={id} placeholder={placeholder} type={type} className={className}/>
    {touched && (warning && <span className="help-block">{warning}</span>)}
  </div>
);

class App extends Component {
  scrollToSignUp() {
    const signup = document.querySelector('.signup');
    signup.scrollIntoView({behavior: 'smooth'});
  }


  onSubmit(values) {
    analytics.identify(values.email, {
      // segment traits use camelCasing
      "email": values.email,    // segment trait
      "createdAt": parseInt(Date.now() / 1000), // segment trait - divide by 1000 to remove milliseconds.
      "name": values.name // segment trait
    });

    analytics.track('playlist:requested', {
      'request_content': values.requestContent
    }, null /*options*/, () => {

      firebase.database().ref('requests').push({
        name: values.name,
        email: values.email,
        request_content: values.requestContent,
        request_time: new Date().getTime(),
        request_time_str: new Date().toString()
      }).then(function (snapshot) {
        window.location = '/thank-you';
      });

    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="app">
        <div className="above-the-fold hello">
          <a className="logo-wrapper" href="/">
            <img src={glasses}/>
            <span className="logo-text">Punk Rock Playlist</span>
          </a>
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-24">
                  <h1 className="blurb">Discover New Releases on a Weekly Basis</h1>
                  <h2 className="blurb">Enjoy the best punk-styled music tailored for your tastes. 100%
                    free and takes less than 1 minute to get started.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="sign-up-wrapper">
            <div className="container">
              <button className="btn btn-lg btn-primary" onClick={this.scrollToSignUp}>Start My Playlists</button>
            </div>
          </div>
        </div>
        <div className="content-section benefits">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3>Weekly Curated Playlists</h3>
                <p>You'll always have fresh, exciting, and energizing music to look forward to—without all the work of
                  finding it yourself.
                </p>
                <p>
                  Plus, this is a great way to not only keep up with your favorite artists, but discover amazing bands
                  that you've never even heard of before.
                </p>
              </div>
              <div className="col-sm-11 col-sm-offset-1">
                <img src={chest}/>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section alt-content-section benefits">
          <div className="container">
            <div className="row">
              <div className="col-sm-10">
                <img src={helm}/>
              </div>
              <div className="col-sm-12">
                <h3>Filter</h3>
                <p>Looking for some particular music? Female vocals only? What about limiting your music to bands who
                  will be touring through your neighborhood next month?
                </p>
                <p>Punk Rock Playlist gives you fine control via filters over what you want in this week's playlist so you
                  can&nbsp;
                  <em>really scratch your own itch</em>. No more searching through dozens of sites to find something
                  new.
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className="content-section benefits">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3>Stream it on Spotify</h3>
                <p>You're life is too busy for yet another music player. Let's stick with a streaming service that
                  you've already heard of—and one that you've likely already tried before.
                </p>
                <p>You'll be up and running in no time. Soon, your phone or laptop will be playing the newest albums and
                  it'll sound amazing, and you're gonna be effing pumped! Let's do it!!
                </p>
              </div>
              <div className="col-sm-11 col-sm-offset-1">
                <img src={clock}/>
              </div>
            </div>
          </div>
        </div>

        <div className="signup">
          <div className="container">
            <div className="row">
              <div className="col-sm-24">
                <div className="signup-container">

                  <h3>Let's do This</h3>
                  <p>
                    We'll start the process by listing your top 3 favorite punk-style bands. From here', we'll send you
                    a playlist with the latest releases from those
                    and similar artists.
                  </p>
                  <p>
                    After you're happy with the music, you can adjust your filters going forward (female vocals only,
                    touring bands vising my neighborhood, and more).
                  </p>
                  <p>
                    You're going to love this! New releases tailored just for you without any of the work.
                  </p>
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field ElementType="input" type="text" className="form-control" name="name" id="name"
                           placeholder="Your Full Name*"
                           component={renderField}/>
                    <Field ElementType="input" type="email" className="form-control" name="email" id="email"
                           placeholder="Your E-mail Address*"
                           component={renderField}/>

                    <Field ElementType="textarea" className="form-control" name="requestContent"
                           id="request-content"
                           placeholder="Your Message*"
                           component={renderField}/>
                    <div className="form-group">
                      <button className="btn btn-sm btn-primary btn-sign-up">Sign Up!</button>
                    </div>
                  </form>
                </div>
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
            <li className="social">
              <a href="https://open.spotify.com/user/punkrockplaylist" target="_blank">
                <i className="fa fa-spotify"/>
              </a>
            </li>
            <li id="footer-copyright">
              <span>© {new Date().getFullYear()} Punk Rock Playlist</span>
            </li>
          </ul>
        </footer>

      </div>
    )
      ;
  }
}

export default reduxForm({
  form: 'mainForm',  // a unique identifier for this form
  validate,
  warn
})(App);
