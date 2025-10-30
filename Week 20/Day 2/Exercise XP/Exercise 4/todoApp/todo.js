export class TodoList 
{
  taskList = [];

  addTask(taskName)
  {
    this.taskList.push(taskName)
  }
  taskStatus(index)
  {
    console.log(this.taskList[index]);
  }
  allTasks()
  {
    return  this.taskList
  }
}