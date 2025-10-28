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

//GET /posts: Return a list of all blog posts.
app.get('/api/posts', function(request, response)
    {
        knex.select('id', 'title', 'content').from('posts')
        .then(data =>{response.json(data)})
    })

//GET /posts/:id: Return a specific blog post based on its id.
app.get('/api/posts/:id', function(request, response)
    {      
        const id = request.params.id
        knex.select('*').from('posts').where({id : id})
        .then(data =>{response.json(data[0])})
    })


    //POST /posts: Create a new blog post.
app.use(express.json()); 

app.post('/api/posts', function(request, response)
{
    const { title, content } = request.body;
    knex('posts')
    .insert({ title, content })           
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

//PUT /posts/:id: Update an existing blog post.
app.put('/api/posts/:id', function (request, response) {
  const id = Number(request.params.id);
  console.log(id)
  const { title, content } = request.body;

  knex('posts')
    .where({ id: id })
    .update({ title, content })
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


//DELETE /posts/:id: Delete a blog post.
app.delete('/api/posts/:id', function (request, response) {
  const id = Number(request.params.id); 

  knex('posts')
    .where({ id: id })
    .del()
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

app.listen(5008, () => 
{
    console.log('server is listening on port 5008');
});