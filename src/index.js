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
import { openNoteModal } from "./ModalOperations";

const logoImageEl = document.getElementById("todo_logo");
const newProjectForm = document.getElementById("project-form");
const newProjectName = document.getElementById("project-name");
const newNoteForm = document.getElementById("note-form");
const newNoteTitleEl = document.getElementById("note-title");
const newNoteDescriptionEl = document.getElementById("note-description");
const newNoteDueDateEl = document.getElementById("note-date");
const newNotePriorityEl = document.getElementById("note-priority");
const editNoteIdEl = document.getElementById("note-id");
const projectListEl = document.getElementById("project-list-items");
const noteListEl = document.getElementById("notes-list-items");
const scratchPadEl = document.getElementById("scratchpad");
const emptyNoteEl = document.querySelector(".empty");
const addNoteBtn = document.querySelector(".new-note");

logoImageEl.src = Logo;

const scratchPad = new Project("Scratch Pad");
let projectList = [];
let currentProject = scratchPad;

newNoteForm.addEventListener("submit", addNewNote);
newProjectForm.addEventListener("submit", addNewProject);

function addNewNote(event) {
  event.preventDefault();
  const title = newNoteTitleEl.value;
  const description = newNoteDescriptionEl.value;
  const date = newNoteDueDateEl.value;
  const priority = newNotePriorityEl.value;
  if (editNoteIdEl.value !== "") {
    const note = currentProject.notes.find(
      (note) => note.id === editNoteIdEl.value
    );
    note.title = title;
    note.description = description;
    note.dueDate = date;
    note.priority = priority;
    console.log(note);
    noteListEl.innerHTML = getHtmlForNoteList(currentProject);
    newNoteForm.reset();
    return;
  }
  currentProject.addNote(title, description, date, priority);
  console.log(currentProject.notes);
  if (currentProject.notes.length > 0) {
    addNoteBtn.style.display = "flex";
    emptyNoteEl.style.display = "none";
  }
  newNoteForm.reset();
  noteListEl.appendChild(
    getNewNoteElement(currentProject.notes[currentProject.notes.length - 1])
  );
}

function addNewProject(event) {
  event.preventDefault();
  const projectName = newProjectName.value;
  const newProject = new Project(projectName);
  projectList.push(newProject);
  newProjectForm.reset();
  projectListEl.appendChild(getNewProjectElement(newProject));
}

projectListEl.addEventListener("click", projectClickHandler);
noteListEl.addEventListener("click", noteClickHandler);
scratchPadEl.addEventListener("click", projectClickHandler);

function noteClickHandler(event) {
  let noteId;
  const element = event.target.closest(".note");
  if (element) {
    noteId = element.dataset.id;
  }

  if (event.target.classList.contains("remove-note")) {
    currentProject.notes = currentProject.notes.filter(
      (note) => note.id !== noteId
    );
    console.log(noteId);
    noteListEl.innerHTML = getHtmlForNoteList(currentProject);
    if (currentProject.notes.length === 0) {
      emptyNoteEl.style.display = "flex";
      addNoteBtn.style.display = "none";
    } else {
      emptyNoteEl.style.display = "none";
      addNoteBtn.style.display = "flex";
    }
  }
  if (event.target.classList.contains("edit-note")) {
    let clickedNote = currentProject.notes.find((note) => note.id === noteId);

    editNoteIdEl.value = clickedNote.id;
    newNoteTitleEl.value = clickedNote.title;
    newNoteDescriptionEl.value = clickedNote.description;
    newNoteDueDateEl.value = clickedNote.dueDate;
    newNotePriorityEl.value = clickedNote.priority;
    openNoteModal();
  }
}

function projectClickHandler(event) {
  let id;
  const element = event.target.closest(".project");
  if (element) {
    document
      .querySelectorAll(".project")
      .forEach((project) => project.classList.remove("active-project"));
    id = element.dataset.id;
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
      currentProject = scratchPad;
      scratchPadEl.classList.add("active-project");
      noteListEl.innerHTML = getHtmlForNoteList(currentProject);
    }
  }
}

function loadScratchPad() {
  if (currentProject.notes.length === 0) {
    emptyNoteEl.style.display = "flex";
    addNoteBtn.style.display = "none";
  } else {
    emptyNoteEl.style.display = "none";
    addNoteBtn.style.display = "flex";
  }
}

loadScratchPad();
