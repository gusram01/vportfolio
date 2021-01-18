const getData = () => {
  const data = fetch('/api/projects')
    .then((res) => res.json())
    .then((json) => json)
    .catch(console.log);
  return data;
};

export { getData };
