import React, {Component} from 'react';
import './AskQuestion.css';

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
            <div className="AskQuestion__input-wrapper">
                <input className="AskQuestion__input" type="text" onChange={this.updateQuestion}/>
                <button className="AskQuestion__button" onClick={() => this.submit()}>Submit</button>
            </div>
        );
    }
}

export default AskQuestion;