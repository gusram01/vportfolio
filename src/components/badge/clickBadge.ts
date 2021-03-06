/* eslint-disable indent */
const removeMenu = (ele: HTMLElement | Element) => {
  if (
    ele &&
    ele.lastElementChild &&
    ele.lastElementChild.className.includes('interactive-menu')
  ) {
    ele.lastElementChild.remove();
  }
};

export const clickBadge = (id: string, data: any) => () => {
  const actionsContainer = document.getElementById(id) as HTMLDivElement;
  const elements = document.querySelectorAll('.project__content');

  return actionsContainer.addEventListener(
    'click',
    // eslint-disable-next-line func-names
    function (this: any, e: MouseEvent) {
      const ele = e.target as HTMLElement;
      const name = ele.id.split('-')[1];
      const div = document.createElement('div');
      const menuData = data.filter((item: any) => item.tech === name);

      elements.forEach(removeMenu);

      if (menuData.length < 1) return;

      div.setAttribute('class', 'interactive-menu');
      div.innerHTML = !menuData
        ? ''
        : `<span class="myicon times-icon close__interactive-menu"></span>${
            menuData[0].live &&
            `<p class="interactive-menu__item">
            <a class="link interactive-menu__link" href="${menuData[0].live}" rel="noreferrer" target="_blank">${menuData[0].tech} - Live App</a>
          </p>`
          }
          <p class="interactive-menu__item">
            <a class="link interactive-menu__link" href="${
              menuData[0].repo
            }" rel="noreferrer" target="_blank">${
            menuData[0].tech
          } - Repository</a>
          </p>`;

      removeMenu(this);
      this.appendChild(div);
    },
  );
};
