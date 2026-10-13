import "./reset.css";
import "./style.css";
import projectControl from "./modules/projects-control.js";
import { screenController } from "./modules/menu-control.js";


let pc = projectControl();
let sc = screenController();
sc.refreshProjectList()
import taskLoader from "./modules/task-loader.js";
taskLoader(pc.getProject(1))
console.log(pc.getProject(1).returnTasks())
