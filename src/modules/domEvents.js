import { openInbox } from "./manipulation";

const d = document;
const inboxSection = d.querySelector('#inbox');
inboxSection.addEventListener('click', () => {
  inboxSection.style.cssText = 'background-color: #03a062; color: #000000'
  openInbox()
})