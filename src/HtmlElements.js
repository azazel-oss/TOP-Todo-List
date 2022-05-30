export function getNewNoteElement(note) {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.innerHTML = `
    <div class="title">${note.title}</div>
    <div class="description">${note.description}</div>
    <div class="priority-label">
      <i class="fa-solid fa-exclamation"></i>
      <div class="due-date">${note.dueDate}</div>
    </div>
  `;
  return newNote;
}

export function getNewProjectElement(project) {
  const newProject = document.createElement("li");
  newProject.classList.add("project");
  newProject.innerHTML = `
    <button>
      <i class="fa-solid fa-marker"></i> <span>${project.name}</span>
    </button>
    <button class="remove">&Cross;</button>
  `;
  return newProject;
}
