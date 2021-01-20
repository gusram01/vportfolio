import { getData, getProject } from '.';

export const renderProjects = async () => {
  const fragment = document.createDocumentFragment();
  const accordionListeners: any[] = [];
  const actionsListeners: any[] = [];
  try {
    const arr = await getData();
    arr.map(getProject).forEach(({ project, cbAccordion, cbBadge }) => {
      const article = document.createElement('article');
      article.classList.add('card');
      article.innerHTML = project;

      fragment.appendChild(article);
      accordionListeners.push(cbAccordion);
      actionsListeners.push(cbBadge);
    });

    return { fragment, accordionListeners, actionsListeners };
  } catch (error) {
    console.error(error);
  }
};
