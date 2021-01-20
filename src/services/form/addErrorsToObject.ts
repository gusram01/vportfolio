import { FormInfo } from '../../interfaces';

export const addErrorsToObject = (
  formInfo: FormInfo,
  ele: HTMLInputElement,
) => {
  const aux = formInfo.errors.find((item) => item.name === ele.name);

  if (ele.validity.valid) {
    // eslint-disable-next-line no-param-reassign
    formInfo.errors = formInfo.errors.filter((item) => item.name !== ele.name);
    ele.classList.remove('error');
  } else if (!aux) {
    formInfo.errors.push({ name: ele.name, error: 'field is requiered' });
    ele.classList.add('error');
  }
};
