const keyStorage = 'darkThem3Resum3';

export const choosenTheme = () => localStorage.getItem(keyStorage) || 'dark';

export const setThemeStorage = (val: 'dark' | 'light') =>
  localStorage.setItem(keyStorage, val);
