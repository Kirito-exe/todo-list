import "./reset.css";
import "./style.css";
import project from "./modules/project-module.js";

let firstProject = project("First list");
firstProject.addTask("name","it does something somethhing","1/02/2026","high","none");
console.log(firstProject.returnTasks());
firstProject.changeName("hell na");
console.log(firstProject.getName())