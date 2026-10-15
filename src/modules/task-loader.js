import { showDetails } from "./edit-task.js";
export default function(project){
    let tasks = document.querySelector("#content .tasks");
    function loadTasks(){
        tasks.textContent="";
        for(let task of project.returnTasks()){
            console.log(project.returnTasks())
            let taskRow = document.createElement("div");
            taskRow.setAttribute("class","task-row");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "task-status";
            checkbox.name= "taskStatus";
            
            taskRow.append(checkbox);
            let taskTitle = document.createElement("div");
            taskTitle.id = "task-title";
            taskTitle.textContent = task.title;
            let taskDate = document.createElement("div");
            taskDate.id = "task-dueDate";
            taskDate.textContent = task.dueDate;
            taskRow.appendChild(taskTitle);
            taskRow.appendChild(taskDate);
            let del = document.createElement("button");
            del.textContent="X";
            taskRow.appendChild(del)
            taskRow.dataset.taskId = project.returnTasks().indexOf(task);
            tasks.appendChild(taskRow);
            
        }
        checkboxcall();
        delTask();
    }
    
    function delTask(){
        let delButtons = document.querySelectorAll(".task-row button");
        delButtons.forEach((button)=>{
            button.addEventListener("click",(event)=>{
                let taskRow = event.currentTarget.parentNode;
                project.deleteTask(parseInt(taskRow.dataset.taskId));
                loadTasks();
                console.log(event.currentTarget);
                console.log(delButtons)
            })
        })
    }
    function checkboxcall(){
        let checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach((box)=>{
            box.addEventListener('change', function(event) {
                let taskId = parseInt(event.currentTarget.parentNode.dataset.taskId);
                if (event.currentTarget.checked) {
                    project.returnTasks()[taskId].doneStatus = true;
                    console.log(project.returnTasks()[taskId])
                    console.log(taskId)
                } else {
                    project.returnTasks()[taskId].doneStatus = false;
                }
                });
        })
    }
    
    tasks.dataset.projectId=project.getId();
    return {loadTasks,delTask}
}