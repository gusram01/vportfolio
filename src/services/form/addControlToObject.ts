import { FormInfo } from '../../interfaces';

export const addControlToObject = (
  formInfo: FormInfo,
  name: string,
  value: string,
) => {
  const control = formInfo.controls.find((item) => item.name === name);

  if (!control) {
    formInfo.controls.push({
      name,
      value,
      touched: true,
    });
  } else {
    control.value = value;
  }
};
