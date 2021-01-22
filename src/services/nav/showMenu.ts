export const showSmallMenu = (element: HTMLElement) =>
  element.addEventListener('click', (e) => {
    const smallNav = document.querySelector('.small-nav');
    const ele = e.target as HTMLElement;
    const ham1 = ele!.firstElementChild;
    const ham2 = ele!.firstElementChild!.nextElementSibling;
    const ham3 = ele!.lastElementChild;

    smallNav?.classList.toggle('show');
    ham1!.classList.toggle('show');
    ham2!.classList.toggle('show');
    ham3!.classList.toggle('show');
  });
