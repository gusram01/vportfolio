import './styles.scss';
import './assets/fonts/Ubuntu-Regular.ttf';
// import loading from './ts/loading';
import iconTheme from './ts/theme';
import { onSubmit, formInfo } from './ts/form';
import { render } from './ts/renderData';
import { getLegend } from './ts/legend';

// const isLoading = false;
// loading(isLoading);
iconTheme();
onSubmit();
render();
getLegend();

console.log(formInfo);

export { onSubmit, iconTheme };
