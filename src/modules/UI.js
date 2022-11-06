 export const renderUI = () => {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <div class='header'>
      <img src='../src/img/cpu.svg'>
      <h1>Matrix Todo List</h1>
    </div>

    <div class='aside'>

      <div class='sections'>
        <a id='inbox'><img src="../src/img/inbox.svg" alt="inbox">Inbox</a>
        <a id='inbox'><img src="../src/img/today.svg" alt="today">Today</a>
        <a id='inbox'><img src="../src/img/week.svg" alt="this-week">This Week</a>
      </div>

      <div class='projects-section'>
        <p><img src='../src/img/projects.svg'>Projects</p>
        <div clas='projects'></div>
        <div class='add-project-controls'>
          <input type='text' id='input-project-name'>
          <button type='button' id='add-project'>ADD</button>
        </div>
      </div>

    </div>

    <div class='content'>

    </div>

    <div class='footer'>
      <p>PROJECT MADE IT BY AUGUSTO SETA</p>
    </div>
`
}
