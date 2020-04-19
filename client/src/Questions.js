import React, {Component} from 'react';
import {Link} from "@reach/router";
import AskQuestion from './AskQuestion';
import './Questions.css';

class Questions extends Component {

    render() {
        return (
            <div className="container">
                <div className="questions-wrapper">
                    <h1 className="Questions__h1">Enter your question</h1>
                    <AskQuestion postQuestion={(question) => this.props.postQuestion(question)}/>
                    <ul className="Questions__ul">
                        {this.props.questions.map(function (item) {
                            return <li className="Questions__li" key={item._id}>
                                <Link className="Questions__link" to={`/question/${item._id}`}>{item.question}</Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Questions;