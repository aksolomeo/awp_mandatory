import React, {Component} from 'react';
import PostAnswer from './PostAnswer';
import Answer from "./Answer";
import {Link} from "@reach/router";
import './Question.css';

class Question extends Component {
    render() {
        const id = this.props.id;
        const question = this.props.getQuestion(id);

        if (question) {
            return (
                <div className="container">
                    <div>
                        <Link className="Question__back-arrow" to="/">🡨</Link>
                        <div className="Question__question-list-wrapper">
                            <h1 className="Question__h1">{question.question}</h1>
                            <PostAnswer postAnswer={(answer) => this.props.postAnswer(this.props.id, answer)}/>
                            {
                                question.answers.map((answer) => {
                                    return <Answer key={answer._id}
                                                   upVote={(isUpVote) => this.props.upVote(answer._id, isUpVote)}
                                                   answer={answer}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div>Loading</div>)
        }
    }
}

export default Question;