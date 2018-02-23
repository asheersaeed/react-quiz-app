import React, { Component } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import * as Routes from '../NavigationWithRoutes/Routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            email: '',
            password: '',
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        var userState = this.state.userName;
        var emailState = this.state.email;
        var passState = this.state.password;
        firebase.auth().createUserWithEmailAndPassword(emailState, passState)
            .then((user) => {
                this.props.history.push(Routes.DASHBOARD);
                firebase.database().ref('User').child(user.uid).set({
                    Name: userState, Email: emailState, Uid: user.uid
                })
                console.log('Sign Up!')
            })
            .catch(
            (error) => alert(error)
            )
    }

    render() {
        return (
            <MuiThemeProvider>
            <center>
                <h1>SIGN UP</h1>
                <form onSubmit={this.onSubmit}>
                    <TextField type='text' onChange={(val) => { this.setState({ userName: val.target.value }) }} floatingLabelText='Username' /><br />
                    <TextField type='email' onChange={((val) => { this.setState({ email: val.target.value }) })} floatingLabelText='Email' /><br />
                    <TextField type='password' onChange={((val) => { this.setState({ password: val.target.value }) })} floatingLabelText='Password' /><br /><br />
                    <RaisedButton label="SIGN UP" primary type='submit' />
                </form>
            </center>
            </MuiThemeProvider>
        );
    }
}

export default withRouter(SignUp);
