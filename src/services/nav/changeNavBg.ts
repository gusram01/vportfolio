const header = document.getElementById('header') as HTMLElement;
const firstObsOptions = {
  rootMargin: '-20px 0px 0px 0px',
};

function cbObserver(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      console.log(entry.target);
      header.classList.add('with-bg');
    } else {
      header.classList.remove('with-bg');
    }
  });
}

export const firstObs = new IntersectionObserver(cbObserver, firstObsOptions);
