import { format } from "date-fns";

const d = document;

export class Task {
  
  static saveTask(id, title='default title', description, date, notes, completed) {
    return {
      id: id,
      title: title || 'DEFAULT TITLE' ,
      description: description,
      date: date || "No date",
      notes: notes,
      completed: completed,
    };
  }

  static renderTasks(taskList) {
    const tasksContainer = d.querySelector('.tasks-container');
    tasksContainer.innerHTML = '';

    taskList.forEach( task => {
      const taskContainer = d.createElement('div')
      taskContainer.className='task';
      taskContainer.id = task.id;
      taskContainer.innerHTML = `
        <div class='delete-task'>
          <button id='delete-task'>X</button>
        </div>
        <div class='task-title'>
          <h3>${task.title}</h3>
        </div>
        <div class='task-description'>
          <span>Description: ${task.description}</span>
          <span>Date: ${ task.date === 'No date' ? 'No date' : format( new Date(task.date), 'MM/dd/yyyy' )} </span>
        </div>
        <div class='task-notes'>
          <span>${ task.notes }</span>
        </div>
        <div class='task-state'>
          <label for='state'>Completed: </label>
          <input type='checkbox' id='state' ${task.completed ? "checked" : ""} >
        </div>
      `
      tasksContainer.append(taskContainer)
    })
  }
};