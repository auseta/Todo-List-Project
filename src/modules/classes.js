import { format, parseISO } from "date-fns";
import { taskModal } from "./tasks";

const d = document;
const content = d.querySelector(".content");
let taskListStorage = [];
export let projectsStorage = [];
let taskProjectID = 0;

if (localStorage.getItem("todos")) {
  taskListStorage = [...JSON.parse(localStorage.getItem("todos"))];
}

if (localStorage.getItem("projects")) {
  projectsStorage = [...JSON.parse(localStorage.getItem("projects"))];
}

if (localStorage.getItem("taskProjectsID")) {
  taskProjectID = JSON.parse(localStorage.getItem("taskProjectsID"));
}

export class Task {
  static saveInStorage() {
    localStorage.setItem("todos", JSON.stringify(taskListStorage));
  }

  static saveTask(id, title, description, date, notes) {
    taskListStorage.push({
      id: id,
      title: title || "DEFAULT TITLE",
      description: description,
      date: date || "No date",
      notes: notes,
      completed: false,
    });
    this.saveInStorage();
  }

  static renderTasksStorage() {
    const tasksContainer = d.querySelector(".tasks-container");
    tasksContainer.innerHTML = "";
    if (taskListStorage) {
      taskListStorage.forEach((task) => {
        const taskContainer = d.createElement("div");
        taskContainer.className = "task";
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
            <span>Date: ${
              task.date === "No date"
                ? "No date"
                : format(parseISO(task.date), "dd/MM/yyyy")
            } </span>
          </div>
          <div class='task-notes'>
            <span>Notes: ${task.notes}</span>
          </div>
          <div class='task-state'>
            <label for='state'>Completed: </label>
            <input type='checkbox' id='state' ${
              task.completed ? "checked" : ""
            } >
          </div>
        `;
        tasksContainer.append(taskContainer);
      });
    }
  }

  static deleteTaskStorage = () => {
    const taskDeleteButtons = d.querySelectorAll(".delete-task");
    taskDeleteButtons.forEach((deleteTaskButton) => {
      deleteTaskButton.addEventListener("click", () => {
        const taskContainer = deleteTaskButton.parentNode;
        taskListStorage.forEach((task) => {
          if (task.id === +taskContainer.id) {
            taskListStorage.splice(taskListStorage.indexOf(task), 1);
            taskContainer.remove();
            this.saveInStorage();
          }
        });
      });
    });
  };

  static setState() {
    const tasksStates = d.querySelectorAll("#state");

    tasksStates.forEach((checkbox) => {
      const checkBoxContainer = checkbox.parentNode.parentNode;
      const taskTitle = checkBoxContainer.firstElementChild.nextElementSibling;
      taskListStorage.forEach((task) => {
        if (task.id == checkBoxContainer.id) {
          if (checkbox.checked) {
            taskTitle.style.cssText = "text-decoration: line-through;";
            task.completed = true;
          } else {
            taskTitle.style.cssText = "";
            task.completed = false;
          }
          this.saveInStorage();
        }
      });
    });

    tasksStates.forEach((checkbox) => {
      const checkBoxContainer = checkbox.parentNode.parentNode;
      const taskTitle = checkBoxContainer.firstElementChild.nextElementSibling;
      checkbox.addEventListener("click", () => {
        taskListStorage.forEach((task) => {
          if (task.id == checkBoxContainer.id) {
            if (checkbox.checked) {
              taskTitle.style.cssText = "text-decoration: line-through;";
              task.completed = true;
            } else {
              taskTitle.style.cssText = "";
              task.completed = false;
            }
            this.saveInStorage();
          }
        });
      });
    });
  }
}

export class TaskSections {
  static renderTaskToday(task) {
    const tasksTodayContainer = d.querySelector(".tasks-today-container");
    const taskContainer = d.createElement("div");
    taskContainer.className = "task";
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
        <span>Date: ${
          task.date === "No date"
            ? "No date"
            : format(parseISO(task.date), "dd/MM/yyyy")
        } </span>
      </div>
      <div class='task-notes'>
        <span>Notes: ${task.notes}</span>
      </div>
      <div class='task-state'>
        <label for='state'>Completed: </label>
        <input type='checkbox' id='state' ${task.completed ? "checked" : ""} >
      </div>
    `;
    tasksTodayContainer.append(taskContainer);
  }

  static renderTaskWeek(task) {
    const tasksWeekContainer = d.querySelector(".tasks-week-container");
    const taskContainer = d.createElement("div");
    taskContainer.className = "task";
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
        <span>Date: ${
          task.date === "No date"
            ? "No date"
            : format(parseISO(task.date), "dd/MM/yyyy")
        } </span>
      </div>
      <div class='task-notes'>
        <span>Notes: ${task.notes}</span>
      </div>
      <div class='task-state'>
        <label for='state'>Completed: </label>
        <input type='checkbox' id='state' ${task.completed ? "checked" : ""} >
      </div>
    `;
    tasksWeekContainer.append(taskContainer);
  }
}



export class Project {

  static saveInProjectsStorage() {
    localStorage.setItem("projects", JSON.stringify(projectsStorage));
  }

  static saveProject(name) {
    projectsStorage.push({
      name: name,
      id: name.split(" ").join("-"),
      tasks: [],
    });
    this.saveInProjectsStorage();
  }

  static saveProjectTask(id, title, description, date, notes) {
    return {
      id: id,
      title: title || "DEFAULT TITLE",
      description: description,
      date: date || "No date",
      notes: notes,
      completed: false,
    };
  }

  static deleteProject() {
    const buttonDeleteProject = d.querySelectorAll(".delete-project");
    buttonDeleteProject.forEach((button) => {
      button.addEventListener("click", (e) => {
        const projectContainer = e.target.parentNode;
        projectsStorage.forEach((project) => {
          if (project.id === projectContainer.id) {
            projectsStorage.splice(projectsStorage.indexOf(project), 1);
            content.innerHTML = "";
            this.saveInProjectsStorage();
            projectContainer.remove();
          }
        });
      });
    });
  }

  static openModal() {
    taskModal();
    const buttonCloseModal = d.querySelector("#close-task-modal");
    const modalContainer = d.querySelector(".task-modal-container");
    buttonCloseModal.addEventListener("click", () => {
      modalContainer.remove();
    });

    const buttonAddTask = d.querySelector("#add-task-button");
    buttonAddTask.addEventListener("click", () => {
      const taskTitle = d.querySelector("#task-title"),
        taskDesc = d.querySelector("#task-description"),
        taskDate = d.querySelector("#task-date"),
        taskNotes = d.querySelector("#task-notes");
      const projectTitle = d.querySelector(".project-title");
      projectsStorage.forEach((project) => {
        if (project.name === projectTitle.textContent) {
          project.tasks.push(
            Project.saveProjectTask(
              taskProjectID,
              taskTitle.value,
              taskDesc.value,
              taskDate.value,
              taskNotes.value
            )
          );
          localStorage.setItem("projects", JSON.stringify(projectsStorage));
          taskProjectID++;
          localStorage.setItem("taskProjectsID", taskProjectID);
          Project.renderProjectTasks();
        }
      });
    });
  }

  static deleteProjectTask = () => {
    const taskDeleteButtons = d.querySelectorAll(".delete-task");
    taskDeleteButtons.forEach((deleteTaskButton) => {
      deleteTaskButton.addEventListener("click", () => {
        const taskContainer = deleteTaskButton.parentNode;
        const taskTitle = taskContainer.firstElementChild.nextElementSibling.firstElementChild.textContent
        projectsStorage.forEach(project => {
          const projectTasks = project.tasks
          projectTasks.forEach( task => {
            if (task.title === taskTitle) {
              taskContainer.remove();
              projectTasks.splice( projectTasks.indexOf(task), 1 )
              this.saveInProjectsStorage()
            }
          })
        })
      });
    });
  };

  static renderProjectTasks() {
    const tasksContainer = d.querySelector(".tasks-container");
    const projectName = d.querySelector('.project-title').textContent;
    tasksContainer.innerHTML = "";
    projectsStorage.forEach((project) => {
      if (project.name === projectName) {
        const projectTasks = project.tasks;
        projectTasks.forEach((task) => {
          const taskContainer = d.createElement("div");
          taskContainer.className = "task";
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
                <span>Date: ${
                  task.date === "No date"
                    ? "No date"
                    : format(parseISO(task.date), "dd/MM/yyyy")
                } </span>
              </div>
              <div class='task-notes'>
                <span>Notes: ${task.notes}</span>
              </div>
              <div class='task-state'>
                <label for='state'>Completed: </label>
                <input type='checkbox' id='state' ${
                  task.completed ? "checked" : ""
                } >
              </div>
            `;
          tasksContainer.append(taskContainer);
          Project.deleteProjectTask()
          Project.setProjectState()
        });
      }
    });
  }

  static setProjectState() {
    const tasksStates = d.querySelectorAll("#state");
    
    tasksStates.forEach( state => {
      const taskContainer = state.parentNode.parentNode
      const taskTitleContainer = taskContainer.firstElementChild.nextElementSibling
      const taskTitle = taskContainer.firstElementChild.nextElementSibling.firstElementChild.textContent;
      projectsStorage.forEach(project => {
        const projectTasks = project.tasks
        projectTasks.forEach( task => {
          if (task.title === taskTitle) {
            if (state.checked) {
              taskTitleContainer.style.cssText = "text-decoration: line-through;";
              task.completed = true;
            } else {
              taskTitleContainer.style.cssText = "";
              task.completed = false;
            }
            this.saveInProjectsStorage();
          }
        })
      })
    });
    
    tasksStates.forEach( state => {
      state.addEventListener("click", () => {
        const taskContainer = state.parentNode.parentNode
        const taskTitleContainer = taskContainer.firstElementChild.nextElementSibling
        const taskTitle = taskContainer.firstElementChild.nextElementSibling.firstElementChild.textContent
        projectsStorage.forEach(project => {
          const projectTasks = project.tasks
          projectTasks.forEach( task => {
            if (task.title === taskTitle) {
              if (state.checked) {
                taskTitleContainer.style.cssText = "text-decoration: line-through;";
                task.completed = true;
              } else {
                taskTitleContainer.style.cssText = "";
                task.completed = false;
              }
              this.saveInProjectsStorage();
            }
          })
        })
      });
    });

  }

  static openProject() {
    const projects = d.querySelectorAll(".project-name");
    projects.forEach((project) => {
      project.addEventListener("click", () => {
        content.innerHTML = "";
        content.style.cssText = "grid-template-rows: 50px 50px 6fr;";

        const projectTitle = d.createElement("h2");
        const buttonAddTask = d.createElement("button");
        const tasksContainer = d.createElement("div");

        projectTitle.textContent = project.textContent;
        projectTitle.className = "project-title";
        buttonAddTask.id = "open-task-modal";
        buttonAddTask.textContent = "+Add task";
        tasksContainer.className = "tasks-container";

        content.append(projectTitle, buttonAddTask, tasksContainer);

        this.renderProjectTasks();
        buttonAddTask.addEventListener("click", this.openModal);
      });
    });
  }
}
