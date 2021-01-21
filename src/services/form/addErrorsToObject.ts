import { FormInfo } from '../../interfaces';

export const addErrorsToObject = (
  formInfo: FormInfo,
  ele: HTMLInputElement | HTMLTextAreaElement,
) => {
  const aux = formInfo.errors.find((item) => item.name === ele.name);

  if (ele.validity.valid) {
    // eslint-disable-next-line no-param-reassign
    formInfo.errors = formInfo.errors.filter((item) => item.name !== ele.name);
    ele.classList.remove('error');
  } else if (!aux) {
    if (ele.name === 'name') {
      formInfo.errors.push({
        name: ele.name,
        error: 'field is requiered & min 2 characters',
      });
    }
    if (ele.name === 'email') {
      formInfo.errors.push({
        name: ele.name,
        error: 'Please insert a valid email <your-email@example.com>',
      });
    }
    if (ele.name === 'msg') {
      formInfo.errors.push({
        name: ele.name,
        error: 'Please writa a msg with at least 10 characters',
      });
    }
    ele.classList.add('error');
  }
};
