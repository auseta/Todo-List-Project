const d = document;
const container = d.querySelector('.container');

const createErrorModal = () => {
  const errorModalContainer = d.createElement('div');
  errorModalContainer.className = 'error-modal';
  errorModalContainer.innerHTML = `
    <div class='error-header'>
      <button id='close-modal'>
        <img src='../src/img/close.svg'>
      </button>
    </div>
    <div class='error-content'>
      <p>ERROR. FILL THE INPUT WITH A PROJECT NAME</p>
    </div>
  `
  container.appendChild(errorModalContainer)
}

const closeErrorModal = () => {
  const closeModal = document.querySelector('#close-modal');
  closeModal.addEventListener('click', e => {
    console.log(e.target.parentNode.parentNode.parentNode.remove());
  })
}

const displayErrorModal = () => {
  createErrorModal();
  closeErrorModal();  
}

export const domAction = () => {

  const addProjectButton = d.querySelector('#add-project')
  console.log(addProjectButton);
  addProjectButton.addEventListener('click', () => {
    displayErrorModal()
  });


}