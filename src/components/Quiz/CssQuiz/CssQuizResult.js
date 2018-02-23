import React, { Component } from 'react';

export default class CssQuizResults extends Component {
    render() {
        let myStyle = {
            marginTop: '140px'
        }
        var percent = (this.props.score / this.props.questions.length * 100);
        if (percent >= 60) {
            var message = <strong><strong className='congratsStyle'>CONGRUTULATION!</strong> YOU HAVE BEEN PASSED.</strong>;
        } else {
            message = <strong><strong className='failStyle'>SORRY!</strong> YOU HAVE BEEN FAILED.</strong>;
        }
        return (
            <center style={myStyle}>
                <h4>Your are Got {this.props.score} out of {this.props.questions.length} Correct </h4>
                <h1>{percent}% - {message}</h1>
            </center>
        )
    }
}