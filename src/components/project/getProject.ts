import { MyProjectData } from '../../interfaces';
import { getAccordion } from '../accordion/getAccordion';
import { getBadge } from '../badge/getBadge';
import { clickBadge } from '../badge/clickBadge';

export const getProject = ({
  title,
  abstract,
  description,
  techs,
  image,
}: MyProjectData) => {
  const { str, cbAccordion } = getAccordion(description, title.toLowerCase());
  const idBadge = (id: string) =>
    `badge-${id.trim().toLowerCase()}-${title.toLowerCase()}`;
  const project = `
  <div class="card__header">
  <h4 class="card__title">${title}</h4>
  </div>
  <div class="card__image">${
    !image
      ? ''
      : `<img src="${image}" alt="${abstract}" width="600" loading="lazy">`
  }</div>
  <div class="card__content ">
  <p>${abstract}</p>
  ${str}
  </div>
  <div class="card__actions project__content" id="projects-actions-${title.toLowerCase()}">${techs
    .map((tech) => getBadge(tech.tech.trim(), idBadge(tech.tech)))
    .join('')}</div>`;
  const cbBadge = clickBadge(`projects-actions-${title.toLowerCase()}`, techs);

  return { project, cbAccordion, cbBadge };
};
