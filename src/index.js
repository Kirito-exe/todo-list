import "./reset.css";
import "./style.css";
import projectControl from "./modules/projects-control.js";
import { screenController } from "./modules/menu-control.js";
import addTask from "./modules/add-task.js";

(function () {
  let pc = projectControl();
  let sc = screenController(pc);
  sc.refreshProjectList();
  addTask(pc).taskSubmit();
})();
