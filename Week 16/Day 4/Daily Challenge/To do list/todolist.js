const tasks = [];
let taskList;
let updatedTasks;
let counter = 0;

function addTask()
{
    event.preventDefault();
    taskList = document.getElementById("task").value;
    console.log(taskList);

    if (taskList != "")
    {
        counter++;

        tasks.push(taskList);
        console.log(tasks);        
        updatedTasks = document.getElementsByClassName("listTasks");

        if(counter == 1)
        {
            let newList = document.createElement('ul');
            updatedTasks[0].appendChild(newList); 
        }
        let ulList = document.getElementsByTagName('ul');
        let list1 = document.createElement('li');
        ulList[0].appendChild(list1).textContent = taskList;
    }
}