import {
  formInfo,
  addControlToObject,
  addErrorsToObject,
  changeClassLabelActive,
  isDisabledButtonSend,
  renderError,
  addValueObject,
} from '.';
import emailPattern from '../../helpers/emailPattern';

const form = document.getElementById('form-contact') as HTMLFormElement;
const name = form.elements.namedItem('name') as HTMLInputElement;
const email = form.elements.namedItem('email') as HTMLInputElement;
const msg = form.elements.namedItem('msg') as HTMLInputElement;

name.required = true;
name.minLength = 2;
email.required = true;
email.pattern = emailPattern;
msg.required = true;
msg.minLength = 10;

// eslint-disable-next-line no-unused-vars
function nativeValidity(this: HTMLInputElement | HTMLTextAreaElement) {
  formInfo.pristine = false;
  addControlToObject(formInfo, this.name, this.value);
  addErrorsToObject(formInfo, this);
  addValueObject(formInfo, this.name, this.value);
  formInfo.valid = form.checkValidity();
  changeClassLabelActive(this);
  isDisabledButtonSend(!form.checkValidity());
  renderError(this, formInfo);
}

export const inputsListener = () => {
  name && name.addEventListener('input', nativeValidity);
  email && email.addEventListener('input', nativeValidity);
  msg && msg.addEventListener('input', nativeValidity);
};
