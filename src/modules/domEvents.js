import { openInbox, openToday, openThisWeek } from './tasks';
import { addProject, createProject } from "./project";

const d = document;
const inputProjectName = d.querySelector('#input-project-name');
const buttonAddProject = d.querySelector('#add-project-button');
const inboxSection = d.querySelector('#inbox');
const todaySection = d.querySelector('#today');
const weekSection = d.querySelector('#week');

inboxSection.addEventListener('click', () => {
  todaySection.style.cssText = '';
  weekSection.style.cssText = '';
  inboxSection.style.cssText = 'background-color: #03a062c6; color: #000000;'
  openInbox()
})


todaySection.addEventListener('click', () => {
  inboxSection.style.cssText = '';
  weekSection.style.cssText = '';
  todaySection.style.cssText = 'background-color: #03a062c6; color: #000000;'
  openToday()
})


weekSection.addEventListener('click', () => {
  inboxSection.style.cssText = '';
  todaySection.style.cssText = '';
  weekSection.style.cssText = 'background-color: #03a062c6; color: #000000;'
  openThisWeek()
})

inputProjectName.addEventListener('click', () => {
  inboxSection.style.cssText = '';
  weekSection.style.cssText = '';
  todaySection.style.cssText = '';
})

addProject()

buttonAddProject.addEventListener('click', () => {
  inboxSection.style.cssText = '';
  weekSection.style.cssText = '';
  todaySection.style.cssText = '';
  if ( inputProjectName.value ) {
    createProject()
  }
})