import './styles.scss';
import './assets/glider.min.css';
import Glider from 'glider-js';
import { getLegend } from './ts/legend';
import { getTools } from './components/tools';
import { renderProjects } from './components/project';
import { theme } from './services/theme';
import { firstObs } from './services/nav/changeNavBg';
import { showSmallMenu } from './services/nav/showMenu';
import { sendCV } from './services/cv/cv';

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

renderProjects()
  .then((obj) => {
    projectsContainer.appendChild(obj!.fragment.cloneNode(true));
    obj!.accordionListeners.forEach((item) => item());
    obj!.actionsListeners.forEach((item) => item());
  })
  .catch(console.error);
showSmallMenu();
theme(darky);
inputsListener();
isDisabledButtonSend();
onSubmit();
getTools(tools);
// eslint-disable-next-line no-new
new Glider(tools, {
  slidesToShow: 1,
  slidesToScroll: 'auto',
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next',
  },

  responsive: [
    {
      // screens greater than >= 360px
      breakpoint: 360,
      settings: {
        slidesToShow: 'auto',
        slidesToScroll: 1,
        itemWidth: 150,
      },
    },
  ],
});
sendCV();
getLegend();

firstObs.observe(header);
export { onSubmit, theme };
