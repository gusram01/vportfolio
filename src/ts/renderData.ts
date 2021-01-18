import { getData } from './getData';

const transformData = (data: any) => data.data;

const procesProject = ({ title, abstract, description, techs }: any) => `
        <div class="card__header">
          <h4 class="card__title">${title}</h4>
        </div>
        <div class="card__content">
          <section>
          ${abstract}
          </section>
          <p>${description}</p>
          <code>${JSON.stringify(techs, null, 2)} </code>
        </div>`;

const render = async () => {
  const container = document.getElementById('projects-container');
  const fragment = document.createDocumentFragment();

  getData().then((data) => {
    transformData(data)
      .map(procesProject)
      .forEach((item: any) => {
        const article = document.createElement('article');
        article.classList.add('card');
        article.innerHTML = item;
        fragment.appendChild(article);
      });

    container?.appendChild(fragment.cloneNode(true));
  });
};

export { render };
