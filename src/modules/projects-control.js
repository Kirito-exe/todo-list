import {project} from "./project-module.js"
import { format } from "date-fns";
import { populateStorage,fetchStorage,StorageStatus } from "./webStorage.js";
export default function(){
    let listProjects =[];
    if(StorageStatus()==="exists"){
        listProjects = fetchStorage()
    }else{
        let today = format(new Date(),"MM/d/yyyy")
        addNewProject("Inbox");
        listProjects[0].addTask("title", "description", today, "priority", "note")
        populateStorage(listProjects);
    }
    function addNewProject(name){
        let projectItem = new project(name);
        listProjects.push(projectItem);
        populateStorage(listProjects);
    }
    function deleteProject(id){
        for(let item of listProjects){ 
            if(item.getId()===id){
                listProjects.splice(listProjects.indexOf(item),1);
            }
        populateStorage(listProjects);
        }
    }
    function getProject(n){
        return listProjects[n-1];
    }
    function getProjectWithId(projectId){
        for(let i=0;i<listProjects.length;i++){
            if (listProjects[i].getId()===projectId){
                return listProjects[i];
            }
        }
    }
    function listProjectsArr(){
        return listProjects;
    }
    function addTaskToProject(index,title, description, dueDate, priority, note){
        listProjects[index].addTask(title, description, dueDate, priority, note);
        populateStorage(listProjects)
    }
    function getTask(projectIndex,taskIndex){
        return listProjects[projectIndex].returnTasks()[taskIndex];
    }
    
    return {addNewProject,deleteProject,getProject,listProjectsArr, addTaskToProject,getTask,getProjectWithId}
}