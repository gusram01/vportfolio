import { getData, getString } from '.';

export const renderProjects = async () => {
  const fragment = document.createDocumentFragment();
  try {
    const arr = await getData();
    arr.map(getString).forEach((item) => {
      const article = document.createElement('article');
      article.classList.add('card');
      article.innerHTML = item;
      fragment.appendChild(article);
    });

    return fragment;
  } catch (error) {
    console.error(error);
  }
};
