import Swal from 'sweetalert2';
import { formInfo } from '.';
import { isDisabledButtonSend } from './isDisabledButtonSend';
import { sendMail } from '../mail/sendMail';

const form = document.getElementById('form-contact') as HTMLFormElement;
// eslint-disable-next-line import/no-mutable-exports
let isLoading = false;

const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    return;
  }

  isLoading = true;
  isDisabledButtonSend(isLoading);

  Swal.fire({
    icon: 'info',
    title: 'Info sended',
    text: 'Please wait...',
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    willOpen: () => Swal.showLoading(),
  });

  sendMail(formInfo.value)
    .then((resp: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Thank you',
        text: resp.data,
        timer: 3500,
      }).then(() => form.reset());
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Oopss, something went wrong',
        text: 'Please try again',
      });
    })
    .finally(() => (isLoading = false));
};

const onSubmit = () => form.addEventListener('submit', handleSubmit);

export { onSubmit, isLoading as buttonSendFlag };
