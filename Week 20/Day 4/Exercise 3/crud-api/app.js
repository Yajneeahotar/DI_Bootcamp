const express = require('express');
const app = express();
const fetchPosts  = require('./data/dataservice.js');

app.get("/api/posts", (req, res) =>
{
    fetchPosts(function(data) {
    console.log(data)
    res.json(data)
})
        
})

app.listen(5000, () => 
{
    console.log('server is listening on port 5000');
});