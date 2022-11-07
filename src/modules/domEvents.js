import { openInbox } from "./manipulation";

const d = document;
const inboxSection = d.querySelector('#inbox');
inboxSection.addEventListener('click', openInbox)