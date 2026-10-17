import { applyEditDialog } from "./edit-task.js";
import { populateStorage } from "./webStorage.js";
export default function (pc, project) {
  let tasks = document.querySelector("#content .tasks");
  function loadTasks() {
    project.sortThroughDate();
    tasks.textContent = "";
    for (let task of project.returnTasks()) {
      let taskRow = document.createElement("div");
      taskRow.setAttribute("class", "task-row");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = "task-status";
      checkbox.name = "taskStatus";
      if (task.doneStatus === true) {
        checkbox.checked = true;
      }
      taskRow.append(checkbox);
      let color;
      if (task.priority === "low") {
        color = "green";
      } else if (task.priority === "medium") {
        color = "yellow";
      } else {
        color = "red";
      }
      taskRow.style.borderLeft = `7px solid ${color}`;
      let taskTitle = document.createElement("div");
      taskTitle.id = "task-title";
      taskTitle.textContent = task.title;
      let taskDate = document.createElement("div");
      taskDate.id = "task-dueDate";
      taskDate.textContent = task.formattedDate;
      taskRow.appendChild(taskTitle);
      taskRow.appendChild(taskDate);
      let del = document.createElement("button");
      del.textContent = "X";
      taskRow.appendChild(del);
      taskRow.dataset.taskId = project.returnTasks().indexOf(task);
      tasks.appendChild(taskRow);
    }
    delTask();
    checkboxcall();
    applyEditDialog(pc);
  }

  function delTask() {
    let delButtons = document.querySelectorAll(".task-row button");
    delButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        let taskRow = event.currentTarget.parentNode;
        project.deleteTask(parseInt(taskRow.dataset.taskId));
        populateStorage(pc.listProjectsArr());
        loadTasks();
      });
    });
  }
  function checkboxcall() {
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((box) => {
      box.addEventListener("change", function (event) {
        let taskId = parseInt(event.currentTarget.parentNode.dataset.taskId);
        if (event.currentTarget.checked) {
          project.returnTasks()[taskId].doneStatus = true;
        } else {
          project.returnTasks()[taskId].doneStatus = false;
        }
        populateStorage(pc.listProjectsArr());
      });
    });
  }

  tasks.dataset.projectId = project.getId();
  return { loadTasks, delTask };
}
