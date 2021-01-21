export const setIcon = (ele: HTMLButtonElement, flag: boolean) =>
  // eslint-disable-next-line no-param-reassign
  (ele.innerHTML = `
<span class="icon ${
    flag ? 'myicon moon-icon' : 'myicon sun-icon'
  }" style="font-size: 25px;"></span>`);
