import './styles.scss';
import './assets/fonts/Ubuntu-Regular.ttf';
import './assets/platzi.png';
import { theme } from './services/theme';
import { onSubmit, formInfo } from './ts/form';
import { getLegend } from './ts/legend';
import { getTools } from './components/tools';
import { renderProjects } from './components/project';

const darky = document.getElementById('dark-theme') as HTMLButtonElement;
const projects = document.getElementById(
  'projects-container',
) as HTMLDivElement;
const tools = document.getElementById('tools') as HTMLDivElement;

theme(darky);
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
