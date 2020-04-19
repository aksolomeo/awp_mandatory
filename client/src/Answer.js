import React, {Component} from 'react';
import './Answer.css';

class Answer extends Component {
    render() {
        return (
            <div className="Answer">
                <div className="Answer__vote-wrapper">
                        <span className="Answer__arrow-button-up" onClick={() => this.props.upVote(true)}>▲</span>
                        <div className="Answer__vote-answer">{this.props.answer.vote}</div>
                        <span className="Answer__arrow-button-down" onClick={() => this.props.upVote(false)}>▼</span>
                </div>
                <div className="Answer__answer-text-wrapper">{this.props.answer.answer}</div>
            </div>
        );
    }
}

export default Answer;