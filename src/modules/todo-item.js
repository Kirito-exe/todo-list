export default class {
  doneStatus = false; //status for task completed or not
  constructor(title, description, dueDate,priority,note) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority
    this.note = note;
  }
  toggleStatus() {
    this.doneStatus = this.doneStatus === false ? this.doneStatus = true : false;
  }
}
