import projectsControl from "./projects-control.js";
function screenController(){
    let pc = projectsControl();
    let menu = document.querySelector("#menu");
    function refreshProjectList(){
        menu.textContent="";
        for(let item of pc.listProjectsArr()){
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
        }
    (function(){
        let deleteButtons = document.querySelectorAll(".menu-row button");
        deleteButtons.forEach((button)=>{
            button.addEventListener("click",()=>{
                let parent = button.parentNode;
                console.log(parent);
                console.log(parent.dataset.projectId);
                pc.deleteProject(parent.dataset.projectId);
                refreshProjectList();
            })
        })
        }())
    }
    return {refreshProjectList};
}
export {screenController};