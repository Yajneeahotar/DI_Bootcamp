const express = require('express');
const app = express();

app.use(express.json());

const toDos = require('./routes/todos');

app.use('/todos', toDos);

app.listen(3002, () => 
{
  console.log('Server running at 3002');
});