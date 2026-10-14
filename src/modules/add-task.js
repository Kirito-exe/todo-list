export default function(pc){
    let dialog = document.querySelector("#addTask-dialog");
    let addButton = document.querySelector("#addTask")
    let projects = dialog.querySelector("#project-selection");
    addButton.addEventListener("click",()=>{
        dialog.showModal()
    })
    function refreshOptionList(){
        projects.textContent='';
        for(let i =0; i<pc.listProjectsArr().length;i++){
        let option = document.createElement("option");
        console.log("i was accessed tho")
        option.value = i;
        option.textContent=pc.listProjectsArr()[i].getName();
        projects.appendChild(option);
        if(i===0){
            option.selected = true;
        }
    }
    }
    refreshOptionList();
    function taskSubmit(){
    let submitButton = dialog.querySelector("button[type='submit']");
    submitButton.addEventListener("click",(event)=>{
        let title=dialog.querySelector("#task-title").value;
        let desc=dialog.querySelector("#task-desc").value;
        let date=dialog.querySelector("#due-date").value;
        let note=dialog.querySelector("#task-note").value;
        let priority = dialog.querySelector("#priority").value;
        if (priority===0){
            priority = "low";
        } else if(priority===5){
            priority= "medium"
        } else {
            priority = "high"
        }
        let projectIndex = projects.value;
        pc.addTaskToProject(projectIndex,title, desc, date, priority, note);
    })
    }

    return {refreshOptionList,taskSubmit}
}