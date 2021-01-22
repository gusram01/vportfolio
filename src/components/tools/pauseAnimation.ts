let placedClick = 0;

function moveOnTools(this: HTMLDivElement, e: MouseEvent) {
  const auxVal = (e.x / placedClick - 1) * 180;

  this.style.setProperty('transform', `rotateY(${auxVal}deg)`);
}

function mouseDownOnTools(this: HTMLDivElement, e: MouseEvent) {
  console.log('click');
  placedClick = e.x;

  this.addEventListener('mousemove', moveOnTools);
}

function mouseUpOnTools(this: HTMLDivElement) {
  console.log('unclick');
  this.removeEventListener('mousemove', moveOnTools);
}

export const pauseAnimation = (ele: HTMLDivElement) => {
  ele.addEventListener('mouseenter', (e) => {
    ele.classList.add('paused');

    ele.addEventListener('mousedown', mouseDownOnTools);
    ele.addEventListener('mouseup', mouseUpOnTools);
  });
  ele.addEventListener('mouseleave', () => ele.classList.remove('paused'));
};
