export const pauseAnimation = (ele: HTMLDivElement) => {
  ele.addEventListener('mouseenter', () => ele.classList.add('paused'));
  ele.addEventListener('mouseleave', () => ele.classList.remove('paused'));
};
