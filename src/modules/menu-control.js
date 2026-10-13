import projectsControl from "./projects-control.js";
import taskLoader from "./task-loader.js";
function screenController(){
    let pc = projectsControl();
    let menu = document.querySelector("#menu");
    function refreshProjectList(){
        menu.textContent="";
        for(let item of pc.listProjectsArr()){
            let tl = taskLoader(item);
            let projectTitle = document.createElement("div");
            let projectDelete = document.createElement("button");
            projectTitle.textContent = item.getName();
            let id = item.getId();

            projectDelete.textContent = "X";

            let menuRow = document.createElement("div");
            menuRow.dataset.projectId = id
            menuRow.setAttribute("class","menu-row");
            menuRow.appendChild(projectTitle);
            menuRow.appendChild(projectDelete);
            menu.appendChild(menuRow);
            deletefunc();
            projectTitle.addEventListener("click",()=>tl.loadTasks());
            tl.delTask()
        }
    }
    function deletefunc(){
        let deleteButtons = document.querySelectorAll(".menu-row button");
        deleteButtons.forEach((button)=>{
            button.addEventListener("click",()=>{
                let parent = button.parentNode;
                let tasks = document.querySelector(".tasks")
                pc.deleteProject(parent.dataset.projectId);
                refreshProjectList();
                if(parent.dataset.projectId === tasks.dataset.projectId){
                    tasks.textContent=""
                }
            })
        })
        }
    deletefunc();
     (function(){
         let addProject = document.querySelector(".whole-menu > button");
         console.log(addProject)
         let dialog = document.querySelector("#addProject-dialog")
         addProject.addEventListener("click",()=>{
             dialog.showModal();
        })
        let submit = dialog.querySelector("button");
        submit.addEventListener("click",()=>{
            let inputBox = document.querySelector("#project-name");
            let projectName = inputBox.value;
            pc.addNewProject(projectName);
            inputBox.value="";
            dialog.close()
            refreshProjectList();
        })
        }())
    let tlInbox = taskLoader(pc.getProject(1));
    tlInbox.loadTasks();
    return {refreshProjectList,};
}
export {screenController};