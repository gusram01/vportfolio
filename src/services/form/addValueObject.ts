import { FormInfo } from '../../interfaces';

export const addValueObject = (
  formInfo: FormInfo,
  name: string,
  value: string,
) => {
  const formValue = formInfo.value;

  if (!formValue[name]) {
    formValue[name] = value;
  }
  formValue[name] = value;
};
