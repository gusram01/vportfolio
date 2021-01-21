export const isDisabledButtonSend = (flag = true) => {
  const sendBtn = document.getElementById('send') as HTMLButtonElement;
  if (flag) {
    sendBtn.classList.add('button-disabled');
  } else {
    sendBtn.classList.remove('button-disabled');
  }
};
