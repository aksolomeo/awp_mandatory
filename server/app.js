const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Schema = mongoose.Schema;

let Questions = null;
let Answers = null;

app.use(cors());
app.use( bodyParser.json() );
app.use(express.static('../client/build')); // Needed for serving production build of React

// QUESTIONS
app.get('/questions', async (req, res) => {
    const all = await Questions.find({}).populate("answers"); // populate gives array of objects instead of IDs
    res.json(all);
});

app.post('/questions', async (req, res) => {

    let question = new Questions({ question: req.body.question });

    // save the question
    try {
        let savedQuestion = await question.save();
        res.json(savedQuestion);
    } catch(error) { // Error handling
        res.send(400);
    }
});

// ANSWERS
app.get('/answers', async (req, res) => {
    const all = await Answers.find({});
    res.json(all);
});

app.post('/answers', async (req, res) => {

    let answer = new Answers({ answer: req.body.answer });

    Questions.findById(req.body.questionID, async function(err, question) {
       question.answers.push(answer);
           try {
           await answer.save();
           let savedQuestion = await question.save();
           res.json(savedQuestion);
       } catch(error) { // Error handling
           res.send(400);
       }
    });
});

// VOTES
app.post('/vote', async (req, res) => {
    const answerID = req.body.id;
    const isUpvote = req.body.upvote;

    Answers.findById(answerID, async function (err, answer) {
        if(isUpvote) {
            answer.vote = answer.vote + 1;
        } else {
            answer.vote = answer.vote - 1;
        }

        // save the vote
        try {
            let savedVote = await answer.save();
            res.json(savedVote);
        } catch(error) { // Error handling
            res.send(400);
        }

    });
});

// "Redirect" all get requests (except for the routes specified above) to React's entry point (index.html) to be handled by Reach router
// It's important to specify this route as the very last one to prevent overriding all of the other routes
app.get('*', (req, res) =>
    res.sendFile(path.resolve('..', 'client', 'build', 'index.html'))
);

const port = process.env.PORT || 8080;
const url = process.env.MONGO_URL || 'mongodb://localhost/awp_mandatory';

app.listen(port, async () => {

    // Connection to local database'.
    try {
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    } catch (e) {
        console.error(e)
    }

    // Schema for questions
    const questionsSchema = new mongoose.Schema({
        question: String,
        answers: [{
            type: Schema.Types.ObjectId,
            ref: "Answers"
        }]
    });

    // Schema for answers
    const answersSchema = new mongoose.Schema({
        answer: String,
        vote: { type: Number, default: 0 }
    });

    Questions = mongoose.model('Questions', questionsSchema);
    Answers = mongoose.model('Answers', answersSchema);

    console.log("Database connected:", mongoose.connection.name);

});
