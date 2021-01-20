import { toggleActive } from './toggleActive';

export const getAccordionString = (content: string, id: string) => {
  const str = `<section class="accordion" id="${id}">
  <div class="accordion__label">
  more details
  </div>
  <p class="accordion__content">${content}</p>
  </section>`;
  const cb = toggleActive(id);

  return { str, cb };
};
