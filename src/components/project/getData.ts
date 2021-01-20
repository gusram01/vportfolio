import { ProjectsResponse } from '../../interfaces';
import data from '../../../utils/mydata';

const getData = () =>
  fetch('/api/projects')
    .then((res) => res.json())
    .then((json: ProjectsResponse) => json.data)
    // Need to handle error
    .catch(() => data);

export { getData };
