export function getNewNoteElement(note) {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.dataset.id = note.id;
  newNote.innerHTML = `
    <section class="note-header">
      <div class="title">${note.title}</div>
      <div class="remove-note">&Cross;</div>
    </section>
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
  newProject.dataset.id = project.projectId;
  newProject.innerHTML = `
    <button>
      <i class="fa-solid fa-marker"></i> <span>${project.name}</span>
    </button>
    <button class="remove">&Cross;</button>
  `;
  return newProject;
}

export function getHtmlForProjectList(projectList) {
  return projectList
    .map((project) => {
      return `
    <li class="project" data-id=${project.projectId}>
    <button>
      <i class="fa-solid fa-marker"></i> <span>${project.name}</span>
    </button>
    <button class="remove">&Cross;</button>
  </li>
    `;
    })
    .join("");
}

export function getHtmlForNoteList(project) {
  return project.notes
    .map((note) => {
      return `
    <div class="note">
    <div class="title">${note.title}</div>
    <div class="description">${note.description}</div>
    <div class="priority-label">
      <i class="fa-solid fa-exclamation"></i>
      <div class="due-date">${note.dueDate}</div>
    </div>
    </div> 
    `;
    })
    .join("");
}
