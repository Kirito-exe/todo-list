import todoItem from "./todo-item.js";
export default function (projectName) {
  let name = projectName;
  let tasks = [];
  function addTask(title, description, dueDate, priority, note) {
    let taskItem = new todoItem(title, description, dueDate, priority, note);
    tasks.push(taskItem);
  }
  function toggleTaskStatus(n) {
    tasks[n - 1].toggleStatus();
  }
  function deleteTask(n) {
    tasks.pop(n - 1);
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
  return { toggleTaskStatus, deleteTask, returnTasks, changeName,addTask, getName };
}
