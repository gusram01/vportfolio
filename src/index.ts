import './styles.scss';
import './assets/fonts/Ubuntu-Regular.ttf';
// import loading from './ts/loading';
import { theme } from './services/theme';
import { onSubmit, formInfo } from './ts/form';
import { render } from './ts/renderData';
import { getLegend } from './ts/legend';

const darky = document.getElementById('dark-theme') as HTMLButtonElement;

// const isLoading = false;
// loading(isLoading);
theme(darky);
onSubmit();
render();
getLegend();

export { onSubmit, theme };
