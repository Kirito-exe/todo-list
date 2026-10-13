export default function(project){
    let tasks = document.querySelector("#content .tasks");
    tasks.textContent="";
    for(let task of project.returnTasks()){
        let taskRow = document.createElement("div");
        taskRow.setAttribute("class","task-row");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "task-status";
        checkbox.name= "taskStatus";
        checkbox.value = "true";
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
        tasks.appendChild(taskRow);
    }
}