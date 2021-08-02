const nav = document.getElementById('nav') as HTMLElement;
const smallNav = document.querySelector('.small-nav') as HTMLDivElement;
// eslint-disable-next-line no-undef
const lines = document.querySelectorAll('.ham__line') as NodeListOf<Element>;

export const showSmallMenu = () => {
  const wichMediaQuery = matchMedia('(min-width: 720px)');

  window.addEventListener('resize', () => {
    if (wichMediaQuery) {
      smallNav.classList.remove('show');
      lines.forEach((item) => item.classList.remove('show'));
    }
  });

  nav.addEventListener('click', (e: MouseEvent) => {
    const elem = e.target as HTMLElement;

    if (elem && elem.id === 'ham') {
      lines.forEach((item) => item.classList.toggle('show'));
      smallNav?.classList.toggle('show');
      if (smallNav?.className.includes('show')) {
        nav.addEventListener(
          'click',
          (event: MouseEvent) => {
            smallNav.classList.remove('show');
            lines.forEach((item) => item.classList.remove('show'));
          },
          { once: true },
        );
      }
    }
  });
};
