function openNoteModal() {
  overlay.style.display = "flex";
  noteModal.style.display = "block";
}

function openProjectModal() {
  console.log("open");
  overlay.style.display = "flex";
  projectModal.style.display = "block";
}

function closeModal(event) {
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

overlay.addEventListener("click", closeModal);
addProjectBtn.addEventListener("click", openProjectModal);
addNoteBtn.addEventListener("click", openNoteModal);
cancelBtns.forEach((button) => {
  button.addEventListener("click", closeModal);
});
