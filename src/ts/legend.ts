const year = new Date().getFullYear();
const legend = `Developed by Gus Ramírez, ${year}`;

const getLegend = () => {
  document.getElementById('legend')!.innerHTML = legend;
};

export { getLegend };
