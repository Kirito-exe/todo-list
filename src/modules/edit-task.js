import { format } from "date-fns";
import taskLoader from "./task-loader.js";
import { populateStorage } from "./webStorage.js";
export function showDetails(pc, task) {
  let dialog = document.querySelector("#editTask-dialog");
  let title = dialog.querySelector("#task-title");
  let desc = dialog.querySelector("#task-desc");
  let date = dialog.querySelector("#due-date");
  let note = dialog.querySelector("#task-note");
  let priority = dialog.querySelector("#priority");
  let today = format(new Date(), "yyyy/MM/d");
  date.setAttribute("min", today);
  title.value = task.title;
  desc.value = task.description;
  date.value = format(task.dueDate, "yyyy-MM-d");
  note.value = task.note;
  if (task.priority === "low") {
    priority.value = "0";
  } else if (task.priority === "medium") {
    priority.value = "5";
  } else {
    priority.value = "10";
  }
  let editButton = dialog.querySelector("#edit-details");
  let form = dialog.querySelector("form");
  let submitButton = dialog.querySelector("button[type='submit']");
  function submitEvent() {
    task.title = title.value;
    task.description = desc.value;
    task.dueDate = new Date(date.value);
    task.formattedDate = format(task.dueDate, "do-MMM-yyyy");
    task.note = note.value;
    let priorityStr;
    if (priority.value === "0") {
      priorityStr = "low";
    } else if (priority.value === "5") {
      priorityStr = "medium";
    } else {
      priorityStr = "high";
    }
    task.priority = priorityStr;
    event.preventDefault();
    dialog.close();
    populateStorage(pc.listProjectsArr());
  }
  editButton.addEventListener("click", () => {
    title.disabled = false;
    desc.disabled = false;
    date.disabled = false;
    note.disabled = false;
    priority.disabled = false;
    submitButton.disabled = false;
  });
  dialog.addEventListener("close", () => {
    title.disabled = true;
    desc.disabled = true;
    date.disabled = true;
    note.disabled = true;
    priority.disabled = true;
    submitButton.disabled = true;
    title.value = "";
    desc.value = "";
    date.value = "";
    note.value = "";
    priority.value = "";
    form.removeEventListener("submit", submitEvent);
    reloadTask(pc);
  });
  form.addEventListener("submit", submitEvent);
  dialog.showModal();
}
export function applyEditDialog(pc) {
  let tasks = document.querySelector(".tasks");
  let taskTitles = tasks.querySelectorAll("#task-title");
  let projectIndex = "";
  taskTitles.forEach((task) => {
    task.addEventListener("click", (event) => {
      let taskIndex = parseInt(event.currentTarget.parentNode.dataset.taskId);
      let projectId = tasks.dataset.projectId;
      for (let i = 0; i < pc.listProjectsArr().length; i++) {
        if (projectId === pc.listProjectsArr()[i].getId()) {
          projectIndex = i;
        }
      }

      showDetails(pc, pc.getTask(projectIndex, taskIndex));
    });
  });
}

function reloadTask(pc) {
  let tasks = document.querySelector(".tasks");
  let projectId = tasks.dataset.projectId;
  let tl = taskLoader(pc, pc.getProjectWithId(projectId));
  tl.loadTasks();
}
