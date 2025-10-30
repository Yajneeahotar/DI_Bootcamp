import {TodoList}  from './todo.js';
let myTasks = new TodoList();

myTasks.addTask('Buy groceries');
myTasks.addTask('Finish homework');

console.log(myTasks.allTasks());