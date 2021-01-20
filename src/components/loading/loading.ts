const loader = document.getElementById('loader') as HTMLDivElement;

const loading = (isLoading: boolean) => {
  if (isLoading) {
    loader.classList.add('loading');
    return;
  }
  loader.classList.remove('loading');
};
export default loading;
