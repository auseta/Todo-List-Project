import { Project, projectsStorage } from "./task";

const d = document;
const inputProjectName = d.querySelector('#input-project-name');
const projectsContainer = d.querySelector('.projects')
const content = d.querySelector('.content');

export const displayModalError = () => {
  const modalErrorContainer = d.createElement('div');
  modalErrorContainer.className = 'modal-error';
  modalErrorContainer.innerHTML = `
    <div class='error-header'>
      <button class='close-modal'>X</button>
    </div>
    <div class='error-content'>
      <p>{ ERROR, THE PROJECT ENTERED ALREADY EXISTS }</p>
    </div>
  `
  content.append(modalErrorContainer)
}

export const createProject = () => {
  const projectName = inputProjectName.value;
  if (projectsStorage.length === 0 || !projectsStorage.some( project => project.name === projectName )) {
    Project.saveProject(projectName);
    inputProjectName.value = ''
    addProject()
  } else {
    displayModalError()
  }
}

export const addProject = () => {
  projectsContainer.innerHTML = ''
  projectsStorage.forEach( project => {
    const projectContainer = d.createElement('div');
    projectContainer.className = 'project';
    projectContainer.id = project.name.split(' ').join('-')
    projectContainer.innerHTML = `
      <a>${project.name}</a>
      <button id='delete-project'>X</button>
    `
    projectsContainer.appendChild(projectContainer)
  })
}