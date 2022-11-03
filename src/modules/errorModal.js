const appContainer = document.querySelector('#container');
const projectInput = document.querySelector('#input-add-project');
const addProjectButton = document.querySelector('#add-project');

const createModalError = () => {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error-modal');

  const errorHeader = document.createElement('div');
  errorHeader.classList.add('error-header');

  const headerButton = document.createElement('button');
  headerButton.classList.add('close-error')

  const imgButton = document.createElement('img');
  imgButton.src = '../src/img/close.svg';
  imgButton.alt = 'close-error'

  headerButton.appendChild(imgButton)
  errorHeader.appendChild(headerButton);

  const errorContent = document.createElement('div');
  errorContent.classList.add('error-content');

  const errorText = document.createElement('p');
  errorText.textContent = 'ERROR {FILL INPUT}'
  errorContent.appendChild(errorText)

  errorContainer.appendChild(errorHeader);
  errorContainer.appendChild(errorContent)

  appContainer.appendChild(errorContainer)

  errorContainer.style.display = 'grid';
  projectInput.setAttribute('disabled', true);
  addProjectButton.setAttribute('disabled', true);
}

const displayModalError = () => {
  createModalError()
}

export default displayModalError;