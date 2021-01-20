import { MyProjectData } from '../../interfaces';

export const getString = ({
  title,
  abstract,
  description,
  techs,
}: MyProjectData) => `
        <div class="card__header">
          <h4 class="card__title">${title}</h4>
        </div>
        <div class="card__content">
          <section>
          ${abstract}
          </section>
          <p>${description}</p>
          <p> 
          ${techs.map((tech) => `<span class="badge">${tech.tech} </span>`)} 
          </p>
        </div>`;
