import "./reset.css";
import "./style.css";
import projectControl from "./modules/projects-control.js";
import { screenController } from "./modules/menu-control.js";
import addTask from "./modules/add-task.js";


let pc = projectControl();
let sc = screenController(pc);
sc.refreshProjectList()
addTask(pc).taskSubmit();

// import taskLoader from "./modules/task-loader.js";
// taskLoader(pc.getProject(1))
// console.log(pc.getProject(1).returnTasks())
