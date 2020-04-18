import React, {Component} from 'react';

class Answer extends Component {
    render() {
        return (
            <>
                <div>
                    {`${this.props.answer.answer} - ${this.props.answer.vote}`}
                    <button onClick={() => this.props.upVote(true)}>Upvote</button>
                    <button onClick={() => this.props.upVote(false)}>Downvote</button>
                </div>
            </>
        );
    }
}

export default Answer;