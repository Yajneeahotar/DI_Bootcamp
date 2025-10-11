const express = require('express');
const router = express.Router()

const 
{ 
    getQuestion,
    submitAnswer,
    getScore
} = require('../Controllers/appcontrollers.js')

router.get('/get', getQuestion)
router.post('/answer', submitAnswer) 
router.get('/quiz/score', getScore)

module.exports = router




