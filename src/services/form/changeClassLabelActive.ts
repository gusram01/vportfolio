export const changeClassLabelActive = (
  ele: HTMLInputElement | HTMLTextAreaElement,
) => {
  if (ele && ele.validity.valid) {
    ele!.nextElementSibling!.classList.add('label-active');
  } else {
    ele!.nextElementSibling!.classList.remove('label-active');
  }
};
