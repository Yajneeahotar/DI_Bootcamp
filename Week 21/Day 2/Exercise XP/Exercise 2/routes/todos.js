const express = require('express');
const router = express.Router();
let toDoList = [];
let newTaskId = 1;


//(Get all to-do items)
router.get('/', (req,res) =>
{
    res.json(toDoList);
});

//(Create a new to-do item with a JSON request body)
router.post('/', (req,res) =>
{
    const { taskName } = req.body;
    if (!taskName) 
    {
        return res.status(400).json({ error: 'Task name is required' });
    }

    const newTask = { id: newTaskId++, taskName };
    toDoList.push(newTask);
    res.status(201).json(newTask);
})


//(Update a to-do item by ID with a JSON request body)

router.put('/:id', (req, res) => {
  
  let todo = toDoList.find(task => task.id == req.params.id);
  
  if (!todo) {
    return res.status(404).json({ error: 'Task not found' });
  }

  
  if (req.body.taskName) 
{
  todo.taskName = req.body.taskName;
}

  res.json(todo);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const idToDelete = req.params.id;

  const todo = toDoList.find(task => task.id == idToDelete);
  if (!todo) 
    {
        return res.status(404).json({ error: 'Task not found' });
    }

  toDoList = toDoList.filter(task => task.id != idToDelete);

  res.json({ message: 'Deleted successfully', todo: todo });
});



module.exports = router;



