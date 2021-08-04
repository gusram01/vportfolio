import Glider from 'glider-js';
import { getLegend } from './ts/legend';
import { theme } from './services/theme';
import { firstObs } from './services/nav/changeNavBg';
import { showSmallMenu } from './services/nav/showMenu';
import { sendCV } from './services/cv/cv';

import './styles.scss';

import {
  onSubmit,
  inputsListener,
  isDisabledButtonSend,
} from './services/form';

const darky = document.getElementById('dark-theme') as HTMLButtonElement;
const header = document.getElementById('header') as HTMLElement;
const tools = document.getElementById('tools') as HTMLDivElement;

showSmallMenu();

theme(darky);

inputsListener();
isDisabledButtonSend();
onSubmit();

// eslint-disable-next-line no-new
new Glider(tools, {
  slidesToShow: 2,
  slidesToScroll: 'auto',
  draggable: true,
  rewind: true,
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
