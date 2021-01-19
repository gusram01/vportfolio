export const setIcon = (ele: HTMLButtonElement, flag: boolean) =>
  // eslint-disable-next-line no-param-reassign
  (ele.innerHTML = `
<i class="icon ${flag ? 'fas fa-moon' : 'fas fa-sun'}" ></i>`);
