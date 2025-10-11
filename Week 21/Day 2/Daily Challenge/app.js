const express = require('express')
const app = express()
const app_routes = require('./Routes/approutes.js')

app.listen(5006, () => {
    console.log('server is listening on port 5006')
})

app.use(express.json())
app.use('/api/quizques', app_routes)