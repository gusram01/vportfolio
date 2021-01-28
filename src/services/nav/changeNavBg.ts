const nav = document.getElementById('nav') as HTMLElement;
const firstObsOptions = {
  rootMargin: '-40px 0px 0px 0px',
};

function cbObserver(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // console.log(entry);
      nav.classList.add('with-bg');
    } else {
      nav.classList.remove('with-bg');
    }
  });
}

export const firstObs = new IntersectionObserver(cbObserver, firstObsOptions);
