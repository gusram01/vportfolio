import { setThemeStorage, choosenTheme } from '.';

const body = document.getElementById('body') as HTMLBodyElement;

export const darkOrLight = (isDark: boolean) => {
  setThemeStorage(isDark ? 'dark' : 'light');
  body.className = `${choosenTheme()}-theme`;

  return choosenTheme() === 'dark';
};
