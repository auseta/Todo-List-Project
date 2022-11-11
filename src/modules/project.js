const d = document;
const inputProjectName = d.querySelector('#input-project-name');
const projectsContainer = d.querySelector('.projects')
const content = d.querySelector('.content');

export const addProject = () => {
  const project = d.createElement('a');
  if (inputProjectName.value) {
    project.textContent = inputProjectName.value;
    project.className = 'project';
    projectsContainer.append(project)
  }
}