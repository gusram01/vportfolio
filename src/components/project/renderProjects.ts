import { getData, getProjectString } from '.';

export const renderProjects = async () => {
  const fragment = document.createDocumentFragment();
  const accordionListeners: any[] = [];
  try {
    const arr = await getData();
    arr.map(getProjectString).forEach(({ project, cb }) => {
      const article = document.createElement('article');
      article.classList.add('card');
      article.innerHTML = project;

      fragment.appendChild(article);
      accordionListeners.push(cb);
    });

    return { fragment, accordionListeners };
  } catch (error) {
    console.error(error);
  }
};
