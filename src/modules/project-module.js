import todoItem from "./todo-item.js";
export default function (projectName) {
  let name = projectName;
  let projectId=crypto.randomUUID();
  let tasks = [];
  function addTask(title, description, dueDate, priority, note) {
    let taskItem = new todoItem(title, description, dueDate, priority, note);
    taskItem.setId = tasks.length+1;
    tasks.push(taskItem);
  }
  function toggleTaskStatus(n) {
    tasks[n - 1].toggleStatus();
  }
  function deleteTask(n) {
    tasks.splice(n,1);
  }
  function returnTasks() {
    return tasks;
  }
  function changeName(newName) {
    name = newName;
  }
  function getName(){
    return name;
  }
  function getId(){
    return projectId;
  }
  return { toggleTaskStatus, deleteTask, returnTasks, changeName,addTask, getName,getId };
}
