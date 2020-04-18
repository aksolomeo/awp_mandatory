import React, {Component} from 'react';

class AskQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: ''
        };

        this.updateQuestion = this.updateQuestion.bind(this);
    }

    updateQuestion(e) {
        this.setState({ question: e.target.value });
    }

    submit() {
        this.props.postQuestion(this.state.question);
    }

    render() {
        return (
            <>
                <input type="text" placeholder="your question" onChange={this.updateQuestion}/>
                <button onClick={() => this.submit()}>Submit</button>
            </>
        );
    }
}

export default AskQuestion;