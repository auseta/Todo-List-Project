import { Project, projectsStorage } from "./classes";

const d = document;
const inputProjectName = d.querySelector('#input-project-name');
const projectsContainer = d.querySelector('.projects')
const content = d.querySelector('.content');

const closeModalError = () => {
  const modalErrorContainer = d.querySelector('.modal-error');
  const buttonCloseModal = d.querySelector('.close-modal');
  buttonCloseModal.addEventListener('click', () => modalErrorContainer.remove())
}

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
  content.append(modalErrorContainer);
  closeModalError()
}

export const createProject = () => {
  const projectName = inputProjectName.value;
  if (projectsStorage.length === 0 || !projectsStorage.some( project => project.name === projectName )) {
    Project.saveProject(projectName);
    inputProjectName.value = ''
    addProject();
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
      <a class='project-name'>${project.name}</a>
      <button class='delete-project'>X</button>
      <div class='.tasks-container'></div>
    `
    projectsContainer.appendChild(projectContainer)
  })
  Project.deleteProject()
  Project.openProject()

}