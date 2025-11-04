const express = require('express');
const app = express();

app.use(express.json());

const books = require('./routes/book');

app.use('/books', books);

app.listen(3003, () => 
{
  console.log('Server running at 3003');
});