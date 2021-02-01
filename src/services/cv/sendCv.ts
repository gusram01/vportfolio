interface Email {
  email: string;
}

export const sendMail = (body: Email) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  return fetch('/api/cv', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body),
  })
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((err) => err);
};
