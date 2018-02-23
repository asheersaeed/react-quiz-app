import React, { Component } from 'react';
import CssQuizResults from './CssQuizResult';
import 'C:/Users/Asheer/Desktop/Recent-work/quiz-app/src/App.css';

export default class CssQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What does CSS stand for?',
          choices: [
            {
              id: 'a',
              text: 'Colorful Style Sheets'
            },
            {
              id: 'b',
              text: 'Cascading Style Sheets'
            },
            {
              id: 'c',
              text: 'Creative Style Sheets'
            },
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'What is the correct HTML for referring to an external style sheet?',
          choices: [
            {
              id: 'a',
              text: '<stylesheet>mystyle.css</stylesheet>'
            },
            {
              id: 'b',
              text: '<style src="mystyle.css">'
            },
            {
              id: 'c',
              text: '<link rel="stylesheet" type="text/css" href="mystyle.css">'
            },
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'Where in an HTML document is the correct place to refer to an external style sheet?',
          choices: [
            {
              id: 'a',
              text: 'At the end of the document'
            },
            {
              id: 'b',
              text: 'In the <body> section'
            },
            {
              id: 'c',
              text: '<In the <head> section'
            },
          ],
          correct: 'c'
        },
        {
          id: 4,
          text: 'Which HTML tag is used to define an internal style sheet?',
          choices: [
            {
              id: 'a',
              text: '<style>'
            },
            {
              id: 'b',
              text: '<script>'
            },
            {
              id: 'c',
              text: '<css>'
            },
          ],
          correct: 'a'
        },
        {
          id: 5,
          text: 'Which is the correct CSS syntax?',
          choices: [
            {
              id: 'a',
              text: 'body {color: black;}'
            },
            {
              id: 'b',
              text: 'body:color=black;'
            },
            {
              id: 'c',
              text: '{body;color:black;}'
            },
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    }
  }
  setCurrent(current) {
    this.setState({ current });
  }
  setScore(score) {
    this.setState({ score });
  }

  addQuestion = (e) => {
    e.preventDefault();
    let question = this.state.questions;
    let myQuestion = {
      id: 6,
      text: 'Css Question 1?',
      choices: [
        { id: 'a', text: 'Css answer1Val' },
        { id: 'b', text: 'Css answer2Val' },
        { id: 'c', text: 'Css answer3Val' }
      ],
      correct: 'a'
    }
    question.push(myQuestion);
    this.setState({ questions: question });
    console.log(myQuestion);
  }

  onSubmit = (e) => {
    e.preventDefault();
    let question = this.state.questions;
    let myQuestion = {
      id: this.refs.id.value,
      text: this.refs.question.value,
      choices: [
        { id: 'a', text: this.refs.ans1.value },
        { id: 'b', text: this.refs.ans2.value },
        { id: 'c', text: this.refs.ans3.value }
      ],
      correct: this.refs.correctAns.value
    }
    question.push(myQuestion);
    this.setState({ questions: question });
    console.log(myQuestion);
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var results = <CssQuizResults {...this.state} />
    }
    else {
      results = '';
    }
    return (
      <center>
        <CssQuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} /><br />
        <div className={this.props.active ? 'addQuestion1' : 'addQuestion2'}>Add Question no. 1 to Css<button onClick={this.addQuestion}>Add Question</button>
          <hr />
          <h1>ADD YOUR QUESTION</h1>
          <form onSubmit={this.onSubmit}>
            <p>ID: <input ref='id' type='number' placeholder='ID' /></p>
            <p>QUESTION: <input ref='question' type='text' placeholder='Question' /></p>
            <p>A: <input ref='ans1' type='text' placeholder='answer 1' /></p>
            <p>B: <input ref='ans2' type='text' placeholder='answer 2' /></p>
            <p>C: <input ref='ans3' type='text' placeholder='answer 3' /></p>
            <p>CORRECT ANS: <input ref='correctAns' type='text' placeholder='Correct Answer' /></p>
            <button>ADD QUESTION</button>
          </form>
        </div>
        {results}
      </center>
    )
  }
}

class CssQuestion extends Component {
  onChange = (e) => {
    e.preventDefault();
    const { setCurrent, setScore, question } = this.props;
    let select = e.target.value;
    if (select === question.correct) {
      setScore(this.props.score + 1);
    }
    setCurrent(this.props.current + 1);
  }
  render() {
    const { question } = this.props;
    return (
      <div className='container'>
        <h3>{question.text}</h3>
        <hr />
        <ul className='list-group'>
          {
            this.props.question.choices.map(choice => {
              return (
                <li className="list-group-item" key={choice.id}>
                  {choice.id} <input type='radio' onChange={this.onChange} name={question.id} value={choice.id} /> {choice.text}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class CssQuestionList extends Component {
  render() {
    return (
      <div>
        {
          this.props.questions.map(question => {
            if (question.id === this.props.current) {
              return <CssQuestion question={question} key={question.id} {...this.props} />
            }
          })
        }
      </div>
    )
  }
}