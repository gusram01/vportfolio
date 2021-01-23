let movement: number;
let countDegrees = 0;
let idInterval: any;
let isMoving = false;

let whereTouched: number;
let movedTouch: number;

const whichDevice = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

function rotateEle(elem: HTMLElement) {
  elem.style.setProperty('--degrees', `${(countDegrees += 18)}`);
}

function moveOnTools(this: HTMLDivElement, e: MouseEvent) {
  movement = e.movementX > 0 ? 1 : -1;
  if (isMoving) {
    this.style.setProperty('--degrees', `${(countDegrees += movement * 6)}`);
  }
}

function mouseDownOnTools(this: HTMLDivElement, e: MouseEvent) {
  isMoving = true;
  this.addEventListener('mousemove', moveOnTools);
}

function mouseUpOnTools(this: HTMLDivElement) {
  console.log('unclick');
  isMoving = false;
  this.removeEventListener('mousemove', moveOnTools);
}

function moveTouchScreen(ev: TouchEvent) {
  ev.preventDefault();
  console.log('move Screen', ev.touches[0]);

  // movedTouch = whereTouched - ev.touches[0].clientX;
  // console.log(movedTouch);
}
function endTouchScreen(this: HTMLElement, ev: TouchEvent) {
  ev.preventDefault();

  idInterval = setInterval(rotateEle, 300, this);
  console.log('end touch');
}
function cancelTouchScreen(this: HTMLElement, ev: TouchEvent) {
  ev.preventDefault();
  console.log('cancel touch');
}

function touchScreen(this: HTMLElement, ev: TouchEvent) {
  ev.preventDefault();
  // console.log('touchScreen', ev.touches[0]);
  // whereTouched = ev.touches[0].clientX;
  clearInterval(idInterval);

  this.addEventListener('touchmove', moveTouchScreen);
  this.addEventListener('touchend', endTouchScreen);
  this.addEventListener('touchcancel', cancelTouchScreen);
}

export const pauseAnimation = (ele: HTMLDivElement) => {
  idInterval = setInterval(rotateEle, 300, ele);

  if (whichDevice()) {
    ele.addEventListener('touchstart', touchScreen);
  } else {
    ele.addEventListener('mouseenter', () => {
      clearInterval(idInterval);
      ele.addEventListener('mousedown', mouseDownOnTools);
      ele.addEventListener('mouseup', mouseUpOnTools);
    });
    ele.addEventListener('mouseleave', () => {
      isMoving = false;
      idInterval = setInterval(rotateEle, 600, ele);
    });
  }
};
