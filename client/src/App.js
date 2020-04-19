import React, {Component} from 'react';
import Questions from './Questions';
import Question from './Question';
import './App.css';
import { Router } from "@reach/router";

class App extends Component {

    API_URL = process.env.REACT_APP_API_URL;

    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        this.getQuestions();
    }

    getQuestions () {
        fetch(`${this.API_URL}/questions`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({questions: data});
            });
    }

    postQuestion(question) {
        fetch(`${this.API_URL}/questions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({question})
        })
            .then(response => response.json())
            .then(() => {
                this.getQuestions();
        });
    }

    getQuestion(id) {
        const findFunction = question => question._id === id;
        return this.state.questions.find(findFunction);
    }

    postAnswer(questionID, answer) {
        fetch(`${this.API_URL}/answers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                answer,
                questionID
            })
        })
            .then(response => response.json())
            .then(() => {
                this.getQuestions();
        });
    }

    upVote(answerID, isUpVote) {
        fetch(`${this.API_URL}/vote`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: answerID,
                upvote: isUpVote
            })
        })
            .then(response => response.json())
            .then(() => {
                this.getQuestions();
        });
    }

    render() {
        return (
            <Router>
                <Questions
                    path="/"
                    questions={this.state.questions}
                    postQuestion={(question) => this.postQuestion(question)}/>
                <Question
                    path="/question/:id"
                    getQuestion={(id) => this.getQuestion(id)}
                    postAnswer={(questionID, answer) => this.postAnswer(questionID, answer)}
                    upVote={(answerID, isUpVote) => this.upVote(answerID, isUpVote)}/>
            </Router>
        );
    }
}

export default App;
