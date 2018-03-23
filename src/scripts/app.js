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
          <div className="container">
            <div className="row">
              <div className="col-md-24">
                <a className="logo-wrapper" href="/">
                  <img src={glasses}/>
                  <span className="logo-text">Fiddler</span>
                </a>
              </div>
            </div>
          </div>
          <div className="jumbotron">

            <div className="container">
              <div className="row">
                <div className="col-md-24">
                  <h1 className="blurb">Discover Your Favorite New Album</h1>
                  <h2 className="blurb">Start listening to something you'll love without having to search for it.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="sign-up-wrapper">
            <div className="container">
              <button className="btn btn-lg btn-primary" onClick={this.scrollToSignUp}>Create my playlist!</button>
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
                  Keep up with your favorite artists and discover amazing bands that you've never even heard of before.
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
                <h3>Customize</h3>
                <p>Music lets you express yourself in the most unique way possible.</p>

                <p>That's why Fiddler lets you customize your
                  favorite types of music with filters.
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className="content-section benefits">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3>Save Time</h3>
                <p>The perfect playlist is curated for you on demand.
                </p>
                <p>Whether you want to get in the zone so you can focus, get pumped for a workout, work your way through an emotional time, (or just enjoy life!!), Fiddler saves you time by curating the perfect playlist on demand, just for you!
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

                  <h3>Create My Playlist!</h3>
                  <p>
                    You're going to love this! New music tailored every week just for you without any of the work.
                  </p>
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field ElementType="input" type="text" className="form-control" name="name" id="name"
                           placeholder="Your full name*"
                           component={renderField}/>
                    <Field ElementType="input" type="email" className="form-control" name="email" id="email"
                           placeholder="Your email address*"
                           component={renderField}/>

                    <Field ElementType="textarea" className="form-control" name="requestContent"
                           id="request-content"
                           placeholder="A favorite song or album*"
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
              <span>© {new Date().getFullYear()} Fiddler</span>
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
