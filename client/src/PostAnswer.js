import React, {Component} from 'react';
import './PostAnswer.css';

class PostAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ''
        };

        this.updateAnswer = this.updateAnswer.bind(this);
    }

    updateAnswer(e) {
        this.setState({ answer: e.target.value });
    }

    submit() {
        this.props.postAnswer(this.state.answer);
    }

    render() {
        return (
            <div className="PostAnswer__input-wrapper">
                <input className="PostAnswer__input" placeholder="Write your answer here" type="text" onChange={this.updateAnswer}/>
                <button className="PostAnswer__button" onClick={() => this.submit()}>Submit</button>
            </div>
        );
    }
}

export default PostAnswer;