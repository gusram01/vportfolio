const year = new Date().getFullYear();
const legend = `Gus Ramírez ${year}<sup>©</sup>`;

const getLegend = () => {
  document.getElementById('legend')!.innerHTML = legend;
};

export { getLegend };
