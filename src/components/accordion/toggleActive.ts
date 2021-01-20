export const toggleActive = (id: string) => () => {
  const container = document.getElementById(id) as HTMLElement;
  const label = container.firstElementChild as HTMLDivElement;
  const content = container.lastElementChild as HTMLElement;

  return label.addEventListener('click', () => {
    label.classList.toggle('active');
    // eslint-disable-next-line no-unused-expressions
    label.className.includes('active')
      ? (label.textContent = 'hide details')
      : (label.textContent = 'more details');
    content.classList.toggle('active');
  });
};
