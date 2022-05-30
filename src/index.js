import "./style.css";
import Logo from "./Todo_Logo.png";
import "./ModalOperations";
import Project from "./Project";
import {
  getHtmlForNoteList,
  getHtmlForProjectList,
  getNewNoteElement,
  getNewProjectElement,
} from "./HtmlElements";

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
const scratchPadEl = document.getElementById("scratchpad");
const emptyNoteEl = document.querySelector(".empty");
const addNoteBtn = document.querySelector(".new-note");

logoImageEl.src = Logo;

const scratchPad = new Project("Scratch Pad");
let projectList = [scratchPad];
let currentProject = scratchPad;

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
  if (currentProject.notes.length > 0) {
    addNoteBtn.style.display = "flex";
    emptyNoteEl.style.display = "none";
  }
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

projectListEl.addEventListener("click", projectClickHandler);
scratchPadEl.addEventListener("click", projectClickHandler);

function projectClickHandler(event) {
  let id;
  const element = event.target.closest(".project");
  if (element) {
    document
      .querySelectorAll(".project")
      .forEach((project) => project.classList.remove("active-project"));
    id = element.dataset.id;
    console.log(id);
    element.classList.add("active-project");
    currentProject = id
      ? projectList.find((project) => project.projectId === id)
      : scratchPad;
    noteListEl.innerHTML = getHtmlForNoteList(currentProject);
    if (currentProject.notes.length === 0) {
      emptyNoteEl.style.display = "flex";
      addNoteBtn.style.display = "none";
    } else {
      emptyNoteEl.style.display = "none";
      addNoteBtn.style.display = "flex";
    }
  }

  if (event.target.classList.contains("remove")) {
    projectList = projectList.filter((project) => project.projectId !== id);
    projectListEl.innerHTML = getHtmlForProjectList(projectList);
    if (element.classList.contains("active-project")) {
      currentProject = projectList[0];
      scratchPadEl.classList.add("active-project");
    }
  }
}
