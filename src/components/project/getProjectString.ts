import { MyProjectData } from '../../interfaces';
import { getAccordionString } from '../accordion/getAccordionString';

export const getProjectString = ({
  title,
  abstract,
  description,
  techs,
}: MyProjectData) => {
  const { str, cb } = getAccordionString(description, title.toLowerCase());
  const project = `
  <div class="card__header">
  <h4 class="card__title">${title}</h4>
  </div>
  <div class="card__content">
  <p>
  ${abstract}
  </p>
  ${str}
  <div>${techs
    .map((tech) => `<span class="badge">${tech.tech.trim()}</span>`)
    .join('')}</div>
    </div>`;

  return { project, cb };
};
