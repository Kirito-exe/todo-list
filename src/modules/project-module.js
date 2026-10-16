import { compareAsc } from "date-fns";
import todoItem from "./todo-item.js";
export function project(projectName) {
  this.name = projectName;
  this.projectId=crypto.randomUUID();
  this.tasks = [];
}
project.prototype.addTask = function(title, description, dueDate, priority, note){
  let taskItem = new todoItem(title, description, dueDate, priority, note);
  taskItem.setId = this.tasks.length+1;
  this.tasks.push(taskItem);
}
project.prototype.deleteTask = function(n){
  this.tasks.splice(n,1);
}
project.prototype.returnTasks = function(){
  return this.tasks;
}
project.prototype.changeName = function(newName){
      this.name = newName;
}
project.prototype.getName=function(){
  return this.name;
}
project.prototype.getId = function(){
  return this.projectId
}
project.prototype.sortThroughDate = function(){
    this.tasks.sort((a,b)=>compareAsc(a.dueDate,b.dueDate));
  }

  // function addTask(title, description, dueDate, priority, note) {
  //   let taskItem = new todoItem(title, description, dueDate, priority, note);
  //   taskItem.setId = tasks.length+1;
  //   this.tasks.push(taskItem);
  // }
  // function toggleTaskStatus(n) {
  //   tasks[n - 1].toggleStatus();
  // }
  // function deleteTask(n) {
  //   tasks.splice(n,1);
  // }
  // function returnTasks() {
  //   return tasks;
  // }
  // function changeName(newName) {
  //   name = newName;
  // }
  // function getName(){
  //   return name;
  // }
  // function getId(){
  //   return projectId;
  // }
  // function sortThroughDate(){
  //   tasks.sort((a,b)=>compareAsc(a.dueDate,b.dueDate));
  // }
  // return { toggleTaskStatus, deleteTask, returnTasks, changeName,addTask, getName,getId,sortThroughDate };
    //}
