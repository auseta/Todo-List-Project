import { Task, TaskSections } from "./task"
import { format, getWeek, parseISO } from "date-fns";

const d = document;
const content = d.querySelector('.content');
let id;

if (localStorage.getItem('inboxID')) {
  id = JSON.parse(localStorage.getItem('inboxID')) + 1;
} else {
  localStorage.setItem('inboxID', JSON.stringify(1))
  id = JSON.parse(localStorage.getItem('inboxID'))
}


const taskModal = () => {
  const tasksContainer = d.querySelector('.tasks-container');
  const taskModalContainer = d.createElement('div');
  taskModalContainer.className='task-modal-container';
  taskModalContainer.innerHTML=`
      <label for='task-title'>Title: </label>
      <input type='text' id='task-title' placeholder='task title' maxlength='24'>
      <label for='task-description'>Description: </label>
      <input type='text' id='task-description' placeholder='task description' maxlength='24'>
      <label for='task-date'>Date: </label>
      <input type='date' id='task-date'>
      <label for='task-prior'>Priority: </label>
      <select id='task-prior'>
        <option value='high'>High</option>
        <option value='mid'>Mid</option>
        <option value='low'>Low</option>
      </select>
      <label for='task-notes'>Notes: </label>
      <input type='text' id='task-notes' placeholder='add a note' maxlength='24'>
      <button id='add-task-button' type='button'>Add</button>
      <button id='close-task-modal' type='button'>Cancel</button>
  `;
  tasksContainer.append(taskModalContainer);
}


const closeModal = () => {
  const modalContainer = d.querySelector('.task-modal-container')
  modalContainer.remove()
}

const addTask = () => {
  const taskTitle = d.querySelector('#task-title'),
        taskDesc = d.querySelector('#task-description'),
        taskDate = d.querySelector('#task-date'),
        taskNotes = d.querySelector('#task-notes');

  Task.saveTask(id,taskTitle.value, taskDesc.value, taskDate.value, taskNotes.value)
  localStorage.setItem('inboxID', id)
  id++
  closeModal()
  Task.renderTasksStorage()
  Task.deleteTaskStorage()
  Task.setState()
}


const modalButtons = () => {

  const closeModalButton = d.querySelector('#close-task-modal');
  closeModalButton.addEventListener('click', closeModal)

  const addTaskButton = d.querySelector('#add-task-button');
  addTaskButton.addEventListener('click', addTask )

}


const openModalTask = () => {
  const inboxAddButton = d.querySelector('#open-task-modal')
  inboxAddButton.addEventListener('click', ()=> {
    taskModal()
    modalButtons()
  })
}


const loadToday = () => {
  const todayTaskList = localStorage.getItem('todos') ? [...JSON.parse(localStorage.getItem('todos'))] : [];
  const today = format(new Date(), 'yyyy-MM-dd')
  todayTaskList.forEach( task => {
    if (task.date !== 'No date') {
      if (task.date == today) {
        TaskSections.renderTaskToday(task)
        Task.deleteTaskStorage()
        Task.setState()
      }
    }
  }) 
}

const loadWeek = () => {
  const weekTaskList = localStorage.getItem('todos') ? [...JSON.parse(localStorage.getItem('todos'))] : [];
  const thisWeek = getWeek(new Date());
  weekTaskList.forEach( task => {
    if (task.date !== 'No date') {
      if ( getWeek(parseISO(task.date)) === thisWeek) {
        TaskSections.renderTaskWeek(task)
        Task.deleteTaskStorage()
        Task.setState()
      }
    }
  }) 
}

export const openInbox = () => {
  const inboxH2 = d.createElement('h2');
  const inboxAddButton = d.createElement('button');
  const tasksContainer = d.createElement('div');
  tasksContainer.className='tasks-container'
  inboxAddButton.textContent = '+Add task';
  inboxAddButton.id='open-task-modal'
  inboxH2.textContent = 'Inbox';
  content.innerHTML = '';
  content.style.cssText = 'grid-template-rows: 50px 50px 6fr;'
  content.append(inboxH2, inboxAddButton, tasksContainer);
  Task.renderTasksStorage()
  Task.deleteTaskStorage()
  Task.setState()
  openModalTask()
}

export const openToday = () => {
  content.innerHTML = '';
  content.style.cssText = 'grid-template-rows: 50px 6fr;'
  const todayH2 = d.createElement('h2');
  const tasksTodayContainer = d.createElement('div');
  tasksTodayContainer.className='tasks-today-container'
  todayH2.textContent = 'Today'
  content.append(todayH2, tasksTodayContainer)
  loadToday()
}

export const openThisWeek = () => {
  content.innerHTML = '';
  content.style.cssText = 'grid-template-rows: 50px 6fr;'
  const weekH2 = d.createElement('h2');
  const tasksWeekContainer = d.createElement('div');
  tasksWeekContainer.className='tasks-week-container'
  weekH2.textContent = 'This week';
  content.append(weekH2, tasksWeekContainer);
  loadWeek()
}