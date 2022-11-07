import { Task } from "./task";

const d = document;
const content = d.querySelector('.content')
const taskList = [];
let id = 1;

//! ↓↓ Modal window template ↓↓

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
      <label for='task-state'>Completed: </label>
      <input type='checkbox' id='task-state'>
      <button id='add-task-button' type='button'>Add</button>
      <button id='close-task-modal' type='button'>Cancel</button>
  `;

  tasksContainer.append(taskModalContainer);
}

//! ↑↑ Modal window template  ↑↑



//! ↓↓ Modal Button Methods ↓↓

const closeModal = () => {
  const modalContainer = d.querySelector('.task-modal-container')
  modalContainer.remove()
}

//* Inicio: Eliminar tareas de los datos y la UI

const deleteTask = () => {
  const taskContainers = d.querySelectorAll('.task');
  const taskDeleteButtons = d.querySelectorAll('.delete-task');

  taskDeleteButtons.forEach( deleteTaskButton => {
    deleteTaskButton.addEventListener('click', () => {
      const taskContainer = deleteTaskButton.parentNode;
      taskList.forEach( task => {
        if (task.id === +taskContainer.id) {
          taskList.splice(taskList.indexOf(task), 1);
          taskContainer.remove()
          console.log(taskList);
        }
      })
    })
  })

}

//* Fin: Eliminar tareas de los datos y la UI;

const addTask = () => {
  const taskTitle = d.querySelector('#task-title'),
        taskDesc = d.querySelector('#task-description'),
        taskDate = d.querySelector('#task-date'),
        taskNotes = d.querySelector('#task-notes'),
        taskCompleted = d.querySelector('#task-state'),
        taskCompletedValue = taskCompleted.checked === true ? true : false

  taskList.push(Task.saveTask(id,taskTitle.value, taskDesc.value, taskDate.value, taskNotes.value, taskCompletedValue))
  id++
  closeModal()
  Task.renderTasks(taskList);
  deleteTask()
}



//! ↑↑ Modal Button Methods ↑↑



//! ↓↓ Modal Button Actions ↓↓

const modalButtons = () => {

  const closeModalButton = d.querySelector('#close-task-modal');
  closeModalButton.addEventListener('click', closeModal)

  const addTaskButton = d.querySelector('#add-task-button');
  addTaskButton.addEventListener('click', addTask )

}

//! ↑↑ Modal Button Actions ↑↑




//* ↓ HERE IS WHERE THE MAGIC HAPPENDS! ↓

const openModalTask = () => {
  const inboxAddButton = d.querySelector('#open-task-modal')
  inboxAddButton.addEventListener('click', ()=> {
    taskModal()
    modalButtons()
  })
}

export const openInbox = () => {
  content.innerHTML = '';
  const inboxH2 = d.createElement('h2');
  const inboxAddButton = d.createElement('button');
  const tasksContainer = d.createElement('div');
  tasksContainer.className='tasks-container'
  inboxAddButton.textContent = '+Add task';
  inboxAddButton.id='open-task-modal'
  inboxH2.textContent = 'Inbox';
  content.append(inboxH2, inboxAddButton, tasksContainer);
  Task.renderTasks(taskList)
  openModalTask()

}