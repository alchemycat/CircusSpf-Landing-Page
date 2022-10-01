export function closeModal(modalSelector, modalCloseSelector) {
  const modal = document.querySelector(modalSelector);
  const close = document.querySelector(modalCloseSelector);

  close.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.toggle('active');
  });
}

export function openModal(
  triggersSelector,
  modalSelector,
  captionSelector,
  priceSelector
) {
  const triggers = document.querySelectorAll(triggersSelector);
  const modal = document.querySelector(modalSelector);

  const caption = document.querySelector('[name="caption"');
  const price = document.querySelector('[name="price"]');

  triggers.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const captions = document.querySelectorAll(captionSelector);
      const prices = document.querySelectorAll(priceSelector);

      caption.value = captions[i].textContent;
      price.value = prices[i].textContent;

      modal.classList.toggle('active');
    });
  });
}
