import { openInbox, openToday } from "./manipulation";

const d = document;

const inboxSection = d.querySelector('#inbox');
inboxSection.addEventListener('click', () => {
  todaySection.style.cssText = '';
  inboxSection.style.cssText = 'background-color: #03a062c6; color: #000000;'
  openInbox()
})

const todaySection = d.querySelector('#today');
todaySection.addEventListener('click', () => {
  inboxSection.style.cssText = '';
  todaySection.style.cssText = 'background-color: #03a062c6; color: #000000;'
  openToday()
})