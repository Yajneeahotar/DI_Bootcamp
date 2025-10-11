const triviaQuestions = require('../quiz.js');
let currentQuestionIndex = 0;
let score = 0;

const getQuestion = (req, res) => 
{
    score = 0;
    currentQuestionIndex = 0;
    res.json(triviaQuestions[0].question);
    console.log(currentQuestionIndex);
}

const submitAnswer = (req, res) =>
{   
       
    let userAnswer = req.body.answer


    if(currentQuestionIndex < triviaQuestions.length)
    {
        if(userAnswer == triviaQuestions[currentQuestionIndex].answer)
        {
            currentQuestionIndex += 1; 
            score += 1;
            if(currentQuestionIndex < triviaQuestions.length)
            {
                res.status(201).json('Correct Answer.  Next Question : ' + (triviaQuestions[currentQuestionIndex].question));
            }
            else
            {
                res.status(201).json('Correct Answer, Quiz is complete');
            }
            
        } 
        else
        {
            currentQuestionIndex += 1; 
            if(currentQuestionIndex < triviaQuestions.length)
            {
                res.status(201).json('Incorrect Answer.  Next Question : ' + (triviaQuestions[currentQuestionIndex].question));
            }
            else
            {
                res.status(201).json('Incorrect Answer, Quiz is complete');
            }
        }
    }
    else
    {
        res.status(201).json('Quiz is complete')
    }
}
    
const getScore = (req, res) => 
{
    res.status(201).json(score);
}

module.exports = 
{
    getQuestion,
    submitAnswer,
    getScore
}
