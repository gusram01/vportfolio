import './styles.scss';
import './assets/fonts/Ubuntu-Regular.ttf';
import './assets/platzi.png';
import { getLegend } from './ts/legend';
import { theme } from './services/theme';
import { getTools } from './components/tools';
import { onSubmit, inputsLister } from './services/form';
import { renderProjects } from './components/project';

const darky = document.getElementById('dark-theme') as HTMLButtonElement;
const projects = document.getElementById(
  'projects-container',
) as HTMLDivElement;
const tools = document.getElementById('tools') as HTMLDivElement;

theme(darky);
inputsLister();
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
