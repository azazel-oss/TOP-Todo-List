import Note from "./Note";
import { v4 as uuidv4 } from "uuid";

class Project {
  notes = [];
  addNote(title, description, dueDate, priority) {
    const id = uuidv4();
    const note = new Note(id, title, description, dueDate, priority);
    this.notes.push(note);
  }
  removeNote(id) {
    this.notes = this.notes.filter((note) => note.id != id);
  }
}

export default Project;
