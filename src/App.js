import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import Home from './components/Home/Home';
import SignIn from './components/UserAuth/Signin';
import SignUp from './components/UserAuth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import HtmlQuiz from './components/Quiz/HtmlQuiz/HtmlQuiz';
import Navigation from './components/NavigationWithRoutes/Navigation';
import * as Routes from './components/NavigationWithRoutes/Routes';
import { storageKey, isAuthenticated } from './index.js';
import './bootstrap.css';
import CssQuiz from 'C:/Users/Asheer/Desktop/Recent-work/quiz-app/src/components/Quiz/CssQuiz/CssQuiz.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uid: null,
      active: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Sign In!');
        window.localStorage.setItem(storageKey, user.uid);
        this.setState({ uid: user.uid });
      } else {
        console.log('Sign Out!');
        window.localStorage.removeItem(storageKey);
        this.setState({ uid: null });
      }
    })

  }

  toggleClass = () => {
    let currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation uid={this.state.uid} />
          <Route exact path={Routes.HOME} component={() => <Home />} />
          <MatchWhenAuthorized exact path={Routes.DASHBOARD} component={() => <Dashboard />} />
          <Route exact path={Routes.SIGN_IN} component={() => <SignIn toggleClass={this.toggleClass} />} />
          <Route exact path={Routes.SIGN_UP} component={() => <SignUp />} />
          <MatchWhenAuthorized exact path={Routes.HTML_QUIZ} component={() => <HtmlQuiz active={this.state.active} />} />
          <MatchWhenAuthorized exact path={Routes.CSS_QUIZ} component={() => <CssQuiz active={this.state.active} />} />
        </div>
      </Router>
    );
  }
}

export const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
  <Route {...rest} render={renderProps => (
    isAuthenticated() ? (
      <Component {...renderProps} />
    ) : (
        <Redirect to={{
          pathname: '/signin',
          state: { from: renderProps.location }
        }} />
      )
  )} />
)

export default App;
