import React, {Component} from 'react';
import PostAnswer from './PostAnswer';
import Answer from "./Answer";

class Question extends Component {
    render() {
        const id = this.props.id;
        const question = this.props.getQuestion(id);

        return (
            <>
                <h1>{question.question}</h1>
                <PostAnswer postAnswer={(answer) => this.props.postAnswer(this.props.id, answer)}/>
                {
                    question.answers.map((answer) => {
                        return <Answer key={answer._id}
                                    upVote={(isUpVote) => this.props.upVote(answer._id, isUpVote)}
                                    answer={answer}/>
                    })
                }
            </>
        );
    }
}

export default Question;