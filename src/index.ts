import './styles.scss';
import './assets/platzi.png';
import { getLegend } from './ts/legend';
import { theme } from './services/theme';
import { getTools } from './components/tools';
import {
  onSubmit,
  inputsListener,
  isDisabledButtonSend,
} from './services/form';
import { renderProjects } from './components/project';

const darky = document.getElementById('dark-theme') as HTMLButtonElement;
const projects = document.getElementById(
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
    projects.appendChild(obj!.fragment.cloneNode(true));
    obj!.accordionListeners.forEach((item) => item());
    obj!.actionsListeners.forEach((item) => item());
  })
  .catch(console.error);
export { onSubmit, theme };
