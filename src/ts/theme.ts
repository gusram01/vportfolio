const darky = document.getElementById('dark-theme') as HTMLButtonElement;
let flag = true;

function changeIcon() {
  flag = !flag;

  darky.innerHTML = `
  <i class="icon ${flag ? 'fas fa-moon' : 'fas fa-sun'}" ></i>`;
}

const iconTheme = () => darky.addEventListener('click', changeIcon);

export default iconTheme;
