const removeMenu = (ele: HTMLElement | Element) => {
  if (
    ele &&
    ele.lastElementChild &&
    ele.lastElementChild.className.includes('actualMenu')
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

      elements.forEach((item) => {
        removeMenu(item);
      });

      if (menuData.length < 1) return;

      div.setAttribute('class', 'actualMenu');
      div.innerHTML = !menuData
        ? ''
        : `<p>${menuData[0].live}</p><p>${menuData[0].repo}</p>`;

      removeMenu(this);
      this.appendChild(div);

      // console.log(data.filter((item: any) => item.tech === name));
    },
  );
};
