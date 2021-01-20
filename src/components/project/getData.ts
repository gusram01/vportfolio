import { ProjectsResponse } from '../../interfaces';

const getData = () =>
  fetch('/api/projects')
    .then((res) => res.json())
    .then((json: ProjectsResponse) => json.data)
    .catch((err) => {
      console.error(err);
      return [];
    });

export { getData };
