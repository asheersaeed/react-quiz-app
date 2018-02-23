import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDYvdI-1rt8hzqBaQH5BPMFNuHZZp4sOzM",
    authDomain: "quiz-app-33.firebaseapp.com",
    databaseURL: "https://quiz-app-33.firebaseio.com",
    projectId: "quiz-app-33",
    storageBucket: "quiz-app-33.appspot.com",
    messagingSenderId: "1086737433404"
};
firebase.initializeApp(config);

export const db = firebase.database();
export const auth = firebase.auth();
export const storageKey = '1086737433404';

export const isAuthenticated = () => {
    return !!auth.currentUser || !!localStorage.getItem(storageKey);
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
