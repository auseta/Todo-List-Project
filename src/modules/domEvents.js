import { openInbox, openToday, openThisWeek } from "./manipulation";
import { addProject } from "./project";

const d = document;

const inboxSection = d.querySelector('#inbox');
inboxSection.addEventListener('click', () => {
  todaySection.style.cssText = '';
  weekSection.style.cssText = '';
  inboxSection.style.cssText = 'background-color: #03a062c6; color: #000000;'
  openInbox()
})

const todaySection = d.querySelector('#today');
todaySection.addEventListener('click', () => {
  inboxSection.style.cssText = '';
  weekSection.style.cssText = '';
  todaySection.style.cssText = 'background-color: #03a062c6; color: #000000;'
  openToday()
})

const weekSection = d.querySelector('#week');
weekSection.addEventListener('click', () => {
  inboxSection.style.cssText = '';
  todaySection.style.cssText = '';
  weekSection.style.cssText = 'background-color: #03a062c6; color: #000000;'
  openThisWeek()
})

const inputProjectName = d.querySelector('#input-project-name');
const buttonAddProject = d.querySelector('#add-project-button');
inputProjectName.addEventListener('click', () => {
  inboxSection.style.cssText = '';
  weekSection.style.cssText = '';
  todaySection.style.cssText = '';
})

buttonAddProject.addEventListener('click', () => {
  inboxSection.style.cssText = '';
  weekSection.style.cssText = '';
  todaySection.style.cssText = '';
  inputProjectName.value ? addProject() : console.log('chau')
})