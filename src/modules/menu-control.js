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
            deletefunc();
        }}
    function deletefunc(){
        let deleteButtons = document.querySelectorAll(".menu-row button");
        deleteButtons.forEach((button)=>{
            button.addEventListener("click",()=>{
                let parent = button.parentNode;
                pc.deleteProject(parent.dataset.projectId);
                refreshProjectList();
            })
        })
        }
    deletefunc();
     (function addProjectButton(){
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
    return {refreshProjectList,};
}
export {screenController};