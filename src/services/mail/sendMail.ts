import { BodyMail } from '../../interfaces';

export const sendMail = (body: BodyMail) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  return fetch('/api/mail', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body),
  })
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((err) => err);
};
