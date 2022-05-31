export function openNoteModal() {
  overlay.style.display = "flex";
  noteModal.style.display = "block";
}

function openProjectModal() {
  overlay.style.display = "flex";
  projectModal.style.display = "block";
}

function closeModal(event) {
  if (event.target.classList.contains("overlay")) {
    newProjectForm.reset();
    newNoteForm.reset();
  }
  if (
    event.target.classList.contains("overlay") ||
    event.target.classList.contains("btn-cancel") ||
    event.target.classList.contains("btn-add")
  ) {
    noteModal.style.display = "none";
    projectModal.style.display = "none";
    overlay.style.display = "none";
  }
}

const noteModal = document.querySelector(".modal-note");
const projectModal = document.querySelector(".modal-project");
const overlay = document.querySelector(".overlay");
const addProjectBtn = document.querySelector(".add-category");
const addNoteBtn = document.querySelector(".new-note");
const cancelBtns = document.querySelectorAll(".btn-cancel");
const emptyNoteBtn = document.getElementById("empty-notes-button");
const newProjectForm = document.getElementById("project-form");
const newNoteForm = document.getElementById("note-form");

overlay.addEventListener("click", closeModal);
addProjectBtn.addEventListener("click", openProjectModal);
emptyNoteBtn.addEventListener("click", openNoteModal);
addNoteBtn.addEventListener("click", openNoteModal);
cancelBtns.forEach((button) => {
  button.addEventListener("click", closeModal);
});
