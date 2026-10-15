import { format } from "date-fns";
export default class {
  formattedDate = "";
  doneStatus = false;
  #id; //status for task completed or not
  constructor(title, description, dueDate,priority,note) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority
    this.note = note;
    this.formattedDate = format(this.dueDate,"do-MMM-yyyy")
  }
  toggleStatus() {
    this.doneStatus = this.doneStatus === false ? this.doneStatus = true : false;
  }
  set setId(id){
    this.#id = id;
  }
  
}
