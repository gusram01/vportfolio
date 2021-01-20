import {
  formInfo,
  addControlToObject,
  addErrorsToObject,
  changeClassLabelActive,
} from '.';
import emailPattern from '../../helpers/emailPattern';

const form = document.getElementById('form-contact') as HTMLFormElement;
const name = form.elements.namedItem('name') as HTMLInputElement;
const email = form.elements.namedItem('email') as HTMLInputElement;
const msg = form.elements.namedItem('msg') as HTMLInputElement;

name.required = true;
email.required = true;
email.pattern = emailPattern;
msg.required = true;

// eslint-disable-next-line no-unused-vars
function nativeValidity(this: HTMLInputElement | HTMLTextAreaElement) {
  formInfo.pristine = false;
  addControlToObject(formInfo, this.name, this.value);
  addErrorsToObject(formInfo, this);
  formInfo.valid = form.checkValidity();
  changeClassLabelActive(this);
  // this.value.length < 1
  //   ? this.nextElementSibling.classList.remove('label-active')
  //   : this.nextElementSibling.classList.add('label-active');
}

export const inputsLister = () => {
  name.addEventListener('input', nativeValidity);
  email.addEventListener('input', nativeValidity);
  msg.addEventListener('input', nativeValidity);
};
