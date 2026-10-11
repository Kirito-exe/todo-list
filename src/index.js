import "./reset.css";
import "./style.css";
import projectControl from "./modules/projects-control.js";
import { screenController } from "./modules/menu-control.js";


let sc = screenController();
sc.refreshProjectList()