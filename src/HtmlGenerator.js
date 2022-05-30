export function getNewNoteHtml(note) {
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
}

export function getNewProjectHtml(project) {
  return `<li class="project">
            <button>
              <i class="fa-solid fa-marker"></i> <span>${project.name}</span>
            </button>
            <button class="remove">&Cross;</button>
          </li>`;
}
