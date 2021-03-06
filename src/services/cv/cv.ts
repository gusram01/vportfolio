import Swal from 'sweetalert2';
import { sendMail } from './sendCv';

const handleSendCv = () => {
  Swal.fire({
    title: 'Gus Ramírez CV',
    html:
      '<p><em>Download</em> CV without phone/email</p><p>or</p><p>Send <em>email</em> with all data</p>',
    showCancelButton: true,
    confirmButtonText: 'Send email ',
    cancelButtonText: 'Download',
  })
    .then((result: any) => {
      if (result.isConfirmed) {
        return Swal.fire({
          input: 'email',
          title: 'Write yor email',
          showCancelButton: true,
          confirmButtonText: 'Send CV by email',
          showLoaderOnConfirm: true,
          preConfirm: (email: any) =>
            sendMail({ email })
              .then((resp: any) => {
                if (!resp.ok) {
                  throw new Error(resp.message);
                }

                return resp;
              })
              .catch(() => {
                Swal.showValidationMessage(
                  'Something went wrong, try again later',
                );
              }),
        });
      }
      if (result.dismiss === 'backdrop') {
        return false;
      }
      if (result.dismiss === 'cancel') {
        const anchor = document.createElement('a');
        anchor.href =
          'https://firebasestorage.googleapis.com/v0/b/gus-portfolio.appspot.com/o/gustavo-ramirez-dev-cv-onlyinfo.pdf?alt=media&token=66755157-dbac-4148-b1a8-f69b2a4f19ac';
        anchor.setAttribute('download', 'gus-ramirez-dev-cv.pdf');
        anchor.setAttribute('target', '_blank');
        anchor.className = 'hidden';
        anchor.click();
        anchor.remove();
        return false;
      }
      return result;
    })
    .then((data) => {
      if (!data) {
        return;
      }
      Swal.fire({
        icon: 'success',
        title: 'Thank you',
        text: data.value.data,
        timer: 3500,
      });
    })
    .catch((err) => {
      if (process.env.PROD !== 'production') {
        console.error(err.message);
      }
    });
};

export const sendCV = () => {
  const cvButton = document.getElementById('cv-button') as HTMLButtonElement;

  return cvButton.addEventListener('click', handleSendCv);
};
