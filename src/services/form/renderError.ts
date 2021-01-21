import { FormInfo } from '../../interfaces';

export const renderError = (
  ele: HTMLInputElement | HTMLTextAreaElement,
  formInfo: FormInfo,
) => {
  const errorEle = ele!.parentElement!.lastElementChild;
  const msgError = formInfo.errors.find((item) => item.name === ele.name);

  if (ele && errorEle && msgError) {
    errorEle.textContent = msgError.error;
  } else {
    errorEle!.textContent = '';
  }
};
