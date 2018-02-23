import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as Routes from '../NavigationWithRoutes/Routes';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import 'C:/Users/Asheer/Desktop/Recent-work/quiz-app/src/App.css';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        let emailState = this.state.email;
        let passState = this.state.password;
        if (emailState === 'admin@admin.com') {
            this.props.toggleClass();
        }
        firebase.auth().signInWithEmailAndPassword(emailState, passState)
            .then(() => {
                this.props.history.push(Routes.DASHBOARD);
                console.log('Sign In!')
            })
            .catch(
            (error) => alert(error)
            )
    }

    render() {
        return (
            <MuiThemeProvider>
                <center>
                    <h1>SIGN IN</h1>
                    <form onSubmit={this.onSubmit}>
                        <TextField type='email' onChange={((val) => { this.setState({ email: val.target.value }) })} floatingLabelText='Email' /><br />
                        <TextField type='password' onChange={((val) => { this.setState({ password: val.target.value }) })} floatingLabelText='Password' /><br /><br />
                        <RaisedButton label="SIGN IN" primary type='submit' />
                    </form>
                </center>
            </MuiThemeProvider>
        );
    }
}

export default withRouter(SignIn);