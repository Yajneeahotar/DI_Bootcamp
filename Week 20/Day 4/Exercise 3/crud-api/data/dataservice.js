const axios = require('axios');

function fetchPosts(runwhenover)
{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(data)
    {
      runwhenover(data['data']);
    })        
    
}

module.exports = fetchPosts;

