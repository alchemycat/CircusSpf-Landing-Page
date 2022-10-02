export function closeModal(modalSelector, modalCloseSelector) {
  const modal = document.querySelector(modalSelector);
  const close = document.querySelector(modalCloseSelector);
  const body = document.body;

  modal.addEventListener('click', (e) => {
    if (e.target.getAttribute('class') == 'modal active') {
      e.target.classList.remove('active');
      body.style.overflow = 'auto';
    }
  });

  close.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.toggle('active');
    body.style.overflow = 'auto';
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

  const body = document.body;

  triggers.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const captions = document.querySelectorAll(captionSelector);
      const prices = document.querySelectorAll(priceSelector);

      caption.value = captions[i].textContent.trim();
      price.value = prices[i].textContent.trim();

      modal.classList.toggle('active');
      body.style.overflow = 'hidden';
    });
  });
}
