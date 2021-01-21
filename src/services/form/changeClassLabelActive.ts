export const changeClassLabelActive = (
  ele: HTMLInputElement | HTMLTextAreaElement,
) => {
  if (ele.value.length < 1) {
    ele!.nextElementSibling!.classList.remove('label-active');
  } else {
    ele!.nextElementSibling!.classList.add('label-active');
  }
};
