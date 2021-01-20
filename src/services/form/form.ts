import { formInfo } from '.';

const form = document.getElementById('form-contact') as HTMLFormElement;

const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    return;
  }

  console.log(formInfo.controls);
};

const onSubmit = () => form.addEventListener('submit', handleSubmit);

export { onSubmit };
