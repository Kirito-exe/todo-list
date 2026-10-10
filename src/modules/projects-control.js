import project from "./project-module.js";
export default function(){
    let listProjects =[];
    function addNewProject(name){
        let projectItem = project(name);
        listProjects.push(projectItem);
    }
    function deleteProject(id){
        for(let item of listProjects){ 
            if(item.getId()===id){
                listProjects.splice(listProjects.indexOf(item),1);
            }
        }
    }
    function getProject(n){
        return listProjects[n-1];
    }
    function listProjectsArr(){
        return listProjects;
    }
    return {addNewProject,deleteProject,getProject,listProjectsArr}
}