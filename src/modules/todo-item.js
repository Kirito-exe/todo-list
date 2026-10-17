import { format } from "date-fns";
export default class {
  formattedDate = "";
  doneStatus = false; //status for task completed or not
  constructor(title, description, dueDate, priority, note, status) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.note = note;
    this.formattedDate = format(this.dueDate, "do-MMM-yyyy");
    this.doneStatus = Boolean(status);
  }
  toggleStatus() {
    this.doneStatus =
      this.doneStatus === false ? (this.doneStatus = true) : false;
  }
}
