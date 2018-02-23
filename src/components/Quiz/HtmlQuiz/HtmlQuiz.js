import React, { Component } from 'react';
import HtmlQuizResults from './HtmlQuizResult';
import 'C:/Users/Asheer/Desktop/Recent-work/quiz-app/src/App.css';

export default class HtmlQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What does HTML stand for?',
          choices: [
            {
              id: 'a',
              text: 'Home Tool Markup Language'
            },
            {
              id: 'b',
              text: 'Hyperlinks and Text Markup Language'
            },
            {
              id: 'c',
              text: 'Hyper Text Markup Language'
            },
          ],
          correct: 'c'
        },
        {
          id: 2,
          text: 'Who is making the Web standards?',
          choices: [
            {
              id: 'a',
              text: 'Microsoft'
            },
            {
              id: 'b',
              text: 'Mozilla'
            },
            {
              id: 'c',
              text: 'The World Wide Web Consortium'
            },
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'Choose the correct HTML element for the largest heading:',
          choices: [
            {
              id: 'a',
              text: '<h1>'
            },
            {
              id: 'b',
              text: '<heading>'
            },
            {
              id: 'c',
              text: '<h6>'
            },
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: 'What is the correct HTML element for inserting a line break?',
          choices: [
            {
              id: 'a',
              text: '<lb>'
            },
            {
              id: 'b',
              text: '<br>'
            },
            {
              id: 'c',
              text: '<break>'
            },
          ],
          correct: 'b'
        },
        {
          id: 5,
          text: 'What is the correct HTML for adding a background color?',
          choices: [
            {
              id: 'a',
              text: '<body bg="yellow">'
            },
            {
              id: 'b',
              text: '<background>yellow</background>'
            },
            {
              id: 'c',
              text: '<body style="background-color:yellow;">'
            },
          ],
          correct: 'c'
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
      text: 'Html Question 1?',
      choices: [
        { id: 'a', text: 'Html answer1Val' },
        { id: 'b', text: 'Html answer2Val' },
        { id: 'c', text: 'Html answer3Val' }
      ],
      correct: 'b'
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
      var results = <HtmlQuizResults {...this.state} />
    }
    else {
      results = '';
    }
    return (
      <center>
        <HtmlQuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} /><br />
        <div className={this.props.active ? 'addQuestion1' : 'addQuestion2'}>Add Question no. 1 to Html<button onClick={this.addQuestion}>Add Question</button>
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

class HtmlQuestion extends Component {
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

class HtmlQuestionList extends Component {
  render() {
    return (
      <div>
        {
          this.props.questions.map(question => {
            if (question.id === this.props.current) {
              return <HtmlQuestion question={question} key={question.id} {...this.props} />
            }
          })
        }
      </div>
    )
  }
}