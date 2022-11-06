import './styles/style.css';
import { renderUI } from './modules/UI';
import { domAction } from './modules/domActions';

document.addEventListener('DOMContentLoaded', () => {
  renderUI();
  domAction()
})