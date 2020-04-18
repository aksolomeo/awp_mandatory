import React, {Component} from 'react';

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
            <>
                <input type="text" placeholder="your answer" onChange={this.updateAnswer}/>
                <button onClick={() => this.submit()}>Submit</button>
            </>
        );
    }
}

export default PostAnswer;