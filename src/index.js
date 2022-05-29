import "./style.css";
import Logo from "./Todo_Logo.png";
import { openNoteModal, openProjectModal, closeModal } from "./ModalOperations";

const logoImageEl = document.getElementById("todo_logo");
logoImageEl.src = Logo;

const overlay = document.querySelector(".overlay");
const addProjectBtn = document.querySelector(".add-category");
const addNoteBtn = document.querySelector(".new-note");

overlay.addEventListener("click", closeModal);
addProjectBtn.addEventListener("click", openProjectModal);
addNoteBtn.addEventListener("click", openNoteModal);
