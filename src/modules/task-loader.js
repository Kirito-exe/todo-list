export default function(project){
    let tasks = document.querySelector("#content .tasks");
    function loadTasks(){
        tasks.textContent="";
        for(let task of project.returnTasks()){
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
            checkboxcall(task);
        }
    }
    
    function delTask(){
        let delButtons = document.querySelectorAll(".task-row button");
        delButtons.forEach((button)=>{
            button.addEventListener("click",()=>{
                let taskRow = button.parentNode;
                project.deleteTask(taskRow.dataset.taskId);
                loadTasks();
            })
        })
    }
    function checkboxcall(task){
        let checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach((box)=>{
            box.addEventListener('change', function(event) {
                if (event.currentTarget.checked) {
                    task.doneStatus=true;
                    console.log(task)
                } else {
                    task.doneStatus=false;
                }
                });
        })
    }
    tasks.dataset.projectId=project.getId();
    return {loadTasks,delTask}
}