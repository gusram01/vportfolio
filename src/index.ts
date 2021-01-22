import './styles.scss';
import './assets/platzi.png';
import { getLegend } from './ts/legend';
import { theme } from './services/theme';
import { getTools } from './components/tools';
import { renderProjects } from './components/project';
import { firstObs } from './services/nav/changeNavBg';
import { showSmallMenu } from './services/nav/showMenu';
import {
  onSubmit,
  inputsListener,
  isDisabledButtonSend,
} from './services/form';

const darky = document.getElementById('dark-theme') as HTMLButtonElement;
const header = document.getElementById('header') as HTMLElement;
const projectsContainer = document.getElementById(
  'projects-container',
) as HTMLDivElement;
const tools = document.getElementById('tools') as HTMLDivElement;

theme(darky);
inputsListener();
isDisabledButtonSend();
onSubmit();
getTools(tools);
getLegend();
renderProjects()
  .then((obj) => {
    projectsContainer.appendChild(obj!.fragment.cloneNode(true));
    obj!.accordionListeners.forEach((item) => item());
    obj!.actionsListeners.forEach((item) => item());
  })
  .catch(console.error);
showSmallMenu();
firstObs.observe(header);
export { onSubmit, theme };
