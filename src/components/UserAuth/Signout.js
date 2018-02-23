import React, { Component } from 'react';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import 'C:/Users/Asheer/Desktop/Recent-work/quiz-app/src/App.css';

class SignOutBtn extends Component {
    signout = () => {
        firebase.auth().signOut();
        console.log('Sign Out!')
        // let addQuestion = document.querySelector('.hideSignin')
        // ReactDOM.findDOMNode(signin).style.visibility = 'hidden';
    }
    render() {
        return (
            <MuiThemeProvider>
            <RaisedButton label="SIGN OUT" onClick={this.signout} primary type="button" />
            </MuiThemeProvider>
        );
    }
}

export default SignOutBtn;