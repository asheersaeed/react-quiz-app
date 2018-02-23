import React, { Component } from 'react';
import * as Routes from '../NavigationWithRoutes/Routes';
import { withRouter } from 'react-router-dom';
import 'C:/Users/Asheer/Desktop/Recent-work/quiz-app/src/App.css';
import 'C:/Users/Asheer/Desktop/Recent-work/quiz-app/src/bootstrap.css';


class Dashboard extends Component {
    routeToHtml = () => {
        this.props.history.push(Routes.HTML_QUIZ);
    }
    routeToCss = () => {
        this.props.history.push(Routes.CSS_QUIZ);
    }
    render() {
        return (
            <center>
                <h1>QUIZ LIST</h1>
                <p>HTML <button onClick={this.routeToHtml}>START</button></p>
                <p>CSS <button onClick={this.routeToCss}>START</button></p>
            </center>
        );
    }
}

export default withRouter(Dashboard);