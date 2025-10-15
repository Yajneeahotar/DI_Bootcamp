const express = require("express");
const app = express();
let emojiList = require("./emoji.js");
let score = 0;
let userEmoji;

let emojiQuestions =
[
    {"emoji" : "🐶", "answers" : ["dog", "cat", "monkey"]},
    {"emoji" : "😀", "answers" : ["cry", "cat", "smile"]},
    {"emoji" : "🌮", "answers" : ["taco", "laugh", "cat"]}
]

app.use(express.json());

app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/quizquestions', function(req, res)
{
    let randomQuestion =  Math.floor(Math.random() * emojiQuestions.length);
    let randomElement = emojiQuestions[randomQuestion];
    res.json(randomElement);
}
)

app.post("/api/checkanswer", function(request,response)
{
    console.log(request.body)
    
    //userEmoji = emojiList.filter(emoji => emoji.name == request.body.emoji)[0]
    userEmoji = emojiList.filter(e => e.emoji === request.body.emoji)[0];

    if(userEmoji.name == request.body.chosenanswer)
    {
        score += 1
        response.json({"reply": "Correct Answer", "score": score})
    }
    else
    {
        response.json({"reply": "Incorrect Answer"})
    }
})


app.listen(5007, () => 
{
    console.log('server is listening on port 5007');
});
