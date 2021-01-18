import emailPattern from '../helpers/emailPattern';

const form = document.getElementById('form-contact') as HTMLFormElement;

interface FormInfo {
  [key: string]: string | boolean | any[];
  pristine: boolean;
  valid: boolean;
  errors: Array<any>;
  controls: Array<any>;
}

const formInfo: FormInfo = {
  pristine: true,
  valid: false,
  errors: [],
  controls: [],
};
const name = form.elements.namedItem('name') as HTMLInputElement;
const email = form.elements.namedItem('email') as HTMLInputElement;
const msg = form.elements.namedItem('msg') as HTMLInputElement;

const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    return;
  }

  console.log(formInfo.controls);
};

function validity(this: any) {
  const aux = formInfo.errors.find((item) => item.name === this.name);
  const control = formInfo.controls.find((item) => item.name === this.name);

  formInfo.pristine = false;

  if (!control) {
    formInfo.controls.push({
      name: this.name,
      value: this.value,
      touched: true,
    });
  } else {
    control.value = this.value;
  }

  if (this.validity.valid) {
    formInfo.errors = formInfo.errors.filter((item) => item.name !== this.name);
    this.classList.remove('error');
  } else if (!aux) {
    formInfo.errors.push({ name: this.name, error: 'field is requiered' });
    this.classList.add('error');
  }

  formInfo.valid = form.checkValidity();

  this.value.length < 1
    ? this.nextElementSibling.classList.remove('label-active')
    : this.nextElementSibling.classList.add('label-active');
}

name.required = true;
email.required = true;
email.pattern = emailPattern;
msg.required = true;

name.addEventListener('input', validity);
email.addEventListener('input', validity);
msg.addEventListener('input', validity);

const onSubmit = () => form.addEventListener('submit', handleSubmit);

export { onSubmit, formInfo };
