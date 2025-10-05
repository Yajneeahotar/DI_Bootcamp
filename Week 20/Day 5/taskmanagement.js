const express = require('express');
const app = express();
let taskList = require("./task.json");
//let taskList = Object.entries(taskListJS);
let newTask ={};


app.get('/api/tasks', (req, res) => 
{
    res.json (taskList)
});


app.get("/api/tasks/:taskID", (req, res) => {
  const id = Number(req.params.taskID);
  const findTask = taskList.find((task) => task.taskID === id);
  res.json(findTask);
});

app.use(express.json()); // parse json body content

app.post("/api/tasks", (req, res) => 
{
   newTask = 
  {
    taskID: taskList.length + 1,
    taskName: req.body.taskName,
    deadline: req.body.deadline,
  };
  taskList.push(newTask);
  res.status(201).json(newTask);


const fs = require('fs');
fs.writeFile('task.json', JSON.stringify(taskList), function (err) {
    if (err) {
        console.error(err)
        return
    }
});
console.log('Task saved');
});


app.put("/api/tasks/:taskID", (req, res) => {
  const id = Number(req.params.taskID);
  const index = taskList.findIndex((task) => task.taskID === id);
  if (index === -1) {
    return res.status(404).send("Task not found");
  }
  const updatedTask = 
  {
    taskID: taskList[index].taskID,
    taskName: req.body.taskName,
    deadline: req.body.deadline,
  };
  taskList[index] = updatedTask;
  

const fs = require('fs');
fs.writeFile('task.json', JSON.stringify(taskList), function (err) 
{
    if (err) 
    {
        console.error(err)
        return
    }
});
res.status(200).json("Task updated");
console.log('Task saved');
});

app.delete("/api/tasks/:taskID", (req, res) => 
  {
    const id = Number(req.params.taskID);
    const index = taskList.findIndex((task) => task.taskID === id);
    if (index === -1) 
    {
      return res.status(404).send("Task not found");
    }
    taskList.splice(index, 1);
    res.status(200).json("Task deleted");

const fs = require('fs');
fs.writeFile('task.json', JSON.stringify(taskList), function (err) 
{
    if (err) 
    {
        console.error(err)
        return
    }
});
console.log('Task saved');

  });

app.listen(5001, () => 
{
    console.log('server is listening on port 5001');
});


