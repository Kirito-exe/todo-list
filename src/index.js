import "./reset.css";
import "./style.css";
import projectControl from "./modules/projects-control.js";

let control = projectControl();
control.addNewProject("damn that's crazy");
console.log(control.listProjectsArr())
control.getProject(1).addTask("damn","ouh shi")
console.log(control.getProject(1).returnTasks())