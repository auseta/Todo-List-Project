import { format, parseISO } from "date-fns";

const d = document;
let taskListStorage = [];

if (localStorage.getItem('todos')) {
  taskListStorage = [...JSON.parse(localStorage.getItem('todos'))]
}

export class Task {  

  static saveInStorage() {
    localStorage.setItem('todos', JSON.stringify(taskListStorage))
    taskListStorage = [...JSON.parse(localStorage.getItem('todos'))]
  }

  static saveTask(id, title, description, date, notes) {
    taskListStorage.push({
      id: id,
      title: title || 'DEFAULT TITLE' ,
      description: description,
      date: date || "No date",
      notes: notes,
      completed: false,
    })
    this.saveInStorage()
  }

  static renderTasksStorage() {
    const tasksContainer = d.querySelector('.tasks-container');
    tasksContainer.innerHTML = '';
    if (taskListStorage) {
      taskListStorage.forEach( task => {
        const taskContainer = d.createElement('div')
        taskContainer.className='task';
        taskContainer.id = task.id;
        taskContainer.innerHTML = `
          <div class='delete-task'>
            <button id='delete-task'>X</button>
          </div>
          <div class='task-title'>
            <h2>${task.title}</h2>
          </div>
          <div class='task-description'>
            <span>Description: ${task.description}</span>
            <span>Date: ${ task.date === 'No date' ? 'No date' : format( parseISO(task.date) , 'dd/MM/yyyy' )} </span>
          </div>
          <div class='task-notes'>
            <span>Notes: ${ task.notes }</span>
          </div>
          <div class='task-state'>
            <label for='state'>Completed: </label>
            <input type='checkbox' id='state' ${ task.completed ? 'checked' : '' } >
          </div>
        `
        tasksContainer.append(taskContainer)
      }
    )}
  }

  static deleteTaskStorage = () => {
    const taskDeleteButtons = d.querySelectorAll('.delete-task');
    taskDeleteButtons.forEach( deleteTaskButton => {
      deleteTaskButton.addEventListener('click', () => {
        const taskContainer = deleteTaskButton.parentNode;
        taskListStorage.forEach( task => {
          if (task.id === +taskContainer.id) {
            taskListStorage.splice(taskListStorage.indexOf(task), 1);
            taskContainer.remove()
            this.saveInStorage()
          }
        });
      })
    })
  }

  static setState() {
    const tasksStates = d.querySelectorAll('#state');

    tasksStates.forEach( checkbox => {
      const checkBoxContainer = checkbox.parentNode.parentNode;
      const taskTitle = checkBoxContainer.firstElementChild.nextElementSibling
      taskListStorage.forEach(task => {
        if (task.id == checkBoxContainer.id) {
          if(checkbox.checked) {
            taskTitle.style.cssText = 'text-decoration: line-through;'
            task.completed = true
          } else {
            taskTitle.style.cssText = ''
            task.completed = false
          }
          this.saveInStorage()
        }
      })
    })

    tasksStates.forEach( checkbox => {
      const checkBoxContainer = checkbox.parentNode.parentNode;
      const taskTitle = checkBoxContainer.firstElementChild.nextElementSibling
      checkbox.addEventListener('click', () => {
        taskListStorage.forEach(task => {
          if (task.id == checkBoxContainer.id) {
            if(checkbox.checked) {
              taskTitle.style.cssText = 'text-decoration: line-through;'
              task.completed = true
            } else {
              taskTitle.style.cssText = ''
              task.completed = false
            }
            this.saveInStorage()
          }
        })
      })
    })
  }
};

export class TaskSections {
  
  static renderTaskToday(task) {
    const tasksTodayContainer = d.querySelector('.tasks-today-container');
    const taskContainer = d.createElement('div')
    taskContainer.className='task';
    taskContainer.id = task.id;
    taskContainer.innerHTML = `
      <div class='delete-task'>
        <button id='delete-task'>X</button>
      </div>
      <div class='task-title'>
        <h2>${task.title}</h2>
      </div>
      <div class='task-description'>
        <span>Description: ${task.description}</span>
        <span>Date: ${ task.date === 'No date' ? 'No date' : format( parseISO(task.date), 'dd/MM/yyyy' )} </span>
      </div>
      <div class='task-notes'>
        <span>Notes: ${ task.notes }</span>
      </div>
      <div class='task-state'>
        <label for='state'>Completed: </label>
        <input type='checkbox' id='state' ${ task.completed ? 'checked' : '' } >
      </div>
    `
    tasksTodayContainer.append(taskContainer)
  }

  static renderTaskWeek(task) {
    const tasksWeekContainer = d.querySelector('.tasks-week-container');
    const taskContainer = d.createElement('div')
    taskContainer.className='task';
    taskContainer.id = task.id;
    taskContainer.innerHTML = `
      <div class='delete-task'>
        <button id='delete-task'>X</button>
      </div>
      <div class='task-title'>
        <h2>${task.title}</h2>
      </div>
      <div class='task-description'>
        <span>Description: ${task.description}</span>
        <span>Date: ${ task.date === 'No date' ? 'No date' : format( parseISO(task.date), 'dd/MM/yyyy' )} </span>
      </div>
      <div class='task-notes'>
        <span>Notes: ${ task.notes }</span>
      </div>
      <div class='task-state'>
        <label for='state'>Completed: </label>
        <input type='checkbox' id='state' ${ task.completed ? 'checked' : '' } >
      </div>
    `
    tasksWeekContainer.append(taskContainer)
  }

}

export class Project {

  static saveProject(name, projectID) {
    projectsStorage.push({
      name: name,
      id: projectID,
      tasks: []
    })
  }

}