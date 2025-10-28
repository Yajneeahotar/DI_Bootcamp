const express = require('express');
const app = express()

let knex = require('knex')(
{
  client: 'pg',
  version: '7.2',
  connection: 
  {
    host : '127.0.0.1', //localhost
    user : 'yajnee',
    password : '1234',
    database : 'bootcamp',
    port:5432
  }
});

//Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
app.get('/api/books', function(request, response)
    {
        knex.select('id', 'title', 'author','publishedyear').from('books')
        .then(data =>{response.json(data)})
    })


app.get('/api/books/:bookId', function(request, response)
    {      
        const id = request.params.bookId
        knex.select('*').from('books').where({id : id})
        .then(data =>
        {
            if(data.length == 0)  
            {
                response.status(404).json('Book not found!');
            } 
            else
            {
                response.status(200).json(data[0]);
            }
        })
    })



//POST /posts: Create a new blog post.
app.use(express.json()); 

app.post('/api/books', function(request, response)
{
    const { title, author, publishedyear } = request.body;
    knex('books')
    .insert({ title, author, publishedyear })           
    .returning('*')                       
    .then(data => 
    {
        response.json(data);          
    })
    .catch(err => 
    {
        console.error(err);
        response.status(500).json({ error: err.message });
    });
});


app.listen(5000, () => 
{
    console.log('server is listening on port 5000');
});