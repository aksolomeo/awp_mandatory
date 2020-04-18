import React, {Component} from 'react';
import {Link} from "@reach/router";
import AskQuestion from './AskQuestion';

class Questions extends Component {

    render() {
        return (
            <>
                <AskQuestion postQuestion={(question) => this.props.postQuestion(question)}/>
                {this.props.questions.map(function(item){
                    return <Link key={item._id} to={`/question/${item._id}`}>{item.question}</Link>
                })}
            </>
        );
    }
}

export default Questions;