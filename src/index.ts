import './styles.scss';
import './assets/fonts/Ubuntu-Regular.ttf';
import './assets/platzi.png';
// import loading from './ts/loading';
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

// const isLoading = false;
// loading(isLoading);
theme(darky);
onSubmit();
getTools(tools);
renderProjects()
  .then((obj) => {
    projects.appendChild(obj!.fragment.cloneNode(true));
    obj!.accordionListeners.forEach((item) => item());
  })
  .catch(console.error);
getLegend();

export { onSubmit, theme };
