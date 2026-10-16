import { project } from "./project-module.js";
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
export function populateStorage(arr){
    if(storageAvailable("localStorage")){
        let stringArr = JSON.stringify(arr);
        localStorage.setItem("projects",stringArr)
    } else{
        console.log("local storage ggs")
    }
}

export function fetchStorage(){
    if(storageAvailable("localStorage")){
        let stringArr = localStorage.getItem("projects");
        let arr = JSON.parse(stringArr);
        let formattedArr = [];
        for(let item of arr){
            let pjt = new project(item.name);
            pjt.projectId = item.projectId;
            for (let task of item.tasks){
                pjt.addTask(task.title,task.description,task.dueDate,task.priority,task.note,task.doneStatus);
            }
            formattedArr.push(pjt);
        }
        return formattedArr
    } else{
        console.log("local storage ggs")
    }
}
export function StorageStatus(){
    if(localStorage.length!==0){
        return "exists";
    }else{
        return "empty";
    }
}