const noteModal = document.querySelector(".modal-note");
const projectModal = document.querySelector(".modal-project");
const overlay = document.querySelector(".overlay");
export function openNoteModal() {
  overlay.style.display = "flex";
  noteModal.style.display = "block";
}

export function openProjectModal() {
  overlay.style.display = "flex";
  projectModal.style.display = "block";
}

export function closeModal(event) {
  if (event.target.classList.contains("overlay")) {
    noteModal.style.display = "none";
    projectModal.style.display = "none";
    overlay.style.display = "none";
  }
}
