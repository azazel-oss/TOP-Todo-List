import "./style.css";
import Logo from "./Todo_Logo.png";
import "./ModalOperations";
import Project from "./Project";
import { getNewNoteElement, getNewProjectElement } from "./HtmlElements";

const logoImageEl = document.getElementById("todo_logo");
const newProjectForm = document.getElementById("project-form");
const newProjectName = document.getElementById("project-name");
const newNoteForm = document.getElementById("note-form");
const newNoteTitleEl = document.getElementById("note-title");
const newNoteDescriptionEl = document.getElementById("note-description");
const newNoteDueDateEl = document.getElementById("note-date");
const newNotePriorityEl = document.getElementById("note-priority");
const projectListEl = document.getElementById("project-list-items");
const noteListEl = document.getElementById("notes-list-items");

logoImageEl.src = Logo;

const scratchPad = new Project("Scratch Pad");
const projectList = [scratchPad];
const currentProject = projectList[0];

newNoteForm.addEventListener("submit", addNewNote);
newProjectForm.addEventListener("submit", addNewProject);

function addNewNote(event) {
  event.preventDefault();
  const title = newNoteTitleEl.value;
  const description = newNoteDescriptionEl.value;
  const date = newNoteDueDateEl.value;
  const priority = newNotePriorityEl.value;
  currentProject.addNote(title, description, date, priority);
  console.log(currentProject.notes);
  newNoteTitleEl.value = "";
  newNoteDescriptionEl.value = "";
  newNoteDueDateEl.value = "dd/mm/yyyy";
  newNotePriorityEl.value = 0;
  noteListEl.appendChild(
    getNewNoteElement(currentProject.notes[currentProject.notes.length - 1])
  );
}

function addNewProject(event) {
  event.preventDefault();
  const projectName = newProjectName.value;
  const newProject = new Project(projectName);
  projectList.push(newProject);
  newProjectName.value = "";
  projectListEl.appendChild(getNewProjectElement(newProject));
}
