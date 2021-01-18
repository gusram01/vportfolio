import './styles.scss';
import './assets/fonts/Ubuntu-Regular.ttf';
// import loading from './ts/loading';
import iconTheme from './ts/theme';
import { onSubmit, formInfo } from './ts/form';

// const isLoading = false;
// loading(isLoading);
iconTheme();
onSubmit();

console.log(formInfo);

export {
  //  loading,
  iconTheme,
};
