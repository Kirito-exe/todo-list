
import taskLoader from "./task-loader.js";
export function showDetails(pc,task){
    let dialog=document.querySelector("#editTask-dialog");
    let title=dialog.querySelector("#task-title");
    let desc=dialog.querySelector("#task-desc");
    let date=dialog.querySelector("#due-date");
    let note=dialog.querySelector("#task-note");
    let priority = dialog.querySelector("#priority");
    title.value= task.title;
    desc.value = task.description;
    date.value = task.dueDate;
    note.value = task.note;
    priority.value = task.priority;
    let editButton = dialog.querySelector("#edit-details");
    let form = dialog.querySelector("form");
    let submitButton = dialog.querySelector("button[type='submit']")
    function submitEvent(){
        task.title = title.value;
        task.description = desc.value;
        task.dueDate = new Date(date.value);
        task.note = note.value;
        let priorityStr = ""
        if (priority.value===0){
            priorityStr = "low";
        } else if(priority.value===5){
            priorityStr= "medium"
        } else {
            priorityStr = "high"
        }
        task.priority = priorityStr;
    }
    editButton.addEventListener("click",()=>{
        title.disabled =false;
        desc.disabled = false;
        date.disabled = false;
        note.disabled = false;
        priority.disabled = false;
        submitButton.disabled = false;
        form.addEventListener("submit",(event)=>{
            submitEvent();
            event.preventDefault();
            dialog.close()
            reloadTask(pc)
        })
    })
    dialog.addEventListener("close",()=>{
        title.disabled =true;
        desc.disabled = true;
        date.disabled = true;
        note.disabled = true;
        priority.disabled = true;
        submitButton.disabled = true;
        form.removeEventListener("submit",(event)=>{
            submitEvent();
            event.preventDefault();
        })
    })
    dialog.showModal();
}
export function applyEditDialog(pc){
    let tasks = document.querySelector(".tasks");
    let taskTitles = tasks.querySelectorAll("#task-title");
    let projectIndex ="";
    taskTitles.forEach((task)=>{
        task.addEventListener("click",(event)=>{
            let taskIndex = parseInt(event.target.parentNode.dataset.taskId);
            console.log(taskIndex)
            let projectId = tasks.dataset.projectId;
            for(let i =0;i<pc.listProjectsArr().length;i++){
                if(projectId===pc.listProjectsArr()[i].getId()){
                    projectIndex = i;
                    console.log(projectIndex);
                }
            }
            console.log(pc.getTask(projectIndex,taskIndex))
            showDetails(pc,pc.getTask(projectIndex,taskIndex))
        })
    })
}

function reloadTask(pc){
    let tasks = document.querySelector(".tasks");
    let projectId = tasks.dataset.projectId;
    let tl = taskLoader(pc.getProjectWithId(projectId));
    tl.loadTasks();
}