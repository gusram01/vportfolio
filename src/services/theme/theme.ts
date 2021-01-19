import { setIcon, darkOrLight, choosenTheme } from '.';

// eslint-disable-next-line no-unused-vars
function changeIcon(this: HTMLButtonElement) {
  const flag = choosenTheme() !== 'dark';

  darkOrLight(flag);
  setIcon(this, flag);
}

const theme = (ele: HTMLButtonElement) => {
  darkOrLight(choosenTheme() === 'dark');
  setIcon(ele, choosenTheme() === 'dark');
  ele.addEventListener('click', changeIcon);
};

export { theme };
